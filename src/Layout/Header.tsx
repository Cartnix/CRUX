import { BurgerButton } from "../assets/Custom/BurgerMenuIcon";
import SvgLogo from "../assets/svg/Logo";
import { useEffect, useState } from "react";
import HeaderModal from "../Components/HeaderComponents/BurgerMenu"
import { AnimatePresence, motion } from "framer-motion"
import useMediaQuery from "../hooks/useMediQuery";
import useScrollPosition from "../hooks/useScrollPosition";


export default function HeaderLayer() {

    const [open, setOpen] = useState(false)
    const isMobile = useMediaQuery('(max-width: 768px)')
    const scrollY = useScrollPosition()

    useEffect(() => {
        if (open) {
            document.body.classList.add("overflow-hidden")
        } else {
            document.body.classList.remove("overflow-hidden")
        }
    }, [open])

    return (
        <>
            {isMobile ? (
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
            ) : (
                <motion.header
                    initial={{ width: "70%" }}
                    animate={{ width: scrollY > 100 ? "500px" : "70%" }}
                    transition={{ duration: 0.8, ease: "easeInOut", type: "tween" }}
                    className="gap-12 fixed top-5 left-1/2 transform -translate-x-1/2 h-[70px] z-50 bg-white/10 backdrop-blur-md shadow-lg flex justify-center p-4 rounded-4xl items-center border border-white/20"
                >
                    <SvgLogo height={28} width={28} />
                    <nav>
                        <ul className="flex gap-9 text-amber-50">
                            <li><a href="#Process">Process</a></li>
                            <li><a href="#Services">Services</a></li>
                            <li><a href="#Demo">Demo</a></li>
                            <li><a href="#Plans">Plans</a></li>
                            <li><a href="#Contact">Contact</a></li>
                        </ul>
                    </nav>
                </motion.header>
            )}
        </>
    )
}
