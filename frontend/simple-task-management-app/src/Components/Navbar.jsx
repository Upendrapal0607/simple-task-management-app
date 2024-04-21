import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { LogoutRequest } from "../Redux/UserReducer/Action";
import { useToast } from "@chakra-ui/react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuth } = useSelector((state) => state.UserReducer);
  const dispatch = useDispatch();
  const toast = useToast();
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const handleLogedOut = () => {
    dispatch(LogoutRequest())
      .then((res) => {
        toast({
          title: "Logout",
          description: "logout successful",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((error) => {
        console.log({ error });
      });
  };
  return (
    <nav className="bg-gray-800 sticky top-0">
      <div className="max-w-10xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="w-full flex justify-between">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-white font-semibold text-lg">
                TASK MANEGER
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/task"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  TASK
                </Link>
                {!isAuth ? (
                  <Link
                    to="/login"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    LOGIN
                  </Link>
                ) : (
                  <button
                    onClick={handleLogedOut}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    SIGN OUT
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleNavbar}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <GiHamburgerMenu
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
              />
              <IoMdClose className={`${isOpen ? "block" : "hidden"} h-6 w-6`} />
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${isOpen ? "block" : "hidden"} md:hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {!isAuth ? (
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              LOGIN
            </Link>
          ) : (
            <button
              onClick={handleLogedOut}
              className="text-gray-300 w-full hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              SIGN OUT
            </button>
          )}
          <Link
            to="/task"
            onClick={() => setIsOpen(false)}
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            TASK
          </Link>
        </div>
      </div>
    </nav>
  );
};
