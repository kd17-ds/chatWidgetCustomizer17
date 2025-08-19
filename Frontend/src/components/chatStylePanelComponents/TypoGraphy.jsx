export default function Typography({ fontSize, setFontSize, fontFamily, setFontFamily }) {
    const fontOptions = ["Arial", "Georgia", "Roboto", "Courier New", "Times New Roman"];

    return (
        <div className="border-b-2 border-gray-200 pb-8 mt-6">
            <h3 className="text-base font-medium mb-3 text-gray-500">Typography</h3>

            <div className="flex flex-col gap-4">

                <div className="flex items-center justify-between gap-4">
                    <label className="text-sm text-gray-500 whitespace-nowrap">
                        Font Size ({fontSize}px)
                    </label>
                    <input
                        type="range"
                        min={12}
                        max={18}
                        value={fontSize}
                        onChange={(e) => setFontSize(Number(e.target.value))}
                        className="w-40"
                    />
                </div>

                <div className="flex items-center justify-between gap-4">
                    <label className="text-sm text-gray-500 whitespace-nowrap">
                        Font Family
                    </label>
                    <select
                        value={fontFamily}
                        onChange={(e) => setFontFamily(e.target.value)}
                        className="border rounded-md p-1 text-sm w-40"
                    >
                        {fontOptions.map((font) => (
                            <option key={font} value={font}>
                                {font}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
}
