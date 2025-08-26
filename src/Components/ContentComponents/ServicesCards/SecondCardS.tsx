import { motion } from "framer-motion";
import CodeLines from "../../../assets/Custom/CodeLines";
import CardEthernetIcon from "../../../assets/svg/CardEthernetIcon";
import CardLinkedInLogo from "../../../assets/svg/CardLinkedInLogo";
import CardSearchIcon from "../../../assets/svg/CardSearchIcon";
import CardXIcon from "../../../assets/svg/CardXIcon";

export default function SecondCardS()
{
    return(
        <div className="flex flex-col">
            <div className="p-2 bg-[rgba(255,255,255,.12)] flex flex-1 gap-2 items-center mb-4">
                <div className="h-6 w-6 flex items-center justify-center bg-[rgba(255,255,255,0.25)] rounded-md">
                    <CardSearchIcon/>
                </div>
                <span>Generate Content...</span>
            </div>
            <div className="flex justify-between">
                <motion.div initial={{x: -20, opacity: 0}} viewport={{once: true, amount: .5}} whileInView={{x: 0, opacity: 1}} transition={{delay: 1.5, duration: 1}} className="flex flex-col overflow-hidden bg-[rgba(255,255,255,.12)] w-[30%] rounded-md relative">
                    <div className="bg-[rgba(255,255,255,0.36)] rounded-md h-6 w-6 flex items-center justify-center mt-2 ml-2">
                        <CardLinkedInLogo/>
                    </div>
                    <CodeLines/>
                </motion.div>
                <motion.div initial={{y: 20, opacity: 0}} viewport={{once: true, amount: .5}} whileInView={{y: 0, opacity: 1}} transition={{delay: .5, duration: 1}} className="flex flex-col overflow-hidden bg-[rgba(255,255,255,.12)] w-[30%] rounded-md relative">
                    <div className="bg-[rgba(255,255,255,0.36)] rounded-md h-6 w-6 flex items-center justify-center mt-2 ml-2">
                        <CardXIcon/>
                    </div>
                    <CodeLines/>
                </motion.div>
                <motion.div initial={{x: 20, opacity: 0}} viewport={{once: true, amount: .5}} whileInView={{x: 0, opacity: 1}} transition={{delay: 1.5, duration: 1}} className="flex flex-col overflow-hidden bg-[rgba(255,255,255,.12)] w-[30%] rounded-md relative">
                    <div className="bg-[rgba(255,255,255,0.36)] rounded-md h-6 w-6 flex items-center justify-center mt-2 ml-2">
                        <CardEthernetIcon/>
                    </div>
                    <CodeLines/>
                </motion.div>
            </div>
        </div>
    )
}