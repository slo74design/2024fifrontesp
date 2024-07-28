import { fiCenturyBold } from "@/utils/fonts";
import React from "react";

const FiFactSingle = ({ numb, txt }) => {
    return (
        <div
            className={`flex flex-row gap-x-2 text-white hover:text-fiLight-600 cursor-default`}
        >
            <span className={`${fiCenturyBold.className} text-4xl`}>
                {numb}
            </span>
            <span className="text-light text-sm leading-4 max-w-24 flex items-center">
                {txt}
            </span>
        </div>
    );
};

export default FiFactSingle;
