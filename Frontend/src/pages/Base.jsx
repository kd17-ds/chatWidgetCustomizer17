import ChatWindow from "../components/ChatWindow";
import StylePanel from "../components/ChatStylePanel";

export default function Base() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-0">
            <div className="w-full flex flex-col lg:flex-row">

                <div className="w-full lg:w-3/5 lg:border-r-2 lg:border-r-gray-200">
                    <StylePanel />
                </div>

                <div className="w-full lg:w-2/5 flex justify-center">
                    <ChatWindow />
                </div>
            </div>
        </div>
    );
}
