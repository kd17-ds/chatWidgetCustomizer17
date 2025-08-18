export default function Colors({
    syncColors, setSyncColors,
    syncUserMsgWithHeader, setSyncUserMsgWithHeader,
    userBubbleColor, setUserBubbleColor,
    botBubbleColor, setBotBubbleColor,
    userTextColor, setUserTextColor,
    botTextColor, setBotTextColor,
    headerBg, setHeaderBg,
    areaBg, setAreaBg
}) {

    function getContrast(hex1, hex2) {
        const hexToRGB = (hex) => {
            let r = parseInt(hex.substr(1, 2), 16);
            let g = parseInt(hex.substr(3, 2), 16);
            let b = parseInt(hex.substr(5, 2), 16);
            return [r, g, b];
        };

        const [r1, g1, b1] = hexToRGB(hex1);
        const [r2, g2, b2] = hexToRGB(hex2);

        const brightness1 = (r1 * 299 + g1 * 587 + b1 * 114) / 1000;
        const brightness2 = (r2 * 299 + g2 * 587 + b2 * 114) / 1000;

        return Math.abs(brightness1 - brightness2);
    }

    return (
        <div className="mt-6 space-y-6 border-b-2 border-gray-200 pb-8">
            <h3 className="text-base font-medium mb-3 text-gray-500">Colors</h3>

            {/* Sync Toggle Switch */}
            <div className="flex items-center justify-between mb-4 px-3 py-2 rounded-md bg-gray-100">
                <span className="text-sm text-gray-800 font-medium">
                    Sync text colors with bubble box
                </span>
                <button
                    onClick={() => setSyncColors(!syncColors)}
                    className={`w-10 h-6 flex items-center rounded-full p-1 transition-colors ${syncColors ? "bg-blue-500" : "bg-gray-300"
                        }`}
                >
                    <div
                        className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${syncColors ? "translate-x-4" : "translate-x-0"
                            }`}
                    />
                </button>
            </div>
            {/* Sync User Msg Color with Header */}
            <div className="flex items-center justify-between mb-4 px-3 py-2 rounded-md bg-gray-100">
                <span className="text-sm text-gray-800 font-medium">
                    Sync user message color with agent header
                </span>
                <button
                    onClick={() => {
                        setSyncUserMsgWithHeader(!syncUserMsgWithHeader);
                        if (!syncUserMsgWithHeader) {
                            setUserBubbleColor(headerBg);
                        }
                    }}
                    className={`w-10 h-6 flex items-center rounded-full p-1 transition-colors ${syncUserMsgWithHeader ? "bg-blue-500" : "bg-gray-300"
                        }`}
                >
                    <div
                        className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${syncUserMsgWithHeader ? "translate-x-4" : "translate-x-0"
                            }`}
                    />
                </button>
            </div>

            {[
                {
                    label: "User message color",
                    value: userBubbleColor,
                    setter: setUserBubbleColor,
                    defaultColor: "#3B82F6",
                    compareWith: userTextColor,
                },
                {
                    label: "User text color",
                    value: userTextColor,
                    setter: setUserTextColor,
                    defaultColor: "#FFFFFF",
                    compareWith: userBubbleColor,
                },
                {
                    label: "Bot message color",
                    value: botBubbleColor,
                    setter: setBotBubbleColor,
                    defaultColor: "#E5E7EB",
                    compareWith: botTextColor,
                },
                {
                    label: "Bot text color",
                    value: botTextColor,
                    setter: setBotTextColor,
                    defaultColor: "#111827",
                    compareWith: botBubbleColor,
                },
                {
                    label: "Header background",
                    value: headerBg,
                    setter: setHeaderBg,
                    defaultColor: "#FFFFFF",
                    compareWith: "",
                },
                {
                    label: "Chat area background",
                    value: areaBg,
                    setter: setAreaBg,
                    defaultColor: "#F9FAFB",
                    compareWith: "",
                },
            ].map(({ label, value, setter, defaultColor, compareWith }) => (
                <div key={label} className="flex items-center justify-between">
                    <label className="text-sm text-gray-600">{label}</label>
                    <div className="flex items-center space-x-3">

                        {syncColors && getContrast(value, compareWith) < 125 && (
                            <span>⚠ Low contrast</span>
                        )}

                        {/* Color picker box */}
                        <div className="flex items-center bg-gray-100 rounded-lg px-2 py-1">
                            <input
                                type="color"
                                value={value}
                                onChange={(e) => setter(e.target.value)}
                                className="w-6 h-6 rounded border-2 border-white cursor-pointer"
                            />
                            <input
                                type="text"
                                value={value}
                                onChange={(e) => setter(e.target.value)}
                                className="w-24 ml-2 bg-transparent text-sm outline-none"
                            />
                            <button
                                onClick={() => setter(defaultColor)}
                                className="ml-2 p-1.5 rounded hover:bg-gray-200 text-gray-500"
                            >
                                ↺
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
