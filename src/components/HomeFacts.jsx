import { getHomePage } from "@/lib/fetch-corporate-pages";
import { _LANGENGPAGES, _LANGMAIN, _LANGMAINPAGES } from "@/utils/constants";
import FiFactSingle from "@/ux/elements/FiFactSingle";
import { useLocale } from "next-intl";

export default async function HomeFacts() {
    const locale = useLocale();
    const dataWp = await getHomePage(
        "home",
        locale === _LANGMAIN ? _LANGMAINPAGES : _LANGENGPAGES
    );
    const factsNumb = dataWp.fICountryAdmin?.optionsCountryAdmin?.facts;
    return (
        <div className="flex justify-start items-center overflow-x-scroll scrollbar-hide overflow-y-hidden">
            <div className="flex flex-nowrap justify-between gap-x-20">
                {factsNumb.length > 0 &&
                    factsNumb.map((fact, index) => (
                        <div key={index}>
                            <FiFactSingle
                                numb={fact.bigNumber}
                                txt={fact.factsDescription}
                            />
                        </div>
                    ))}
            </div>
        </div>
    );
}
