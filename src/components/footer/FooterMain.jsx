import Link from "next/link";
import { useLocale } from "next-intl";
import { getFooterInfos, getNavMenus } from "@/lib/fetch-data";
import {
    _CENTURYBOLD,
    _LANGMAIN,
    _MENULEGALEN,
    _MENULEGALES,
} from "@/utils/constants";
import { CldImage } from "@/ux";
import SocialLinks from "@/ux/footer/SocialLinks";

export default async function FooterMain() {
    const locale = useLocale();
    const dataWp = await getFooterInfos();
    const footerInfos = dataWp?.fICountryAdmin.optionsCountryAdmin;
    const certifData = dataWp?.fISuperAdmin.superadminFields.partnersLogo;
    const menuLegal = await getNavMenus();

    const menuFilteredByLang =
        locale === _LANGMAIN
            ? menuLegal.filter((object) => object.locations[0] === _MENULEGALES)
            : menuLegal.filter(
                  (object) => object.locations[0] === _MENULEGALEN
              );
    return (
        <div className="flex flex-col justify-center items-center w-full">
            <div className="sectionCertifications flex flex-col justify-center items-center py-12">
                <h3
                    className={`${_CENTURYBOLD} text-fiPrimary-600 uppercase tracking-wide`}
                >
                    {locale === _LANGMAIN
                        ? certifData?.certificationsTitle
                        : certifData?.certificationsTitleEn}
                </h3>
                <div className="flex justify-start items-center overflow-x-scroll scrollbar-hide overflow-y-hidden bg-white pt-6 max-w-7xl mx-auto">
                    <div className="flex flex-nowrap justify-between gap-x-20">
                        {certifData?.certificationsLogos.length > 0 &&
                            certifData.certificationsLogos.map(
                                (certif, index) => (
                                    <CldImage
                                        width="960"
                                        height="600"
                                        src={certif.pictureUrl}
                                        format="svg"
                                        sizes="100vw"
                                        alt="Fi Group Logo"
                                        priority
                                        className="w-24 h-auto"
                                        key={index}
                                    />
                                )
                            )}
                    </div>
                </div>
            </div>
            <div className="sectionFooterMain flex justify-between items-center px-16 pt-6 pb-4 bg-fiPrimary-600 text-white w-full">
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
                            className={`${_CENTURYBOLD} text-xs tracking-wide gap-x-5`}
                        >
                            {footerInfos?.fiGroup.businessName}
                            {footerInfos?.fiGroup.vatNumber !== null &&
                                " - " + footerInfos?.fiGroup.vatNumber}
                        </span>
                        <span className={`font-light text-xs tracking-wide`}>
                            {locale === _LANGMAIN
                                ? footerInfos?.copyrightInfos.copyrightText
                                : footerInfos?.copyrightInfos.copyrightTextEng}
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
                    <SocialLinks socials={footerInfos?.socialLinks} />
                </div>
            </div>
        </div>
    );
}
