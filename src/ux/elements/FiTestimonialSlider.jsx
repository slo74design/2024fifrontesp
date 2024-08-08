"use client"; // for nextjs 13.4 user
import React from "react";
import Link from "next/link";
import { MoveLeft, MoveRight } from "lucide-react";
import Image from "next/image";
import { _CENTURYREGULAR, _CENTURYSEMIBOLD } from "@/utils/constants";
import TextToSpeech from "./FiTextToSpeech";

const FiTestimonialSlider = (data) => {
    const slideLeft = () => {
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 300;
    };

    const slideRight = () => {
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 300;
    };
    return (
        <>
            <div className="sectionTestimonialsClients my-12">
                <div className="flex flex-row justify-between items-center w-[calc(100vw-32px)] h-fit px-16 gap-x-5">
                    <button
                        type="button"
                        className="p-2.5 text-slate-700 hover:text-fiPrimary-500"
                        onClick={slideLeft}
                    >
                        <MoveLeft
                            aria-hidden="true"
                            size={20}
                            color="#00004a"
                        />
                    </button>
                    <div
                        className="flex flex-row gap-x-7 overflow-x-scroll overflow-y-hidden flex-nowrap relative scroll-smooth py-3"
                        id="slider"
                    >
                        {data?.data?.length > 0 &&
                            data?.data.map((item, index) => (
                                <div
                                    key={index}
                                    className="cursor-auto transition ease-in-out delay-150"
                                >
                                    <div className="h-auto w-[400px] flex flex-col justify-start gap-y-0 relative min-h-fit">
                                        <div className="px-4 py-2 border rounded-t-3xl border-b-0 w-fit min-w-auto h-auto bg-white z-10 -mb-[1px]">
                                            <Image
                                                width="960"
                                                height="600"
                                                src={
                                                    item.logoUrl.node.sourceUrl
                                                }
                                                sizes="100vw"
                                                alt="Fi Group Logo"
                                                priority
                                                className="w-fit h-12 rounded-full"
                                            />
                                        </div>
                                        <div className="border border-slate-100 rounded-b-3xl rounded-tr-3xl pt-7 min-h-[200px] flex flex-col justify-between gap-y-2">
                                            <p className="text-sm px-4">
                                                {item.content}
                                            </p>
                                            <div className="flex flex-row justify-between  items-center border-t border-slate-100 px-4 py-2.5 rounded-b-3xl w-full">
                                                <div className="flex flex-col gap-x-5 basis-11/12">
                                                    <span
                                                        className={`${_CENTURYSEMIBOLD} text-sm text-fiPrimary-600 `}
                                                    >
                                                        {item.clientCompany}
                                                    </span>
                                                    <div className="flex flex-row gap-x-2 text-xs text-slate-600">
                                                        <span>
                                                            {item.clientName}
                                                        </span>
                                                        <span>
                                                            {item.clientRole}
                                                        </span>
                                                    </div>
                                                </div>
                                                <TextToSpeech
                                                    text={item.content}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                    <button
                        type="button"
                        className="p-2.5 text-slate-700 hover:text-fiPrimary-500"
                        onClick={slideRight}
                    >
                        <MoveRight
                            aria-hidden="true"
                            size={20}
                            color="#00004a"
                        />
                    </button>
                </div>
            </div>
        </>
    );
};

export default FiTestimonialSlider;
