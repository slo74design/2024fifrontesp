import { fiCenturyBold } from "@/utils/fonts";
import { FIButton } from "@/ux";
import FISectionBkgd from "@/ux/elements/FISectionBkgd";

export default function BannerBudgetRequest() {
    return (
        <FISectionBkgd type={3} isSquared={true}>
            <div className="flex flex-col justify-center items-center gap-y-2 w-full text-white">
                <h1
                    className={`${fiCenturyBold.className} text-3xl uppercase tracking-wide`}
                >
                    Ready to claim now?
                </h1>
                <p className="font-light max-w-lg text-center">
                    Have you invested in new products or processes in the last 2
                    years?
                </p>
                <div className="mt-7">
                    <FIButton
                        size={2}
                        color={4}
                        look={2}
                        type={3}
                        text="tell us about your project"
                        url="/"
                        icon={0}
                        indice={0}
                    />
                </div>
            </div>
        </FISectionBkgd>
    );
}
