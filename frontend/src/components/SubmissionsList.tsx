// src/components/SubmissionsList.tsx
import React, { useEffect, useState } from "react";

interface Submission {
    id: number;
    assignment_id: number;
    user_id: number;
    submitted_at: string;
    grade: number | null;
}

export default function SubmissionsList() {
    const [submissions, setSubmissions] = useState<Submission[]>([]);
    const [assignmentId, setAssignmentId] = useState("");
    const [message, setMessage] = useState("");
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/submissions", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        })
            .then((res) => res.json())
            .then((data) => setSubmissions(data))
            .catch(() => setMessage("Error al obtener entregas"));
    }, []);
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        fetch("http://127.0.0.1:8000/api/submissions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
            body: JSON.stringify({
                user_id: 2, // Esto debe cambiarse para tomar el ID del usuario autenticado
                assignment_id: parseInt(assignmentId),
                submitted_at: new Date().toISOString(),
                grade: null,
            }),
        })
            .then((res) => res.json())
            .then(() => setMessage("Tarea entregada con éxito"))
            .catch(() => setMessage("Error al entregar tarea"));
    };

    return (
        <div className="mt-10 bg-white shadow-2xl rounded-3xl p-8 max-w-4xl mx-auto">
            {/* Título */}
            <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
                📤 Entregas de Tareas
            </h2>

            {/* Mensaje de confirmación */}
            {message && <p className="text-green-600 font-semibold text-center">{message}</p>}

            {/* Formulario de entrega */}
            <form onSubmit={handleSubmit} className="mb-6 flex space-x-3">
                <input
                    type="number"
                    placeholder="ID de la Tarea"
                    className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={assignmentId}
                    onChange={(e) => setAssignmentId(e.target.value)}
                />
                <button type="submit" className="bg-blue-600 cursor-pointer text-white px-5 py-3 rounded-xl font-semibold hover:bg-blue-700 transition duration-300">
                    ✅ Entregar
                </button>
            </form>

            {/* Lista de entregas */}
            <ul className="space-y-4">
                {submissions.map((submission) => (
                    <li key={submission.id} className="p-5 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                        <strong className="text-xl">📌 ID Tarea: {submission.assignment_id}</strong>
                        <p className="opacity-90">📅 Entregado el {new Date(submission.submitted_at).toLocaleDateString()}</p>
                        <p className="mt-1">{submission.grade !== null ? `🎯 Nota: ${submission.grade}` : "⏳ Sin nota aún"}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}