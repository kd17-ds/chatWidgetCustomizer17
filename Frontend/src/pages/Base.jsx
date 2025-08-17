import ChatWindow from "../components/ChatWindow";
import StylePanel from "../components/ChatStylePanel";

export default function Base() {
    return (
        <div className="min-h-screen flex items-center justify-center ">
            <div className="w-full flex flex-col md:flex-row ">

                <div className="w-full md:w-3/5 border-r-2 border-r-gray-200">
                    <StylePanel />
                </div>

                <div className="w-full md:w-2/5 flex justify-center">
                    <ChatWindow />
                </div>
            </div>
        </div>
    );
}
