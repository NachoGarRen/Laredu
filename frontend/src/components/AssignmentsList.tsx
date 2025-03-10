// src/components/AssignmentsList.tsx
import React, { useEffect, useState } from "react";

interface Assignment {
    id: number;
    title: string;
    due_date: string;
    subject_id: number;
}
export default function AssignmentsList() {
    const [assignments, setAssignments] = useState<Assignment[]>([]);
    const [error, setError] = useState("");
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/assignments", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        })
            .then((res) => res.json())
            .then((data) => setAssignments(data))
            .catch(() => setError("Error al obtener las tareas"));
    }, []);

    return (
        <div className="mt-10 bg-white shadow-2xl rounded-3xl p-8 max-w-4xl mx-auto">
            {/* Título */}
            <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
                📝 Tareas Pendientes
            </h2>

            {/* Mensaje de error si existe */}
            {error && <p className="text-red-500 text-center font-semibold">{error}</p>}

            {/* Lista de tareas */}
            <ul className="space-y-4">
                {assignments.map((assignment) => (
                    <li key={assignment.id} className="flex flex-col p-5 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                        <strong className="text-xl">{assignment.title}</strong>
                        <p className="opacity-90">📅 Fecha de entrega: {assignment.due_date}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}