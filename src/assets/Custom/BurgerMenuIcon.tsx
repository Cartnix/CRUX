import { motion } from "framer-motion"

export function BurgerButton({open, setOpen} : 
    {open: boolean, setOpen: (val: boolean) => void}
){
  return (
    <button onClick={() => setOpen(!open)} className="flex flex-col justify-between w-6 h-5 z-20">
      <motion.span
        animate={open ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
        className="block h-0.5 w-full bg-white"
      />
      <motion.span
        animate={open ? { opacity: 0 } : { opacity: 1 }}
        className="block h-0.5 w-full bg-white"
      />
      <motion.span
        animate={open ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
        className="block h-0.5 w-full bg-white"
      />
    </button>
  )
}
