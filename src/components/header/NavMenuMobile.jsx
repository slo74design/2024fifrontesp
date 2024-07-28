"use client";

import { useState } from "react";
import { fiCenturySemiBold } from "@/utils/fonts";
import { Menu, Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function NavMenuMobile() {
    const [open, setOpen] = useState(false);
    return (
        <nav className="bg-white md:hidden">
            <div className="flex flex-wrap justify-between items-center px-6 py-4 w-full">
                <Link href="/" className="flex">
                    <Search size={28} color="#000" />
                </Link>
                <a href="/" className="flex items-center">
                    <Image
                        src="/logo_black.png"
                        className="w-auto h-8"
                        alt="Flowbite Logo"
                        width={150}
                        height={70}
                    />
                </a>
                <button
                    data-collapse-toggle="mega-menu-full"
                    type="button"
                    className="inline-flex items-center p-2 w-12 h-12 justify-center text-sm text-black md:hidden focus:outline-none focus:ring-none"
                    aria-controls="mega-menu-full"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    <Menu size={28} color="#000" />
                </button>
            </div>
        </nav>
    );
}
