type ButtonUIprops = {
    text: string;
    className?: string;
    clickFunc?: () => void
}

export default function ButtonUI({ text, className, clickFunc }: ButtonUIprops) {
    return (
        <button className={`cursor-pointer bg-[#512FEB] text-[15px] p-2.5 rounded-xl ${className || ""}`} onClick={clickFunc}>
            {text}
        </button>
    )
}