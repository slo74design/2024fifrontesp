"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

const FiInputIcon = ({ isLabel, labelTxt, placeholder, inputName }) => {
    return (
        <div className="relative rounded-md shadow-sm">
            {isLabel && (
                <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                >
                    {labelTxt}
                </label>
            )}
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <MagnifyingGlassIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                />
            </div>
            <input
                type="text"
                name={inputName}
                className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder={placeholder}
            />
        </div>
    );
};

export default FiInputIcon;
