import React from "react";

export const TestimonialSection = () => {
  return (
    <div>
      <section className="py-12 overflow-hidden md:py-20 lg:py-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <blockquote className="mt-10">
            <svg
              width="59"
              height="44"
              viewBox="0 0 59 44"
              className="ml-12 mb-6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.9065 31.1595C25.9065 23.7977 21.2266 19.3463 15.2096 19.3463C13.3711 19.3463 11.8669 19.6887 10.5297 20.2023C10.5297 14.2101 15.5439 9.58756 22.7309 8.2179V0C9.35977 1.71207 0 12.8405 0 27.2218C0 37.4942 5.68272 44 13.5382 44C20.8924 44 25.9065 38.6926 25.9065 31.1595ZM59 31.1595C59 23.7977 54.153 19.3463 48.136 19.3463C46.2974 19.3463 44.7932 19.6887 43.4561 20.3735C43.4561 14.2101 48.6374 9.58756 55.8244 8.2179V0C42.4533 1.71207 33.0935 12.8405 33.0935 27.2218C33.0935 37.4942 38.7762 44 46.6317 44C53.9858 44 59 38.6926 59 31.1595Z"
                fill="#31B099"
              />
            </svg>

            <div className="max-w-4xl mx-auto font-bold text-center text-4xl leading-[150%] text-[#1B2632]">
              <p>
                <span className="text-[#31B099]">
                  “Love the simplicity if the service.
                </span>{" "}
                A digital wallet platform that provides complete financial
                solutions to meet your entire financial tasks “
              </p>
            </div>
            <footer className="mt-8 border-t-2 border-gray-100">
              <div className="flex justify-between items-center  mt-4">
                <div className="md:flex md:items-center md:justify-center">
                  <div className="md:flex-shrink-0">
                    <img
                      className="mx-auto h-12 w-12 rounded-full"
                      src="https://i.ibb.co/7YLFdqK/Rectangle-22769.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-start flex flex-col">
                      <div className="text-base font-bold text-gray-900">
                        Makima Ackerman
                      </div>

                      <div className="text-sm font-medium text-gray-500">
                        Founder of Devil Hunter Corp
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex">
                  <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2  rounded-full mr-2 border-gray-300 text-[#ACB5BB]">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.75 19.5L8.25 12l7.5-7.5"
                        />
                      </svg>
                    </span>
                  </span>
                  <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2  rounded-full mr-2 border-gray-300 text-[#ACB5BB]">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </section>
    </div>
  );
};
