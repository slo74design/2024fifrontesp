// "use client";

import { ArrowUpRight, MoveRight } from "lucide-react";
import Link from "next/link";

// size: 1) small - 2) medium
// color: 1) fiPrimary-600 - 2) fiLight-600 - 3) fiGreen-600 - 4) FiCommons-100
// icon:
// look: 1) icon only - 2) text only - 3) text icon 4) icon first
// type: 1) simple - 2) outlined - 3) filled

const FiButton = ({ size, color, look, type, text, url, icon }) => {
    const isColor = (color) => {
        switch (color) {
            case 1:
                return "bg-fiPrimary-600 text-white hover:bg-fiPrimary-500";
                break;
            case 2:
                return "bg-fiLight-600 text-white hover:bg-fiLight-700";
                break;
            case 3:
                return "bg-fiGreen-600 text-white hover:bg-fiGreen-700";
                break;
            case 4:
                return "bg-fiCommons-100 text-fiLight-600 hover:bg-fiPrimary-600 hover:text-white";
                break;
            default:
                return "bg-fiPrimary-600 text-white hover:bg-fiPrimary-700";
                break;
        }
    };

    const isSize = (size) => {
        switch (size) {
            case 1:
                return "px-4 py-2 text-xs";
                break;
            case 2:
                return "px-6 py-3 text-sm";
                break;
        }
    };

    const isType = (type) => {
        switch (type) {
            case 1: // simple
                return "ring-0";
                break;
            case 2: // outlined
                return "ring-1 ring-inset ring-gray-300 bg-transparent";
                break;
            case 3: // filled
                return "ring-0 " + isColor(color);
                break;
            default:
                return isColor(color);
                break;
        }
    };

    const isLook = (look) => {
        switch (look) {
            case 1:
                return isIcon(icon);
                break;
            case 2:
                return text;
                break;
            case 3:
                return (
                    <span className="flex flex-row gap-x-1 justify-center items-center">
                        {text}
                        {isIcon(icon)}
                    </span>
                );
                break;
            case 4:
                return (
                    <span className="flex flex-row gap-x-1 justify-center items-center">
                        {isIcon(icon)} {text}
                    </span>
                );
                break;
            default:
                return text;
        }
    };

    const isIcon = (icon) => {
        switch (icon) {
            case 1: // arrow up right
                return <ArrowUpRight size={18} />;
                break;
            case 2:
                return <MoveRight size={18} />;
                break;
            default:
                return <ArrowUpRight size={18} />;
                break;
        }
    };

    return (
        <Link
            href={url}
            className={`rounded-full text-center font-semibold uppercase tracking-widest ${isSize(
                size
            )} ${isType(type)} ${isColor(color)}`}
        >
            {isLook(look)}
        </Link>
    );
};

export default FiButton;
