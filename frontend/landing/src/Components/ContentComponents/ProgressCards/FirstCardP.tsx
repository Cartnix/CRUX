import CodeLines from "../../../assets/Custom/CodeLines";
import SvgArrow from "../../../assets/svg/CardTargetArrow";
import CardBars from "../../../assets/Custom/Bars";
import { motion } from "framer-motion";

export default function FirstProgressCardP() {
    return (
        <div className="grid gap-2">
            <motion.div viewport={{ once: true, amount: 0.5 }} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{
                ease: "easeOut",
                type: "spring",
                stiffness: 500,
                damping: 10,
                delay: .5,
            }} className="bg-[rgba(255,255,255,.12)] rounded-md p-1 col-start-1 flex items-center justify-center">
                <CardBars />
            </motion.div>
            <motion.div viewport={{ once: true, amount: 0.5 }} initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    ease: "easeOut",
                    type: "spring",
                    stiffness: 500,
                    damping: 10,
                    delay: .5,
                }} className="bg-[rgba(255,255,255,.12)] rounded-md p-1 col-start-1">
                <CodeLines />
            </motion.div>

            <motion.div viewport={{ once: true, amount: 0.5 }} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                transition={{
                    ease: "easeOut",
                    type: "spring",
                    stiffness: 500,
                    delay: .5,
                    damping: 10
                }} className="p-1 col-start-2 row-span-2 row-start-1 row-end-3 bg-[rgba(255,255,255,.12)] rounded-md flex justify-center items-center ">
                <SvgArrow />
            </motion.div>
        </div>
    )
}