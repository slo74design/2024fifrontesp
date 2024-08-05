import { gql } from "@apollo/client";
import { getClient } from "./apollo-client";

export async function getHomePage(wpPageTemplate) {
    const { data } = await getClient().query({
        query: gql`
            query getHome($wpPageTemplate: String = "") {
                pages(where: { wpPageTemplate: $wpPageTemplate }) {
                    nodes {
                        template {
                            ... on Template_FIHome1 {
                                templateName
                                pageHomeFields {
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
                            }
                        }
                    }
                }
            }
        `,
        variables: {
            wpPageTemplate,
        },
        context: {
            fetchOptions: {
                next: { revalidate: 5 },
            },
        },
    });

    return data.pages.nodes[0];
}
