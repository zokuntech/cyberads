"use client";
import React, { PureComponent, useState } from "react";
import { PieChart, Pie, Sector, ResponsiveContainer } from "recharts";

const renderActiveShape = (props: any) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, payload } =
    props;

  return (
    <g>
      <text
        x={cx}
        y={cy}
        dy={8}
        textAnchor="middle"
        fill="white"
        className="text-3xl text-white bg-red-100"
      >
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        endAngle={endAngle}
        fill="green"
      />
    </g>
  );
};

type props = {
  data: {
    name: string;
    value: number;
  }[];
};
export default function Chart({ data }: props) {
  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = (_: null, index: number) => {
    setActiveIndex(index);
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={50} height={50}>
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={50}
          outerRadius={60}
          startAngle={90}
          endAngle={-270}
          fill="white"
          dataKey="value"
          onMouseEnter={onPieEnter}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
