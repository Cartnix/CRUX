type GlassBadgeprops = {
    text: React.ReactNode,
    id?: string,
}


export default function GlassBadge({text, id} : GlassBadgeprops)
{
    return (
        <div id={id} className="text-amber-50 text-[14px] p-2.5 backdrop-blur-md bg-[#0D0D0D] border border-white/15 shadow-lg rounded-xl mb-4">
            {text}
        </div>
    )
}