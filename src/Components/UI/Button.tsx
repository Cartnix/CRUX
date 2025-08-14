type ButtonUIprops = {
    text: string
}

export default function ButtonUI({text} : ButtonUIprops)
{
    return(
        <button className="bg-[#512FEB] p-2.5 rounded-xl">
            {text}
        </button>
    )
}