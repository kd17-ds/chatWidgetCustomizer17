import { FiRefreshCw } from "react-icons/fi";

export default function Header({
    theme,
    profilePic,
    handleRefresh,
    headerBg,
}) {
    return (
        <div
            className="p-5 font-semibold flex items-center justify-between"
            style={{ background: headerBg }}
        >
            <div className="flex items-center gap-3">
                <img
                    src={profilePic || "https://i.pravatar.cc/40"}
                    alt="Profile"
                    className="w-9 h-9 rounded-full border"
                />
                <span>Chat Widget</span>
            </div>
            <div className="flex items-center gap-4">
                <FiRefreshCw
                    onClick={handleRefresh}
                    className={`hover:cursor-pointer text-xl ${theme === "dark" ? "text-white" : "text-gray-600"
                        }`}
                />
            </div>
        </div>
    );
}
