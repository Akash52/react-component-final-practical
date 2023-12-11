import React from "react";
import { products } from "../data";

const ProductScreen = () => {
  return (
    <>
      <div className="relative max-w-2xl mx-auto py-16 px-4 sm:px-6 lg:max-w-7xl lg:py-20 lg:px-8 -mb-4 plus-jakra-font-normal">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-5xl sm:leading-10 sm:tracking-tight lg:text-6xl text-center">
            Culture of financial discipline
          </h1>
          <p className="mt-6 max-w-2xl text-base text-center text-gray-500">
            finlab is adaptable to meet the financial processing requirements of
            global companies and support with multiple local bank channels and
            digital wallets.
          </p>
        </div>
      </div>
      <section className="relative mb-8">
        <div className="max-w-2xl mx-auto px-4 space-y-12 sm:px-6 lg:max-w-7xl lg:space-y-0 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
          {products.map((tier) => (
            <div
              key={tier.title}
              className="relative p-8 bg-white border-2 border-[#DCE4E8] rounded-3xl shadow-sm flex flex-col"
            >
              <div className="flex-1">
                <p className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-3xl font-extrabold tracking-tight">
                    {tier.title}
                  </span>
                </p>
                <p className="mt-6 text-gray-500">{tier.description}</p>
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

export default ProductScreen;
