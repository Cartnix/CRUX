import useMediaQuery from "../../../hooks/useMediQuery";
import GlassBadge from "../../UI/GlassBadge";
import CarouselWrapper from "./CarouselComponent";
import HeroText from "./HeroTextComponent";

export default function AppHero() {

    const isMobile = useMediaQuery('(max-width: 768px)')

    return (
        <section aria-labelledby="Hero_Content" className={`${isMobile ? "pt-0" : "pt-[120px]"} text-center mb-5 p-6 min-h-screen bg-black text-amber-50 flex items-center flex-col justify-center bg-[radial-gradient(circle_at_top_left,rgba(81,47,235,0.3),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(81,47,235,0.3),transparent_60%)]`}>
            <GlassBadge text="CRUX - Best Crypto Solution" id="Hero_Content"/>
            <HeroText />
            <CarouselWrapper />
        </section>
    )
}