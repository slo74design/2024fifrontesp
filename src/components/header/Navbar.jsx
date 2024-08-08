import React from "react";
import Image from "next/image";
import Link from "next/link";

import {
    FiSearchForm,
    FiSwitcherLang,
    LanguagePicker,
    SearchFormNavbar,
} from "@/ux";

import { getCountryDomains } from "@/lib/fetch-data";
import ExternalDomains from "./ExternalDomains";
import { _CENTURYSEMIBOLD } from "@/utils/constants";

export default async function Navbar() {
    const domains = await getCountryDomains();

    return (
        <div
            className={`${_CENTURYSEMIBOLD} hidden bg-white w-full md:flex justify-between items-center py-4 px-16 border-b border-slate-100 z-10`}
        >
            <div className="basis-3/6">
                <ExternalDomains />
            </div>

            <div className="flex basis-3/6 items-center justify-end gap-x-6">
                <FiSearchForm />
                <FiSwitcherLang domains={domains} />
            </div>
        </div>
    );
}
