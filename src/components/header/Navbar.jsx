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
import CatNavigation from "./CatNavigation";

export default async function Navbar() {
    const domains = await getCountryDomains();

    return (
        <div
            className={`${fiCenturySemiBold.className} bg-white w-full flex justify-between items-center py-4 px-10 border-b border-slate-100 z-10`}
        >
            <div className="basis-3/6">
                <CatNavigation />
            </div>

            <div className="flex basis-3/6 items-center justify-end gap-x-6">
                <FiSearchForm />
                <FiSwitcherLang domains={domains} />
            </div>
        </div>
    );
}
