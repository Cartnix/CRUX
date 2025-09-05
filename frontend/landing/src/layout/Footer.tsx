import CardLinkedInLogo from "../assets/svg/CardLinkedInLogo";
import CardXIcon from "../assets/svg/CardXIcon";
import GitHubIcon from "../assets/svg/GitHubIcon";
import SvgLogo from "../assets/svg/Logo";

export default function FooterLayer() {
    return (
        <footer className="relative flex flex-col text-amber-50 p-6 overflow-hidden border-t border-t-amber-50" id="Contact">
            <div className="absolute inset-0 transform rotate-145 bg-[linear-gradient(to_bottom,_#000_30%,_rgba(81,47,235,0.3)_50%,_#000_70%)] blur-3xl"></div>

            <div className="relative">
                <div className="flex flex-col">
                    <div className="flex gap-8 items-center mb-5">
                        <SvgLogo />
                        <h3>CRUX</h3>
                    </div>
                    <p className="max-w-[400px]">Your trusted partner in AI solutions, creating smarter systems for smarter businesses — empowering growth and efficiency at every step.</p>
                    <div className="flex gap-3 mt-4">
                        <div className="bg-[rgba(255,255,255,0.36)] rounded-md h-9 w-9 flex items-center justify-center mt-2 ml-2">
                            <CardLinkedInLogo />
                        </div>
                        <div className="bg-[rgba(255,255,255,0.36)] rounded-md h-9 w-9 flex items-center justify-center mt-2 ml-2">
                            <CardXIcon />
                        </div>
                        <div className="bg-[rgba(255,255,255,0.36)] rounded-md h-9 w-9 flex items-center justify-center mt-2 ml-2">
                            <GitHubIcon />
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
}
