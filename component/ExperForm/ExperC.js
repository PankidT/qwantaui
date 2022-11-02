import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { StragyForm } from "./stragyForm";
import { TopologyForm } from "./topologyForm";
import { LossForm } from "./lossForm";

export default function ExperC() {
  // State need to send to firebase
  const [value, setValue] = useState({
    link_level: "",
    hop_select: "",
    num_hop: "",
    location_1: "",
    location_2: "",
    photon_loss: "",
    dep: "",
    gate_error: "",
    coherent: "",
    mea_error: "",
    trajectory: "",
  });

  const experitem = [
    { name: "Stragy configuration", icon: "test1", form: 1 },
    { name: "Topology configuration", icon: "test2", form: 2 },
    { name: "Loss model", icon: "test3", form: 3 },
  ];

  const [selectedTab, setSelectedTab] = useState(experitem[0]);

  return (
    <div className="flex flex-col w-[97%] h-full absolute bg-[#262626] overflow-hidden right-0">
      <nav className="bg-gray1 pt-3 px-3 h-[60px]">
        <ul className="flex w-full -mx-3">
          {experitem.map((item, index) => (
            <motion.li
              key={index}
              className={`text-white list-none cursor-pointer rounded-t-xl p-3 relative bg-[#262626] h-[70px] flex justify-between align-middle flex-1 min-w-0
            `}
              onClick={() => setSelectedTab(item)}
              initial={{ y: 0 }}
              whileHover={{ y: -5 }}
            >
              {item.name}
              {/* {item == selectedTab ? (
                <div className="absolute -bottom-[2px] left-0 right-0 h-[1px] bg-blue-500" />
              ) : null} */}
            </motion.li>
          ))}
        </ul>
      </nav>

      <main className="bg-[#262626] flex justify-left align-middle flex-grow mt-6 ml-5 mr-10">
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={selectedTab ? selectedTab.name : "empty"}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {selectedTab.form === 1 ? (
              <StragyForm value={value} setValue={setValue} />
            ) : selectedTab.form === 2 ? (
              <TopologyForm value={value} setValue={setValue} />
            ) : (
              <LossForm value={value} setValue={setValue} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
