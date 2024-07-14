"use client";
import Link from "next/link";
import { useState } from "react";
import { useLocale } from "next-intl";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { fiCenturySemiBold } from "@/utils/fonts";
import { getFlags } from "@/data";
import Image from "next/image";

const FiSwitcherLang = ({ domains }) => {
    const locale = useLocale();

    const currentDomain = domains.filter(
        (object) => object.isoLangCode === process.env.NEXT_PUBLIC_MAIN_LANG
    );

    const excludeDomain = domains.filter(function (object) {
        return object.isDefault !== true;
    });

    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    type="button"
                    className={`${fiCenturySemiBold.className} inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-fi-400 ring-gray-300 hover:bg-gray-50`}
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <Image
                        className="w-5 h-5"
                        src={getFlags(currentDomain[0].isoLangCode)}
                        alt="Flag"
                        width="32"
                        height="32"
                    />
                    {currentDomain[0].countryName}
                    <ChevronUpDownIcon className="w-5 h-5 ml-4" />
                </button>
            </div>
            {isOpen && (
                <div
                    className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-fi-400 ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex="-1"
                >
                    <div className="py-1" role="none">
                        {excludeDomain.map((lang, index) => (
                            <Link
                                key={index}
                                locale={lang.isoLangCode}
                                href={`${lang.siteUrl}`}
                                role="menuitem"
                                tabIndex="-1"
                                className={`${fiCenturySemiBold.className} flex flex-row gap-x-2 px-4 py-2 text-sm text-fi-400 hover:text-fi-200`}
                            >
                                <Image
                                    className="w-5 h-5"
                                    src={getFlags(lang.isoLangCode)}
                                    alt="Flag"
                                    width="32"
                                    height="32"
                                />
                                {lang.countryName}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>

        // <div className="max-w-sm">
        //     <button
        //         onClick={() => setIsOpen(!isOpen)}
        //         className="flex flex-row justify-start items-center w-full cursor-default rounded-md bg-white py-1.5 gap-x-2 text-left text-slate-700 ring-none focus:outline-none focus:ring-none sm:text-sm sm:leading-6 uppercase"
        //     >
        //         <Image
        //             className="w-5 h-5"
        //             src={getFlags(currentDomain[0].isoLangCode)}
        //             alt="Flag"
        //             width="32"
        //             height="32"
        //         />
        //         {currentDomain[0].countryName}
        //         <ChevronUpDownIcon className="w-5 h-5 ml-4" />
        //     </button>
        //     {isOpen && (
        //         <div className="absolute right-10 z-10 overflow-hidden bg-white w-auto rounded-md flex flex-col items-start justify-center p-2 gap-y-2 mt-2 px-4 text-slate-700 shadow-sm ring-1 ring-inset ring-gray-300">
        //             {excludeDomain.map((lang, index) => (
        //                 <Link
        //                     key={index}
        //                     locale={lang.isoLangCode}
        //                     href={`${lang.siteUrl}`}
        //                     className={`${fiCenturyVariable.className} w-full flex justify-start items-center gap-x-2 text-left text-[13px] leading-6 uppercase font-bold hover:text-fi-200`}
        //                 >
        //                     <Image
        //                         className="w-5 h-5"
        //                         src={getFlags(lang.isoLangCode)}
        //                         alt="Flag"
        //                         width="32"
        //                         height="32"
        //                     />
        //                     {lang.countryName}
        //                 </Link>
        //             ))}
        //         </div>
        //     )}
        // </div>
    );
};

export default FiSwitcherLang;
