import { FiUpload } from "react-icons/fi";

export default function UploadSec({ handleOpenModal }) {
    return (
        <div className="mt-6 space-y-6 border-b-2 border-gray-200 pb-8">
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="text-base font-medium mb-3 text-gray-500">
                        Profile Picture
                    </h3>
                    <p className="text-xs text-gray-400">
                        Upload a profile picture for your bot.
                    </p>
                </div>

                <button
                    onClick={() => handleOpenModal("profile")}
                    className="px-3 py-1.5 border text-gray-800 hover:cursor-pointer rounded-lg text-sm flex items-center gap-2 hover:bg-gray-100"
                >
                    <FiUpload className="text-gray-800" />
                    Upload
                </button>
            </div>

            <div className="flex items-center justify-between">
                <div>
                    <h3 className="text-base font-medium mb-3 text-gray-500">
                        Chat Icon
                    </h3>
                    <p className="text-xs text-gray-400">
                        Set your icon to display on chat.
                    </p>
                </div>
                <button
                    onClick={() => handleOpenModal("icon")}
                    className="px-3 py-1.5 border text-gray-800 hover:cursor-pointer rounded-lg text-sm flex items-center gap-2 hover:bg-gray-100"
                >
                    <FiUpload className="text-gray-800" />
                    Upload
                </button>
            </div>
        </div>
    );
}

