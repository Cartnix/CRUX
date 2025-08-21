import CodeLines from "../../../assets/Custom/CodeLines";
import SvgArrow from "../../../assets/svg/CardTargetArrow";
import CardBars from "../../../assets/Custom/Bars";

export default function FirstProgressCardP() {
    return (
        <div className="grid gap-2">
            <div className="bg-[rgba(255,255,255,.12)] rounded-md p-1 col-start-1 flex items-center justify-center">
                <CardBars />
            </div>
            <div className="bg-[rgba(255,255,255,.12)] rounded-md p-1 col-start-1">
                <CodeLines />
            </div>

            <div className="p-1 col-start-2 row-span-2 row-start-1 row-end-3 bg-[rgba(255,255,255,.12)] rounded-md flex justify-center items-center ">
                <SvgArrow />
            </div>
        </div>
    )
}