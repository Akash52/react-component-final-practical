import React from "react";

const Input = ({ id, name, label, type, placeholder }) => {
  return (
    <div>
      <label
        htmlFor={label}
        className="block text-xs font-medium text-[#ACB5BB]"
      >
        {label}
      </label>
      <div className="mt-1">
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          className="bg-white block w-full h-14 px-4 py-2 border border-gray-300 rounded-2xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200 sm:text-sm relative"
        />
      </div>
    </div>
  );
};

export default Input;
