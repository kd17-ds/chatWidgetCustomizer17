import { FiSend, FiCommand } from "react-icons/fi";

export default function Footer({
    theme,
    input,
    setInput,
    handleKeyDown,
    handleSend,
}) {
    return (
        <div>
            <div
                className={`text-xs text-center mt-2 p-1 flex items-center justify-center space-x-1 ${theme === "dark" ? "text-white" : "text-gray-400"
                    }`}
            >
                <FiCommand
                    className={`${theme === "dark" ? "text-white" : "text-gray-500"
                        } text-lg`}
                />
                <span>Powered by YourBrand</span>
            </div>

            <div className="px-3 py-2 mb-2">
                <div
                    className={`w-full flex items-center border shadow-sm rounded-full px-4 py-2 space-x-2 ${theme === "dark"
                            ? "border-gray-700 bg-gray-800 text-white"
                            : "border-gray-200 bg-white text-black"
                        }`}
                >
                    <textarea
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        rows={1}
                        className="flex-1 resize-none text-sm focus:outline-none focus:ring-0 placeholder-gray-400 bg-transparent"
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
    );
}
