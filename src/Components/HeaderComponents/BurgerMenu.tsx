import { motion } from "framer-motion"

export default function HeaderModal() {
  return (
    <motion.nav 
    initial={{x: "-100%"}}
    animate={{x: 0}}
    exit={{x: "-100%"}}
    transition={{type: "tween", duration: .5, ease: 'easeInOut'}}
    className={`bg-black text-white p-6 w-full h-dvh border-t-2 border-amber-50`}>
      <ul className="flex flex-col gap-4 font-bold">
        <li><a href="#">Process</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Benefits</a></li>
        <li><a href="#">Plans</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </motion.nav>
  )
}
