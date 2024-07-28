"use client";

import { useState } from "react";
import { FiButtonMenu, Loading, Logo } from "@/ux";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useLocale, useTranslations } from "next-intl";
import { getAllMenus } from "@/data";
import Link from "next/link";

const HeaderMobile = ({ dataWpFiltered }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const locale = useLocale();
    const t = useTranslations("Nav");
    // console.log(dataWpFiltered[0].menuItems?.nodes);
    console.log(locale);
    return (
        <header className="bg-white w-full">
            <nav
                className="mx-auto flex max-w-full items-center justify-between gap-x-6 p-6 lg:px-8"
                aria-label="Global"
            >
                <div className="flex lg:flex-1">
                    <Logo url={`/${locale}`} hSize={8} />
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {dataWpFiltered.length &&
                        dataWpFiltered[0].menuItems?.nodes.map((item) => (
                            <Link
                                key={item.databaseId}
                                href={item.uri}
                                className="text-sm font-semibold leading-6 text-gray-900 hover:text-fiLight-600"
                            >
                                {item.label}
                            </Link>
                        ))}
                </div>
                <div className="flex flex-1 items-center justify-end gap-x-6">
                    <Link
                        href="#"
                        className="hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900 hover:text-fiLight-600"
                    >
                        {t("joinus")}
                    </Link>
                    <Link
                        href="#"
                        className="rounded-md bg-fiPrimary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-fiLight-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        {t("contact")}
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <FiButtonMenu
                        mobileMenuOpen={mobileMenuOpen}
                        setMobileMenuOpen={setMobileMenuOpen}
                    />
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
                    <div className="flex items-center gap-x-6">
                        <Logo url={`/${locale}`} hSize={8} />
                        <Link
                            href="#"
                            className="ml-auto rounded-md bg-fiPrimary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-fiLight-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            {t("contact")}
                        </Link>
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

export default HeaderMobile;
