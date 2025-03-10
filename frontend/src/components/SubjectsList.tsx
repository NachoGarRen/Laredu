// src/components/SubjectsList.tsx
import React, { useEffect, useState } from "react";

interface Subject {
    id: number;
    name: string;
    course_id: number;
    teacher_id: number;
}
export default function SubjectsList() {
    const [subjects, setSubjects] = useState<Subject[]>([]);
    const [error, setError] = useState("");
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/subjects", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        })
            .then((res) => res.json())
            .then((data) => setSubjects(data))
            .catch(() => setError("Error al obtener las asignaturas"));
    }, []);
    return (
        <div className="mt-10 bg-white shadow-2xl rounded-3xl p-8 max-w-4xl mx-auto">
            {/* Título */}
            <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
                📚 Asignaturas
            </h2>

            {/* Mensaje de error si existe */}
            {error && <p className="text-red-500 text-center font-semibold">{error}</p>}

            {/* Lista de asignaturas */}
            <ul className="space-y-4">
                {subjects.map((subject) => (
                    <li key={subject.id} className="flex flex-col p-5 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                        <strong className="text-xl">{subject.name}</strong>
                        <p className="opacity-90">📌 ID Curso: {subject.course_id}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}