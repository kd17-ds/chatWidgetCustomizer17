import { useTheme } from "../contexts/ThemeContext";

export default function ChatStylePanel() {
    const { theme, setTheme } = useTheme();

    return (
        <div className="min-h-screen max-w-3xl mx-auto my-10">
            {/* Header */}
            <div>
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold">Chat Interface</h2>
                    <button className="px-4 py-1 rounded-md bg-gray-400 text-sm text-white hover:cursor-pointer">
                        Save
                    </button>
                </div>

                {/* Tabs */}
                <div className="flex border-b border-gray-200 mb-4">
                    <button className="mr-5 py-3 text-sm font-medium text-gray-600 ">
                        Content
                    </button>
                    <button className="py-3 text-sm font-medium text-gray-600 border-b-2 border-black">
                        Style
                    </button>
                </div>
            </div>

            {/* Appearance Section */}
            <div className=" border-b-2 border-gray-200 pb-8">
                <h3 className="text-base font-medium mb-3 text-gray-500">Appearance</h3>
                <div className="flex gap-8">
                    <button
                        onClick={() => setTheme("light")}
                        className={`flex-1 border rounded-lg p-3 ${theme === "light" ? "border-black" : "border-gray-300"} hover:cursor-pointer`}
                    >
                        <div className="w-full h-20 bg-gray-100 rounded-md mb-5 flex items-center justify-center">
                            <div className="w-8 h-3 bg-gray-300 rounded mb-1" />
                            <div className="w-6 h-2 bg-gray-200 rounded" />
                        </div>
                        <div className="flex items-center justify-between px-1">
                            <span className="text-sm">Light</span>
                            <div
                                className={`w-3 h-3 rounded-full border ${theme === "light" ? "bg-black border-black" : "border-gray-400"}`}
                            />
                        </div>
                    </button>

                    <button
                        onClick={() => setTheme("dark")}
                        className={`flex-1 border rounded-lg p-3 ${theme === "dark" ? "border-black" : "border-gray-300"} hover:cursor-pointer`}
                    >
                        <div className="w-full h-20 bg-gray-900 rounded-md mb-5 flex items-center justify-center">
                            <div className="w-8 h-3 bg-gray-700 rounded mb-1" />
                            <div className="w-6 h-2 bg-gray-800 rounded" />
                        </div>
                        <div className="flex items-center justify-between px-1">
                            <span className="text-sm">Dark</span>
                            <div
                                className={`w-3 h-3 rounded-full border ${theme === "dark" ? "bg-black border-black" : "border-gray-400"}`}
                            />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}
