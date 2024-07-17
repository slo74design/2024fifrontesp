import React, { Suspense } from "react";
import { useLocale } from "next-intl";
import { Loading } from "@/ux";
import Link from "next/link";
import { getNavMenus } from "@/lib/fetch-data";

export default async function ExternalDomains() {
    const locale = useLocale();
    const menuTop = await getNavMenus();

    const menuFilteredByLang =
        locale === process.env.NEXT_PUBLIC_MAIN_LANG
            ? menuTop.filter((object) => object.locations[0] === "MENU_MAIN")
            : menuTop.filter(
                  (object) => object.locations[0] === "MENU_MAIN_EN"
              );
    return (
        <Suspense fallback={<Loading />}>
            <div className="bg-white w-full flex justify-start items-center text-sm text-slate-700 uppercase">
                <div className="flex items-center justify-center gap-x-3">
                    {menuFilteredByLang[0].menuItems?.nodes.map((node) => (
                        <Link
                            key={node.databaseId}
                            href={`${node.uri}`}
                            className="font-light"
                        >
                            {node.label}
                        </Link>
                    ))}
                </div>
            </div>
        </Suspense>
    );
}
