import FooterApp from "../04_widgets/footer/footerUI";
import HeaderApp from "../04_widgets/header/headerUI";

export default function AppLayout({children}: {children: React.ReactNode})
{
    return(
        <>
            <HeaderApp/>
            <main>{children}</main>
            <FooterApp/>
        </>
    )
}