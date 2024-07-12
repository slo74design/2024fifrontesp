import React, { Suspense } from "react";
import { useLocale } from "next-intl";
import Link from "next/link";

import Loading from "@/ux/Loading";
import { getCompanyInfo, getTopBarMenu, getPostsES } from "@/lib/fetch-data";

import { outfit } from "@/utils/fonts";
import { FaCircle } from "react-icons/fa";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default async function NewsTopBar() {
    const locale = useLocale();
    const dataWp = await getCompanyInfo();
    const menuTop = await getTopBarMenu();

    const posts = await getPostsES("EN");
    console.log(posts);

    const menuFilteredByLang =
        locale === "es"
            ? menuTop.filter((object) => object.locations[0] === "MENU_TOP_ES")
            : menuTop.filter((object) => object.locations[0] === "MENU_TOP_EN");

    return (
        <Suspense fallback={<Loading />}>
            <div className="bg-mili-p1 w-full flex justify-between items-center py-4 px-10 text-sm text-white">
                <div className="flex basis-1/3 gap-x-2 items-center justify-start font-light">
                    <Link href={`tel:${dataWp.companyData.phoneNumber}`}>
                        {dataWp.companyData.phoneNumber}
                    </Link>
                    <FaCircle className="h-1.5 w-1.5 text-cyan-300" />
                    <Link href={`mailto:${dataWp.companyData.companyEmail}`}>
                        {dataWp.companyData.companyEmail}
                    </Link>
                </div>
                <div className="flex basis-1/3 justify-center">
                    <h3
                        className={`${outfit.className} uppercase font-semibold tracking-wide`}
                    >
                        {Object.values(dataWp).length && locale === "es"
                            ? dataWp.topbarContent
                            : dataWp.topbarContentEn}
                    </h3>
                </div>
                <div className="flex basis-1/3 items-center justify-end gap-x-3">
                    {menuFilteredByLang[0].menuItems?.nodes.map((node) => (
                        <Link
                            key={node.databaseId}
                            href={`${node.uri}`}
                            className="font-light"
                        >
                            {node.label}
                        </Link>
                    ))}
                    <FaCircle className="h-1.5 w-1.5 text-cyan-300" />
                    <div className="flex flex-row gap-x-2">
                        <span>
                            {dataWp.infosSocialNetwork.facebookPage !==
                                null && (
                                <Link
                                    href={
                                        dataWp.infosSocialNetwork.facebookPage
                                    }
                                >
                                    <Facebook size={21} strokeWidth={1} />
                                </Link>
                            )}
                        </span>
                        <span>
                            {dataWp.infosSocialNetwork.igPage !== null && (
                                <Link href={dataWp.infosSocialNetwork.igPage}>
                                    <Instagram size={21} strokeWidth={1} />
                                </Link>
                            )}
                        </span>
                        <span>
                            {dataWp.infosSocialNetwork.linkedinPage !==
                                null && (
                                <Link
                                    href={
                                        dataWp.infosSocialNetwork.linkedinPage
                                    }
                                >
                                    <Linkedin size={21} strokeWidth={1} />
                                </Link>
                            )}
                        </span>
                    </div>
                </div>
            </div>
        </Suspense>
    );
}
