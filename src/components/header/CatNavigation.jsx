import React, { Suspense } from "react";
import { useLocale } from "next-intl";
import { getTopBarMenu } from "@/data";
import { Loading } from "@/ux";
import Link from "next/link";

export default async function CatNavigation() {
    const locale = useLocale();
    const menuTop = await getTopBarMenu();

    const menuFilteredByLang =
        locale === "es"
            ? menuTop.filter((object) => object.locations[0] === "MENU_MAIN_ES")
            : menuTop.filter(
                  (object) => object.locations[0] === "MENU_MAIN_EN"
              );
    return (
        <Suspense fallback={<Loading />}>
            <div className="bg-white w-full flex justify-between items-center py-4 px-10 text-sm text-slate-700 border-b border-slate-100 uppercase">
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
