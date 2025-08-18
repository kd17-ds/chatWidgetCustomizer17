export default function Modal({
    upload,
    inputValue,
    setInputValue,
    setModalOpen,
    handleSubmit
}) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-96">
                <h3 className="text-lg font-medium mb-4">
                    {upload === "profile"
                        ? "Upload Profile Picture"
                        : "Upload Chat Icon"}
                </h3>
                <input
                    type="text"
                    placeholder="Enter image URL"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="w-full border rounded-md p-2 mb-4 text-sm"
                />
                <div className="flex justify-end gap-2">
                    <button
                        onClick={() => setModalOpen(false)}
                        className="px-4 py-2 text-sm border hover:cursor-pointer rounded-md"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="px-4 py-2 text-sm bg-black hover:cursor-pointer text-white rounded-md"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}
