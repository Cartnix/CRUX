import ButtonUI from "../../UI/Button";
import GlassBadge from "../../UI/GlassBadge";

export default function AppAbout()
{
    return(
        <section aria-labelledby="About_us" className="text-center mb-5 w-full p-6 text-amber-50 flex items-center flex-col relative bg-[radial-gradient(circle_at_center,rgba(81,47,235,0.3),transparent_20%)]">
            <GlassBadge text="Who We Are" id="About_us"/>
            <h2 className="text-center mb-8" >We are Radison, we help founders like you to automate their day to day business operations with the help of AI</h2>
            <ButtonUI text="Use for free" className="self-end"/>
        </section>
    )
}