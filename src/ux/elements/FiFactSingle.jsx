import React from "react";
import { _CENTURYBOLD } from "@/utils/constants";

const FiFactSingle = ({ numb, txt }) => {
    return (
        <div
            className={`flex flex-row justify-center gap-x-2 text-white hover:text-fiLight-600 cursor-default`}
        >
            <span className={`${_CENTURYBOLD} text-4xl`}>{numb}</span>
            <span className="text-light text-sm leading-4 max-w-24 flex items-center">
                {txt}
            </span>
        </div>
    );
};

export default FiFactSingle;
