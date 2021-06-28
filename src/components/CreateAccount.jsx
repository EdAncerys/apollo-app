import React from 'react';
import { signUp, useAuthDispatch } from '../Context/Auth/index';
import { Form, Button } from 'react-bootstrap';

export default function CreateAccount({ setPage }) {
  const dispatchAuth = useAuthDispatch();

  const loginUser = async () => {
    const username = document.querySelector('#username').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    signUp(
      { username: username, email: email, password: password },
      dispatchAuth
    );
  };

  return (
    <div className="features">
      <div className="flex-container-50">
        <Form className="form-container">
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control id="username" type="text" placeholder="Enter email" />
          </Form.Group>

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
            Create New Account
          </Button>

          <Form.Text style={{ fontSize: '12px' }} className="text-muted">
            By creating account you agree with our Terms & Conditions.
          </Form.Text>

          <Button
            onClick={() => setPage(false)}
            variant="success"
            size="lg"
            className="shadow-none mt-3"
          >
            Log In
          </Button>
        </Form>
      </div>
    </div>
  );
}
