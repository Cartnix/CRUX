import { motion } from "framer-motion";
import CardEfficiencyIcon from "../../../assets/svg/CardEfficiencyIcon";
import CardRefreshIcon from "../../../assets/svg/CardRefreshIcon";
import CardShieldIcon from "../../../assets/svg/CardShieldIcon";
import CardSpeedIcon from "../../../assets/svg/CardSpeedIcon";

export default function ThirdCardP() {
    return (
        <div className="flex justify-between">
            <div style={{ fontSize: "var(--font-size-body-xss)" }} className="bg-[rgba(255,255,255,.12)] p-4 rounded-md flex justify-start items-start flex-col gap-5 w-[45%]">
                <div className="flex gap-2 items-center">
                    <CardShieldIcon />
                    <span>Security</span>
                </div>
                <motion.div initial={{x: -10}} viewport={{once: true, amount: .5}} whileInView={{x: 0}} transition={{delay: 1, duration: 1, ease: 'easeInOut'}} className="flex gap-2 items-center bg-[rgba(255,255,255,.12)] p-3 rounded-3xl">
                    <CardEfficiencyIcon />
                    <span>Efficiency</span>
                </motion.div>
                <div className="flex gap-2 items-center">
                    <CardSpeedIcon />
                    <span>Speed</span>
                </div>
                <div className="flex gap-2 items-center">
                    <CardShieldIcon />
                    <span>Accuracy</span>
                </div>
            </div>

            <div className="p-1 bg-[rgba(255,255,255,.12)] rounded-md flex justify-center items-center relative flex-col w-1/2">
                <span className="absolute left-2 top-2">Status:</span>

                <div style={{ fontSize: "var(--font-size-card-content)" }} className="flex flex-col gap-1 items-center justify-center w-full">
                    <CardRefreshIcon />
                    <div className="bg-[#000] h-[4px] rounded-3xl w-[70%]"></div>
                    <span>Updating...</span>
                </div>
            </div>
        </div>
    )
}