"use client";
import React from "react";
import { Button } from "flowbite-react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { locales } from "@/i18n";

const LanguagePicker = () => {
    const locale = useLocale();
    const langs = locales;
    return (
        <div className="flex flex-row space-x-1 justify-center items-center ">
            {langs.map((node, index) => (
                <Link
                    key={index}
                    locale={node}
                    href={`/${node}`}
                    className={`${
                        locale === node
                            ? "bg-mili-p5 text-white font-semibold tracking-wide"
                            : "bg-transparent text-slate-700 font-light"
                    } rounded-full px-5 py-2 text-sm`}
                >
                    {node.toUpperCase()}
                </Link>
            ))}
        </div>
    );
};

export default LanguagePicker;
