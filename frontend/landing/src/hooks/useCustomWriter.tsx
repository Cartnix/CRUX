import { useEffect, useState } from "react";

export type WriterI = {
    text: string,
    speed: number,
}

export default function useCustomWriter({ text, speed }: WriterI) {
    const [typedText, setTypedText] = useState("")

    useEffect(() => {
        const TypeInterval = setInterval(() => {
            if (typedText.length === text.length) {
                clearInterval(TypeInterval)
            } else {
                setTypedText(
                    prev => {
                        if(prev.length === text.length)
                        {
                            clearInterval(TypeInterval)
                            return prev
                        }
                        return prev + text[prev.length]
                    } 
                )
            }
        }, speed)

        return () => clearInterval(TypeInterval)
    }, [text, speed])

    return typedText
}