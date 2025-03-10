// src/components/LogoutButton.tsx
interface LogoutButtonProps {
    onLogout: () => void;
}
export default function LogoutButton({ onLogout }: LogoutButtonProps) {
    return (
        <button
            onClick={onLogout}
            className="bg-red-600 cursor-pointer text-white px-4 py-2 rounded-lg font-semibold shadow-md transition-all duration-300 hover:bg-red-500 hover:scale-105 active:scale-95"
        >
            Cerrar Sesión
        </button>
    );
}