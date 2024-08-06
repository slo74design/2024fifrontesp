import { getHomePage } from "@/lib/fetch-corporate-pages";
import FiFactSingle from "@/ux/elements/FiFactSingle";

export default async function HomeFacts() {
    const dataWp = await getHomePage("home");
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
