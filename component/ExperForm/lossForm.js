import React, { useEffect, useState } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";

export function PhotonHint() {
  return (
    <div className="rounded-xl p-2 my-2 bg-gray1 w-[95%] py-2">
      photon loss is interpreted as a probability of photon emitting from a
      single photon source and arrive at the detector under value of loss in
      unit of decibel per kilometer (dB/km)
    </div>
  );
}

export function DepHint() {
  return (
    <div className="rounded-xl p-2 my-2 bg-gray1 w-[95%]">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem,
      doloremque!
    </div>
  );
}

export function GateHint() {
  return (
    <div className="rounded-xl p-2 my-2 bg-gray1 w-[95%] py-2">
      In real-world, the devices used to control qubits are likely imperfect, at
      least at the present. Current implementation of qwanta interprets gate
      errors as probabilistic events. The device have probability perform
      imperfectly quantum gate as it applies depolarizing channel to a qubit.
    </div>
  );
}

export function MemHint() {
  return (
    <div className="rounded-xl p-2 my-2 bg-gray1 w-[95%]">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem,
      doloremque!
    </div>
  );
}

export function MeaHint() {
  return (
    <div className="rounded-xl p-2 my-2 bg-gray1 w-[95%]">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem,
      doloremque!
    </div>
  );
}

export function TrajectHint() {
  return (
    <div className="rounded-xl p-2 my-2 bg-gray1 w-[95%]">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem,
      doloremque!
    </div>
  );
}

export function LossForm({ value, setValue }) {
  const handleChangePhotonLoss = (e) => {
    setValue({ ...value, photon_loss: e.target.value });
  };
  const handleChangeDep = (e) => {
    setValue({ ...value, dep: e.target.value });
  };
  const handleChangeGateErr = (e) => {
    setValue({ ...value, gate_error: e.target.value });
  };
  const handleChangeCoherent = (e) => {
    setValue({ ...value, coherent: e.target.value });
  };
  const handleChangeMeaErr = (e) => {
    setValue({ ...value, mea_error: e.target.value });
  };
  const handleChangeTrajectory = (e) => {
    setValue({ ...value, trajectory: e.target.value });
  };

  const [clickPhoton, setClickPhoton] = useState(false);
  const [clickDep, setClickDep] = useState(false);
  const [clickGate, setClickGate] = useState(false);
  const [clickMem, setClickMem] = useState(false);
  const [clickMea, setClickMea] = useState(false);
  const [clickTrajec, setClickTrajec] = useState(false);

  return (
    <form action="" className="bg-[#262626]">
      <p className="mt-5 mb-2 text-gray-400">
        Fill the loss in quantum topology
      </p>
      <div className="flex flex-col">
        <div className="flex">
          <input
            type="text"
            placeholder="Photon loss rate (dB/km)"
            className="rounded-sm h-8 text-black my-2 w-[95%]"
            onChange={handleChangePhotonLoss}
            value={value.photon_loss}
          />
          <div className="w-[5%] h-8 my-2">
            <AiOutlineQuestionCircle
              className="absolute text-[30px] ml-1"
              onClick={() => setClickPhoton(!clickPhoton)}
            />
          </div>
        </div>
        {clickPhoton ? <PhotonHint /> : null}

        <div className="flex">
          <input
            type="text"
            placeholder="Depolarizing rate (%)"
            className="rounded-sm h-8 text-black my-2 w-[95%]"
            onChange={handleChangeDep}
            value={value.dep}
          />
          <div className="w-[5%] h-8 my-2">
            <AiOutlineQuestionCircle
              className="absolute text-[30px] ml-1"
              onClick={() => setClickDep(!clickDep)}
            />
          </div>
        </div>
        {clickDep ? <DepHint /> : null}

        <div className="flex">
          <input
            type="text"
            placeholder="Gate error rate (%)"
            className="rounded-sm h-8 text-black my-2 w-[95%]"
            onChange={handleChangeGateErr}
            value={value.gate_error}
          />
          <div className="w-[5%] h-8 my-2">
            <AiOutlineQuestionCircle
              className="absolute text-[30px] ml-1"
              onClick={() => setClickGate(!clickGate)}
            />
          </div>
        </div>
        {clickGate ? <GateHint /> : null}

        <div className="flex">
          <input
            type="text"
            placeholder="Memory error rate (%)"
            className="rounded-sm h-8 text-black my-2 w-[95%]"
            onChange={handleChangeCoherent}
            value={value.coherent}
          />
          <div className="w-[5%] h-8 my-2">
            <AiOutlineQuestionCircle
              className="absolute text-[30px] ml-1"
              onClick={() => setClickMem(!clickMem)}
            />
          </div>
        </div>
        {clickMem ? <MemHint /> : null}

        <div className="flex">
          <input
            type="text"
            placeholder="Measurement error rate (%)"
            className="rounded-sm h-8 text-black my-2 w-[95%]"
            onChange={handleChangeMeaErr}
            value={value.mea_error}
          />
          <div className="w-[5%] h-8 my-2">
            <AiOutlineQuestionCircle
              className="absolute text-[30px] ml-1"
              onClick={() => setClickMea(!clickMea)}
            />
          </div>
        </div>
        {clickMea ? <MeaHint /> : null}

        <div className="flex">
          <input
            type="text"
            placeholder="Trajectory"
            className="rounded-sm h-8 text-black my-2 w-[95%]"
            onChange={handleChangeTrajectory}
            value={value.trajectory}
          />
          <div className="w-[5%] h-8 my-2">
            <AiOutlineQuestionCircle
              className="absolute text-[30px] ml-1"
              onClick={() => setClickTrajec(!clickTrajec)}
            />
          </div>
        </div>
        {clickTrajec ? <TrajectHint /> : null}
      </div>
    </form>
  );
}
