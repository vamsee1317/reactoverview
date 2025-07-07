// ./components/Header.js
import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { FiSun, FiMoon } from 'react-icons/fi'

export default function Header() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <header className="bg-indigo-700 text-white shadow-md py-4 px-6 flex items-center justify-between">
            <h1 className="text-2xl font-bold">🌟 ThemeContext App</h1>

            <button
                onClick={toggleTheme}
                className="text-white text-xl p-2 rounded-full bg-indigo-500 hover:bg-indigo-600 transition"
                title="Toggle Theme"
            >
                {theme === "light" ? <FiMoon /> : <FiSun />}
            </button>
        </header>
    )
}
