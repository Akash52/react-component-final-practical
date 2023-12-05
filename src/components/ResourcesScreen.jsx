import React from "react";
import { resources } from "../data";

const ResourcesScreen = () => {
  return (
    <>
      <div className="relative max-w-2xl mx-auto py-16 px-4 sm:px-6 lg:max-w-7xl lg:py-20 lg:px-8 -mb-4">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-5xl sm:leading-10 sm:tracking-tight lg:text-6xl text-center">
            Let’s find an accountant
          </h1>
        </div>
      </div>
      <section className="relative mb-8">
        <div className="w-full max-w-7xl container mx-auto py-4 -mt-6 mb-4">
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="w-full px-2 lg:px-6">
              <label htmlFor="search" className="sr-only">
                Search projects
              </label>
              <div className="relative text-indigo-200 focus-within:text-gray-400">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    class="h-full w-5 fill-slate-500 transition"
                  >
                    <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
                  </svg>
                </div>
                <input
                  id="search"
                  name="search"
                  className="block w-full pl-10 pr-3 py-2 border border-[#DCE4E8] rounded-md leading-5  bg-opacity-25 text-indigo-100 placeholder-indigo-200 focus:outline-none focus:bg-white focus:ring-0 focus:placeholder-gray-400 focus:text-gray-900 sm:text-sm h-11"
                  placeholder="Input your first name"
                  type="search"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-4 space-y-12 sm:px-6 lg:max-w-7xl lg:space-y-0 gap-6 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
          {resources.map((tier) => (
            <div
              key={tier.title}
              className="relative p-8 bg-white border-2 border-[#DCE4E8] rounded-3xl shadow-sm flex flex-col
             transition duration-300 transform hover:scale-105
             hover:cursor-pointer
             hover:shadow-2xl hover:border-0
            "
            >
              <div className="flex-1">
                <p className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-3xl font-extrabold tracking-tight">
                    {tier.title}
                  </span>
                </p>
                <p className="mt-6 text-gray-500">
                  {tier.description.slice(0, 150)}...
                </p>

                <div className="mt-6 space-y-6">
                  <img
                    className="w-full  h-full object-cover"
                    src="https://i.ibb.co/61fVzQN/Currency-Card.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ResourcesScreen;
