import { HeaderApp } from "@/widgets/header";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <HeaderApp/>
        <main className="bg-[#141414]">{children}</main>
      </body>
    </html>
  );
}
