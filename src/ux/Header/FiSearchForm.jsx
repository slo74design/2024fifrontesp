"use client";
import React, { useState } from "react";
import { searchActions } from "@/actions/header-actions";
import { useLocale, useTranslations } from "next-intl";

import { Button, Dropdown, Modal } from "flowbite-react";
import { useRouter } from "next/navigation";

const FiSearchForm = () => {
    const t = useTranslations("UI");
    const locale = useLocale();
    const router = useRouter();
    const [results, setResults] = useState([]);
    const [query, setQuery] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        router.push(`/${locale}/search?query=${encodeURIComponent(query)}`);
        // router.push(`/${locale}/search`);
    };

    // const onSubmit = async (e) => {
    //     e.preventDefault();
    //     console.log(e);
    //     router.push(`/?query=${encodeURIComponent(query)}`);

    //     setResults([]);
    //     const resp = await searchActions(e.target[0].value);
    //     console.log(resp);

    //     if (resp.length > 0) {
    //         setResults(resp);
    //     }
    // };

    return (
        // <div className="flex flex-col gap-y-2">
        //     <form
        //         onSubmit={onSubmit}
        //         action=""
        //         className="flex items-center max-w"
        //     >
        //         <label htmlFor="simple-search" className="sr-only">
        //             Search
        //         </label>
        //         <div className="relative w-full">
        //             <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        //                 <QrCode size={21} />
        //             </div>
        //             <input
        //                 type="text"
        //                 id="simple-search"
        //                 className="bg-gray-50 border-0 text-slate-700 text-sm rounded-lg focus:ring-slate-200 focus:border-slate-200 ring-slate-200 block w-full ps-10 p-2.5  "
        //                 placeholder={t("search")}
        //                 required
        //             />
        //         </div>
        //         <button
        //             type="submit"
        //             className="p-3 ms-2 text-sm font-medium bg-rose-600 text-white bg-mili-p5 rounded-lg"
        //         >
        //             <svg
        //                 className="w-4 h-4"
        //                 aria-hidden="true"
        //                 xmlns="http://www.w3.org/2000/svg"
        //                 fill="none"
        //                 viewBox="0 0 20 20"
        //             >
        //                 <path
        //                     stroke="currentColor"
        //                     strokeLinecap="round"
        //                     strokeLinejoin="round"
        //                     strokeWidth="2"
        //                     d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
        //                 />
        //             </svg>
        //             <span className="sr-only">Search</span>
        //         </button>
        //     </form>
        //     {isOpen && (
        //         <div className="flex flex-col z-50 bg-slate-200 h-48">
        //             {results.length > 0 &&
        //                 results.map((item, index) => (
        //                     <div key={index}>{item.databaseId}</div>
        //                 ))}
        //         </div>
        //     )}
        // </div>

        <form onSubmit={handleSubmit} className="max-w-xl w-1/3 ml-auto">
            <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
                Search
            </label>
            <div className="flex flex-row justify-between items-center">
                <input
                    type="search"
                    id="default-search"
                    className="block w-full px-1 text-sm text-fi-400 border-none focus:ring-0 focus:border-none"
                    placeholder={t("search")}
                    required
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button
                    type="submit"
                    className="bg-transparent focus:ring-0 focus:outline-none text-sm px-4"
                >
                    <svg
                        className="w-4 h-4 text-fi-400 dark:text-gray-400"
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
                </button>
            </div>
        </form>
    );
};

export default FiSearchForm;
