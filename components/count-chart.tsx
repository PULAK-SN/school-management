"use client";

import { studentData as data } from "@/constants";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
import Image from "next/image";

const CountChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* title */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Students</h1>
        <Image src={"/moreDark.png"} alt="more" height={20} width={20} />
      </div>

      {/* chart */}
      <div className="relative w-full h-[75%]">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src={"/maleFemale.png"}
          alt="male female"
          height={50}
          width={50}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      {/* bottom */}
      <div className="">
        <div className="flex justify-center gap-16">
          <div className="flex flex-col gap-1">
            <div className="h-5 w-5 rounded-full bg-sky" />
            <h1 className="font-bold">1,485</h1>
            <h2 className="text-xs text-gray-400">Boys (55%)</h2>
          </div>
          <div className="flex flex-col gap-1">
            <div className="h-5 w-5 rounded-full bg-yellow" />
            <h1 className="font-bold">1,485</h1>
            <h2 className="text-xs text-gray-400">Girls (45%)</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
