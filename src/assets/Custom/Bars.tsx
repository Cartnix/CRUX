import { useEffect, useState } from "react";
import { BarsData } from "../../Utils/BarsData";

export default function CardBars() {
    const [isActiveIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(prev => {
                if (prev < BarsData.length - 1) {
                    return (prev + 1)
                } else {
                    clearInterval(interval)
                    return prev;
                }
            }
            );
        }, 200);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex gap-2 justify-center items-end">
            {BarsData.map((Bar, i) => (
                <div
                    key={Bar.id}
                    style={{
                        height: `${Bar.height}px`,
                        backgroundColor: i === isActiveIndex ? "rgba(81,47,235,.7)" : Bar.color,
                        width: "8px"
                    }}
                ></div>
            ))}
        </div>
    );
}
