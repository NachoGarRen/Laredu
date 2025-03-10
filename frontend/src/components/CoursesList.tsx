// src/components/CoursesList.tsx
import { useEffect, useState } from "react";
interface Course {
    id: number;
    name: string;
    description: string;
}
export default function CoursesList() {
    const [courses, setCourses] = useState<Course[]>([]);
    const [error, setError] = useState("");
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            setError("No token found. Please log in.");
            return;
        }
        fetch("http://127.0.0.1:8000/api/courses", {
            headers: {
                Authorization: "Bearer " + token,
            },
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch courses");
                }
                return res.json();
            })
            .then((data: Course[]) => {
                setCourses(data);
            })
            .catch((err) => setError(err.message));
    }, []);
    if (error) {
        return <p className="text-red-500">{error}</p>;
    }
    return (
        <div className="mt-10 bg-white shadow-2xl rounded-3xl p-8 max-w-4xl mx-auto">
            {/* Título */}
            <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
                📚 Cursos Disponibles
            </h2>

            {/* Lista de cursos */}
            <ul className="space-y-4">
                {courses.map((course) => (
                    <li key={course.id} className="flex flex-col p-5 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                        <strong className="text-xl">{course.name}</strong>
                        <p className="opacity-90">{course.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}