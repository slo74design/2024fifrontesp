"use client";
import React from "react";
import { QrCode } from "lucide-react";
import { useTranslations } from "next-intl";

const SearchFormNavbar = () => {
    const t = useTranslations("Nav");
    return (
        <form className="flex items-center max-w">
            <label htmlFor="simple-search" className="sr-only">
                Search
            </label>
            <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <QrCode size={21} />
                </div>
                <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-50 border-0 text-slate-700 text-sm rounded-lg focus:ring-slate-200 focus:border-slate-200 ring-slate-200 block w-full ps-10 p-2.5  "
                    placeholder={t("search")}
                    required
                />
            </div>
            <button
                type="submit"
                className="p-3 ms-2 text-sm font-medium text-white bg-mili-p5 rounded-lg"
            >
                <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                </svg>
                <span className="sr-only">Search</span>
            </button>
        </form>
    );
};

export default SearchFormNavbar;
