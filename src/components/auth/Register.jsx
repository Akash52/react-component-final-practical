import React from "react";
import { Link } from "react-router-dom";
import Input from "../common/Input";
import { AuthButton } from "../common/AuthButton";
import Eye from "../../assets/svg/Eye";

const Register = () => {
  return (
    <div className="min-h-full h-screen flex">
      <div className="hidden w-1/2 lg:block relative  flex-1  bg-gray-900 opacity-95">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://i.ibb.co/Kj5YwRv/ll.png"
          alt=""
        />
        <div className=" flex justify-center items-center h-screen max-w-2xl mx-auto text-[56px] font-bold leading-[80px] tracking-[1.68px] plus-jakra-font  text-transparent  bg-clip-text bg-gradient-to-r from-[#3BDBBE] to-[#76D1F7] flex-col relative">
          <p className="flex items-center text-left absolute top-0 left-0 bottom-0 -translate-y-48">
            <svg
              width="39"
              height="39"
              viewBox="0 0 39 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.2114 38.4227C29.8215 38.4227 38.4227 29.8215 38.4227 19.2114C38.4227 15.402 37.314 11.8517 35.4017 8.86535C35.2877 8.8761 35.169 8.88153 35.0457 8.88153H21.8239V17.9341H34.0849C35.5947 17.9341 36.464 18.753 36.464 20.2087C36.464 21.7099 35.5947 22.5742 34.0849 22.5742H21.8239V33.5829C21.8239 35.5845 20.8631 36.6762 18.9874 36.6762C17.0659 36.6762 15.9679 35.5845 15.9679 33.5829V7.33485C15.9679 5.33327 17.0659 4.24149 19.0789 4.24149H31.2532C27.9589 1.58818 23.7706 0 19.2114 0C8.60122 0 0 8.60122 0 19.2114C0 29.8215 8.60122 38.4227 19.2114 38.4227Z"
                fill="url(#paint0_linear_65_33765)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_65_33765"
                  x1="14.5999"
                  y1="5.71143"
                  x2="24.0999"
                  y2="40.7114"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#2AAC95" />
                  <stop offset="0.989583" stop-color="#76D1F7" />
                </linearGradient>
              </defs>
            </svg>
            <svg
              width="79"
              height="23"
              className="ml-2"
              viewBox="0 0 79 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.37913 21.9871C3.59455 21.9871 4.21708 21.2756 4.21708 19.9712V12.7973H12.1618C13.14 12.7973 13.7033 12.2341 13.7033 11.2558C13.7033 10.3072 13.14 9.77359 12.1618 9.77359H4.21708V3.87437H12.7843C13.7922 3.87437 14.3258 3.31113 14.3258 2.33287C14.3258 1.38425 13.7922 0.850651 12.7843 0.850651H2.43842C1.13407 0.850651 0.422607 1.56211 0.422607 2.86647V19.9712C0.422607 21.2756 1.13407 21.9871 2.37913 21.9871Z"
                fill="white"
              />
              <path
                d="M18.8484 4.28939C20.2713 4.28939 21.0421 3.57793 21.0421 2.33287C21.0421 1.05816 20.2713 0.376343 18.8484 0.376343C17.4551 0.376343 16.6547 1.05816 16.6547 2.33287C16.6547 3.57793 17.4551 4.28939 18.8484 4.28939ZM18.8484 21.9574C20.0638 21.9574 20.716 21.2163 20.716 19.9416V9.06213C20.716 7.75778 20.0342 7.04632 18.8484 7.04632C17.6626 7.04632 17.0105 7.75778 17.0105 9.06213V19.9416C17.0105 21.2163 17.6626 21.9574 18.8484 21.9574Z"
                fill="white"
              />
              <path
                d="M25.5149 21.9871C26.7303 21.9871 27.3825 21.3052 27.3825 20.0898V13.5977C27.3825 11.3447 28.7758 9.86253 30.9398 9.86253C32.7185 9.86253 33.5485 10.8408 33.5485 13.0938V20.0898C33.5485 21.3052 34.2303 21.9871 35.4161 21.9871C36.6019 21.9871 37.2541 21.3052 37.2541 20.0898V12.9159C37.2541 8.88426 35.594 6.95738 32.1256 6.95738C30.0505 6.95738 28.2718 7.84671 27.2936 9.50679V8.88426C27.2936 7.66885 26.6414 7.01667 25.4853 7.01667C24.3291 7.01667 23.677 7.66885 23.677 8.88426V20.0898C23.677 21.3052 24.3291 21.9871 25.5149 21.9871Z"
                fill="white"
              />
              <path
                d="M45.079 22.0463C45.494 22.0463 45.9387 22.0167 46.3537 21.9574C47.2727 21.8388 47.6284 21.3052 47.6284 20.2973C47.6284 19.1708 47.4802 18.8744 46.917 18.9337C46.6502 18.9633 46.3834 18.993 46.0573 18.993C44.6343 18.993 43.8339 18.1333 43.8339 16.325V2.48109C43.8339 1.26567 43.1521 0.613496 41.9664 0.613496C40.7806 0.613496 40.1284 1.26567 40.1284 2.48109V16.5029C40.1284 20.1491 41.7885 22.0463 45.079 22.0463Z"
                fill="white"
              />
              <path
                d="M53.4783 22.0463C55.5238 22.0463 57.0356 21.0681 57.6878 19.4376V20.0898C57.6878 21.3052 58.3103 21.9871 59.4368 21.9871C60.5337 21.9871 61.1562 21.3052 61.1562 20.0898V12.9752C61.1562 8.85462 59.1404 6.95738 54.9012 6.95738C53.508 6.95738 51.7886 7.25383 49.9803 7.99493C48.1423 8.73604 48.9427 11.5523 50.84 10.6629C52.2925 9.9811 53.6265 9.74395 54.7827 9.74395C56.8281 9.74395 57.6285 10.5443 57.6285 12.5305V13.153H56.591C50.3064 13.153 48.0534 14.2795 48.0534 17.4515C48.0534 20.0602 50.336 22.0463 53.4783 22.0463ZM54.2491 19.4969C52.6186 19.4969 51.67 18.578 51.67 17.2736C51.67 15.7617 52.9151 15.2874 56.6206 15.2874H57.6285V15.9396C57.6285 18.0147 56.1759 19.4969 54.2491 19.4969Z"
                fill="white"
              />
              <path
                d="M72.3877 22.0463C76.1822 22.0463 78.7612 19.1412 78.7612 14.487C78.7612 9.83288 76.2118 6.95738 72.3877 6.95738C70.3422 6.95738 68.5932 7.906 67.7335 9.38822V2.48109C67.7335 1.26567 67.0517 0.613496 65.8659 0.613496C64.6802 0.613496 64.028 1.26567 64.028 2.48109V20.0898C64.028 21.3052 64.6802 21.9871 65.8659 21.9871C67.022 21.9871 67.6742 21.3052 67.6742 20.0898V19.4673C68.5043 21.0681 70.2829 22.0463 72.3877 22.0463ZM71.3501 19.2301C69.1268 19.2301 67.6742 17.6293 67.6742 14.487C67.6742 11.3447 69.1268 9.77359 71.3501 9.77359C73.5438 9.77359 75.026 11.3447 75.026 14.487C75.026 17.6293 73.5438 19.2301 71.3501 19.2301Z"
                fill="white"
              />
            </svg>
          </p>
          <p>
            Manages all your{" "}
            <span className="text-white">
              financial task using our platform
            </span>
          </p>
          <p className="text-sm text-white font-normal mt-6 leading-6  plus-jakra-font-normal">
            The one-stop platform for all financial management of small and
            medium-sized business.
          </p>
        </div>
      </div>
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
                      <Link to="/">
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
        </div>
      </div>
    </div>
  );
};

export default Register;
