import { easeInOut, motion } from "framer-motion";
import ButtonUI from "../../UI/Button";
import { useModal } from "../../../context/ModalContext";

export default function HeroText() {
    const { openModal } = useModal()
    return (
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="flex flex-col gap-12 ">
            <h1 className="text-center font-medium">Transforming workflows with AI powered automation</h1>
            <p className="text-center text-[var(--font-size-text-m)]">Experience the future of business with intelligent, scalable automation solutions tailored to your needs</p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: easeInOut, delay: 1 }} className="flex items-center justify-center gap-3.5 mb-[3.75rem]">
                <ButtonUI text="Our Services" clickFunc={openModal} />
                <ButtonUI text="See Plans" clickFunc={openModal} />
            </motion.div>
        </motion.div>
    )
}