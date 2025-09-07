import { ReactNode } from "react";
import HeaderApp from "./Header";

export default function AppLayout({children}: {children: ReactNode}) {
    return (
        <div className="flex flex-col min-h-screen bg-black">
            <HeaderApp />      
            <main className="flex-1 p-4">{children}</main>
        </div>
    )
}