import { BLOCK } from "@/lib/const";
import { GrDocumentText } from "react-icons/gr";

const Block = () => {
  return (
    <div className="h-[250px] w-[600px] mn-w-[400px] p-11 border-gray-400 border-1 shadow-lg rounded-lg hover:shadow-2xl duration-150">
      <div className="flex flex-col gap-5">
        <div className="flex rounded-lg shadow-sm ">
          <span className="px-4 inline-flex items-center min-w-fit rounded-s-md border border-e-0 border-gray-200 bg-gray-50 text-sm text-gray-500 pointer-events-none">
            DATA
          </span>
          <div className="relative  w-full ">
            <input
              type="text"
              className="ps-8 py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-e-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
            />
            <i
              className=" absolute inset-y-0 left-0 pl-3 
                    flex items-center 
                    pointer-events-none
                    text-gray-500"
            >
              <GrDocumentText />
            </i>
          </div>
        </div>
        <div className="flex flex-row items-center gap-4">
          <p className="text-sm text-gray-500">{BLOCK.prevhash}</p>
          <p>0</p>
        </div>
        <div className="flex flex-row items-center gap-4">
          <p className="text-sm text-gray-500">{BLOCK.Hash}</p>
          <p>0</p>
        </div>
        <div className="flex flex-row items-center justify-between ">
          <div className="flex flex-row items-baseline gap-4 ">
            <p className="text-2xl ">BLOCK #{Math.floor(Math.random() * 8)}</p>
            <p className=" text-gray-500 text-sm">on {Date.now()}</p>
          </div>
          <div className="text-gray-500">
            <button>Mine</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Block;
