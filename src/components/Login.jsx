import React, { useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { logIn, useAuthDispatch } from '../Context/Auth/index';

export default function Login({ setPage }) {
  const dispatchAuth = useAuthDispatch();

  useEffect(() => {
    const listener = (event) => {
      if (event.code === 'Enter' || event.code === 'NumpadEnter') {
        event.preventDefault();
        loginUser();
      }
    };
    document.addEventListener('keydown', listener);
    return () => {
      document.removeEventListener('keydown', listener);
    };
  });

  const loginUser = async () => {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    logIn({ identifier: email, password: password }, dispatchAuth);
  };

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
            onClick={() => setPage('create-new-account')}
            variant="success"
            size="lg"
            className="shadow-none mt-3"
          >
            Create New Account
          </Button>
        </Form>
      </div>
    </div>
  );
}
