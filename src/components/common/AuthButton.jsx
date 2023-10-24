import React from "react";

export const AuthButton = ({ label }) => {
  return (
    <>
      <button
        type="submit"
        className="w-full flex font-semibold justify-center py-2 px-4 border border-transparent rounded-xl shadow-sm text-sm leading-7 tracking-wide text-white bg-[#31B099] hover:bg-[#34bba2] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        {label}
      </button>
    </>
  );
};
