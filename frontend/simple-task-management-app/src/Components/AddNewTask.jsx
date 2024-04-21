import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTask, getAllTask } from "../Redux/TaskReducer/Action";
import { useToast } from "@chakra-ui/react";
export const AddNewTask = () => {
  const dispatch = useDispatch();
  const toast = useToast()
  const [taskDetails, setTaskDetails] = useState({
    title: "",
    description: "",
    completed: false,
    dueDate: "",
    privority: "",
  });

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setTaskDetails({ ...taskDetails, [name]: value });
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    
    if (
      taskDetails.title &&
      taskDetails.description &&
      taskDetails.dueDate &&
      taskDetails.privority
    ) {
      dispatch(addNewTask(taskDetails))
        .then((res) => {
          dispatch(getAllTask());
          setTaskDetails({
            title: "",
            description: "",
            completed: false,
            dueDate: "",
            privority: "",
          });
        })
        .catch((err) => console.log({ taskRes: err }));
    }
    else {
      toast(
        {
          title: "Please fill all the fields",
          status: "error",
          duration: 5000,
          isClosable: true,
        }
      )
    }
  };

  return (
    <div className=" bg-gray-100 flex justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-4 w-full sm:w-full max-w-full">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6 " onSubmit={handleAddTask}>
            <div className="text-start w-full sm:flex-row flex-col flex justify-between items-center">
              <div className="w-full sm:w-[45%]">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Title
                </label>
                <div className="mt-1">
                  <input
                    value={taskDetails.title}
                    onChange={handleChange}
                    placeholder="Title"
                    id="title"
                    name="title"
                    type="text"
                    autoComplete="title"
                    required
                    className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="w-full sm:w-[45%]">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                <div className="mt-1">
                  <textarea
                    value={taskDetails.description}
                    onChange={handleChange}
                    placeholder="Description"
                    id="desctiption"
                    name="description"
                    type="text"
                    autoComplete="description"
                    required
                    className="appearance-none block w-[100%] px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>
            <div className=" text-start  sm:flex-row flex-col w-full flex justify-between items-center">
              <div className="w-full sm:w-[45%]">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Task Priority
                </label>
                <div className="mt-1">
                  <select
                    value={taskDetails.privority}
                    onChange={handleChange}
                    name="privority"
                    id="dudate"
                    className="appearance-none block w-[100%] px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="">Select privority</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </div>
              </div>
              <div className="w-full sm:w-[45%]">
                <label className="block text-sm font-medium text-gray-700">
                  Due Date
                </label>
                <div className="mt-1">
                  <input
                    value={taskDetails.dueDate}
                    onChange={handleChange}
                    id="dueDate"
                    name="dueDate"
                    type="Date"
                    min={new Date().toISOString().split("T")[0]}
                    autoComplete="dueDate"
                    required
                    className="appearance-none block w-[100%] px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {"+"} ADD TASK
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
