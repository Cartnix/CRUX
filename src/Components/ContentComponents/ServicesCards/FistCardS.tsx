import CodeLines from "../../../assets/Custom/CodeLines";

export default function FirstCardS() {
    return (
        <div className="flex flex-col gap-9 relative">
            <div className="flex gap-2">
                <div className="h-9 w-9 bg-[rgba(255,255,255,.12)] rounded-md"></div>
                <div className="max-h-[60px] bg-[rgba(255,255,255,.12)] w-full overflow-hidden rounded-md">
                    <CodeLines />
                </div>
            </div>
            <div className="flex gap-2">
                <div className="max-h-[60px] bg-[rgba(255,255,255,.12)] w-full overflow-hidden rounded-md">
                    <CodeLines />
                </div>
                <div className="h-9 w-9 bg-[rgba(255,255,255,.12)] rounded-md"></div>
            </div>
            <div className="flex gap-2">
                <div className="h-9 w-9 bg-[rgba(255,255,255,.12)] rounded-md"></div>
                <div className="max-h-[60px] bg-[rgba(255,255,255,.12)] w-full overflow-hidden rounded-md">
                    <CodeLines />
                </div>
            </div>
        </div>
    )
}