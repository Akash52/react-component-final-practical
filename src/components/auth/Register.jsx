import React from "react";
import AuthLeftScreen from "../common/AuthLeftScreen";
import RegisterInputControls from "./RegisterInputControls";

const Register = () => {
  return (
    <div className="min-h-full h-screen flex">
      <AuthLeftScreen />
      <div className="flex-1 w-1/2 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96 ">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 mb-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>

            <h2 className="mt-6 text-4xl font-bold text-[#1C2634] leading-[48px]  tracking-normal">
              Let’s get started with creating account
            </h2>
          </div>

          <RegisterInputControls />
        </div>
      </div>
    </div>
  );
};

export default Register;
