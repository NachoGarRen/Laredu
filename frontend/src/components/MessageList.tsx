// src/components/MessageList.tsx
import React, { useEffect, useState } from "react";

interface Message {
    id: number;
    sender_id: number;
    receiver_id: number;
    content: string;
    is_read: boolean;
    created_at: string;
}

export default function MessageList() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [receiverId, setReceiverId] = useState("");
    const [content, setContent] = useState("");
    const [message, setMessage] = useState("");
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/messages", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        })
            .then((res) => res.json())
            .then((data) => setMessages(data))
            .catch(() => setMessage("Error al obtener mensajes"));
    }, []);
    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        fetch("http://127.0.0.1:8000/api/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
            body: JSON.stringify({
                receiver_id: parseInt(receiverId),
                content,
            }),
        })
            .then((res) => res.json())
            .then(() => setMessage("Mensaje enviado con éxito"))
            .catch(() => setMessage("Error al enviar mensaje"));
    };

    return (
        <div className="mt-10 bg-white shadow-2xl rounded-3xl p-8 max-w-4xl mx-auto">
            {/* Título */}
            <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
                💬 Mensajería
            </h2>

            {/* Mensaje de confirmación */}
            {message && <p className="text-green-600 font-semibold text-center">{message}</p>}

            {/* Formulario de envío de mensaje */}
            <form onSubmit={handleSendMessage} className="mb-6 flex space-x-4">
                <input
                    type="number"
                    placeholder="ID Destinatario"
                    className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={receiverId}
                    onChange={(e) => setReceiverId(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Mensaje"
                    className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <button type="submit" className="bg-green-600 cursor-pointer text-white px-5 py-3 rounded-xl font-semibold hover:bg-green-700 transition duration-300">
                    ✉️ Enviar
                </button>
            </form>

            {/* Lista de mensajes */}
            <ul className="space-y-4">
                {messages.map((msg) => (
                    <li key={msg.id} className="p-5 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                        <strong className="text-xl">{msg.sender_id === 2 ? "Yo" : `Usuario ${msg.sender_id}`}</strong>:{" "}
                        <p className="mt-2">{msg.content}</p>
                        <p className="opacity-80 text-sm mt-1">🕒 Enviado el {new Date(msg.created_at).toLocaleDateString()}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
