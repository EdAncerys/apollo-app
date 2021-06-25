import React, { useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { logIn, useAuthDispatch, useAuthState } from '../Context/Auth';

// import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

// export const MUTATION_LOG_IN = gql`
//   mutation login($identifier: String!, $password: String!) {
//     login(input: { identifier: $identifier, password: $password }) {
//       jwt
//       user {
//         id
//         username
//         email
//         role {
//           name
//           type
//         }
//       }
//     }
//   }
// `;
// const client = new ApolloClient({
//   uri: 'http://localhost:1337/graphql',
//   cache: new InMemoryCache(),
// });

// const login = async () => {
//   const logInResponse = await client.mutate({
//     mutation: MUTATION_LOG_IN,
//     variables: { identifier: 'john@email.com', password: 'password' },
//   });
//   console.log('logInResponse', logInResponse); //debug
// };
// login();

export default function Login() {
  const dispatchAuth = useAuthDispatch();

  const loginUser = async () => {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    logIn({ identifier: email, password: password }, dispatchAuth);
  };

  const { user, jwt } = useAuthState();
  console.log(jwt);

  return (
    <div className="features">
      <div className="flex-container-50">
        <Form className="form-container">
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control id="email" type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              id="password"
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Button
            onClick={() => loginUser()}
            variant="primary"
            size="lg"
            className="shadow-none"
          >
            Log In
          </Button>
          <div className="divider"></div>
          <Button
            // onClick={() => manageAppContext.setPage('create-new-account')}
            variant="success"
            size="lg"
            className="shadow-none"
          >
            Create New Account
          </Button>
        </Form>
      </div>
    </div>
  );
}
