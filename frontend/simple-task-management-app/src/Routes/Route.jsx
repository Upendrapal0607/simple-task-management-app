import React from "react";
import { Routes, Route } from "react-router-dom";
import { TaskPage } from "../Pages/TaskPage";
import { Login } from "../Components/Login";
import { SignIn } from "../Components/SignIn";
import { HomePage } from "../Pages/HomePage";
import { useSelector } from "react-redux";

export const AllRoute = () => {
  const Data = useSelector((state) => state.UserReducer);
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/task" element={Data?.isAuth ? <TaskPage /> : <Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
};
