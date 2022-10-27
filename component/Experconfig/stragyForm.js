import { React, useState, useEffect } from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";
import Switch from "../switch";

export function StragyForm({ value, setValue }) {
  const [isOn, setIsOn] = useState(false);

  const handleChangeLinklevel = (e) => {
    setValue({ ...value, link_level: e.target.value });
  };
  const handleChangeHop = (e) => {
    setValue({ ...value, hop_select: e.target.value });
  };
  const handleChangeLocation1 = (e) => {
    setValue({ ...value, location_1: e.target.value });
  };
  const handleChangeLocation2 = (e) => {
    setValue({ ...value, location_2: e.target.value });
  };

  const [image, setImage] = useState("");

  useEffect(() => {
    if (value.link_level == "0G") {
      setImage("/0G.png");
    } else if (value.link_level == "1G") {
      setImage("/1GSSDP.png");
    } else if (value.link_level == "2G-NCX") {
      setImage("/2GNCX.png");
    } else if (value.link_level == "HG-DE") {
      setImage("/HGDE.png");
    } else if (value.link_level == "HG-E2E-PE") {
      setImage("/HGPE.png");
    }
  }, [value.link_level]);

  const [inputFields, setInputFields] = useState([
    { id: uuidv4(), location: "" },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("InputFields", inputFields);
  };

  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setInputFields(newInputFields);
  };

  const handleAddFields = () => {
    setInputFields([...inputFields, { id: uuidv4(), location: "" }]);
  };

  const handleRemoveFields = (id) => {
    const values = [...inputFields];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setInputFields(values);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  return (
    <form action="" className="w-full">
      <div className="flex space-x-2">
        <h1 className="text-[#fff] text-4xl">Configure your </h1>
        <h1 className="text-[#ad73f1] text-4xl">Qwanta network</h1>
      </div>
      <p className="mt-5 mb-2 text-gray-400">Select Protocol</p>
      <select
        className="w-full h-8 text-black bg-white"
        onChange={handleChangeLinklevel}
        value={value.link_level}
      >
        <option value="" disabled selected>
          Select your protocol
        </option>
        <option value="0G">0 Generation (0G)</option>
        <option value="1G">1G-Ss-Dp (1G)</option>
        <option value="2G-NCX">2G-NonLocal-CNOT (2G-NCX)</option>
        <option value="HG-DE">1-2G-Directed-Encoded, (HG-DE)</option>
        <option value="HG-E2E-PE">HG-E2E-PurifiedEncoded</option>
        <option value="Design own protocol">Design own protocol</option>
      </select>
      {value.link_level ? (
        <img src={image} className="h-[14rem] rounded-xl mt-5" />
      ) : null}

      <p className="mt-5 mb-2 text-gray-400">
        Assign location of two end nodes
      </p>
      <div className="flex flex-row justify-between">
        <input
          type="text"
          placeholder="station 1"
          className="w-[45%] rounded-sm h-8 text-black"
          onChange={handleChangeLocation1}
          value={value.location_1}
        />
        <input
          type="text"
          placeholder="station 2"
          className="w-[45%] rounded-sm h-8 text-black"
          onChange={handleChangeLocation2}
          value={value.location_2}
        />
      </div>

      <div className="mt-6 flex flex-row">
        <Switch isOn={isOn} onClick={() => setIsOn(!isOn)} />
        <p className="ml-5 text-xl text-gray-400">
          Set equal link between repeaters
        </p>
      </div>

      {!isOn ? (
        <div>
          <p className="mt-5 mb-2 text-gray-400">Assign your repeater(s)</p>
          {inputFields.map((place, index) => (
            <div key={index} className="flex flex-row">
              <input
                type="text"
                value={inputFields.location}
                className="w-3/4 h-8 rounded-sm mb-1"
                placeholder="repeater location"
                onChange={(e) => handleChangeInput(index, event)}
              />
              <AiOutlinePlusCircle
                className="ml-2 text-3xl"
                onClick={handleAddFields}
              />
              <AiOutlineMinusCircle
                className="ml-2 text-3xl"
                onClick={handleRemoveFields}
              />
            </div>
          ))}
        </div>
      ) : (
        <div>
          <p className="mt-5 mb-2 text-gray-400">Select number of hops</p>
          <select
            className="w-full h-8 text-black bg-white"
            onChange={handleChangeHop}
            value={value.hop_select}
          >
            <option value="" disabled selected>
              2^n hops
            </option>
            <option value="2">2 hops, 3 nodes</option>
            <option value="4">4 hops, 5 nodes</option>
            <option value="8">8 hops, 9 nodes</option>
            <option value="16">16 hops, 17 nodes</option>
          </select>
        </div>
      )}

      {/* {useEffect(() => {
        console.log(value);
      })} */}
    </form>
  );
}
