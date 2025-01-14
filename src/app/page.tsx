"use client";
import Block from "@/components/Block";
import { useState } from "react";
import { GrDocumentText } from "react-icons/gr";

export default function Home() {
  const [array, setArray] = useState([{ index: 0, type: 1, PassedData: "" }]);
  const [data, setData] = useState("");

  const addBlock = () => {
    setArray([...array, { index: array.length, type: 0, PassedData: data }]);
    setData("");
  };

  return (
    <div className="flex flex-col mx-h-screen w-full justify-center mx-auto items-center gap-11 overflow-y-auto px-4 pt-[10vh] pb-[5vh]">
      {array.map((item, index) => (
        <Block
          key={index}
          index={item.index}
          type={item.type}
          PassedData={item.PassedData}
        />
      ))}

      <div className="flex flex-col w-1/2 justify-center items-center gap-11 pt-10">
        <div className="h-[200px] w-[350px] rounded-lg p-11 flex flex-col items-center justify-between shadow-[4px_0px_10px_4px_rgba(0,0,0,0.1)] hover:shadow-[4px_0px_20px_8px_rgba(0,0,0,0.2)] transition-shadow duration-150">
          <div className="flex shadow-[4px_0px_10px_4px_rgba(0,0,0,0.1)] hover:shadow-[4px_0px_15px_8px_rgba(0,0,0,0.2)] transition-shadow duration-150 rounded-xl">
            <span className="px-4 inline-flex items-center min-w-fit rounded-s-md border border-e-0 border-gray-200 bg-gray-50 text-sm text-gray-500 pointer-events-none">
              DATA
            </span>
            <div className="relative w-full">
              <input
                type="text"
                className="ps-8 py-2 px-3 pe-11 block w-full border-gray-200 rounded-e-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                placeholder="Enter data to hash"
                value={data}
                onChange={(e) => setData(e.target.value)}
              />
              <i className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                <GrDocumentText />
              </i>
            </div>
          </div>
          <div className="relative">
            <button
              onClick={addBlock}
              className="w-[190px] h-12 rounded-full text-white flex justify-center items-center bg-gradient-to-r from-red-600 from-60% to-orange-500 absolute z-50"
            >
              + ADD NEW BLOCK
            </button>
            <div className="w-[190px] h-12 rounded-full text-white flex justify-center items-center bg-gradient-to-r from-red-600 from-60% to-orange-500 ping-animation" />
          </div>
        </div>
      </div>
    </div>
  );
}
