import { motion } from "framer-motion";
import GlassBadge from "../../UI/GlassBadge";

type ContentInterface = {
    id: string,
    textGlass: string,
    title: string,
    desc: string,
    children: React.ReactNode
}

export default function ContentTemplate({textGlass,title, desc, id, children}: ContentInterface) {
    return (
        <section className="text-center mb-5 w-full p-6 text-amber-50 flex items-center flex-col relative" id={id}>
            <GlassBadge text={textGlass} />
            <motion.h2 initial={{opacity: 0, y: 20}} viewport={{once: true, amount: 0.5}} whileInView={{opacity: 1, y: 0}} transition={{duration: 1}}>{title}</motion.h2>
            <motion.p initial={{opacity: 0, y: 20}} viewport={{once: true, amount: 0.5}} whileInView={{opacity: 1, y: 0}} transition={{duration: 1}} style={{fontSize: "var(--font-size-text-m)"}} className="mb-8">{desc}</motion.p>
            {children}
        </section>
    )
}