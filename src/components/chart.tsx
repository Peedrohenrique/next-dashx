'use client'

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { DollarSign } from "lucide-react"

const chartData = [
    { month: "Janeiro", online: 186, presencial: 80 },
    { month: "Fevereiro", online: 305, presencial: 200 },
    { month: "Março", online: 237, presencial: 120 },
    { month: "Abril", online: 73, presencial: 190 },
    { month: "Maio", online: 209, presencial: 130 },
    { month: "Junho", online: 214, presencial: 140 },
]

const chartConfig = {
    online: {
        label: "Online",
        color: "#2563eb",
    },
    presencial: {
        label: "Presencial",
        color: "#60a5fa",
    },
} satisfies ChartConfig

export function ChartOverview() {


    return (
        <Card className="w-full md:w-1/2 md:max-w-[600px]">
            <CardHeader>
                <div className="flex items-center justify-center">
                    <CardTitle className="text-lg sm:text-xl text-gray-800">Overview vendas</CardTitle>
                    <DollarSign className="ml-auto w-4 h-4" />
                </div>
            </CardHeader>
              <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                <BarChart accessibilityLayer data={chartData} >
                    <CartesianGrid vertical={false} />
                    <XAxis dataKey="month" tickLine={false} tickMargin={10} axisLine={false} tickFormatter={value => value.slice(0, 3)} />
                        <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="online" fill="var(--color-online)" radius={4} />
                    <Bar dataKey="presencial" fill="var(--color-presencial)" radius={4} />
                </BarChart>
            </ChartContainer> 
        </Card>
    );
}
