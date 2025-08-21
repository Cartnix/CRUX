import GrayCard from "../../UI/GrayCard";
import type { ProgressCardDataI } from "../../../Utils/ProgressCardsData";
import FirstCardP from "../ProgressCards/FirstCardP";
import SecondCardP from "../ProgressCards/SecondCardP";
import ThirdCardP from "../ProgressCards/ThirdCardP";
import FirstCardS from "../ServicesCards/FistCardS";
import type { ServiceDataI } from "../../../Utils/ServiceCardsData";
import SecondCardS from "../ServicesCards/SecondCardS";
import ThirdCardS from "../ServicesCards/ThirdCardS";

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

export default function CardWrapper({ cards, type }: CardWrapperProps) {
    const componentMap = type === "Progress" ? progressMap : serviceMap
    return (
        <div className="flex flex-row flex-wrap justify-center gap-5">
            {cards.map((card, index) => {
                const Component = componentMap[card.content];
                return (
                    <GrayCard key={index} title={card.title} description={card.description} type={type}>
                        {Component ? <Component /> : null}
                    </GrayCard>
                );
            })}
        </div>
    );
}