import Link from "next/link";
import { CldImage } from "@/ux";
import { getMiscellaneousCountryAdmin, getNavMenus } from "@/lib/fetch-data";
import { fiCenturyBold } from "@/utils/fonts";
import { useLocale } from "next-intl";
import SocialLinks from "@/ux/footer/SocialLinks";

export default async function FooterMain() {
    const locale = useLocale();
    const dataWp = await getMiscellaneousCountryAdmin();
    const menuLegal = await getNavMenus();

    const menuFilteredByLang =
        locale === process.env.NEXT_PUBLIC_MAIN_LANG
            ? menuLegal.filter(
                  (object) => object.locations[0] === "MENU_LEGAL_ES"
              )
            : menuLegal.filter(
                  (object) => object.locations[0] === "MENU_LEGAL_EN"
              );
    return (
        <div className="sectionFooterMain flex justify-between items-center px-16 pt-6 pb-4 bg-fiPrimary-600 text-white">
            <div className="flex flex-row gap-x-14 items-center justify-start">
                <Link href="/" className="flex items-center">
                    <CldImage
                        width="960"
                        height="600"
                        src="Logo_Dark.png"
                        sizes="100vw"
                        alt="Fi Group Logo"
                        priority
                        className="w-14 h-auto"
                    />
                </Link>
                <div className="flex flex-col justify-center items-start gap-y-0.5 text-xs">
                    <span
                        className={`${fiCenturyBold.className} text-xs tracking-wide gap-x-5`}
                    >
                        {dataWp?.fiGroup.businessName}
                        {dataWp?.fiGroup.vatNumber !== null &&
                            " - " + dataWp?.fiGroup.vatNumber}
                    </span>
                    <span className={`font-light text-xs tracking-wide`}>
                        {locale === process.env.NEXT_PUBLIC_MAIN_LANG
                            ? dataWp?.copyrightInfos.copyrightText
                            : dataWp?.copyrightInfos.copyrightTextEng}
                    </span>
                    <div className="flex items-center justify-center gap-x-2">
                        {menuFilteredByLang.length > 0 &&
                            menuFilteredByLang[0].menuItems?.nodes.map(
                                (node) => (
                                    <Link
                                        key={node.databaseId}
                                        href={`${node.uri}`}
                                        className="font-light"
                                    >
                                        {node.label}
                                    </Link>
                                )
                            )}
                    </div>
                </div>
            </div>
            <div>
                <SocialLinks socials={dataWp?.socialLinks} />
            </div>
        </div>
    );
}
