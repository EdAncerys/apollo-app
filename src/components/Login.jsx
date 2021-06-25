import React, { useContext, useState } from 'react';
import { AppContext } from '../App';
import { Form, Button } from 'react-bootstrap';
import { gql, useMutation } from '@apollo/client';

export default function Login() {
  const { manageAppContext } = useContext(AppContext);

  // const USER_LOGIN = gql`
  //   mutation login($identifier: String!, $password: String!) {
  //     login(input: { identifier: "john@email.com", password: "password" }) {
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

  const LOGIN_MUTATION = gql`
    mutation LoginMutation($identifier: String!, $password: String!) {
      login(input: { identifier: "john@email.com", password: "password" }) {
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

  // function LoginMutation() {
  //   const [login, { loading, error, data }] = useMutation(LOGIN_MUTATION);

  //   if (loading) return console.log(`Fetching...`);
  //   if (error) return console.log(`Error! ${error.message}`);
  //   console.log(data);
  // }

  // const [login, { loading, error, data }] = useMutation(LOGIN_MUTATION);
  // console.log(error);
  // console.log(data);

  // const [login, { data }] = useMutation(LOGIN_MUTATION, {
  //   variables: {
  //     email: 'john@email.com',
  //     password: 'password',
  //   },
  //   onCompleted: ({ login }) => {
  //     console.log(login);
  //   },
  // });

  return (
    <div className="features">
      <div className="flex-container-50">
        <Form className="form-container">
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              id="loginEmail"
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              id="loginPassword"
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Button
            // onClick={(e) => {
            //   e.preventDefault();
            //   login({
            //     variables: {
            //       identifier: 'john@email.com',
            //       password: 'password',
            //     },
            //   });
            // }}
            // onClick={() => LoginMutation()}
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
