import React from "react";
import AuthLeftScreen from "../common/AuthLeftScreen";
import LoginInputControls from "./LoginInputControls";

const Login = () => {
  return (
    <>
      <div className="min-h-full h-screen flex">
        <AuthLeftScreen />
        <div className="flex-1 w-1/2 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <h2 className="mt-6 text-4xl font-bold text-[#1C2634] leading-[48px]  tracking-normal">
                Let’s login to your Finlab account first
              </h2>
            </div>

            <LoginInputControls />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
