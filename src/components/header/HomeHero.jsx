import { ChevronRightIcon } from "@heroicons/react/20/solid";
import MainNavMenu from "./MainNavMenu";
import {
    fiCenturyBold,
    fiCenturyLight,
    fiCenturyRegular,
    fiCenturyThin,
    fiCenturyVariable,
} from "@/utils/fonts";
import FiButton from "@/ux/Elements/Fi-Button";
import { getHomePage } from "@/lib/fetch-corporate-pages";
import HomeFacts from "../HomeFacts";

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
        <div className="relative isolate bg-gradient-to-br from-black from-30% to-fiLight-600 to-100% w-full">
            <div className="hidden md:block">
                <svg
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                >
                    <defs>
                        <pattern
                            x="50%"
                            y={-1}
                            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
                            width={200}
                            height={200}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M.5 200V.5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg
                        x="50%"
                        y={-1}
                        className="overflow-visible fill-gray-800/20"
                    >
                        <path
                            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                            strokeWidth={0}
                        />
                    </svg>
                    <rect
                        fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
                        width="100%"
                        height="100%"
                        strokeWidth={0}
                    />
                </svg>
                <div
                    aria-hidden="true"
                    className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
                >
                    <div
                        style={{
                            clipPath:
                                "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
                        }}
                        className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
                    />
                </div>
            </div>
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
                        {infos.ctas.map((cta) => (
                            <FiButton
                                size={2}
                                color={Number(cta.ctaColor[0])}
                                look={2}
                                type={Number(cta.ctaType[0])}
                                text={cta.ctaLabel}
                                url={cta.ctaUrl}
                                icon={0}
                            />
                        ))}
                    </div>
                </div>
                <HomeFacts />
            </div>
        </div>
    );
}
