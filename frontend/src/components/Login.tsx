// src/components/Login.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

interface LoginProps {
    onLoginSuccess: (token: string) => void;
    // onLoginSuccess recibirá el token
}
export default function Login({ onLoginSuccess }: LoginProps) {
    // Estados locales para email y password
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Petición POST a /api/login
        fetch("http://127.0.0.1:8000/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Invalid credentials");
                }
                return res.json();
            })
            .then((data) => {
                // data.token y data.user vendrán del backend
                onLoginSuccess(data.token);
            })
            .catch((err) => {
                setError(err.message);
            });
    };
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
            <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-xl transform transition-all duration-500 hover:scale-105">
                <h2 className="text-2xl font-extrabold text-gray-800 text-center mb-4">Login</h2>
                {error && <p className="text-red-500 text-center mb-2">{error}</p>}
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="w-full cursor-pointer bg-blue-600 text-white py-3 rounded-xl font-bold text-lg hover:bg-blue-500 transition-all duration-300"
                    >
                        Login
                    </button>
                    <p className="text-center text-gray-600">
                        No tienes cuenta? <Link className="text-blue-500 hover:underline" to="/register">Registrarse</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}