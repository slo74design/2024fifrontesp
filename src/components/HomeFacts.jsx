import FiFactSingle from "@/ux/Elements/Fi-FactSingle";

export default function HomeFacts() {
    return (
        <div className="flex overflow-x-scroll scrollbar-hide">
            <div className="flex flex-nowrap justify-between gap-x-20">
                <div className="">
                    <FiFactSingle numb="+20" txt="years of experience" />
                </div>
                <div className="">
                    <FiFactSingle numb="+18K" txt="satisfied clients" />
                </div>
                <div className="">
                    <FiFactSingle numb="+20" txt="years of experience" />
                </div>
                <div className="">
                    <FiFactSingle numb="+20" txt="years of experience" />
                </div>
                <div className="">
                    <FiFactSingle numb="+20" txt="years of experience" />
                </div>
                <div className="">
                    <FiFactSingle numb="+20" txt="years of experience" />
                </div>
                <div className="">
                    <FiFactSingle numb="+20" txt="years of experience" />
                </div>
                <div className="">
                    <FiFactSingle numb="+20" txt="years of experience" />
                </div>
            </div>
        </div>
    );
}
