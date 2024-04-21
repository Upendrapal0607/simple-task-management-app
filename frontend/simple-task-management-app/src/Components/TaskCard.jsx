import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  Button,
  useDisclosure
} from '@chakra-ui/react'
import { HiOutlineUsers } from "react-icons/hi";
import { IoMdAdd,IoMdClose } from "react-icons/io";

import { useDispatch, useSelector } from "react-redux";
import {
  DeleteTask,
  getAllTask,
  updateTask,
} from "../Redux/TaskReducer/Action";

export const TaskCard = ({ task }) => {
  const [chechEdit, setCheckEdit] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const dispatch = useDispatch();
  const cancelRef = React.useRef()
  const [userMail,setUserMail] = useState("");
  const [isAddUse,setIsAddUser] = useState(false);
  const [taskDetails, setTaskDetails] = useState({
    title: task.title,
    description: task.description,
  });
  const handleChange = async (e) => {
    const { name, value } = e.target;
    setTaskDetails({ ...taskDetails, [name]: value });
  };

  const HandleEdit = (e) => {
    e.preventDefault();
    dispatch(updateTask(task._id, taskDetails))
      .then((res) => {
        dispatch(getAllTask());
        setCheckEdit(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = () => {
    dispatch(DeleteTask(task._id))
      .then((res) => {
        onClose();
        dispatch(getAllTask());
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleUpdate = () => {
    dispatch(updateTask(task._id, { completed: !task?.completed }))
      .then((res) => {
        dispatch(getAllTask());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return chechEdit ? (
    <div className="w-full px-4 py-2 rounded-lg shadow-md text-left gap-2 flex flex-col bg-slate-400">
      
      <form className="space-y-6" onSubmit={HandleEdit}>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <div className="mt-1">
            <input
              onChange={handleChange}
              value={taskDetails.title}
              name="title"
              type="text"
              required
              className="appearance-none block w-full px-4 py-1 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <div>
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
              name="description"
              type="text"
              required
              className="appearance-none block w-full px-4 py-1 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <div>
          <div className="flex sm:flex-row flex-col gap-2">
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-700"
            >
              EDIT
            </button>
            <button
              onClick={() => setCheckEdit(false)}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700"
            >
              CANCEL
            </button>
          </div>
        </div>
      </form>
    </div>
  ): (
    <div className="text-sm w-full px-4 py-4 rounded-lg shadow-md text-left gap-2 flex flex-col bg-white">
      <h5 className="text-sm font-bold mb-2">{task.title}</h5>
      <p className="text-gray-700">{task.description}</p>
      <p>
        <span className="text-gray-700">End Date :</span>
        {task.dueDate}
      </p>

      <div className="flex-col sm:flex-row flex justify-start items-start gap-2 mt-2">
        {task.completed ? (
          <button
            onClick={handleUpdate}
            className="flex justify-center py-1 px-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Complete
          </button>
        ) : (
          <button
            onClick={handleUpdate}
            className="flex justify-center py-1 px-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
          >
            Pending
          </button>
        )}
        <button >
        <>
        <button
          onClick={onOpen}
         className="flex justify-center py-1 px-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
       >
      Delete
       </button>
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize='lg' fontWeight='bold'>
               
              </AlertDialogHeader>
  
              <AlertDialogBody>
                Are you sure? You want to delete this task.
              </AlertDialogBody>
  
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                 NO
                </Button>
                <Button colorScheme='red' onClick={handleDelete} ml={3}>
                  YES
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
        </button>
      </div>

{ isAddUse&&<div className="flex justify-center items-center gap-2">
 <input
            name="title"
              type="email"
              placeholder="Enter mail"
              value={userMail}
              onChange={e=>setUserMail(e.target.value)}
              required
              className="appearance-none block w-full px-4 py-1 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <button className="flex gap-2">
              <IoMdAdd />
              <IoMdClose onClick={()=>setIsAddUser(false)}/>
            </button>

 </div>}
      <div className="flex gap-2 sm:gap-6 items-center">
       
      <div>
        <div className="flex justify-center items-center cursor-pointer" onClick={()=>setIsAddUser(true)}>
        <HiOutlineUsers className="font-semibold text-base text-green-900"/>
        <p className="font-semibold text-base text-green-900">1</p>

      <p className={task.privority=="High"?"text-red-700":task.privority=="Low"?"text-purple-400":"text-emerald-400"}>
        {task.privority}
        </p>
        </div>
      </div>
      <p
        onClick={() => setCheckEdit(true)}
        className="hover:underline cursor-pointer font-medium text-indigo-500 hover:text-indigo-600"
      >
        Edit
      </p>
      <p
        onClick={() => setCheckEdit(true)}
        className="hover:underline cursor-pointer font-medium text-indigo-500 hover:text-indigo-600"
      >

      </p>
      </div>
   
    </div>
  );
};
