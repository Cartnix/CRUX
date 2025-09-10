export interface ProgressCardDataI{
    title: string,
    content: "FirstCardP" | "SecondCardP" | "ThirdCardP" | "FirstCardS"
    description: string,
    [key: string]: any,
}

export const ProgressCardsData: ProgressCardDataI[] = [
    {
        title: "Discovery & Analysis",
        content: "FirstCardP",
        description: "We dive deep into your needs, exploring ideas and defining strategies for long-term success.",
    },

    {
        title: "Development & Test",
        content: "SecondCardP" ,
        description: "We craft tailored solutions for your goals and rigorously test them for top-notch reliability.",
    },

    {
        title: "Launch & Maintain",
        content: "ThirdCardP",
        description: "We deploy your solution seamlessly and ensure its continued performance with ongoing care.",
    },
]