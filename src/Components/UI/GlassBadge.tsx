type GlassBadgeprops = {
    text: string
}


export default function GlassBadge({text} : GlassBadgeprops)
{
    return (
        <div className="text-amber-50 p-1.5 backdrop-blur-md bg-white/10 border border-white/15 shadow-lg rounded-2xl mb-4">
            {text}
        </div>
    )
}