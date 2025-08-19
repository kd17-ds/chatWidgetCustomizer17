export default function Layout({ widgetWidth, setWidgetWidth, cornerRadius, setCornerRadius }) {
    return (
        <div className="border-b-2 border-gray-200 pb-8 mt-6">
            <h3 className="text-base font-medium mb-3 text-gray-500">Layout</h3>

            <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between gap-4">
                    <label className="text-sm text-gray-500 whitespace-nowrap">
                        Widget Width ({widgetWidth}px)
                    </label>
                    <input
                        type="range"
                        min={280}
                        max={420}
                        value={widgetWidth}
                        onChange={(e) => setWidgetWidth(Number(e.target.value))}
                        className="w-40"
                    />
                </div>

                <div className="flex items-center justify-between gap-4">
                    <label className="text-sm text-gray-500 whitespace-nowrap">
                        Corner Radius ({cornerRadius}px)
                    </label>
                    <input
                        type="range"
                        min={0}
                        max={24}
                        value={cornerRadius}
                        onChange={(e) => setCornerRadius(Number(e.target.value))}
                        className="w-40"
                    />
                </div>
            </div>
        </div>
    );
}
