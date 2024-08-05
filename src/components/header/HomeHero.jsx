import { ChevronRightIcon } from "@heroicons/react/20/solid";
import MainNavMenu from "./MainNavMenu";
import {
    fiCenturyBold,
    fiCenturyLight,
    fiCenturyRegular,
    fiCenturyThin,
    fiCenturyVariable,
} from "@/utils/fonts";
import { getHomePage } from "@/lib/fetch-corporate-pages";
import HomeFacts from "../HomeFacts";
import { FIButton } from "@/ux";

export default async function HomeHero() {
    const dataWp = await getHomePage("home");
    const infos = dataWp.template?.pageHomeFields;

    const fixFontSizeWidthHeadings = () => {
        if (infos.title1stLine.length < 20 && infos.title2ndLine.length < 20) {
            return "text-[5.5vw]";
        } else if (
            infos.title1stLine.length > 40 &&
            infos.title1stLine.length < 50 &&
            infos.title2ndLine.length > 40 &&
            infos.title2ndLine.length < 50
        ) {
            return "text-[3.5vw]";
        } else {
            return "text-[4vw]";
        }
    };

    return (
        <div className="sectionHomehero bg-gradient-to-br from-black from-30% to-fiLight-600 to-100% w-full">
            <div className={`w-full flex flex-col px-24 pt-28 pb-12 gap-y-16`}>
                <div
                    className={`flex flex-col justify-center ${
                        infos?.contentPosition[0] === "left"
                            ? "items-start"
                            : "items-center text-center"
                    } gap-y-1 leading-none text-white p-0 w-full ${fixFontSizeWidthHeadings()}`}
                >
                    <h1
                        className={`${fiCenturyLight.className} font-extralight tracking-tight uppercase`}
                    >
                        {infos.title1stLine}
                    </h1>
                    <h1
                        className={`${fiCenturyBold.className} tracking-wide text-fiLight-600 uppercase`}
                    >
                        {infos.title2ndLine}
                    </h1>
                    <div
                        className={`${
                            fiCenturyRegular.className
                        } mt-6 max-w-5xl text-gray-300 ${
                            infos.shortDescription.length > 200
                                ? "text-lg leading-7"
                                : "text-xl leading-8"
                        }`}
                    >
                        {infos.shortDescription}
                    </div>
                    <div className="mt-7 flex items-center gap-x-6">
                        {infos.ctas.map((cta, index) => (
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
