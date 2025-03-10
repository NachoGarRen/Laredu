// src/components/Navbar.tsx
import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";

interface NavbarProps {
    onLogout: () => void;
}
export default function Navbar({ onLogout }: NavbarProps) {

    return (
        <nav className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 shadow-lg">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <span className="text-3xl font-extrabold flex items-center space-x-2">
                    📚 <span>Laredu</span>
                </span>

                {/* Menú principal */}
                <div className="flex space-x-8">
                    <Link className="text-lg font-medium hover:text-gray-300 transition-all duration-300" to="/">Inicio</Link>
                    <Link className="text-lg font-medium hover:text-gray-300 transition-all duration-300" to="/courses">Cursos</Link>
                    <Link className="text-lg font-medium hover:text-gray-300 transition-all duration-300" to="/subjects">Asignaturas</Link>
                    <Link className="text-lg font-medium hover:text-gray-300 transition-all duration-300" to="/assignments">Tareas</Link>
                    <Link className="text-lg font-medium hover:text-gray-300 transition-all duration-300" to="/submissions">Entregas</Link>
                    <Link className="text-lg font-medium hover:text-gray-300 transition-all duration-300" to="/messages">Mensajes</Link>
                </div>

                {/* Botón de logout */}
                <LogoutButton onLogout={onLogout} />
            </div>
        </nav>
    );
}