import Link from "next/link";
import { useLocale } from "next-intl";
import { getHomePage } from "@/lib/fetch-corporate-pages";
import { _LANGENGPAGES, _LANGMAIN, _LANGMAINPAGES } from "@/utils/constants";
import FiTestimonialSlider from "@/ux/elements/FiTestimonialSlider";

export default async function ClientTestimonials() {
    const locale = useLocale();
    const dataWp = await getHomePage(
        "home",
        locale === _LANGMAIN ? _LANGMAINPAGES : _LANGENGPAGES
    );
    const testimonialsData =
        dataWp.pages?.nodes[0]?.template?.pageHomeFields.testimonialList;

    return (
        <div className="sectionCertifications">
            <div className="flex justify-start items-center overflow-x-scroll scrollbar-hide overflow-y-hidden bg-white pt-6 w-full">
                <FiTestimonialSlider data={testimonialsData} />
            </div>
        </div>
    );
}
