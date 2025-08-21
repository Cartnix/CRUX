import ButtonUI from "../../UI/Button";

export default function HeroText() {
    return (
        <div className="flex flex-col gap-12 ">
            <h1 className="text-center font-medium">Transforming workflows with AI powered automation</h1>
            <p className="text-center text-[var(--font-size-text-m)]">Experience the future of business with intelligent, scalable automation solutions tailored to your needs</p>
            <div className="flex items-center justify-center gap-3.5 mb-[3.75rem]">
                <ButtonUI text="Our Services"/>
                <ButtonUI text="See Plans"/>
            </div>
        </div>
    )
}