import { ChevronRightIcon } from "@heroicons/react/20/solid";
import MainNavMenu from "./MainNavMenu";
import { getHomePage } from "@/lib/fetch-corporate-pages";
import HomeFacts from "../HomeFacts";
import { FIButton } from "@/ux";
import {
    _CENTURYBOLD,
    _CENTURYLIGHT,
    _CENTURYREGULAR,
    _LANGENGPAGES,
    _LANGMAIN,
    _LANGMAINPAGES,
} from "@/utils/constants";
import { useLocale } from "next-intl";

export default async function HomeHero() {
    const locale = useLocale();
    const dataWp = await getHomePage(
        "home",
        locale === _LANGMAIN ? _LANGMAINPAGES : _LANGENGPAGES
    );
    const heroInfos =
        dataWp.pages?.nodes[0]?.template?.pageHomeFields.heroInfos;

    const fixFontSizeWidthHeadings = () => {
        if (Object.keys(heroInfos).length > 0) {
            if (
                heroInfos.title1stLine.length < 20 &&
                heroInfos.title2ndLine.length < 20
            ) {
                return "text-[5.5vw]";
            } else if (
                heroInfos.title1stLine.length > 40 &&
                heroInfos.title1stLine.length < 50 &&
                heroInfos.title2ndLine.length > 40 &&
                heroInfos.title2ndLine.length < 50
            ) {
                return "text-[3.5vw]";
            } else {
                return "text-[4vw]";
            }
        }
    };

    return (
        <div className="sectionHomehero bg-gradient-to-br from-black from-30% to-fiLight-600 to-100% w-full z-10">
            <div className={`w-full flex flex-col px-24 pt-28 pb-16 gap-y-16`}>
                <div
                    className={`flex flex-col justify-center ${
                        heroInfos?.contentPosition[0] === "left"
                            ? "items-start"
                            : "items-center text-center"
                    } gap-y-1 leading-none text-white p-0 w-full ${fixFontSizeWidthHeadings()}`}
                >
                    <h1
                        className={`${_CENTURYLIGHT} font-extralight tracking-tight uppercase`}
                    >
                        {heroInfos.title1stLine}
                    </h1>
                    <h1
                        className={`${_CENTURYBOLD} tracking-wide text-fiLight-600 uppercase`}
                    >
                        {heroInfos.title2ndLine}
                    </h1>
                    <div
                        className={`${_CENTURYREGULAR} mt-6 max-w-5xl text-gray-300 ${
                            heroInfos.shortDescription.length > 200
                                ? "text-lg leading-7"
                                : "text-xl leading-8"
                        }`}
                    >
                        {heroInfos.shortDescription}
                    </div>
                    <div className="mt-7 flex items-center gap-x-6">
                        {heroInfos?.ctas !== null &&
                            heroInfos.ctas.map((cta, index) => (
                                <FIButton
                                    size={Number(cta.ctaSize[0])}
                                    color={Number(cta.ctaColor[0])}
                                    look={Number(cta.ctaLook[0])}
                                    type={Number(cta.ctaType[0])}
                                    text={cta.ctaLabel}
                                    url={cta.ctaUrl}
                                    icon={Number(cta.ctaIcon[0]) || 0}
                                    indice={index}
                                />
                            ))}
                    </div>
                </div>
                <HomeFacts />
            </div>
        </div>
    );
}
