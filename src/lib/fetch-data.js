import { gql } from "@apollo/client";
import { getClient } from "./apollo-client";

export async function getCompanyInfo() {
    const { data } = await getClient().query({
        query: gql`
            query {
                fICountryAdmin {
                    optionsCountryAdmin {
                        fiGroup {
                            businessName
                            address
                            city
                            country
                            businessEmail
                            phoneNumber
                        }
                        socialLinks {
                            fcbkPageUrl
                            igPageUrl
                            linkedinPageUrl
                            xPageUrl
                            xingPageUrl
                            ytPageUrl
                        }
                        facts {
                            factsDescription
                            bigNumber
                        }
                        hhrrDepartment {
                            hhrrCountryResponsable
                            hhrrCountryEmail
                        }
                    }
                }
                fISuperAdmin {
                    superadminFields {
                        fiLogos {
                            desktopHeaderLogo
                            desktopFooterLogo
                            mobileHeaderLogo
                            mobileFooterLogo
                        }
                    }
                }
            }
        `,
        context: {
            fetchOptions: {
                next: { revalidate: 7200 },
            },
        },
    });

    return data;
}

// HEADER
export async function getNewsTracker() {
    const { data } = await getClient().query({
        query: gql`
            query {
                fICountryAdmin {
                    optionsCountryAdmin {
                        headerNewsTracker {
                            postTracker {
                                nodes {
                                    ... on Post {
                                        title
                                        slug
                                        uri
                                    }
                                }
                            }
                            postTrackerEn {
                                nodes {
                                    ... on Post {
                                        title
                                        slug
                                        uri
                                    }
                                }
                            }
                        }
                    }
                }
            }
        `,
        context: {
            fetchOptions: {
                next: { revalidate: 60 },
            },
        },
    });

    return data.fICountryAdmin.optionsCountryAdmin.headerNewsTracker;
}

export async function getNavMenus() {
    const { data } = await getClient().query({
        query: gql`
            query {
                menus {
                    nodes {
                        databaseId
                        locations
                        name
                        count
                        menuItems {
                            nodes {
                                parentId
                                label
                                databaseId
                                uri
                                parentDatabaseId
                            }
                        }
                    }
                }
            }
        `,
        context: {
            fetchOptions: {
                next: { revalidate: 60 },
            },
        },
    });

    return data.menus.nodes;
}

export async function getCountryDomains() {
    const { data } = await getClient().query({
        query: gql`
            query {
                fISuperAdmin {
                    superadminFields {
                        fiCountryDomains {
                            countryName
                            siteUrl
                            isoLangCode
                            isDefault
                            isEnabled
                        }
                    }
                }
            }
        `,
        context: {
            fetchOptions: {
                next: { revalidate: 5 },
            },
        },
    });

    return data.fISuperAdmin.superadminFields.fiCountryDomains;
}

export async function getFooterInfos() {
    const { data } = await getClient().query({
        query: gql`
            query {
                fICountryAdmin {
                    optionsCountryAdmin {
                        fiGroup {
                            businessName
                            address
                            city
                            country
                            businessEmail
                            phoneNumber
                            vatNumber
                        }
                        copyrightInfos {
                            copyrightText
                            copyrightTextEng
                        }
                        socialLinks {
                            fcbkPageUrl
                            igPageUrl
                            linkedinPageUrl
                            xPageUrl
                            xingPageUrl
                            ytPageUrl
                        }
                    }
                }
                fISuperAdmin {
                    superadminFields {
                        partnersLogo {
                            certificationsTitle
                            certificationsTitleEn
                            certificationsLogos {
                                pictureUrl
                            }
                        }
                    }
                }
            }
        `,
        context: {
            fetchOptions: {
                next: { revalidate: 5 },
            },
        },
    });

    return data;
}

export async function AllPostsByFilters(
    first,
    categoryIn,
    categoryName,
    tagIn,
    tagId
) {
    const { data } = await getClient().query({
        query: gql`
            query getAllPostsByFilters(
                $first: Int
                $categoryIn: [ID]
                $categoryName: String = ""
                $tagIn: [ID]
                $tagId: String = ""
            ) {
                posts(
                    first: $first
                    where: {
                        categoryIn: $categoryIn
                        status: PUBLISH
                        categoryName: $categoryName
                        tagIn: $tagIn
                        tagId: $tagId
                    }
                ) {
                    nodes {
                        categories {
                            nodes {
                                databaseId
                                name
                                uri
                                slug
                            }
                        }
                        tags {
                            nodes {
                                databaseId
                                name
                                uri
                            }
                        }
                        databaseId
                        date
                        contentTypeName
                        title
                        slug
                        content(format: RENDERED)
                        featuredImage {
                            node {
                                sourceUrl(size: LARGE)
                                mediaDetails {
                                    width
                                    height
                                }
                                altText
                            }
                        }
                        excerpt
                        isSticky
                    }
                }
            }
        `,
        variables: {
            first,
            categoryIn,
            categoryName,
            tagIn,
            tagId,
        },
        context: {
            fetchOptions: {
                next: { revalidate: 5 },
            },
        },
    });

    return data.posts.nodes;
}

// Query de pruebas
export async function getPostsES(categoryName) {
    const { data } = await getClient().query({
        query: gql`
            query getPosts($categoryName: String = "") {
                posts(where: { categoryName: $categoryName }) {
                    nodes {
                        title
                        slug
                    }
                }
            }
        `,
        variables: {
            categoryName,
        },
        context: {
            fetchOptions: {
                next: { revalidate: 5 },
            },
        },
    });

    return data.posts.nodes;
}
