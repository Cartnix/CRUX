import { Input } from "@/components/ui/input";

export default function HeaderApp()
{
    return (
        <header className="h-[50px] bg-neutral-900 text-amber-50 flex  justify-center items-center">
            <Input className="max-w-1/8 border-amber-300" placeholder="Search..."/>
        </header>
    )
}