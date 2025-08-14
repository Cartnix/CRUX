import { CarouselData } from "../../utils/data"
import CarouselItem from "./CarouselItem"

export default function CarouselWrapper() {
    return (
        <div className="flex items-center gap-16 overflow-hidden scroll-smooth w-full carousel-container">
            {CarouselData.map((item) => (
                <CarouselItem
                    key={item.title}
                    title={item.title}
                    src={item.src} 
                    />
                    
                )
            )}
        </div>
    )
}