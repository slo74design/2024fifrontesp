import React from "react";
import Link from "next/link";
import { BiLogoLinkedin } from "react-icons/bi";
import { RiFacebookFill, RiTwitterXLine } from "react-icons/ri";
import { FaInstagram, FaXing, FaYoutube } from "react-icons/fa";

const SocialLinks = ({ socials }) => {
    return (
        <div
            className={`flex flex-row justify-center items-center gap-x-2.5 text-white`}
        >
            {socials.linkedinPageUrl !== null && (
                <Link target="_blank" href={socials.linkedinPageUrl}>
                    <BiLogoLinkedin className="w-5 h-auto hover:text-fiLight-600 cursor-default" />
                </Link>
            )}
            {socials.fcbkPageUrl !== null && (
                <Link target="_blank" href={socials.fcbkPageUrl}>
                    <RiFacebookFill className="w-5 h-auto hover:text-fiLight-600 cursor-default" />
                </Link>
            )}
            {socials.igPageUrl !== null && (
                <Link target="_blank" href={socials.igPageUrl}>
                    <FaInstagram className="w-5 h-auto hover:text-fiLight-600 cursor-default" />
                </Link>
            )}
            {socials.xPageUrl !== null && (
                <Link target="_blank" href={socials.xPageUrl}>
                    <RiTwitterXLine className="w-5 h-auto hover:text-fiLight-600 cursor-default" />
                </Link>
            )}
            {socials.xingPageUrl !== null && (
                <Link target="_blank" href={socials.xingPageUrl}>
                    <FaXing className="w-5 h-auto hover:text-fiLight-600 cursor-default" />
                </Link>
            )}
            {socials.ytPageUrl !== null && (
                <Link target="_blank" href={socials.ytPageUrl}>
                    <FaYoutube className="w-5 h-auto hover:text-fiLight-600 cursor-default" />
                </Link>
            )}
        </div>
    );
};

export default SocialLinks;
