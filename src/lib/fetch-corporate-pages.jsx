import { gql } from "@apollo/client";
import { getClient } from "./apollo-client";

export async function getHomePage(wpPageTemplate, categoryName) {
    const { data } = await getClient().query({
        query: gql`
            query getHome(
                $wpPageTemplate: String = ""
                $categoryName: String = ""
            ) {
                pages(
                    where: {
                        wpPageTemplate: $wpPageTemplate
                        categoryName: $categoryName
                    }
                ) {
                    nodes {
                        template {
                            ... on Template_FIHome1 {
                                templateName
                                pageHomeFields {
                                    heroInfos {
                                        contentPosition
                                        title1stLine
                                        title2ndLine
                                        shortDescription
                                        ctas {
                                            ctaLabel
                                            ctaUrl
                                            ctaLook
                                            ctaType
                                            ctaColor
                                            ctaSize
                                            ctaIcon
                                        }
                                    }
                                    bannerInfos {
                                        title
                                        subtitle
                                        ctaLabel
                                        ctaUrl
                                    }
                                }
                            }
                        }
                    }
                }
                fICountryAdmin {
                    optionsCountryAdmin {
                        facts {
                            bigNumber
                            factsDescription
                        }
                    }
                }
            }
        `,
        variables: {
            wpPageTemplate,
            categoryName,
        },
        context: {
            fetchOptions: {
                next: { revalidate: 5 },
            },
        },
    });

    return data;
}
