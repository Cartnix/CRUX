import GlassBadge from "../../UI/GlassBadge";
import CarouselWrapper from "./CarouselComponent";
import HeroText from "./HeroTextComponent";

export default function AppHero() {
    return (
        <div className="p-6 h-screen bg-black text-amber-50 flex items-center flex-col justify-center bg-[radial-gradient(circle_at_top_left,rgba(81,47,235,0.3),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(81,47,235,0.3),transparent_60%)]">
            <GlassBadge text="CRUX - Best Crypto Solution" />
            <HeroText />
            <CarouselWrapper />
        </div>
    )
}