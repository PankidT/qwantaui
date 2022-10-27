import React from "react";
import { motion } from "framer-motion";

export default function Switch({ isOn, ...props }) {
  return (
    <div
      className={`w-[50px] h-[30px] rounded-[100px] p-[5px] flex cursor-pointer ${
        isOn ? "bg-[#22cc88] justify-end" : "bg-[#dddddd] justify-start"
      }`}
      {...props}
    >
      <div className="w-[20px] h-[20px] bg-[#ffffff] rounded-[200px] shadow" />
    </div>
  );
}
