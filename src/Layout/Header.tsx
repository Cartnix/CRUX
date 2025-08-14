import { BurgerButton } from "../assets/Custom/BurgerMenuIcon";
import SvgLogo from "../assets/svg/Logo";
import { useEffect, useState } from "react";
import HeaderModal from "../Components/HeaderComponents/BurgerMenu"
import { AnimatePresence } from "framer-motion"


export default function HeaderLayer() {

    const [open, setOpen] = useState(false)

    useEffect(() => {
        if (open) {
            document.body.classList.add("overflow-hidden")
        } else {
            document.body.classList.remove("overflow-hidden")
        }
    }, [open])

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
