"use client";
import { BLOCK } from "@/lib/const";
import { fetchTheHash } from "@/lib/hashfetch";
import { histroyStore } from "@/store/historyData";
import { useEffect, useState } from "react";
import { GrDocumentText } from "react-icons/gr";
import { LuPickaxe } from "react-icons/lu";

interface BlockProps {
  index: number;
  timeStamp?: number;
  PassedData?: string;
  type: number;
}

const Block = ({ index, PassedData, type }: BlockProps) => {
  const [data, setData] = useState("");
  const [hash, setHash] = useState("");
  const [nonce, setNonce] = useState(0);
  const [time, setTime] = useState("");

  const [typeOfBlock, setTypeOfBlock] = useState(type);
  const [disabled, setDisabled] = useState(false);
  const histor: string[] = histroyStore((state: any) => state.history);
  const updateHistoryHash = histroyStore((state: any) => state.AddHistory);

  useEffect(() => {
    if (PassedData !== undefined) {
      setData(PassedData);
    }
  }, [PassedData]);

  useEffect(() => {
    if (index === 0) {
      setData("Welcome to Blockchain Demo 2.0!");
    }
  }, [index]);

  useEffect(() => {
    setDisabled(false);
    setTypeOfBlock(1);
    fetchTheHash(data, typeOfBlock, index).then((res) => {
      if (typeof res === "string") {
        setHash(res);
      }
    });
  }, [data]);

  const func = () => {
    setDisabled(true);

    fetchTheHash(data, 0, index).then((res) => {
      setHash(res.hash);
      setNonce(res.nonce);
      setTime(res.thetime);
      // handleHistoryDataFromChild(res.hash);
      updateHistoryHash(res.hash);
    });
  };

  return (
    <div className="h-[280px] w-[600px] mn-w-[400px] p-11 border-gray-400 border-1 rounded-lg shadow-[4px_0px_10px_4px_rgba(0,0,0,0.1)] hover:shadow-[4px_0px_20px_8px_rgba(0,0,0,0.2)] transition-shadow duration-150">
      <div className="flex flex-col gap-5">
        <div className="flex rounded-lg shadow-sm">
          <span className="px-4 inline-flex items-center min-w-fit rounded-s-md border border-e-0 border-gray-200 bg-gray-50 text-sm text-gray-500 pointer-events-none">
            DATA
          </span>
          <div className="relative w-full">
            <input
              type="text"
              className="ps-8 py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-e-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              placeholder="Enter data"
              value={data}
              onChange={(e) => setData(e.target.value)}
            />
            <i className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
              <GrDocumentText />
            </i>
          </div>
        </div>
        <div className="flex flex-row items-center gap-4">
          <p style={{ fontSize: 13 }} className="text-sm text-gray-500">
            {BLOCK.prevhash}
          </p>
          {histor.length >= 1 ? (
            <p style={{ fontSize: 11 }}>{histor[index]}</p>
          ) : (
            <p>0</p>
          )}
        </div>
        <div className="flex flex-row items-center gap-4">
          <p className="text-gray-500">{BLOCK.Hash}</p>
          {data === "" ? <p>0</p> : <p style={{ fontSize: 13 }}>{hash}</p>}
        </div>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-baseline gap-4">
            {index === 0 ? (
              <p className="text-2xl">{BLOCK.Genesis}</p>
            ) : (
              <p className="text-2xl">BLOCK #{index}</p>
            )}
            {time !== "" ? (
              <p className="text-gray-500 text-sm">
                on {new Date(time).toLocaleString()}
              </p>
            ) : (
              <p className="text-gray-500 text-sm">{}</p>
            )}
          </div>
          <div className="text-gray-500">
            <div className="flex flex-row items-center gap-2 cursor-pointer">
              <button
                disabled={disabled}
                onClick={() => func()}
                className="flex items-center border-2 border-gray-200 rounded-lg p-2 hover:bg-gray-200 duration-200 hover:shadow-lg hover:text-gray-500"
              >
                Mine
                <LuPickaxe className="ml-2" />
              </button>
            </div>
            <p>Nonce: {nonce}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Block;
