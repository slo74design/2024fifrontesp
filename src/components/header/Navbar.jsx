import React from "react";
import Image from "next/image";
import { fiCenturyRegular } from "@/utils/fonts";
import { LanguagePicker, SearchFormNavbar } from "@/ux";

import { Store, User, Heart, ShoppingBag } from "lucide-react";
import Link from "next/link";

export default async function Navbar() {
    return (
        <div
            className={`hidden bg-white w-full md:flex justify-between items-center py-4 px-10 border-b border-slate-100`}
        >
            <div className="basis-1/6">
                <Image src="/logo.png" alt="Logo" width="120" height="30" />
            </div>

            <div className="basis-3/6 justify-start">
                <SearchFormNavbar />
            </div>
            <div className="flex basis-2/6 items-center justify-end gap-x-6">
                <div className="flex gap-x-5">
                    <Link href="/">
                        <Store size={21} strokeWidth={1.75} />
                    </Link>
                    <Link href="/">
                        <User size={21} strokeWidth={1.75} />
                    </Link>
                    <Link href="/">
                        <Heart size={21} strokeWidth={1.75} />
                    </Link>
                    <Link href="/">
                        <ShoppingBag size={21} strokeWidth={1.75} />
                    </Link>
                </div>
                <LanguagePicker />
            </div>
        </div>
    );
}
