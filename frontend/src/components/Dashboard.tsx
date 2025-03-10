// src/components/Dashboard.tsx
import { Link } from "react-router-dom";
export default function Dashboard() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 p-10">
            <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-3xl p-8">
                {/* Título */}
                <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-8">
                    🚀 Bienvenido a <span className="text-blue-600">Laredu</span>
                </h1>

                {/* Contenedor de tarjetas */}
                <div className="grid grid-cols-2 gap-6">
                    <Link to="/courses" className="flex text-2xl font-bold items-center justify-center p-6 bg-blue-500 text-white rounded-xl shadow-lg hover:bg-blue-400 transform transition-all duration-300 hover:scale-105">
                        📖 Ver Cursos
                    </Link>
                    <Link to="/subjects" className="flex text-2xl font-bold items-center justify-center p-6 bg-green-500 text-white rounded-xl shadow-lg hover:bg-green-400 transform transition-all duration-300 hover:scale-105">
                        📚 Ver Asignaturas
                    </Link>
                    <Link to="/assignments" className="flex text-2xl font-bold items-center justify-center p-6 bg-purple-500 text-white rounded-xl shadow-lg hover:bg-purple-400 transform transition-all duration-300 hover:scale-105">
                        📝 Ver Tareas
                    </Link>
                    <Link to="/submissions" className="flex text-2xl font-bold items-center justify-center p-6 bg-yellow-500 text-white rounded-xl shadow-lg hover:bg-yellow-400 transform transition-all duration-300 hover:scale-105">
                        📤 Ver Entregas
                    </Link>
                    <Link to="/messages" className="flex text-2xl font-bold items-center justify-center p-6 bg-red-500 text-white rounded-xl shadow-lg hover:bg-red-400 transform transition-all duration-300 hover:scale-105">
                        💬 Ver Mensajes
                    </Link>
                </div>
            </div>
        </div>
    );
}