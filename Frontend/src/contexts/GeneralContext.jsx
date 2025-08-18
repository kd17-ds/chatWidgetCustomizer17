import { createContext, useContext, useState } from "react";

const GeneralContext = createContext();

export function GeneralProvider({ children }) {
    const [theme, setTheme] = useState("light");
    const [profilePic, setProfilePic] = useState("");
    const [chatIcon, setChatIcon] = useState("");

    return (
        <GeneralContext.Provider value={{
            theme, setTheme,
            profilePic, setProfilePic,
            chatIcon, setChatIcon
        }}>
            {children}
        </GeneralContext.Provider>
    );
}

export function useGeneral() {
    return useContext(GeneralContext);
}
