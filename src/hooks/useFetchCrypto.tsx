import { useEffect, useState } from "react"

export interface CryptoDataI {
    prices: [number, number][],
}

export default function useFetchCrypto(id: string) {

    const [data, setData] = useState<{ time: string, price: string, isRaised: boolean, diffValue: number }[] | undefined>(undefined)
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const response = await fetch(
                    `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=30
`
                )
                if (!response.ok) {
                    throw new Error("ошибка сети")
                }
                const json: CryptoDataI = await response.json()
                const dataSet = new Set()
                const ChartData = json.prices.map(([timestamp, price], index) => ({
                    time: `${new Date(timestamp).getFullYear()}-${new Date(timestamp).getMonth() + 1}-${new Date(timestamp).getDate()}`,
                    price: price.toFixed(2),
                    isRaised: index > 0 ? price > json.prices[index - 1][1] : false,
                    diffValue: index > 0 ? Number(Math.abs(json.prices[index - 1][1] - price).toFixed(2)) : 0
                }))
                const filtredData = ChartData.filter((el) => {
                    if (!dataSet.has(el.time)) {
                        dataSet.add(el.time)
                        return true
                    }
                    return false
                })

                setData(filtredData)
            }
            catch (err: any) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        fetchData()

    }, [id])

    return { data, loading, error }
}