import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
    { name: 'Jan', value: 0 },
    { name: 'Feb', value: 200 },
    { name: 'Mar', value: 400 },
    { name: 'Apr', value: 800 },
    { name: 'May', value: 1600 }
];

export default function ChartApp() {
    return (
        <ResponsiveContainer width="80%" height={300}>
            <LineChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#512FEB"
                    strokeWidth={3}
                    isAnimationActive={true}
                    animationDuration={2000}
                />
            </LineChart>
        </ResponsiveContainer>
    )
}