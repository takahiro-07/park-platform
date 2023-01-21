import * as Types from './types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type TagQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;


export type TagQuery = { __typename?: 'Query', tag: { __typename?: 'Tag', id: string, name: string, tagNumber: number, activeFlag: boolean } };

export type TagsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type TagsQuery = { __typename?: 'Query', tags: Array<{ __typename?: 'Tag', id: string, name: string, tagNumber: number, activeFlag: boolean }> };


export const TagDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Tag"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tag"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"tagNumber"}},{"kind":"Field","name":{"kind":"Name","value":"activeFlag"}}]}}]}}]} as unknown as DocumentNode<TagQuery, TagQueryVariables>;
export const TagsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"tagNumber"}},{"kind":"Field","name":{"kind":"Name","value":"activeFlag"}}]}}]}}]} as unknown as DocumentNode<TagsQuery, TagsQueryVariables>;