import React from "react";

export const Pagination = ({page,setPage,totalPages}) => {
  return (
    <div className="py-6 px-4 flex justify-center gap-6">
      <button onClick={()=>setPage(prev=>prev-1)} disabled ={page == 1} className="cursor-pointer bg-gray-800 py-2 px-6 rounded-lg font-bold text-slate-300">
        {"<"}
      </button>
      <button className="font-bold">{page}</button>
      <button onClick={()=>setPage(prev=>prev+1)} disabled={page == totalPages}  className="cursor-pointer bg-gray-800 py-2 px-6 rounded-lg font-bold text-slate-300">
        {">"}
      </button>
    </div>
  );
};
