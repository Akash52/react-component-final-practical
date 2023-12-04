import React from "react";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  CalendarIcon,
  MenuIcon,
  ShieldCheckIcon,
  SupportIcon,
  XIcon,
  BookmarkAltIcon,
} from "@heroicons/react/outline";

import { ChevronDownIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

const resources = [
  {
    name: "Help Center",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "#",
    icon: SupportIcon,
  },
  {
    name: "Guides",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "#",
    icon: BookmarkAltIcon,
  },
  {
    name: "Events",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "#",
    icon: CalendarIcon,
  },
  {
    name: "Security",
    description: "Understand how we take your privacy seriously.",
    href: "#",
    icon: ShieldCheckIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const HeroSection = () => {
  return (
    <div className="relative bg-gray-50 ">
      <Popover className="relative bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link to="/" className="flex items-center cursor-pointer">
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
                  width="64"
                  height="18"
                  className="ml-2"
                  viewBox="0 0 64 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.3066 17.7034C3.28828 17.7034 3.7911 17.1288 3.7911 16.0753V10.2809H10.208C10.9981 10.2809 11.4531 9.82598 11.4531 9.03584C11.4531 8.26964 10.9981 7.83866 10.208 7.83866H3.7911V3.07388H10.7108C11.5249 3.07388 11.9559 2.61895 11.9559 1.82881C11.9559 1.06262 11.5249 0.631632 10.7108 0.631632H2.35448C1.30096 0.631632 0.726318 1.20628 0.726318 2.2598V16.0753C0.726318 17.1288 1.30096 17.7034 2.3066 17.7034Z"
                    fill="#1E2836"
                  />
                  <path
                    d="M15.6088 3.40909C16.7581 3.40909 17.3806 2.83444 17.3806 1.82881C17.3806 0.799238 16.7581 0.248535 15.6088 0.248535C14.4834 0.248535 13.8369 0.799238 13.8369 1.82881C13.8369 2.83444 14.4834 3.40909 15.6088 3.40909ZM15.6088 17.6795C16.5905 17.6795 17.1172 17.0809 17.1172 16.0513V7.26401C17.1172 6.21049 16.5665 5.63585 15.6088 5.63585C14.651 5.63585 14.1243 6.21049 14.1243 7.26401V16.0513C14.1243 17.0809 14.651 17.6795 15.6088 17.6795Z"
                    fill="#1E2836"
                  />
                  <path
                    d="M20.9933 17.7034C21.975 17.7034 22.5017 17.1527 22.5017 16.171V10.9274C22.5017 9.10767 23.6271 7.91049 25.3749 7.91049C26.8116 7.91049 27.482 8.70063 27.482 10.5203V16.171C27.482 17.1527 28.0327 17.7034 28.9904 17.7034C29.9482 17.7034 30.4749 17.1527 30.4749 16.171V10.3767C30.4749 7.12035 29.1341 5.56401 26.3327 5.56401C24.6566 5.56401 23.22 6.28232 22.4299 7.62316V7.12035C22.4299 6.13866 21.9031 5.6119 20.9693 5.6119C20.0355 5.6119 19.5088 6.13866 19.5088 7.12035V16.171C19.5088 17.1527 20.0355 17.7034 20.9933 17.7034Z"
                    fill="#1E2836"
                  />
                  <path
                    d="M36.7951 17.7513C37.1303 17.7513 37.4895 17.7274 37.8247 17.6795C38.5669 17.5837 38.8543 17.1527 38.8543 16.3386C38.8543 15.4288 38.7345 15.1893 38.2796 15.2372C38.0641 15.2612 37.8486 15.2851 37.5853 15.2851C36.436 15.2851 35.7895 14.5908 35.7895 13.1302V1.94853C35.7895 0.966843 35.2388 0.440083 34.281 0.440083C33.3233 0.440083 32.7965 0.966843 32.7965 1.94853V13.2739C32.7965 16.2189 34.1374 17.7513 36.7951 17.7513Z"
                    fill="#1E2836"
                  />
                  <path
                    d="M43.5792 17.7513C45.2313 17.7513 46.4524 16.9612 46.9792 15.6443V16.171C46.9792 17.1527 47.482 17.7034 48.3919 17.7034C49.2778 17.7034 49.7806 17.1527 49.7806 16.171V10.4246C49.7806 7.09641 48.1524 5.56401 44.7285 5.56401C43.6031 5.56401 42.2144 5.80345 40.7539 6.40204C39.2693 7.00063 39.9158 9.27527 41.4482 8.55696C42.6215 8.00626 43.6989 7.81471 44.6327 7.81471C46.2848 7.81471 46.9313 8.46119 46.9313 10.0654V10.5682H46.0933C41.0172 10.5682 39.1975 11.4781 39.1975 14.0401C39.1975 16.1471 41.0412 17.7513 43.5792 17.7513ZM44.2017 15.6922C42.8848 15.6922 42.1186 14.9499 42.1186 13.8964C42.1186 12.6753 43.1243 12.2922 46.1172 12.2922H46.9313V12.8189C46.9313 14.495 45.7581 15.6922 44.2017 15.6922Z"
                    fill="#1E2836"
                  />
                  <path
                    d="M58.8522 17.7513C61.917 17.7513 64.0001 15.4048 64.0001 11.6457C64.0001 7.88654 61.9409 5.56401 58.8522 5.56401C57.2001 5.56401 55.7874 6.33021 55.0931 7.52739V1.94853C55.0931 0.966843 54.5424 0.440083 53.5846 0.440083C52.6269 0.440083 52.1001 0.966843 52.1001 1.94853V16.171C52.1001 17.1527 52.6269 17.7034 53.5846 17.7034C54.5184 17.7034 55.0452 17.1527 55.0452 16.171V15.6682C55.7156 16.9612 57.1522 17.7513 58.8522 17.7513ZM58.0142 15.4767C56.2184 15.4767 55.0452 14.1837 55.0452 11.6457C55.0452 9.10767 56.2184 7.83866 58.0142 7.83866C59.786 7.83866 60.9832 9.10767 60.9832 11.6457C60.9832 14.1837 59.786 15.4767 58.0142 15.4767Z"
                    fill="#1E2836"
                  />
                </svg>
              </Link>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
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
                Product
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
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                      alt="Workflow"
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">{/* Mobile Nav */}</nav>
                </div>
              </div>
              <div className="py-6 px-5 space-y-6">
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  <a
                    href="#"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Pricing
                  </a>

                  <a
                    href="#"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Docs
                  </a>
                  {resources.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div>
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Sign up
                  </a>
                  <p className="mt-6 text-center text-base font-medium text-gray-500">
                    Existing customer?
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-500"
                    >
                      Sign in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>

      <main className="lg:relative  py-8">
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16 text-left">
            <p className="bg-gray-100 w-fit py-2 mb-4 rounded-2xl pr-3 flex justify-center items-center font-normal">
              <span className="py-1 px-2 rounded-2xl bg-[#31B099] text-white mr-2 flex justify-center items-center w-fit font-semibold">
                News!
              </span>
              Update New features for active users ✨
            </p>
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">
                Manages all your financial task using finlab
              </span>{" "}
            </h1>
            <p className="mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              We helping you to manage your business cashflow. we provide the
              best features that will help you to manage financial task easily
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start ">
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
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full bg-[#0F5D66]">
          <img
            className="absolute inset-0 w-full  h-full object-cover"
            src="https://i.ibb.co/gMtVmqh/Microsoft-Teams-image-5.png"
            alt=""
          />
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
