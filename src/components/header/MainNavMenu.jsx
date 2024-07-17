"use client";

import { useState } from "react";

export default function MainNavMenu() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="bg-transparent w-full absolute top-0 left-0 ">
            <div className="flex flex-wrap justify-start items-center p-4 px-10">
                <a
                    href="https://flowbite.com"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        className="h-8"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        Flowbite
                    </span>
                </a>
                <button
                    data-collapse-toggle="mega-menu-full"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="mega-menu-full"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                <div
                    id="mega-menu-full"
                    className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                >
                    <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 text-slate-50 uppercase"
                                aria-current="page"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <button
                                // id="mega-menu-full-dropdown-button"
                                // data-collapse-toggle="mega-menu-full-dropdown"
                                className="flex items-center justify-between w-full py-2 px-3 font-medium text-slate-50 uppercase dark:border-gray-700"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                Company{" "}
                                <svg
                                    className="w-2.5 h-2.5 ms-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 4 4 4-4"
                                    />
                                </svg>
                            </button>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 text-slate-50 uppercase"
                            >
                                Marketplace
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 text-slate-50 uppercase"
                            >
                                Resources
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 text-slate-50 uppercase"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            {isOpen && (
                <div
                    // id="mega-menu-full-dropdown"
                    className="mt-1 bg-white transition-opacity duration-300 ease-in-out scroll-smooth"
                >
                    <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:grid-cols-3 md:px-6">
                        <ul aria-labelledby="mega-menu-full-dropdown-button">
                            <li>
                                <a
                                    href="#"
                                    className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                                >
                                    <div className="font-semibold">
                                        Online Stores
                                    </div>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">
                                        Connect with third-party tools that
                                        you're already using.
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                                >
                                    <div className="font-semibold">
                                        Segmentation
                                    </div>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">
                                        Connect with third-party tools that
                                        you're already using.
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                                >
                                    <div className="font-semibold">
                                        Marketing CRM
                                    </div>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">
                                        Connect with third-party tools that
                                        you're already using.
                                    </span>
                                </a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <a
                                    href="#"
                                    className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                                >
                                    <div className="font-semibold">
                                        Online Stores
                                    </div>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">
                                        Connect with third-party tools that
                                        you're already using.
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                                >
                                    <div className="font-semibold">
                                        Segmentation
                                    </div>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">
                                        Connect with third-party tools that
                                        you're already using.
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                                >
                                    <div className="font-semibold">
                                        Marketing CRM
                                    </div>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">
                                        Connect with third-party tools that
                                        you're already using.
                                    </span>
                                </a>
                            </li>
                        </ul>
                        <ul className="hidden md:block">
                            <li>
                                <a
                                    href="#"
                                    className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                                >
                                    <div className="font-semibold">
                                        Audience Management
                                    </div>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">
                                        Connect with third-party tools that
                                        you're already using.
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                                >
                                    <div className="font-semibold">
                                        Creative Tools
                                    </div>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">
                                        Connect with third-party tools that
                                        you're already using.
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                                >
                                    <div className="font-semibold">
                                        Marketing Automation
                                    </div>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">
                                        Connect with third-party tools that
                                        you're already using.
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </nav>
    );
}