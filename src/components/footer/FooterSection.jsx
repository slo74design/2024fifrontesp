import React, { Suspense } from "react";
import { useLocale } from "next-intl";
import Link from "next/link";

import Loading from "@/ux/Loading";
import { getCompanyInfo } from "@/data";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default async function FooterSection() {
    const locale = useLocale();
    const dataWp = await getCompanyInfo();

    return (
        <Suspense fallback={<Loading />}>
            <div className="bg-mili-p1 w-full flex flex-row justify-between items-center py-5 px-10 text-sm text-white">
                <div className="flex basis-2/3 flex-col items-start justify-center font-light">
                    <div className="font-semibold">
                        {dataWp.copyrightInfos[0].copyrightText}
                    </div>
                    <div className="font-light flex flex-row items-center gap-x-4">
                        {dataWp.copyrightInfos.length > 0 &&
                            dataWp.copyrightInfos[0]?.copyrightLinks.map(
                                (item, index) => (
                                    <Link key={index} href={item.urlPage}>
                                        {item.linkText}
                                    </Link>
                                )
                            )}
                    </div>
                </div>
                <div className="flex basis-1/3 items-center justify-end gap-x-3">
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
