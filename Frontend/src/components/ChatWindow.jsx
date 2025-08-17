import { useState } from "react";
import { FiRefreshCw, FiMaximize2, FiMinimize2, FiSend, FiCommand } from "react-icons/fi";
import { HiChatBubbleOvalLeftEllipsis } from "react-icons/hi2";

export default function ChatWidget() {
    const [messages, setMessages] = useState([]);
    const [expanded, setExpanded] = useState(false);
    const [input, setInput] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const handleSend = () => {
        if (!input.trim()) return;

        setMessages((prev) => [...prev, { sender: "user", text: input }]);
        setInput("");

        setTimeout(() => {
            setMessages((prev) => [
                ...prev,
                { sender: "bot", text: "Hey, What Can I Help you with? " },
            ]);
        }, 800);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    const handleRefresh = () => {
        setMessages([]);
    };

    return (
        <div>
            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-14 right-29 z-10 bg-black text-white p-4 rounded-full shadow-lg hover:opacity-90 hover:cursor-pointer transition"
            >
                <HiChatBubbleOvalLeftEllipsis className="text-2xl" />
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div
                    className={`fixed bottom-32 right-30 flex flex-col h-[550px] border border-gray-200 shadow-lg overflow-hidden transition-all duration-300 rounded-2xl bg-white
                                ${expanded ? "w-[420px]" : "w-[320px]"}`}
                >
                    {/* Header */}
                    <div className="p-5 bg-gradient-to-b from-gray-50 via-white via-50% to-gray-50 font-semibold flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <img
                                src="https://i.pravatar.cc/40"
                                alt="Profile"
                                className="w-9 h-9 rounded-full border"
                            />
                            <span>Chat Widget</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <FiRefreshCw
                                onClick={handleRefresh}
                                className="hover:cursor-pointer text-xl text-gray-500"
                            />
                            <button
                                onClick={() => setExpanded(!expanded)}
                                className="p-1 hover:cursor-pointer rounded-md transition text-gray-500"
                            >
                                {expanded ? (
                                    <FiMinimize2 className="text-xl text-gray-600" />
                                ) : (
                                    <FiMaximize2 className="text-xl text-gray-600" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Chat Box */}
                    <div
                        className="flex-1 overflow-y-auto p-5 space-y-5"
                        style={{ scrollbarWidth: "thin", scrollbarColor: "#d1d5db #ffffff" }}
                    >
                        {messages.map((msg, i) => (
                            <div
                                key={i}
                                className={`flex items-end ${msg.sender === "user" ? "justify-end" : "justify-start"
                                    }`}
                            >
                                {msg.sender !== "user" && (
                                    <img
                                        src="https://i.pravatar.cc/40"
                                        alt="Profile"
                                        className="w-9 h-9 rounded-full border mr-2"
                                    />
                                )}

                                <div
                                    className={`max-w-[55%] break-words whitespace-pre-wrap p-3 rounded-2xl text-sm ${msg.sender === "user"
                                        ? "bg-blue-500 text-white"
                                        : "bg-gray-300 text-gray-900"
                                        }`}
                                >
                                    {msg.text}
                                </div>

                                {msg.sender === "user" && (
                                    <img
                                        src="https://i.pravatar.cc/40"
                                        alt="Profile"
                                        className="w-9 h-9 rounded-full border ml-2"
                                    />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Footer */}
                    <div>
                        <div className="text-xs text-center mt-2 p-1 text-gray-400 flex items-center justify-center space-x-1">
                            <FiCommand className="text-gray-500 text-lg" />
                            <span>Powered by YourBrand</span>
                        </div>

                        <div className="px-3 py-2 mb-2">
                            <div className="w-full flex items-center border border-gray-200 shadow-sm rounded-full px-4 py-2 space-x-2">
                                <textarea
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    rows={1}
                                    className="flex-1 resize-none text-sm focus:outline-none focus:ring-0 placeholder-gray-400"
                                    placeholder="Message..."
                                />
                                <button className="p-1 hover:text-gray-700">😊</button>
                                <button
                                    onClick={handleSend}
                                    className="p-2 hover:cursor-pointer rounded-full"
                                >
                                    <FiSend className="text-lg" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}



