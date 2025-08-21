type ButtonUIprops = {
    text: string;
    className?: string
}

export default function ButtonUI({text, className} : ButtonUIprops)
{
    return(
        <button className={`bg-[#512FEB] text-[15px] p-2.5 rounded-xl ${className || ""}`}>
            {text}
        </button>
    )
}