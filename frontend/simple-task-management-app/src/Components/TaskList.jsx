import React, { useEffect, useState } from "react";
import { AddNewTask } from "./AddNewTask";
import { Pagination } from "./Pagination";
import { TaskCard } from "./TaskCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllTask } from "../Redux/TaskReducer/Action";
import { Loader } from "./Loader";

export const TaskList = () => {
  const [page, setPage] = useState(1)
  const [totalPages,setTotalPage] = useState(1)
  const dispatch = useDispatch();
  const { isLoading, data, isError } = useSelector(
    (state) => state.TaskReducer
  );
  const {token} = useSelector((state) => state.UserReducer);
  useEffect(() => {
    dispatch(getAllTask(token,page)).then(res=>{
    
      setTotalPage(res.totalPages)
    });
  }, [page]);

  return (
    <div className="max-w-2lg min-h-[77vh] mx-auto bg-gray-100">
      <AddNewTask />
      {isLoading ? (
        <Loader />
      ) : data.length == 0 ? (
        <div>
          <h1 className="text-center text-3xl font-extrabold text-gray-900">
            No Task Found
          </h1>
        </div>
      ) : (
        <div className="min-w-full divide-y divide-gray-200">
          <div className="bg-gray-100 box-border px-0 sm:px-4 py-6 flex justify-between text-center font-bold">
            <div className=" w-full grid grid-cols-2 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-5 box-border mx-2 text-xs font-medium">
              {data.map((task, index) => (
                  <TaskCard key={task._id} task={task} />
                ))}
            </div>
          </div>
        </div>
      )}

      {data.length !== 0 && <Pagination page = {page} setPage = {setPage} totalPages ={totalPages}/>}
    </div>
  );
};
