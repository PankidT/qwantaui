import { React, useState, useEffect } from "react";
import Gmap from "../../component/Gmap";
import { useForm } from "react-hook-form";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

import { BsArrowBarLeft } from "react-icons/bs";
import ExperC from "../../component/ExperForm/ExperC";

function Experiment() {
  const [open, setOpen] = useState(true);

  // const { register, handleSubmit, getValues} = useForm({
  //     defaultValues: {
  //         link_level: '',
  //         hop_select: '',
  //         num_hop: '',
  //         location_1: '',
  //         location_2: ''
  //     }
  // });
  // const onSubmit = (data) => {
  //     console.log(data)
  // }

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
  const [image, setImage] = useState("");

  //   const [submit, setSubmit] = useState(false);
  //   const [valid, setValid] = useState(false);

  //   const handleSubmit = (e) => {
  //     e.preventDefault(); // prevent browser from refresh
  //     if (
  //       value.link_level &&
  //       value.hop_select &&
  //       value.num_hop &&
  //       value.location_1 &&
  //       value.location_2
  //     ) {
  //       setValid(true);
  //     }
  //     setSubmit(true);
  //   };

  useEffect(() => {
    if (value.link_level == "0G") {
      setImage("/mulogo.png");
    } else if (value.link_level == "1G") {
      setImage("/1G.png");
    } else if (value.link_level == "2G-NCX") {
      setImage("/2G-NCX.png");
    } else if (value.link_level == "HG-DE") {
      setImage("/HG-NCX.png");
    } else if (value.link_level == "HG-E2E-PE") {
      setImage("HG-E2E-PE");
    }
  }, [value.link_level]);

  return (
    <div className="flex w-full h-100 bg-gray1 text-[#d1d5dc]">
      <Gmap />
      <div className="flex z-50">
        <div
          className={`${
            open ? "w-5/12" : "w-5"
          } absolute right-0 duration-300 h-screen bg-gray1 overflow-hidden flex flex-col`}
        >
          <div
            className={`absolute cursor-pointer bottom-1/2 duration-300 ${
              open && "rotate-[180deg]"
            }`}
            onClick={() => setOpen(!open)}
          >
            <BsArrowBarLeft />
          </div>
          {open ? <ExperC /> : null}
        </div>
      </div>
    </div>
  );
}

export default Experiment;

{
}
