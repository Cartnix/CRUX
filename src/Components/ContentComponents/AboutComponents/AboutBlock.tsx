import { motion } from "framer-motion";
import ButtonUI from "../../UI/Button";
import GlassBadge from "../../UI/GlassBadge";

export default function AppAbout()
{
    return(
        <section aria-labelledby="About_us" className="text-center mb-5 w-full p-6 text-amber-50 flex items-center flex-col relative bg-[radial-gradient(circle_at_center,rgba(81,47,235,0.3),transparent_20%)]">
            <GlassBadge text="Who We Are" id="About_us"/>
            <motion.h2 viewport={{once: true, amount: 0.5}} initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 1}} className="text-center mb-8" >We are CRUX, we help crypto founders and projects automate their operations and optimize workflows using AI-driven solutions.</motion.h2>
            <ButtonUI text="Use for free" className="self-end"/>
        </section>
    )
}