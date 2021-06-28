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

export const QUERY_GET_ONE_POST = gql`
  query getOnePost($id: ID!) {
    post(id: $id) {
      id
      title
      body
      image {
        id
        url
      }
      tags {
        id
        tagName
      }
      users_post {
        id
        email
        username
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
    }
  }
`;

// export const MUTATION_CREATE_POST = gql`
//   mutation createPost($title: String!, $body: String!, $image: Upload) {
//     createPost(input: { data: { title: $title, body: $body, image: $image } }) {
//       post {
//         id
//         title
//         body
//         image
//       }
//     }
//   }
// `;

export const MUTATION_CREATE_POST = gql`
  mutation createPost($title: String!, $body: String!) {
    createPost(input: { data: { title: $title, body: $body } }) {
      post {
        id
        title
        body
        image {
          id
          url
        }
      }
    }
  }
`;
