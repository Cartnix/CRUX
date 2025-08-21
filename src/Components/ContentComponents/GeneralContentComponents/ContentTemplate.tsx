import GlassBadge from "../../UI/GlassBadge";

type ContentInterface = {
    textGlass: string,
    title: string,
    desc: string,
    children: React.ReactNode
}

export default function ContentTemplate({textGlass,title, desc, children}: ContentInterface) {
    return (
        <section className="text-center mb-5 w-full p-6 text-amber-50 flex items-center flex-col relative">
            <GlassBadge text={textGlass} />
            <h2>{title}</h2>
            <p style={{fontSize: "var(--font-size-text-m)"}} className="mb-8">{desc}</p>
            {children}
        </section>
    )
}