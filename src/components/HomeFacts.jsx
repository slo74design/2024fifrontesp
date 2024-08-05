import FiFactSingle from "@/ux/elements/FiFactSingle";

export default function HomeFacts() {
    return (
        <div className="flex justify-start items-center overflow-x-scroll scrollbar-hide overflow-y-hidden">
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
