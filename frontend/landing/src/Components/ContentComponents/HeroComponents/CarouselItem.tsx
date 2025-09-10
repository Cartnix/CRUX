type Carouseltemprops = {
    title: string,
    src: string
}

export default function CarouselItem({ title, src } : Carouseltemprops)
{
    return(
        <div className="gap-2 flex snap-start flex-shrink-0">
            <img src={src} alt="LogoItem" className="h-auto w-6"/>
            <span>{title}</span>
        </div>
    )
}