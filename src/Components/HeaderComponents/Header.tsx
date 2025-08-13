import { BurgerButton } from "../../assets/Custom/BurgerMenuIcon";
import SvgLogo from "../../assets/svg/Logo";
import { useState } from "react";
import HeaderModal from "./BurgerMenu"
import { AnimatePresence } from "framer-motion"


export default function HeaderApp() {
    const [open, setOpen] = useState(false)

    return (
        <>
            <header className="flex justify-between bg-black p-6 relative h-[70px]">
                <SvgLogo height={28} width={28} />
                <BurgerButton open={open} setOpen={setOpen} />

            </header>
            <AnimatePresence>
                {
                    open && (
                        <HeaderModal />
                    )
                }
            </AnimatePresence>
        </>
    )
}
