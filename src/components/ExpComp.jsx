import React from "react";

const ExpComp = () => {
  const data = [
    {
      id: 1,
      title: "Saving Money Plans",
      content:
        "Workflow has completely transformed how we interact with customers. We've seen record bookings, higher customer satisfaction, and reduced churn.",
    },
    {
      id: 2,
      title: "Multi-device support access",
      content:
        "Finlab support your needs with quick delivery through various channels, including mobile & dekstop",
    },
    {
      id: 3,
      title: "Hight level Security",
      content:
        "We ensure that the app is used safely and correctly, and that you can manage your own wallet in one place",
    },
  ];

  return (
    <div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 max-w-7xl w-full container mx-auto h-full py-12 mt-4">
        <div className="mx-auto max-w-lg px-4  sm:px-6 lg:p-0 lg:h-full">
          <div className="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-8 lg:aspect-none lg:h-full relative">
            <img
              className="object-cover lg:h-full lg:w-full"
              src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
              alt=""
            />
            <div className="absolute bottom-0 z-20  text-gray-600">
              <img
                className="object-cover hidden lg:block lg:h-full lg:w-full translate-x-8 translate-y-24"
                src="https://i.ibb.co/bdL2bjt/Income-Card.png"
                alt=""
              />
              <img
                className="object-cover hidden lg:block lg:h-full lg:w-full translate-x-10"
                src="https://i.ibb.co/R4WvF9j/Expense-Card.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-start sm:px-0 px-8">
            <p className="bg-[#F4F4F7] text-sm px-4 py-2 rounded-3xl text-[#1B2632]">
              Our best features ✨
            </p>
            <h1 className="text-[#1B2632] text-[56px] not-italic font-bold leading-[120%] tracking-[-1.68px]">
              Let’s see what we can do for you
            </h1>
            <p className="text-[#6C7278] text-lg not-italic font-normal leading-[150%] tracking-[-0.36px] mt-6">
              We have many features that can certainly help you manage finances
              and spend money
            </p>
          </div>
          <div className="bg-white pt-16 px-6 sm:px-0">
            {data.map((item, index) => (
              <div
                key={item.id}
                className={`relative py-8 px-8 rounded-xl shadow-xl overflow-hidden lg:px-12 mb-8 ${
                  index === 0
                    ? "bg-[#31B099] text-white"
                    : "bg-[#F4F4F7] text-[#1A1C1E]"
                }`}
              >
                <div>
                  <h2
                    className={`text-2xl flex items-center ${
                      index === 0 ? "font-bold " : "font-normal"
                    }`}
                  >
                    <span
                      className={`flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full mr-2 ${
                        index === 0
                          ? "border-gray-300"
                          : "border-gray-300 text-[#ACB5BB]"
                      }`}
                    >
                      <span>{item.id}</span>
                    </span>
                    {item.title}
                  </h2>
                  <p
                    className={`font-light text-lg mt-4 ${
                      index === 0 ? "text-white" : "text-[#6C7278]"
                    }`}
                  >
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="py-12 overflow-hidden md:py-20 lg:py-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <blockquote className="mt-10">
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

                <div>
                  <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2  rounded-full mr-2 border-gray-300 text-[#ACB5BB]">
                    <span>1</span>
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

export default ExpComp;
