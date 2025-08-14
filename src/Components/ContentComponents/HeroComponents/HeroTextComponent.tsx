import ButtonUI from "../../UI/Button";

export default function HeroText() {
    return (
        <div className="flex flex-col gap-12 ">
            <h1 className="text-4xl text-center font-medium">Transforming workflows with AI powered automation</h1>
            <p className="text-center">Experience the future of business with intelligent, scalable automation solutions tailored to your needs</p>
            <div className="flex items-center justify-center gap-3.5 mb-15">
                <ButtonUI text="Our Services"/>
                <ButtonUI text="See Plans"/>
            </div>
        </div>
    )
}