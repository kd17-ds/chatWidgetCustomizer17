import { createContext, useContext, useState, useEffect } from "react";

const GeneralContext = createContext();

export function GeneralProvider({ children }) {
    const [theme, setTheme] = useState("light");
    const [profilePic, setProfilePic] = useState("");
    const [chatIcon, setChatIcon] = useState("");

    const [userBubbleColor, setUserBubbleColor] = useState("#3B82F6");
    const [botBubbleColor, setBotBubbleColor] = useState("#E5E7EB");
    const [userTextColor, setUserTextColor] = useState("#FFFFFF");
    const [botTextColor, setBotTextColor] = useState("#111827");

    const [headerBg, setHeaderBg] = useState("");
    const [areaBg, setAreaBg] = useState("");

    useEffect(() => {
        if (theme === "dark") {
            setHeaderBg("#1F2937");
            setAreaBg("#111827");
        } else {
            setHeaderBg("linear-gradient(to bottom, #F9FAFB, #FFFFFF 50%, #F9FAFB)");
            setAreaBg("#FFFFFF");
        }
    }, [theme]);

    return (
        <GeneralContext.Provider
            value={{
                theme, setTheme,
                profilePic, setProfilePic,
                chatIcon, setChatIcon,
                userBubbleColor, setUserBubbleColor,
                botBubbleColor, setBotBubbleColor,
                userTextColor, setUserTextColor,
                botTextColor, setBotTextColor,
                headerBg, setHeaderBg,
                areaBg, setAreaBg
            }}
        >
            {children}
        </GeneralContext.Provider>
    );
}

export function useGeneral() {
    return useContext(GeneralContext);
}
