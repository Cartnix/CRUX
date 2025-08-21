import ButtonUI from "../../UI/Button";
import ContentTemplate from "../GeneralContentComponents/ContentTemplate";

export default function TalkComponent()
{
    return(
        <ContentTemplate
        textGlass="CRUX"
        title="Let’s talk about your next big move"
        desc="Hop on a call with us to see how our services can accelerate your growth.">
            <ButtonUI text="Schedule a quick call"/>
            <span className="mt-2">It's free</span>
        </ContentTemplate>
    )
}