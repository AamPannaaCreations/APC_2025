"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Badge } from "@/components/ui/badge";
import { TrendingDown, TrendingUp } from "lucide-react";
import React from "react";

// Change it to your needs
const animationConfig = {
  glowWidth: 500,
};


const chartData = [
  { period: "Feb 2024", organic: 14000, paid: 18000 },
  { period: "Apr 2024", organic: 26000, paid: 21000 },
  { period: "Jun 2024", organic: 48000, paid: 38000 },
  { period: "Aug 2024", organic: 70000, paid: 50000 },
  { period: "Oct 2024", organic: 98000, paid: 72000 },
  { period: "Dec 2024", organic: 88000, paid: 62000 },

  { period: "Feb 2025", organic: 190000, paid: 145000 },
  { period: "Apr 2025", organic: 270000, paid: 205000 },
  { period: "Jun 2025", organic: 350000, paid: 260000 },
  { period: "Aug 2025", organic: 520000, paid: 400000 },
  { period: "Oct 2025", organic: 690000, paid: 540000 },
  { period: "Dec 2025", organic: 840000, paid: 680000 },

  { period: "Jan 2026", organic: 1020000, paid: 820000 },
];


const chartConfig = {
  desktop: {
    label: "organic",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "paid",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function AnimatedHighlightedAreaChart() {
  const [xAxis, setXAxis] = React.useState<number | null>(null);

  return (
    <Card className="bg-[--card-bg] !shadow-none !border-0">
      <CardHeader className="!p-2">
        <CardTitle>
          Impression Chart
          <Badge
            variant="outline"
            className="text-green-500 bg-green-500/10 border-none ml-2"
          >
            <TrendingUp className="h-4 w-4" />
            <span>+4.63%</span>
          </Badge>
        </CardTitle>
        <CardDescription>
          Showing total impressions for the year 2024-2026.
        </CardDescription>
      </CardHeader>
      
      <CardContent className="!p-1">
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            onMouseMove={(e) => setXAxis(e.chartX as number)}
            onMouseLeave={() => setXAxis(null)}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="period"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient
                id="animated-highlighted-mask-grad"
                x1="0"
                y1="0"
                x2="1"
                y2="0"
              >
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="white" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
              <linearGradient
                id="animated-highlighted-grad-desktop"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.4}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0}
                />
              </linearGradient>
              <linearGradient
                id="animated-highlighted-grad-mobile"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.4}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0}
                />
              </linearGradient>
              {xAxis && (
                <mask id="animated-highlighted-mask">
                  <rect
                    x={xAxis - animationConfig.glowWidth / 2}
                    y={0}
                    width={animationConfig.glowWidth}
                    height="100%"
                    fill="url(#animated-highlighted-mask-grad)"
                  />
                </mask>
              )}
            </defs>
            <Area
              dataKey="organic"
              type="natural"
              fill={"url(#animated-highlighted-grad-mobile)"}
              fillOpacity={0.4}
              stroke="var(--color-mobile)"
              stackId="a"
              strokeWidth={0.8}
              mask="url(#animated-highlighted-mask)"
            />
            <Area
              dataKey="paid"
              type="natural"
              fill={"url(#animated-highlighted-grad-desktop)"}
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
              stackId="a"
              strokeWidth={0.8}
              mask="url(#animated-highlighted-mask)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
