import AppAbout from "../Components/ContentComponents/AboutComponents/AboutBlock";
import AppHero from "../Components/ContentComponents/HeroComponents/HeroContent";
import ContentTemplate from "../Components/ContentComponents/GeneralContentComponents/ContentTemplate";
import CardWrapper from "../Components/ContentComponents/GeneralContentComponents/CardsWrapper";
import { ProgressCardsData } from "../Utils/ProgressCardsData";
import { ServiceCardsData } from "../Utils/ServiceCardsData";
import TalkComponent from "../Components/ContentComponents/TalkComponent/TalkComponent";
import ChartApp from "../Components/ContentComponents/ChartComponents/ChartApp";
import ModalApp from "../Components/ContentComponents/ModalComponent/ModalApp";

export default function ContentLayer() {

    return (
        <main>
            <AppHero />
            <AppAbout />
            <ContentTemplate
                id="Process"
                textGlass="Process"
                title="Your path to excellence"
                desc="A simple, effective approach to deliver excellence.">
                <CardWrapper cards={ProgressCardsData} type="Progress" />
            </ContentTemplate>
            <ContentTemplate
                id="Services"
                textGlass="Services"
                title="Innovative services for growth"
                desc="Tailored solutions to streamline, innovate, and grow.">
                <CardWrapper cards={ServiceCardsData} type="Service" />
            </ContentTemplate>
            <ContentTemplate
                id="Demo"
                textGlass="All what you need"
                title="Just feel the difference"
                desc="We help people navigate in crypto processes">
                <ChartApp />
            </ContentTemplate>
            <TalkComponent />
            <ModalApp/>
        </main>
    )
}