import { motion } from "framer-motion"

type GlassBadgeprops = {
    text: React.ReactNode,
    id?: string,
}

export default function GlassBadge({text, id} : GlassBadgeprops)
{
    return (
        <motion.div initial={{scale: .1}} viewport={{amount: .5, once: true}} whileInView={{scale: 1}} transition={{duration: .5, type: "spring", stiffness: 300, damping: 10}} id={id} className="text-amber-50 text-[14px] p-2.5 backdrop-blur-md bg-[#0D0D0D] border border-white/15 shadow-lg rounded-xl mb-4">
            {text}
        </motion.div>
    )
}
