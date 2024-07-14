import React from "react";
import Image from "next/image";
import Link from "next/link";

import { fiCenturySemiBold } from "@/utils/fonts";
import {
    FiSearchForm,
    FiSwitcherLang,
    LanguagePicker,
    SearchFormNavbar,
} from "@/ux";

import { getCountryDomains } from "@/lib/fetch-data";

export default async function Navbar() {
    const domains = await getCountryDomains();

    return (
        <div
            className={`${fiCenturySemiBold.className} bg-white w-full flex justify-between items-center py-4 px-10 border-b border-slate-100 z-1`}
        >
            <div className="basis-3/6">
                <Image src="/logo.png" alt="Logo" width="120" height="30" />
            </div>

            <div className="flex basis-3/6 items-center justify-end gap-x-6">
                {/* <div className="hidden sm:block">
                    <label for="icon" className="sr-only">
                        Search
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                            <svg
                                className="flex-shrink-0 size-4 text-gray-500 dark:text-neutral-500"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <circle cx="11" cy="11" r="8" />
                                <path d="m21 21-4.3-4.3" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            id="icon"
                            name="icon"
                            className="py-2 px-4 ps-11 pe-20 block w-64 bg-transparent border-slate-200 rounded-lg text-sm text-gray-300 focus:z-10 focus:border-gray-900 focus:ring-gray-600 placeholder:text-gray-500 dark:border-neutral-700 dark:text-neutral-500 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                            placeholder="Search"
                        />
                    </div>
                </div> */}
                <FiSearchForm />
                <FiSwitcherLang domains={domains} />
            </div>
        </div>
    );
}
