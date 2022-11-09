/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateContentList = /* GraphQL */ `
  subscription OnCreateContentList(
    $filter: ModelSubscriptionContentListFilterInput
    $owner: String
  ) {
    onCreateContentList(filter: $filter, owner: $owner) {
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
export const onUpdateContentList = /* GraphQL */ `
  subscription OnUpdateContentList(
    $filter: ModelSubscriptionContentListFilterInput
    $owner: String
  ) {
    onUpdateContentList(filter: $filter, owner: $owner) {
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
export const onDeleteContentList = /* GraphQL */ `
  subscription OnDeleteContentList(
    $filter: ModelSubscriptionContentListFilterInput
    $owner: String
  ) {
    onDeleteContentList(filter: $filter, owner: $owner) {
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
