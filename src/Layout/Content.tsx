import AppAbout from "../Components/ContentComponents/AboutComponents/AboutBlock";
import AppHero from "../Components/ContentComponents/HeroComponents/HeroContent";
import ContentTemplate from "../Components/ContentComponents/GeneralContentComponents/ContentTemplate";
import CardWrapper from "../Components/ContentComponents/GeneralContentComponents/CardsWrapper";
import { ProgressCardsData } from "../Utils/ProgressCardsData";
import { ServiceCardsData } from "../Utils/ServiceCardsData";
import TalkComponent from "../Components/ContentComponents/TalkComponent/TalkComponent";

export default function ContentLayer()
{
    return (
        <main>
            <AppHero />
            <AppAbout />
            <ContentTemplate 
            textGlass="Process" 
            title="Your path to excellence" 
            desc="A simple, effective approach to deliver excellence.">
                <CardWrapper cards={ProgressCardsData} type="Progress"/>
            </ContentTemplate>
            <ContentTemplate
            textGlass="Services"
            title="Innovative services for growth"
            desc="Tailored solutions to streamline, innovate, and grow.">
                <CardWrapper cards={ServiceCardsData} type="Service"/>
            </ContentTemplate>
            <TalkComponent/>
        </main>
    )
}