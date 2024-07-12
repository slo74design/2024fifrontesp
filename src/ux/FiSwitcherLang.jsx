"use client";
import Link from "next/link";
import { useState } from "react";
import { useLocale } from "next-intl";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { jsonLanguages } from "@/data/jsonLanguages";

const FiSwitcherLang = () => {
    const languages = jsonLanguages;
    const locale = useLocale();
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="max-w-md">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex flex-row justify-between items-center w-full cursor-default rounded-md bg-white py-1.5 pl-3.5 pr-2 text-left text-slate-700 ring-none focus:outline-none focus:ring-none sm:text-sm sm:leading-6"
            >
                {locale === "en" ? "English" : "Español"}
                <ChevronUpDownIcon className="w-5 h-5 ml-4" />
            </button>
            {isOpen && (
                <div className="absolute z-10 overflow-hidden bg-white w-auto rounded-md flex flex-col items-start justify-center p-2 gap-y-2 mt-2 px-4 text-slate-700 shadow-sm ring-1 ring-inset ring-gray-300">
                    {languages.map((lang) => (
                        <Link
                            key={lang.id}
                            locale={lang.code}
                            href={`/${lang.code}`}
                            className="w-full text-left text-sm leading-6 text-gray-700"
                        >
                            <span
                                className={
                                    lang.code === locale
                                        ? "text-rose-600 fon-bold"
                                        : null
                                }
                            >
                                {lang.name}
                            </span>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FiSwitcherLang;
