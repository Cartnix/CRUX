import type React from "react"
import CardImage from "./GrayCardImage"

type CardItemProps = {
    title: string,
    description: string,
    children?: React.ReactNode,
    type: "Default" | "Progress" | "Service"
}

export default function GrayCard({ title, description, children}: CardItemProps) {
    return (
        <div className="rounded-xl flex flex-col gap-2 bg-[rgba(255,255,255,0.06)] text-start max-w-[330px] p-3 border border-[rgba(255,255,255,0.12)] border-solid">
            <CardImage>
                {children}
            </CardImage>
            <div>
                <h4 style={{ fontSize: 'var(--font-size-card-title)' }} className="mb-2">{title}</h4>
                <p style={{ fontSize: 'var(--font-size-card-content)' }}>{description}</p>
            </div>
        </div>
    )
}