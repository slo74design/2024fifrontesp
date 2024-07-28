"use client";
import Link from "next/link";
import { useLocale } from "next-intl";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { fiCenturySemiBold } from "@/utils/fonts";
import { getFlags } from "@/data";
import Image from "next/image";
import { Dropdown } from "flowbite-react";

const FiSwitcherLang = ({ domains }) => {
    const locale = useLocale();

    const currentDomain = domains.filter(
        (object) => object.isoLangCode === process.env.NEXT_PUBLIC_MAIN_LANG
    );

    const excludeDomain = domains.filter(function (object) {
        return object.isDefault !== true;
    });

    const labelSelected = (currentDomain) => {
        return (
            <div
                className={`${fiCenturySemiBold.className} inline-flex max-w-48 w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-fiContent-200 ring-gray-300 hover:bg-gray-50`}
            >
                <Image
                    className="w-5 h-5"
                    src={getFlags(currentDomain[0].isoLangCode)}
                    alt="Flag"
                    width="32"
                    height="32"
                />
                {currentDomain[0].countryName}
            </div>
        );
    };

    return (
        <Dropdown inline label={labelSelected(currentDomain)}>
            {excludeDomain.map((lang, index) => (
                <Dropdown.Item key={index}>
                    <Link
                        locale={lang.isoLangCode}
                        href={`${lang.siteUrl}`}
                        role="menuitem"
                        tabIndex="-1"
                        className={`${fiCenturySemiBold.className} flex flex-row gap-x-2 px-4 py-0 text-sm text-fiContent-200 hover:text-fiLight-600`}
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
                </Dropdown.Item>
            ))}
        </Dropdown>
    );
};

export default FiSwitcherLang;
