"use client";

import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import DOMPurify from "dompurify";
import { Loading } from "@/ux";
import { _CENTURYBOLD, _NOPOSTIMAGE } from "@/utils/constants";
import FiPostCardOnlyText from "./FiPostCardOnlyText";
import { useTranslations } from "next-intl";

const FiPublicationsHome = ({ dataCats: dataCats, posts: posts }) => {
    const t = useTranslations("Generics");
    const [defaultCat, setDefaultCat] = useState(
        dataCats?.nodes.length > 0 && dataCats?.nodes[0].databaseId
    ); // ID de la Categoria de default
    const [postsByCatSelected, setPostsByCatSelected] = useState([]);
    const [firstPost, setFirstPost] = useState({});
    const [lastPosts, setLastPosts] = useState([]);

    useEffect(() => {
        const filteredPosts = [];
        posts.length > 0 &&
            posts.forEach((post) => {
                if (post.categories.nodes[0].databaseId === defaultCat) {
                    filteredPosts.push(post);
                }
            });
        filteredPosts.sort((a, b) => b.isSticky - a.isSticky);
        setFirstPost(filteredPosts[0]);
        setLastPosts(filteredPosts.slice(1, 3));
        setPostsByCatSelected(filteredPosts);
    }, [defaultCat]);

    return (
        <Suspense fallback={<Loading />}>
            <div className="sectionPublicationsHome w-full">
                <div className="grid grid-cols-2 gap-x-12">
                    <div className="flex flex-col justify-start items-start">
                        <div className="flex flex-row justify-start items-center gap-x-3">
                            {dataCats?.nodes.length > 0 &&
                                dataCats?.nodes
                                    .slice(0, 3)
                                    .map((cat, index) => (
                                        <button
                                            data-id={cat.databaseId}
                                            key={index}
                                            className={`${
                                                Number(defaultCat) ===
                                                Number(cat.databaseId)
                                                    ? "text-fiLight-600"
                                                    : "text-slate-700"
                                            } font-light uppercase`}
                                            onClick={() =>
                                                setDefaultCat(cat.databaseId)
                                            }
                                        >
                                            {cat.name}
                                        </button>
                                    ))}
                        </div>
                        {postsByCatSelected.length > 0 ? (
                            <Link
                                href={firstPost.slug}
                                className="flex flex-col justify-start gap-y-4 w-full mt-10"
                            >
                                <Image
                                    src={
                                        firstPost.featuredImage !== null
                                            ? firstPost.featuredImage?.node
                                                  ?.sourceUrl
                                            : _NOPOSTIMAGE
                                    }
                                    alt={
                                        firstPost.featuredImage !== null
                                            ? firstPost.featuredImage.node
                                                  .altText
                                            : ""
                                    }
                                    width={
                                        firstPost.featuredImage !== null
                                            ? firstPost.featuredImage.node
                                                  .mediaDetails.width
                                            : "600"
                                    }
                                    height={
                                        firstPost.featuredImage !== null
                                            ? firstPost.featuredImage.node
                                                  .mediaDetails.height
                                            : "300"
                                    }
                                    className="object-cover object-center w-auto h-80 rounded-3xl shadow-sm"
                                />
                                <div>
                                    <h3 className={`${_CENTURYBOLD} text-xl`}>
                                        {firstPost.title}
                                    </h3>
                                    <div
                                        className="text-slate-700 text-md line-clamp-2"
                                        dangerouslySetInnerHTML={{
                                            __html: DOMPurify.sanitize(
                                                firstPost.content
                                            ),
                                        }}
                                    />
                                </div>
                            </Link>
                        ) : (
                            <p>{t("noposts")}</p>
                        )}
                    </div>
                    <div>
                        {postsByCatSelected.length > 0 && (
                            <div className="flex flex-col justify-start items-start">
                                {lastPosts.length > 0 &&
                                    lastPosts.map((post) => (
                                        <FiPostCardOnlyText
                                            key={post.databaseId}
                                            post={post}
                                        />
                                    ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Suspense>
    );
};

export default FiPublicationsHome;
