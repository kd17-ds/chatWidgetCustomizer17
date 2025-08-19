import { useState } from "react";
import { HiChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import { useGeneral } from "../contexts/GeneralContext";
import Header from "./chatWindowComponents/Header";
import ChatBox from "./chatWindowComponents/ChatBox";
import Footer from "./chatWindowComponents/Footer";

export default function ChatWindow() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const {
        theme,
        profilePic,
        chatIcon,
        userBubbleColor,
        botBubbleColor,
        userTextColor,
        botTextColor,
        headerBg,
        areaBg,
        showPoweredBy,
        fontSize,
        fontFamily,
        widgetWidth,
        cornerRadius,
    } = useGeneral();

    const handleSend = () => {
        if (!input.trim()) return;

        setMessages((prev) => [...prev, { sender: "user", text: input }]);
        setInput("");

        setTimeout(() => {
            setMessages((prev) => [
                ...prev,
                { sender: "bot", text: "Hey, What Can I Help you with?" },
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
                className={`fixed bottom-6 right-6 z-10 p-4 rounded-full shadow-lg hover:opacity-90 hover:cursor-pointer transition 
                ${theme === "dark" ? "bg-gray-800 text-white" : "bg-black text-white"}`}
            >
                <HiChatBubbleOvalLeftEllipsis className="text-2xl" />
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div
                    className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 flex flex-col border border-gray-200 shadow-lg overflow-hidden transition-all duration-300"
                    style={{
                        background: areaBg,
                        color: theme === "dark" ? "white" : "black",
                        fontSize: `${fontSize}px`,
                        fontFamily,
                        width: `${widgetWidth}px`,
                        borderRadius: `${cornerRadius}px`,
                        height: "550px",
                    }}
                >
                    <Header
                        theme={theme}
                        profilePic={profilePic}
                        handleRefresh={handleRefresh}
                        headerBg={headerBg}
                    />

                    <ChatBox
                        messages={messages}
                        profilePic={profilePic}
                        chatIcon={chatIcon}
                        userBubbleColor={userBubbleColor}
                        botBubbleColor={botBubbleColor}
                        userTextColor={userTextColor}
                        botTextColor={botTextColor}
                        theme={theme}
                        fontSize={fontSize}
                        fontFamily={fontFamily}
                    />

                    <Footer
                        theme={theme}
                        input={input}
                        setInput={setInput}
                        handleKeyDown={handleKeyDown}
                        handleSend={handleSend}
                        showPoweredBy={showPoweredBy}
                    />
                </div>
            )}
        </div>
    );
}
