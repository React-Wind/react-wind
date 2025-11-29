import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col items-center justify-center p-6">
      {/* Logos */}
      <div className="flex gap-8 mb-6">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img
            src={viteLogo}
            className="w-20 hover:scale-110 transition-transform duration-200"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img
            src={reactLogo}
            className="w-20 hover:scale-110 transition-transform duration-200"
            alt="React logo"
          />
        </a>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-4 text-blue-600">Vite + React + Tailwind</h1>

      {/* Card */}
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md text-center">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="px-5 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
        >
          count is {count}
        </button>

        <p className="mt-4 text-sm text-gray-600">
          Edit <code className="font-mono bg-gray-200 px-1 rounded">src/App.jsx</code> and save to test HMR.
        </p>
      </div>

      {/* Footer */}
      <footer className="mt-10 text-sm text-gray-500">
        Made with ❤️ by <span className="font-semibold">Nitheesh Rajendran</span>
      </footer>
    </div>
  );
}