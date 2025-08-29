import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";
import useFetchCrypto from "../../../hooks/useFetchCrypto";
import ButtonUI from "../../UI/Button";
import { useState } from "react";

export default function ChartApp() {
    const [idValue, setIdValue] = useState("bitcoin")
    const values = useFetchCrypto(idValue)
    return (
        <div className="w-4/5">
            <ResponsiveContainer height={300} style={{ userSelect: "none" }}>
                <LineChart data={values.data || []}>
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip cursor={false}
                        content={({ active, payload, label }) => {
                            if (active && payload && payload.length) {
                                return (
                                    <div style={{ background: '#fff', color: "#000", padding: '10px', border: '1px solid #ccc', borderRadius: 10 }}>
                                        <p className="text-2xl font-bold uppercase">{idValue}</p>
                                        <p><strong>Data:</strong> {label}</p>
                                        {payload.map((p) => (
                                            <div key={p.dataKey}>
                                                <strong>{p.name}:</strong> {`${p.value}$`}
                                                <div style={{ color: p.isRaised ? 'green' : 'red' }}>
                                                    {p.payload.isRaised ? `▲${p.payload.diffValue}$` : `▼${p.payload.diffValue}$`}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                );
                            }
                            return null;
                        }}
                    />
                    <Line
                        type="monotone"
                        dataKey="price"
                        stroke="#512FEB"
                        strokeWidth={2}
                        isAnimationActive={true}
                        animationDuration={1000}
                        fill="#000"
                    />
                    <Legend formatter={() => `Текущая валюта: ${idValue}`} />
                </LineChart>
            </ResponsiveContainer>

            <ul className="flex justify-around mt-5 w-full">
                <li>
                    <ButtonUI text="BTC" clickFunc={() => setIdValue("bitcoin")} />
                </li>
                <li>
                    <ButtonUI text="ETC" clickFunc={() => setIdValue("ethereum")} />
                </li>
                <li>
                    <ButtonUI text="SLN" clickFunc={() => setIdValue("solana")} />
                </li>
            </ul>
        </div>
    )
}