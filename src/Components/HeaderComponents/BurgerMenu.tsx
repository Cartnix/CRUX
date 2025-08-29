import { motion } from "framer-motion"
import ButtonUI from "../UI/Button"

export default function HeaderMenu() {
  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ type: "tween", duration: .5, ease: 'easeInOut' }}
      className={`bg-black text-white p-6 w-full border-t-2 border-amber-50 absolute z-10 top-[70px] bottom-0 flex flex-col gap-10 `}>
      <nav className="h-[40%]">
        <ul className="flex flex-col justify-around font-bold h-[100%] text-[clamp(1rem, 2vh, 2rem)]">
          <li><a href="#">Process</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Demo</a></li>
          <li><a href="#">Plans</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <ButtonUI text="Get in touch" />
      <div className="flex-1 flex flex-col justify-center items-center gap-1.5 text-center">
        <h2>Created by <span className="text-[#512FEB] font-bold text-3xl">CRUX</span></h2>
        <span className="mb-5" >CRUX — turning visions into digital experiences</span>
        <span>@All right received</span>
      </div>

      <span className="absolute right-2 bottom-2">
          With ❤️ by Cartnix
      </span>
    </motion.div>
  )
}
