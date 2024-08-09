import { Suspense } from "react";
import { FISectionBkgd, Loading } from "@/ux";
import { useLocale } from "next-intl";
import { getHomePage } from "@/lib/fetch-corporate-pages";
import { AllPostsByFilters } from "@/lib/fetch-data";
import {
    _LANGENGPAGES,
    _LANGMAIN,
    _LANGMAINPAGES,
    _LANGOTHER,
} from "@/utils/constants";
import FiPublicationsHome from "@/ux/elements/FiPublicationsHome";

export default async function HomePubs() {
    const locale = useLocale();
    const dataWp = await getHomePage(
        "home",
        locale === _LANGMAIN ? _LANGMAINPAGES : _LANGENGPAGES
    );

    const dataCats =
        dataWp.pages?.nodes[0]?.template?.pageHomeFields.publicationDetails
            .selectCats;
    // const filteredCats = [];
    // dataCats.nodes.forEach((fruit) => {
    //     filteredCats.push(String(fruit.databaseId));
    // });
    // console.log(filteredCats);

    const dataPosts = await AllPostsByFilters(
        0,
        [],
        locale === _LANGMAIN ? _LANGMAIN : _LANGOTHER,
        [],
        ""
    );

    return (
        <Suspense fallback={<Loading />}>
            <div className="sectionPubs bg-white rounded-t-[36px] z-[13] -mt-7 overflow-auto">
                <FISectionBkgd type={3} isSquared={true}>
                    <div className="flex flex-col justify-center items-start px-24 w-full">
                        <FiPublicationsHome
                            dataCats={dataCats}
                            posts={dataPosts}
                        />
                    </div>
                </FISectionBkgd>
            </div>
        </Suspense>
    );
}
