import { GrDocumentText } from "react-icons/gr";

const NewData = () => {
  return (
    <div className="h-[200px] w-[350px] shadow-xl drop-shadow-xl hover:shadow-2xl duration-200 rounded-lg p-11 flex flex-col items-center justify-between">
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
                        text-gray-500
                        "
          >
            <GrDocumentText />
          </i>
        </div>
      </div>
      <div className=" w-[190px] h-12 rounded-full text-white flex justify-center items-center bg-gradient-to-r from-red-600 from-60% to-orange-500  ">
        <button className="">+ ADD NEW BLOCK</button>
      </div>
    </div>
  );
};

export default NewData;
