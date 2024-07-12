import React, { Suspense } from "react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

import Loading from "@/ux/Loading";
import { getAllMenus } from "@/data";

import { fiCenturyRegular } from "@/utils/fonts";
import FiSelectWithAvatar from "@/ux/FiSelectWithAvatar";
import FiInputIcon from "@/ux/FiInputIcon";
import FiSwitcherLang from "@/ux/FiSwitcherLang";

const listCountriesWp = [
    {
        id: 1,
        name: "United States",
        avatar: "https://res.cloudinary.com/duzbhhs72/image/upload/v1713274716/flags/us_wwos0u.png",
    },
    {
        id: 2,
        name: "United Kingdom",
        avatar: "https://res.cloudinary.com/duzbhhs72/image/upload/v1713274715/flags/uk_fqgsfj.png",
    },
    {
        id: 3,
        name: "Portugal",
        avatar: "https://res.cloudinary.com/duzbhhs72/image/upload/v1713274714/flags/pt_wxw1j6.png",
    },
];

export default async function MainHeaderTop() {
    const locale = useLocale();
    const t = useTranslations("UI");
    const dataWp = await getAllMenus();
    const dataWpFilteredByLang =
        locale === "es"
            ? dataWp.filter(
                (object) => object.locations[0] === "MENU_TOPBAR_1ST"
            )
            : dataWp.filter(
                (object) => object.locations[0] === "MENU_TOPBAR_2ST"
            );

    return (
        <div
            className={`hidden ${fiCenturyRegular.className} bg-white w-full md:flex justify-between items-center py-3 px-8 border-b border-slate-100`}
        >
            <Suspense fallback={<Loading />}>
                <div className="flex gap-x-4">
                    {dataWpFilteredByLang.length &&
                        dataWpFilteredByLang[0].menuItems?.nodes.map((node) => (
                            <Link
                                key={node.databaseId}
                                href={`/${locale}/${node.uri}`}
                                className="text-sm leading-6 text-gray-700"
                            >
                                {node.label}
                            </Link>
                        ))}
                </div>
                <div className="flex gap-x-2 z-0">
                    <FiInputIcon
                        isLabel={false}
                        labelTxt=""
                        placeholder={t("search")}
                        inputName="searchtxt"
                    />
                    <FiSelectWithAvatar itemsList={listCountriesWp} />
                    <FiSwitcherLang />
                </div>
            </Suspense>
        </div>
    );
}
