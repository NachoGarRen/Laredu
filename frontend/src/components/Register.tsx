// src/components/Register.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("student"); // Por defecto, estudiante
    const [message, setMessage] = useState("");
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        fetch("http://127.0.0.1:8000/api/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password, role }),
        })
            .then((res) => res.json())
            .then(() => setMessage("Usuario registrado con éxito"))
            .catch(() => setMessage("Error en el registro"));
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
            <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-xl transform transition-all duration-500 hover:scale-105">
                <h2 className="text-2xl font-extrabold text-gray-800 text-center mb-4">Registro</h2>
                {message && <p className="text-green-500 text-center mb-2">{message}</p>}
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                    <input
                        type="text"
                        placeholder="Nombre"
                        className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Contraseña"
                        className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <select
                        id="role"
                        className="w-full p-3 border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                    >
                        <option value="student">Estudiante</option>
                        <option value="teacher">Profesor</option>
                    </select>
                    <button
                        type="submit"
                        className="w-full cursor-pointer bg-green-600 text-white py-3 rounded-xl font-bold text-lg hover:bg-green-500 transition-all duration-300"
                    >
                        Registrarse
                    </button>
                    <p className="text-center text-gray-600">
                        Ya tienes cuenta? <Link className="text-blue-500 hover:underline" to="/">Inicia Sesión</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}