import CodeLines from "../../../assets/Custom/CodeLines";
import CardEthernetIcon from "../../../assets/svg/CardEthernetIcon";
import CardLinkedInLogo from "../../../assets/svg/CardLinkedInLogo";
import CardSearchIcon from "../../../assets/svg/CardSearchIcon";
import CardXIcon from "../../../assets/svg/CardXIcon";

export default function SecondCardS()
{
    return(
        <div className="flex flex-col">
            <div className="p-2 bg-[rgba(255,255,255,.12)] flex flex-1 gap-2 items-center mb-4">
                <div className="h-6 w-6 flex items-center justify-center bg-[rgba(255,255,255,0.25)] rounded-md">
                    <CardSearchIcon/>
                </div>
                <span>Generate Content...</span>
            </div>
            <div className="flex justify-between">
                <div className="flex flex-col overflow-hidden bg-[rgba(255,255,255,.12)] w-[30%] rounded-md relative">
                    <div className="bg-[rgba(255,255,255,0.36)] rounded-md h-6 w-6 flex items-center justify-center mt-2 ml-2">
                        <CardLinkedInLogo/>
                    </div>
                    <CodeLines/>
                </div>
                <div className="flex flex-col overflow-hidden bg-[rgba(255,255,255,.12)] w-[30%] rounded-md relative">
                    <div className="bg-[rgba(255,255,255,0.36)] rounded-md h-6 w-6 flex items-center justify-center mt-2 ml-2">
                        <CardXIcon/>
                    </div>
                    <CodeLines/>
                </div>
                <div className="flex flex-col overflow-hidden bg-[rgba(255,255,255,.12)] w-[30%] rounded-md relative">
                    <div className="bg-[rgba(255,255,255,0.36)] rounded-md h-6 w-6 flex items-center justify-center mt-2 ml-2">
                        <CardEthernetIcon/>
                    </div>
                    <CodeLines/>
                </div>
            </div>
        </div>
    )
}