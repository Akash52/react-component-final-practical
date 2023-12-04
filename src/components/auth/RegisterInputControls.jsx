import React from "react";
import { Link } from "react-router-dom";
import Eye from "../../assets/svg/Eye";
import Input from "../common/Input";
import { AuthButton } from "../common/AuthButton";

const RegisterInputControls = () => {
  return (
    <>
      <div className="mt-8 relative">
        <div className="mt-6">
          <form action="#" method="POST" className="space-y-6">
            <Input
              label="Your Name"
              id="yname"
              name="yname"
              type="text"
              placeholder="yourname"
            />
            <div className="space-y-1">
              <Input
                label="Email"
                id="email"
                name="email"
                type="email"
                placeholder="yourname@gmail.com"
              />
            </div>
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
            <div className="space-y-1 relative">
              <Input
                label="Repeat Password"
                id="rpassword"
                name="rpassword"
                type="password"
                placeholder="*******"
              />
              <Eye />
            </div>
            <div>
              <AuthButton label="Rigister" />
              <div className="flex justify-center items-center manrope-font tracking-wide">
                <p className="font-semibold text-[#6C7278]  text-sm leading-6 mt-6">
                  {" "}
                  Already have an account?{" "}
                  <Link to="/login">
                    <span className="text-[#31B099]">Login Here</span>
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
        <div className="flex whitespace-nowrap items-center justify-center text-sm text-[#6C7278)] font-normal mt-6 leading-6  plus-jakra-font-normal absolute -bottom-24 left-0 right-0">
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

export default RegisterInputControls;
