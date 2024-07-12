import { Suspense } from "react";
import { useLocale } from "next-intl";
import { getAllMenus } from "@/data";
import { Loading } from "@/ux";
import HeaderMobile from "@/ux/Header/HeaderMobile";
import HeaderMenus from "@/ux/Header/HeaderMenus";
import HeaderMain from "@/ux/Header/HeaderMain";

export default async function MainHeader() {
    const locale = useLocale();
    const dataWp = await getAllMenus();
    const dataWpFiltered =
        locale === process.env.NEXT_PUBLIC_MAIN_LANG
            ? dataWp.filter((object) => object.locations[0] === "MENU_MAIN_1ST")
            : dataWp.filter(
                (object) => object.locations[0] === "MENU_MAIN_2ST"
            );

    return (
        <Suspense fallback={<Loading />}>
            {/* <HeaderMobile dataWpFiltered={dataWpFiltered} /> */}
            {/* <HeaderMenus dataWpFiltered={dataWpFiltered} /> */}
            <HeaderMain dataWpFiltered={dataWpFiltered} />
        </Suspense>
    );
}
