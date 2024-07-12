const endpointGraphQL = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT;

async function getAllMenus(cacheSec = 60) {
    const query = `
        query getMenus {
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
                  linkRelationship
                }
              }
            }
          }
        }
    `;

    const variables = {};

    const endpoint = endpointGraphQL;
    if (!endpoint) {
        throw new Error("No endpoint provided");
    }

    const res = await fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        next: {
            revalidate: cacheSec,
        },
        body: JSON.stringify({ query, variables }),
    });

    const responseBody = await res.json();

    if (responseBody && responseBody.data && responseBody.data.menus.nodes) {
        return responseBody.data.menus.nodes;
    }
}

export { getAllMenus };
