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
    });

    return data;
}

export async function getTopBarMenu() {
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
                next: { revalidate: 5 },
            },
        },
    });

    return data.menus.nodes;
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
