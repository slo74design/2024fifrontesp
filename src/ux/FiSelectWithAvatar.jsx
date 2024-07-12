"use client";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import CldImage from "./CldImage";
import Image from "next/image";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const FiSelectWithAvatar = ({ itemsList = [] }) => {
    const [selected, setSelected] = useState(itemsList[2]);
    return (
        <Listbox value={selected} onChange={setSelected}>
            {({ open }) => (
                <>
                    <div className="relative">
                        <Listbox.Button className="relative w-auto cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-slate-700 ring-none focus:outline-none focus:ring-none sm:text-sm sm:leading-6">
                            <span className="flex items-center">
                                <Image
                                    width="48"
                                    height="48"
                                    src={selected.avatar}
                                    sizes="100vw"
                                    alt="Description of my image"
                                    className="h-5 w-5 flex-shrink-0 rounded-full"
                                />
                                <span className="ml-3 block truncate">
                                    {selected.name}
                                </span>
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                <ChevronUpDownIcon
                                    className="h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                />
                            </span>
                        </Listbox.Button>

                        <Transition
                            show={open}
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-auto overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {itemsList.map((person) => (
                                    <Listbox.Option
                                        key={person.id}
                                        className={({ active }) =>
                                            classNames(
                                                active
                                                    ? "bg-indigo-600 text-white"
                                                    : "text-slate-700",
                                                "relative cursor-default select-none py-2 pl-3 pr-9"
                                            )
                                        }
                                        value={person}
                                    >
                                        {({ selected, active }) => (
                                            <>
                                                <div className="flex items-center">
                                                    <Image
                                                        width="48"
                                                        height="48"
                                                        src={person.avatar}
                                                        sizes="100vw"
                                                        alt="Description of my image"
                                                        className="h-5 w-5 flex-shrink-0 rounded-full"
                                                    />
                                                    <span
                                                        className={classNames(
                                                            selected
                                                                ? "font-semibold"
                                                                : "font-normal",
                                                            "ml-3 block truncate"
                                                        )}
                                                    >
                                                        {person.name}
                                                    </span>
                                                </div>

                                                {selected ? (
                                                    <span
                                                        className={classNames(
                                                            active
                                                                ? "text-white"
                                                                : "text-indigo-600",
                                                            "absolute inset-y-0 right-0 flex items-center pr-4"
                                                        )}
                                                    >
                                                        <CheckIcon
                                                            className="h-5 w-5"
                                                            aria-hidden="true"
                                                        />
                                                    </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </>
            )}
        </Listbox>
    );
};

export default FiSelectWithAvatar;
