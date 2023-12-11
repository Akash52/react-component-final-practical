import React from "react";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

import { ChevronDownIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import BrandLogo from "./common/BrandLogo";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const HeroSection = () => {
  return (
    <div>
      <Popover className="relative bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link to="/" className="flex items-center cursor-pointer">
                <BrandLogo />
              </Link>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#0F5D66]">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden md:flex space-x-10">
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-gray-900" : "text-gray-500",
                        "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200"
                      )}
                    >
                      <span>Solution</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-gray-600" : "text-gray-400",
                          "ml-2 h-5 w-5 group-hover:text-gray-500"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>
                  </>
                )}
              </Popover>

              <a
                href="#"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Product
              </a>
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-gray-900" : "text-gray-500",
                        "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200"
                      )}
                    >
                      <span>Resources</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-gray-600" : "text-gray-400",
                          "ml-2 h-5 w-5 group-hover:text-gray-500"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>
                  </>
                )}
              </Popover>
              <a
                href="#"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Support
              </a>
            </Popover.Group>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <Link
                to="/register"
                className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Create Account
              </Link>
              <Link
                to="/login"
                className="ml-3 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-2xl shadow-sm text-base font-medium text-white bg-[#31B099] hover:bg-[#31B080]"
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <BrandLogo />
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#0F5D66]">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="py-6 px-5 space-y-6">
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  <a
                    href="#"
                    className="text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    Solution
                  </a>

                  <a
                    href="#"
                    className="text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    Product
                  </a>
                  <a
                    href="#"
                    className="text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    Resources
                  </a>
                  <a
                    href="#"
                    className="text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    Support
                  </a>
                </div>
                <div className="flex  items-center">
                  <Link
                    to="/register"
                    className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 block"
                  >
                    Create Account
                  </Link>
                  <Link
                    to="/login"
                    className="ml-6 whitespace-nowrap items-center justify-center px-4 py-2 border border-transparent rounded-2xl shadow-sm text-base font-medium text-white bg-[#31B099] hover:bg-[#31B080] block"
                  >
                    Sign in
                  </Link>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>

      <main>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8   max-w-7xl w-full container mx-auto h-full bg-white">
          <div className="px-4 sm:px-8 xl:pr-16 text-left plus-jakra-font-normal justify-center py-28">
            <p className="bg-gray-100 w-fit py-2 mb-4 rounded-2xl pr-3 flex justify-center items-center font-normal">
              <span className="py-1 px-2 rounded-2xl bg-[#31B099] text-white mr-2 flex justify-center items-center w-fit font-semibold">
                News!
              </span>
              Update New features for active users ✨
            </p>
            <h1 className="text-4xl tracking-tight font-extrabold text-[#1B2632] sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block line-height">
                Manages all your financial task using finlab
              </span>{" "}
            </h1>
            <p className="mt-3 text-base text-[#6C7278]  md:mt-5 md:max-w-2xl font-normal leading-relaxed">
              We helping you to manage your business cashflow. we provide the
              best features that will help you to manage financial task easily
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-2xl text-white bg-[#31B099] hover:bg-[#31B070] md:py-4 md:text-lg md:px-10"
                >
                  <p className="flex justify-center items-center">
                    Get started
                    <span>
                      <svg
                        width="24"
                        height="24"
                        className="ml-2"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.4299 5.92993L20.4999 11.9999L14.4299 18.0699"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M3.5 12H20.33"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                  </p>
                </a>
              </div>
              <div className="mt-3 rounded-2xl shadow sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-2xl text-[#1A1C1E]  bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="mt-20 flex justify-between items-center">
              <div>
                <p className="text-5xl font-bold flex justify-center items-center text-[#1A1C1E]">
                  290K
                  <span className="mb-2 text-[#31B099]">+</span>
                </p>
                <span className="text-base font-normal text-[#6C7278]">
                  Downloaded
                </span>
              </div>
              <div>
                <p className="text-5xl font-bold flex justify-center items-center text-[#1A1C1E]">
                  110K
                  <span className="mb-2 text-[#31B099]">+</span>
                </p>
                <span className="text-base font-normal text-[#6C7278]">
                  Active user
                </span>
              </div>
              <div>
                <p className="text-5xl font-bold flex justify-center items-center text-[#1A1C1E]">
                  900K
                  <span className="mb-2 text-[#31B099]">+</span>
                </p>
                <span className="text-base font-normal text-[#6C7278]">
                  Business teams
                </span>
              </div>
            </div>
          </div>
          <div className=" bg-[#0F5D66] h-full w-full">
            <img
              className="w-full  h-full  object-cover"
              src="https://i.ibb.co/gMtVmqh/Microsoft-Teams-image-5.png"
              alt=""
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
