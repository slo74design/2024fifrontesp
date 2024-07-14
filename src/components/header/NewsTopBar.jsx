import React, { Suspense } from "react";
import { useLocale } from "next-intl";
import Link from "next/link";

import { getNewsTracker } from "@/lib/fetch-data";

import Loading from "@/ux/Loading";
import { fiCenturySemiBold } from "@/utils/fonts";
import { ArrowRight } from "lucide-react";

export default async function NewsTopBar() {
    const locale = useLocale();
    const dataWp = await getNewsTracker();

    return (
        <Suspense fallback={<Loading />}>
            <div
                className={`${fiCenturySemiBold.className} bg-fi-300 w-full flex justify-center items-center py-4 px-10 text-white gap-x-2`}
            >
                {Object.values(dataWp).length && locale === "es" ? (
                    <Link
                        href={`/${locale}/${dataWp.postTracker?.nodes[0].uri.slice(
                            4
                        )}`}
                        className={`text-sm uppercase tracking-wider`}
                    >
                        {dataWp.postTracker?.nodes[0].title}
                    </Link>
                ) : (
                    <Link
                        href={`/${locale}/${dataWp.postTrackerEn?.nodes[0].uri.slice(
                            4
                        )}`}
                        className={`text-sm uppercase tracking-wider`}
                    >
                        {dataWp.postTrackerEn?.nodes[0].title}
                    </Link>
                )}
                <ArrowRight size={21} strokeWidth={2} />
            </div>
        </Suspense>
    );
}
