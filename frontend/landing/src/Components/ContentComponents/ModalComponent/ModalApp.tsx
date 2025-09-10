import { AnimatePresence, motion } from "framer-motion";
import { useModal } from "../../../context/ModalContext";
import ButtonUI from "../../UI/Button";
import ReactDOM from "react-dom"

export default function ModalApp() {
    const { isOpen, closeModal } = useModal()

    return ReactDOM.createPortal(
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[rgba(0,0,0,0.8)] backdrop-blur-sm" onClick={closeModal}>
                    <motion.div initial={{ y: 200 }} animate={{ y: 0 }} exit={{y: 800, transition:{ duration: .3, ease: "easeInOut"} }} className="w-4/5 max-w-[320px] h-[400px] bg-[rgb(15,13,13)] text-center text-amber-50 rounded-xl p-4" onClick={(e) => e.stopPropagation()}>
                        <h2>Registration</h2>
                        <div className="flex flex-col gap-6 mt-7">
                            <input type="text" placeholder="Enter your name" className="bg-[rgba(255,255,255,0.09)] p-2 rounded-md" />
                            <input type="password" placeholder="Enter password" className="bg-[rgba(255,255,255,0.09)] p-2 rounded-md" />
                            <div className="flex gap-2 justify-center">
                                <ButtonUI text="Confirm" />
                                <ButtonUI text="Close" clickFunc={closeModal} />
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,

        document.body
    )
}