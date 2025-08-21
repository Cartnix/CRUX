import useCustomWriter from "../../../hooks/useCustomWriter"

export default function SecondProgressCardP() {
    const typed = useCustomWriter({ text: "CRUX is a modern SaaS platform for managing cryptocurrency assets. Track real-time prices, monitor your portfolio, and receive instant alerts on market changes — all in one sleek and secure interface. Perfect for traders and investors who want full control without the clutter.", speed: 100 })

    return (
        <div className="w-full break-words">
            <p>{typed}</p>
        </div>
    )
}