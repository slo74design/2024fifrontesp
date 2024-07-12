"use client";
import React, { useEffect, useState } from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { FiButtonMenu, Loading, Logo } from "@/ux";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

import { Fragment } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import {
    ChevronDownIcon,
    PhoneIcon,
    PlayCircleIcon,
} from "@heroicons/react/20/solid";
import { ejemploMenu } from "@/data/ejemploMenu";

const products = [
    {
        name: "Analytics",
        description: "Get a better understanding of your traffic",
        href: "#",
        icon: ChartPieIcon,
    },
    {
        name: "Engagement",
        description: "Speak directly to your customers",
        href: "#",
        icon: CursorArrowRaysIcon,
    },
    {
        name: "Security",
        description: "Your customers’ data will be safe and secure",
        href: "#",
        icon: FingerPrintIcon,
    },
    {
        name: "Integrations",
        description: "Connect with third-party tools",
        href: "#",
        icon: SquaresPlusIcon,
    },
    {
        name: "Automations",
        description: "Build strategic funnels that will convert",
        href: "#",
        icon: ArrowPathIcon,
    },
];
const callsToAction = [
    { name: "Watch demo", href: "#", icon: PlayCircleIcon },
    { name: "Contact sales", href: "#", icon: PhoneIcon },
];
const company = [
    { name: "About us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Support", href: "#" },
    { name: "Press", href: "#" },
    { name: "Blog", href: "#" },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const HeaderMain = ({ dataWpFiltered }) => {
    // console.log(dataWpFiltered);
    const locale = useLocale();
    const t = useTranslations("Nav");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [itemsMenuMain, setItemsMenuMain] = useState([]);
    const [itemsMenuSub, setItemsMenuSub] = useState([]);
    // console.log(ejemploMenu);

    useEffect(() => {
        const createMenu = () => {
            let itemsMenuMain = [],
                itemsMenuMainCleaned = [];
            let itemsMenuSub = [];
            let arrChildren = [];
            for (
                let i = 0;
                i < dataWpFiltered[0].menuItems?.nodes.length;
                i++
            ) {
                const nodesArr = dataWpFiltered[0].menuItems?.nodes;
                if (nodesArr[i].linkRelationship === "parent") {
                    itemsMenuMain.push({
                        databaseId: nodesArr[i].databaseId,
                        label: nodesArr[i].label,
                        uri: nodesArr[i].uri,
                        parentDatabaseId: nodesArr[i].parentDatabaseId,
                        linkRelationship: nodesArr[i].linkRelationship,
                    });
                }
                if (nodesArr[i].linkRelationship === "children") {
                    arrChildren = [
                        [nodesArr[i].databaseId],
                        {
                            databaseId: nodesArr[i].databaseId,
                            label: nodesArr[i].label,
                            uri: nodesArr[i].uri,
                            parentDatabaseId: nodesArr[i].parentDatabaseId,
                            linkRelationship: nodesArr[i].linkRelationship,
                            items: [],
                        },
                    ];
                } else if (
                    nodesArr[i].linkRelationship === "child" &&
                    nodesArr[i].parentDatabaseId === arrChildren[0]
                ) {
                    // itemsMenuMainCleaned.push({
                    arrChildren[0][1].items.push({
                        databaseId: nodesArr[i].databaseId,
                        label: nodesArr[i].label,
                        uri: nodesArr[i].uri,
                        parentDatabaseId: nodesArr[i].parentDatabaseId,
                        linkRelationship: nodesArr[i].linkRelationship,
                    });
                }
            }
            console.log(arrChildren);
            // console.log(itemsMenuSub);
            // console.log(itemsMenuMainCleaned);
            setItemsMenuMain(itemsMenuMain);
            setItemsMenuSub(itemsMenuMainCleaned);
        };
        createMenu();
    }, [dataWpFiltered]);

    return (
        <header className="bg-white w-full">
            <nav
                className="mx-auto flex max-w-full items-center justify-between gap-x-6 p-6 lg:px-8"
                aria-label="Global"
            >
                <div className="flex lg:flex-1">
                    <Logo url={`/${locale}`} hSize={8} />
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-6">
                    {/* {dataWpFiltered.length &&
                        dataWpFiltered[0].menuItems?.nodes.map((item) => (
                            <Link
                                key={item.databaseId}
                                href={item.uri}
                                className="text-sm font-semibold leading-6 text-gray-700"
                            >
                                {item.label}
                            </Link>
                        ))} */}

                    {dataWpFiltered.length &&
                        dataWpFiltered[0].menuItems?.nodes.map((item) =>
                            item.linkRelationship === "parent" ? (
                                <Link
                                    key={item.databaseId}
                                    href={item.uri}
                                    className="text-sm font-semibold leading-6 text-gray-900"
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <Popover
                                    key={item.databaseId}
                                    className="relative"
                                >
                                    <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                                        {item.linkRelationship === "children" &&
                                            item.label}
                                        <ChevronDownIcon
                                            className="h-5 w-5 flex-none text-gray-400"
                                            aria-hidden="true"
                                        />
                                    </Popover.Button>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0 translate-y-1"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-1"
                                    >
                                        <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-56 rounded-xl bg-white p-2 shadow-lg ring-1 ring-gray-900/5">
                                            {item.linkRelationship ===
                                                "child" && (
                                                <a
                                                    key={item.databaseId}
                                                    href={item.uri}
                                                    className="block rounded-lg px-3 py-2 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50"
                                                >
                                                    {item.label}
                                                </a>
                                            )}
                                        </Popover.Panel>
                                    </Transition>
                                </Popover>
                            )
                        )}
                    {/* <Popover key={item.databaseId} className="relative">
                        <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                            Company
                            <ChevronDownIcon
                                className="h-5 w-5 flex-none text-gray-400"
                                aria-hidden="true"
                            />
                        </Popover.Button>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-56 rounded-xl bg-white p-2 shadow-lg ring-1 ring-gray-900/5">
                                {company.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="block rounded-lg px-3 py-2 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </Popover.Panel>
                        </Transition>
                    </Popover> */}
                </Popover.Group>
                <div className="flex flex-1 items-center justify-end gap-x-6">
                    <Link
                        href="#"
                        className="hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900 hover:text-fi-200"
                    >
                        {t("joinus")}
                    </Link>
                    <Link
                        href="#"
                        className="rounded-md bg-fi-100 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-fi-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        {t("contact")}
                    </Link>
                </div>
            </nav>
            <Dialog
                as="div"
                className="lg:hidden"
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
            >
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Logo url={`/${locale}`} hSize={8} />
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {dataWpFiltered.length &&
                                    dataWpFiltered[0].menuItems?.nodes.map(
                                        (item) => (
                                            <Link
                                                key={item.databaseId}
                                                href={item.uri}
                                                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                            >
                                                {item.label}
                                            </Link>
                                        )
                                    )}

                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                                Company
                                                <ChevronDownIcon
                                                    className={classNames(
                                                        open
                                                            ? "rotate-180"
                                                            : "",
                                                        "h-5 w-5 flex-none"
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {company.map((item) => (
                                                    <Disclosure.Button
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                    >
                                                        {item.name}
                                                    </Disclosure.Button>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                            </div>
                            <div className="py-6">
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
};

export default HeaderMain;
