import React from "react";
import Link from "next/link";
import DOMPurify from "dompurify";
import moment from "moment";
import {
    _CENTURYBOLD,
    _CENTURYLIGHT,
    _CENTURYREGULAR,
} from "@/utils/constants";

const FiPostCardOnlyText = ({ post }) => {
    return (
        <Link
            href={`/${post.slug}`}
            className={`flex flex-col justify-start items-start gap-y-0 text-slate-700 mb-5 cursor-pointer`}
        >
            <div className={`${_CENTURYLIGHT} text-xs text-slate-600`}>
                {moment(post.date).format("MM-YYYY")}
            </div>
            <h3
                className={`${_CENTURYBOLD} text-lg uppercase leading-8 hover:text-fiLight-600`}
            >
                {post.title}
            </h3>
            <p
                className={`${_CENTURYREGULAR} text-sm leading-5 line-clamp-3`}
                dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(post.content),
                }}
            />
        </Link>
    );
};

export default FiPostCardOnlyText;
