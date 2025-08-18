import { useRef, useEffect } from "react";

export default function ChatBox({
    messages,
    profilePic,
    chatIcon,
    userBubbleColor,
    botBubbleColor,
    userTextColor,
    botTextColor,
    theme,
}) {
    const messagesEndRef = useRef(null);

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);

    return (
        <div
            className="flex-1 overflow-y-auto p-5 space-y-5"
            style={{
                scrollbarWidth: "thin",
                scrollbarColor:
                    theme === "dark" ? "#4b5563 #1f2937" : "#d1d5db #ffffff",
            }}
        >
            {messages.map((msg, i) => (
                <div
                    key={i}
                    className={`flex items-end ${msg.sender === "user" ? "justify-end" : "justify-start"
                        }`}
                >
                    {msg.sender !== "user" && (
                        <img
                            src={profilePic || "https://i.pravatar.cc/40"}
                            alt="Profile"
                            className="w-9 h-9 rounded-full border mr-2"
                        />
                    )}

                    <div
                        className="max-w-[55%] break-words whitespace-pre-wrap p-3 rounded-2xl text-sm"
                        style={{
                            backgroundColor:
                                msg.sender === "user"
                                    ? userBubbleColor
                                    : botBubbleColor,
                            color:
                                msg.sender === "user"
                                    ? userTextColor
                                    : botTextColor,
                        }}
                    >
                        {msg.text}
                    </div>

                    {msg.sender === "user" && (
                        <img
                            src={chatIcon || "https://i.pravatar.cc/40"}
                            alt="User"
                            className="w-8 h-8 rounded-full ml-2 object-cover"
                        />
                    )}
                </div>
            ))}
            <div ref={messagesEndRef} />
        </div>
    );
}
