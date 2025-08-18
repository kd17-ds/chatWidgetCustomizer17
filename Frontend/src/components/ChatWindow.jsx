import { useState } from "react";
import { HiChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import { useGeneral } from "../contexts/GeneralContext";
import Header from "./chatWindowComponents/Header";
import ChatBox from "./chatWindowComponents/ChatBox";
import Footer from "./chatWindowComponents/Footer";

export default function ChatWindow() {
    const [messages, setMessages] = useState([]);
    const [expanded, setExpanded] = useState(false);
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
    } = useGeneral();

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
                className={`fixed bottom-14 right-29 z-10 p-4 rounded-full shadow-lg hover:opacity-90 hover:cursor-pointer transition ${theme === "dark"
                    ? "bg-gray-800 text-white"
                    : "bg-black text-white"
                    }`}
            >
                <HiChatBubbleOvalLeftEllipsis className="text-2xl" />
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div
                    className={`fixed bottom-32 right-30 flex flex-col h-[550px] border border-gray-200 shadow-lg overflow-hidden transition-all duration-300 rounded-2xl ${expanded ? "w-[420px]" : "w-[320px]"
                        }`}
                    style={{
                        background: areaBg,
                        color: theme === "dark" ? "white" : "black",
                    }}
                >
                    <Header
                        theme={theme}
                        profilePic={profilePic}
                        expanded={expanded}
                        setExpanded={setExpanded}
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
                    />

                    <Footer
                        theme={theme}
                        input={input}
                        setInput={setInput}
                        handleKeyDown={handleKeyDown}
                        handleSend={handleSend}
                    />
                </div>
            )}
        </div>
    );
}
