#!/usr/bin/env node

const { program } = require('commander');
const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');
const chalk = require('chalk');
const ora = require('ora');

// Version information from package.json
const packageJson = require('../package.json');
program.version(packageJson.version);

// Function to create project
async function createProject(projectName, template = 'react') {
    try {
        // Parse template (e.g., "react@latest" or "react")
        const [templateName, templateVersion] = template.split('@');

        // Validate template
        const validTemplates = ['react'];
        if (!validTemplates.includes(templateName)) {
            console.error(chalk.red(`❌ Template "${templateName}" is not supported.`));
            console.log(chalk.yellow(`Available templates: ${validTemplates.join(', ')}`));
            process.exit(1);
        }

        // Get target directory
        const targetDir = path.join(process.cwd(), projectName);

        // Check if directory already exists
        if (fs.existsSync(targetDir)) {
            console.error(chalk.red(`❌ Directory "${projectName}" already exists.`));
            process.exit(1);
        }

        console.log(chalk.cyan(`\n🚀 Creating ${projectName} with ${template}...\n`));

        // Step 1: Copy template
        const spinner = ora('Copying template files...').start();
        const templateDir = path.join(__dirname, '..', 'templates', 'react-vite-tailwind');

        if (!fs.existsSync(templateDir)) {
            spinner.fail();
            console.error(chalk.red(`❌ Template directory not found: ${templateDir}`));
            process.exit(1);
        }

        await fs.copy(templateDir, targetDir);
        spinner.succeed(chalk.green('Template files copied'));

        // Step 2: Update package.json with project name
        const packageJsonPath = path.join(targetDir, 'package.json');
        if (fs.existsSync(packageJsonPath)) {
            const packageJson = await fs.readJson(packageJsonPath);
            packageJson.name = projectName;
            await fs.writeJson(packageJsonPath, packageJson, { spaces: 2 });
        }

        // Step 3: Install dependencies
        const installSpinner = ora('Installing dependencies...').start();

        try {
            // Detect if bun is available
            let packageManager = 'npm';
            try {
                execSync('bun --version', { stdio: 'ignore' });
                packageManager = 'bun';
            } catch (e) {
                // npm is default
            }

            const installCommand = packageManager === 'bun' ? 'bun install' : 'npm install';

            execSync(installCommand, {
                cwd: targetDir,
                stdio: 'inherit'
            });

            installSpinner.succeed(chalk.green(`Dependencies installed with ${packageManager}`));
        } catch (error) {
            installSpinner.fail();
            console.error(chalk.red('❌ Failed to install dependencies'));
            console.error(error.message);
            process.exit(1);
        }

        // Success message
        console.log(chalk.green.bold(`\n✨ Successfully created ${projectName}!\n`));
        console.log(chalk.cyan('Next steps:\n'));
        console.log(chalk.white(`  cd ${projectName}`));
        console.log(chalk.white(`  npm run dev\n`));
        console.log(chalk.gray('Happy coding! 🎉\n'));

    } catch (error) {
        console.error(chalk.red('❌ An error occurred:'));
        console.error(error.message);
        process.exit(1);
    }
}

// Get CLI arguments
const args = process.argv.slice(2);

// Handle different invocation patterns
if (args.length === 0) {
    // No arguments - show help
    console.log(chalk.cyan('\n🌊 ReactWindJS - Modern React App Scaffolder\n'));
    console.log(chalk.white('Usage:'));
    console.log(chalk.gray('  npm create reactwindjs@latest <project-name>'));
    console.log(chalk.gray('  npx create-reactwindjs <project-name>'));
    console.log(chalk.gray('  create-reactwindjs create react <project-name>\n'));
    console.log(chalk.white('Examples:'));
    console.log(chalk.gray('  npm create reactwindjs@latest my-app'));
    console.log(chalk.gray('  create-reactwindjs my-awesome-app\n'));
    process.exit(0);
} else if (args.length === 1 && !args[0].startsWith('-')) {
    // Single argument: npm create reactwindjs@latest my-app OR create-reactwindjs my-app
    const projectName = args[0];
    createProject(projectName, 'react');
} else if (args[0] === 'create' && args.length === 3) {
    // Explicit create command: create-reactwindjs create react my-app
    const template = args[1];
    const projectName = args[2];
    createProject(projectName, template);
} else {
    // Unknown pattern - show help
    console.log(chalk.yellow('\n⚠️  Invalid arguments\n'));
    console.log(chalk.white('Usage:'));
    console.log(chalk.gray('  npm create reactwindjs@latest <project-name>'));
    console.log(chalk.gray('  npx create-reactwindjs <project-name>'));
    console.log(chalk.gray('  create-reactwindjs create react <project-name>\n'));
    process.exit(1);
}
