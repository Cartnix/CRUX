import CardProfileIcon from "../../../assets/svg/CardProfileIcon";

export default function ThirdCardS() {
    return (
        <div className="grid grid-cols-2 grid-rows-2 gap-2 h-full">
            <div className="bg-[rgba(255,255,255,.12)] flex justify-center items-center flex-col gap-2 rounded-md">
                <img src="Voice.png" alt="Voice" />
                <span>AI Developer</span>
            </div>
            <div className="bg-[rgba(255,255,255,.12)] flex justify-center items-center flex-col gap-2 rounded-md">
                <CardProfileIcon />
                <span>Sales Expert</span>
            </div>
            <div className="bg-[rgba(255,255,255,.12)] flex justify-center items-center flex-col gap-2 rounded-md">
                <CardProfileIcon />
                <span>Marketing Expert</span>
            </div>
            <div className="bg-[rgba(255,255,255,.12)] flex justify-center items-center flex-col gap-2 rounded-md">
                <img src="Voice.png" alt="Voice" />
                <span>You</span>
            </div>
        </div>
    )
}