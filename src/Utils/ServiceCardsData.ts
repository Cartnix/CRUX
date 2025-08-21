export interface ServiceDataI{
    title: string,
    content: "FirstCardS" | "SecondCardS" | "ThirdCardS"
    description: string,
}


export const ServiceCardsData: ServiceDataI[] = [
    {
        title: "Business Chatbot",
        content: "FirstCardS",
        description: "Enhance customer interactions by automating responses with intelligent chatbots, providing seamless service.",
    },
    {
        title: "Content Creation",
        content: "SecondCardS",
        description: "Effortlessly generate high-quality, engaging content tailored to your audience using AI-powered tools.",
    },
    {
        title: "AI Consulting",
        content: "ThirdCardS",
        description: "Work with our experts to develop personalized AI strategies that streamline operations and deliver impactful results.",
    },
]