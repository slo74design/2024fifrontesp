import FISectionBkgd from "@/ux/elements/FISectionBkgd";
import { FIButton } from "@/ux";
import { getHomePage } from "@/lib/fetch-corporate-pages";
import {
    _CENTURYBOLD,
    _LANGENGPAGES,
    _LANGMAIN,
    _LANGMAINPAGES,
} from "@/utils/constants";
import { useLocale } from "next-intl";

export default async function BannerBudgetRequest() {
    const locale = useLocale();
    const dataWp = await getHomePage(
        "home",
        locale === _LANGMAIN ? _LANGMAINPAGES : _LANGENGPAGES
    );
    const bannerInfos =
        dataWp.pages?.nodes[0]?.template?.pageHomeFields.bannerInfos;

    return (
        <div className="sectionBanner rounded-t-[36px] z-[12] -mt-7 overflow-auto">
            <FISectionBkgd type={5} isSquared={true}>
                <div className="flex flex-col justify-center items-center gap-y-2 w-full text-white pb-7">
                    <h1
                        className={`${_CENTURYBOLD} text-3xl uppercase tracking-wide`}
                    >
                        {bannerInfos.title}
                    </h1>
                    <p className="font-light max-w-lg text-center">
                        {bannerInfos.subtitle}
                    </p>
                    <div className="mt-7">
                        <FIButton
                            size={2}
                            color={4}
                            look={2}
                            type={3}
                            text={bannerInfos.ctaLabel}
                            url={bannerInfos.ctaUrl}
                            icon={0}
                            indice={0}
                        />
                    </div>
                </div>
            </FISectionBkgd>
        </div>
    );
}
