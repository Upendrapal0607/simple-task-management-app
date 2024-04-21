import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { RgisterRequest } from "../Redux/UserReducer/Action";
import { Button, useToast } from "@chakra-ui/react";
export const SignIn = () => {
  const toast = useToast();
  const [visible, setVisible] = useState(false);
  const [confirvisible, setConfirmVisible] = useState(false);
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  const data = useSelector((state) => state.UserReducer);
  const dispatch = useDispatch();
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
  });

  const handleChangeDetails = async (e) => {
    const { name, value } = e.target;

    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleNavigate = async (e) => {
    e.preventDefault();
    if (pass !== userDetails.password) {
      toast({
        title: "Account created.",
        description: "We've created your account for you.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });

      return;
    }

    if (
      userDetails.name &&
      userDetails.gender &&
      userDetails.password &&
      userDetails.email
    ) {
      dispatch(RgisterRequest(userDetails))
        .then((res) => {
          toast({
            title:
              res.message == "new user resistered"
                ? "Account created."
                : "You are already registered",
            description:
              res.message == "new user resistered"
                ? "We've created your account for you."
                : res.message,
            status: "success",
            duration: 5000,
            isClosable: true,
          });
          navigate("/login");
        })
        .catch((err) => {
          toast({
            title: "Account created Failed.",
            description: "There is an error.",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        });
    } else {
      toast({
        title: "",
        description: "Please fill all the fields.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <div className="min-h-[80vh] bg-gray-100 flex flex-col justify-center py-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Register for management your task.
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6 text-left" onSubmit={handleNavigate}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <div className="mt-1">
                <input
                  value={userDetails.name}
                  onChange={handleChangeDetails}
                  id="name"
                  autoComplete="name"
                  name="name"
                  type="text"
                  required
                  className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  value={userDetails.email}
                  onChange={handleChangeDetails}
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1 flex justify-center items-center">
                <input
                  onChange={(e) => setPass(e.target.value)}
                  id="password"
                  value={pass}
                  type={visible ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {visible ? (
                  <FaRegEye
                    className="ml-[-30px] cursor-pointer"
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <FaRegEyeSlash
                    className="ml-[-30px] cursor-pointer"
                    onClick={() => setVisible(true)}
                  />
                )}
              </div>
              <div className="text-green-600">
                password lenth should be more than 8 contain number characters
                and special characters
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <div className="mt-1 flex justify-center items-center">
                <input
                  value={userDetails.password}
                  onChange={handleChangeDetails}
                  name="password"
                  type={confirvisible ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {confirvisible ? (
                  <FaRegEye
                    className="ml-[-30px] cursor-pointer"
                    onClick={() => setConfirmVisible(false)}
                  />
                ) : (
                  <FaRegEyeSlash
                    className="ml-[-30px] cursor-pointer"
                    onClick={() => setConfirmVisible(true)}
                  />
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Gender
              </label>
              <div className="mt-1">
                <select
                  onChange={handleChangeDetails}
                  value={userDetails.gender}
                  name="gender"
                  className="block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div>
              {data?.isLoading ? (
                <Button
                  isLoading
                  w={"100%"}
                  loadingText="Sign in..."
                  colorScheme="teal"
                  variant="outline"
                >
                  Submit
                </Button>
              ) : (
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  SIGN UP
                </button>
              )}
            </div>
          </form>
          <div>
            <p className="mt-6 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className=" cursor-pointer font-medium text-indigo-600 hover:text-indigo-900"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
