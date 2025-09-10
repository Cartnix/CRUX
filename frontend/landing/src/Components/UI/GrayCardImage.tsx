type CardImageProps = {
    type?: "Progress" | "Default";
    children: React.ReactNode
}

export default function CardImage({ type = "Default", children }: CardImageProps) {
    return (
        <div className="h-[250px] rounded-xl bg-[rgba(255,255,255,.12)]" style={{
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)',
            WebkitMaskRepeat: 'no-repeat',
            WebkitMaskSize: '100% 100%',
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)',
            maskRepeat: 'no-repeat',
            maskSize: '100% 100%',
        }}>
            
            {type === "Progress" && (
                <div className="bg-[rgba(255,255,255,.2)] py-1.5 px-3 justify-start flex gap-2 rounded-tl-xl rounded-tr-xl">
                    <div className="h-1.5 w-1.5 rounded-3xl bg-[#FF3333]"></div>
                    <div className="h-1.5 w-1.5 rounded-3xl bg-[#E6FF00]"></div>
                    <div className="h-1.5 w-1.5 rounded-3xl bg-[#33FF4E]"></div>
                </div>
            )}

            <div className="gap-1.5 p-3 h-full">
                {children}
            </div>
        </div>
    )
}