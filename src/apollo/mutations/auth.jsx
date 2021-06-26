import { gql } from '@apollo/client';

export const MUTATION_LOG_IN = gql`
  mutation login($identifier: String!, $password: String!) {
    login(input: { identifier: $identifier, password: $password }) {
      jwt
      user {
        id
        username
        email
        role {
          name
          type
        }
      }
    }
  }
`;

export const MUTATION_SIGN_UP = gql`
  mutation register($username: String!, $email: String!, $password: String!) {
    register(
      input: { username: $username, email: $email, password: $password }
    ) {
      user {
        id
      }
    }
  }
`;

export const QUERY_GET_POSTS = gql`
  query posts {
    posts {
      id
      title
      body
      image {
        id
        url
      }
    }
  }
`;
