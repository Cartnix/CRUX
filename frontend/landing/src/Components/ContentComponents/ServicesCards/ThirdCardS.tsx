import { motion } from "framer-motion";
import CardProfileIcon from "../../../assets/svg/CardProfileIcon";

export default function ThirdCardS() {
    return (
        <div className="grid grid-cols-2 grid-rows-2 gap-2 h-full">
            <motion.div viewport={{once: true, amount: .5}} initial={{opacity: 0, x: -20, y: -20}} transition={{delay: 1.2, duration: 1}} whileInView={{y: 0, x: 0, opacity: 1}} className="bg-[rgba(255,255,255,.12)] flex justify-center items-center flex-col gap-2 rounded-md">
                <img src="Voice.png" alt="Voice" />
                <span>AI Developer</span>
            </motion.div>
            <motion.div viewport={{once: true, amount: .5}} initial={{opacity: 0, x: 20, y: -20}} transition={{delay: 1.2, duration: 1}} whileInView={{y: 0, x: 0, opacity: 1}} className="bg-[rgba(255,255,255,.12)] flex justify-center items-center flex-col gap-2 rounded-md">
                <CardProfileIcon />
                <span>Sales Expert</span>
            </motion.div>
            <motion.div viewport={{once: true, amount: .5}} initial={{opacity: 0, x: -20, y: 20}} transition={{delay: 1.2, duration: 1}} whileInView={{y: 0, x: 0, opacity: 1}} className="bg-[rgba(255,255,255,.12)] flex justify-center items-center flex-col gap-2 rounded-md">
                <CardProfileIcon />
                <span>Marketing Expert</span>
            </motion.div>
            <motion.div viewport={{once: true, amount: .5}} initial={{opacity: 0, x: 20, y: 20}} transition={{delay: 1.2, duration: 1}} whileInView={{y: 0, x: 0, opacity: 1}} className="bg-[rgba(255,255,255,.12)] flex justify-center items-center flex-col gap-2 rounded-md">
                <img src="Voice.png" alt="Voice" />
                <span>You</span>
            </motion.div>
        </div>
    )
}