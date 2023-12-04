import React from "react";
import { Link } from "react-router-dom";
import Input from "../common/Input";
import Eye from "../../assets/svg/Eye";
import { AuthButton } from "../common/AuthButton";

const LoginInputControls = () => {
  return (
    <>
      <div className="mt-8 relative">
        <div className="mt-6">
          <form action="#" method="POST" className="space-y-6">
            <Input
              label="Email"
              id="email"
              name="email"
              type="email"
              placeholder="yourname@gmail.com"
            />
            <div className="space-y-1 relative">
              <Input
                label="Password"
                id="password"
                name="password"
                type="password"
                placeholder="*******"
              />
              <Eye />
            </div>
            <div className="flex items-center justify-between manrope-font">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600  border-gray-300 rounded outline-none"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-600 font-semibold tracking-wide"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-[#31B099] hover:text-[#32b89f] tracking-wider"
                >
                  Forgot Password?
                </a>
              </div>
            </div>

            <div>
              <AuthButton label="Login" />
              <div className="flex justify-center items-center manrope-font tracking-wide">
                <p className="font-semibold text-[#6C7278]  text-sm leading-6 mt-6">
                  {" "}
                  Don’t have an account?{" "}
                  <Link to="/register">
                    <span className="text-[#31B099]">Register Here</span>
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
        <div className="flex whitespace-nowrap items-center justify-center text-sm text-[#6C7278)] font-normal mt-10 leading-6  plus-jakra-font-normal absolute -bottom-44 left-0 right-0">
          <p>© 2022 Findash. All rights reserved.</p>
          <p className="flex text-[#31B099] ml-2">
            Term & Condition
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2"
              height="11"
              className="mx-2 mt-2"
              viewBox="0 0 2 11"
              fill="none"
            >
              <path d="M1 0.5V10.5" stroke="#ACB5BB" />
            </svg>
            Privacy & Policy
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginInputControls;
