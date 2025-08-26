import GrayCard from "../../UI/GrayCard";
import type { ProgressCardDataI } from "../../../Utils/ProgressCardsData";
import FirstCardP from "../ProgressCards/FirstCardP";
import SecondCardP from "../ProgressCards/SecondCardP";
import ThirdCardP from "../ProgressCards/ThirdCardP";
import FirstCardS from "../ServicesCards/FistCardS";
import type { ServiceDataI } from "../../../Utils/ServiceCardsData";
import SecondCardS from "../ServicesCards/SecondCardS";
import ThirdCardS from "../ServicesCards/ThirdCardS";
import { motion } from "framer-motion";

type CardData = ProgressCardDataI | ServiceDataI;

interface CardWrapperProps {
    cards: CardData[];
    type: "Progress" | "Service";
}

const progressMap: Record<string, React.ComponentType> = {
    FirstCardP,
    SecondCardP,
    ThirdCardP,
};

const serviceMap: Record<string, React.ComponentType> = {
    FirstCardS,
    SecondCardS,
    ThirdCardS,
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        }
    }
};

const cardVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1}
};

export default function CardWrapper({ cards, type }: CardWrapperProps) {
    const componentMap = type === "Progress" ? progressMap : serviceMap
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            viewport={{amount: .5, once: true}}
            whileInView="visible"
            className="flex flex-row flex-wrap justify-center gap-5">
            {cards.map((card, index) => {
                const Component = componentMap[card.content];
                return (
                    <motion.div key={index} variants={cardVariants}>
                        <GrayCard title={card.title} description={card.description} type={type}>
                            {Component ? <Component /> : null}
                        </GrayCard>
                    </motion.div>
                );
            })}
        </motion.div>
    );
}