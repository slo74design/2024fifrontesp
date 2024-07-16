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
                next: { revalidate: 600 },
            },
        },
    });

    return data.fISuperAdmin.superadminFields.fiCountryDomains;
}

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
