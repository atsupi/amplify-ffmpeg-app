/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getContentList = /* GraphQL */ `
  query GetContentList($id: ID!) {
    getContentList(id: $id) {
      id
      contentBase
      thumbnailPath
      contentPath
      name
      description
      duration
      owner
      image
    }
  }
`;
export const listContentLists = /* GraphQL */ `
  query ListContentLists(
    $filter: ModelContentListFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContentLists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        contentBase
        thumbnailPath
        contentPath
        name
        description
        duration
        owner
        image
      }
      nextToken
    }
  }
`;
