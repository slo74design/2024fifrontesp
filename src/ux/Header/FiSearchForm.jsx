"use client";
import React from "react";
import { QrCode } from "lucide-react";
import { useTranslations } from "next-intl";

import { Status, postForm } from "@/lib/actions";
import { useFormState } from "react-dom";

const FiSearchForm = () => {
    const t = useTranslations("Nav");
    const initialState = "default";
    const [state, formAction] = useFormState(
        postForm,
        initialState
    ); /* useFormState added */

    return (
        // <form className="flex items-center max-w">
        //     <label htmlFor="simple-search" className="sr-only">
        //         Search
        //     </label>
        //     <div className="relative w-full">
        //         <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        //             <QrCode size={21} />
        //         </div>
        //         <input
        //             type="text"
        //             id="simple-search"
        //             className="bg-gray-50 border-0 text-slate-700 text-sm rounded-lg focus:ring-slate-200 focus:border-slate-200 ring-slate-200 block w-full ps-10 p-2.5  "
        //             placeholder={t("search")}
        //             required
        //         />
        //     </div>
        //     <button
        //         type="submit"
        //         className="p-3 ms-2 text-sm font-medium text-white bg-mili-p5 rounded-lg"
        //     >
        //         <svg
        //             className="w-4 h-4"
        //             aria-hidden="true"
        //             xmlns="http://www.w3.org/2000/svg"
        //             fill="none"
        //             viewBox="0 0 20 20"
        //         >
        //             <path
        //                 stroke="currentColor"
        //                 strokeLinecap="round"
        //                 strokeLinejoin="round"
        //                 strokeWidth="2"
        //                 d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
        //             />
        //         </svg>
        //         <span className="sr-only">Search</span>
        //     </button>
        // </form>
        <form action={formAction}>
            {" "}
            {/* formAction passed to action prop */}
            <div className="flex flex-col">
                {state.type} {/* displaying the current form state */}
                <label htmlFor="horseColor">
                    What color was Henri IV&apos;s white horse?
                </label>
                <input
                    id="horseColor"
                    name="horseColor"
                    className="text-black"
                />
                <button type="submit">Submit</button>
            </div>
        </form>
    );
};

export default FiSearchForm;
