"use client";

import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";

const FiButtonMenu = ({ setMobileMenuOpen }) => {
    return (
        <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
        >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
    );
};

export default FiButtonMenu;
