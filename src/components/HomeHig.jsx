import FISectionBkgd from "@/ux/elements/FISectionBkgd";

export default function HomeHig() {
    return (
        <div className="sectionHig rounded-t-[18px] z-[11] -mt-10 overflow-auto">
            <FISectionBkgd type={4} isSquared={true}>
                <div className="flex justify-center items-center pb-10">
                    <h1>Sono il HIG Hispano</h1>
                </div>
            </FISectionBkgd>
        </div>
    );
}
