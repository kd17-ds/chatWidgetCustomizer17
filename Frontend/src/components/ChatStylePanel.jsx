import { useState, useEffect } from "react";
import { useGeneral } from "../contexts/GeneralContext";

import Appearance from "./chatStylePanelComponents/Appearance";
import UploadSec from "./chatStylePanelComponents/UploadSec";
import Colors from "./chatStylePanelComponents/Colors";
import Modal from "./chatStylePanelComponents/Modal";


export default function ChatStylePanel() {
    const {
        theme,
        setTheme,
        setProfilePic,
        setChatIcon,
        userBubbleColor,
        setUserBubbleColor,
        botBubbleColor,
        setBotBubbleColor,
        userTextColor,
        setUserTextColor,
        botTextColor,
        setBotTextColor,
        areaBg,
        headerBg,
        setAreaBg,
        setHeaderBg,
    } = useGeneral();

    const [modalOpen, setModalOpen] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [upload, setUpload] = useState(null);
    const [syncColors, setSyncColors] = useState(false);
    const [syncUserMsgWithHeader, setSyncUserMsgWithHeader] = useState(false);

    const handleOpenModal = (target) => {
        setUpload(target);
        setInputValue("");
        setModalOpen(true);
    };

    useEffect(() => {
        if (syncUserMsgWithHeader) {
            setUserBubbleColor(headerBg);
        }
    }, [syncUserMsgWithHeader, headerBg, setUserBubbleColor]);

    const handleSubmit = () => {
        if (upload === "profile") setProfilePic(inputValue);
        if (upload === "icon") setChatIcon(inputValue);
        setModalOpen(false);
    };

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

                <div className="flex border-b border-gray-200 mb-4">
                    <button className="mr-5 py-3 text-sm font-medium text-gray-600 ">
                        Content
                    </button>
                    <button className="py-3 text-sm font-medium text-gray-600 border-b-2 border-black">
                        Style
                    </button>
                </div>
            </div>

            <Appearance theme={theme} setTheme={setTheme} />

            <UploadSec handleOpenModal={handleOpenModal} />

            <Colors
                syncColors={syncColors} setSyncColors={setSyncColors}
                syncUserMsgWithHeader={syncUserMsgWithHeader} setSyncUserMsgWithHeader={setSyncUserMsgWithHeader}
                userBubbleColor={userBubbleColor} setUserBubbleColor={setUserBubbleColor}
                botBubbleColor={botBubbleColor} setBotBubbleColor={setBotBubbleColor}
                userTextColor={userTextColor} setUserTextColor={setUserTextColor}
                botTextColor={botTextColor} setBotTextColor={setBotTextColor}
                headerBg={headerBg} setHeaderBg={setHeaderBg}
                areaBg={areaBg} setAreaBg={setAreaBg}
            />

            {modalOpen && (
                <Modal
                    upload={upload}
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    setModalOpen={setModalOpen}
                    handleSubmit={handleSubmit}
                />
            )}
        </div>
    );
}
