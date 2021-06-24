import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default function CreateAccount({ props }) {
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
            <Form.Control
              id="createAccountEmail"
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              id="createAccountPassword"
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <Button
            // onClick={() => userLogin()}
            variant="primary"
            size="lg"
            className="shadow-none"
          >
            Create New Account
          </Button>
          <div className="divider"></div>
          <Button
            // onClick={() => manageAppContext.setPage('create-new-account')}
            variant="success"
            size="lg"
            className="shadow-none"
          >
            Log In
          </Button>
        </Form>
      </div>
    </div>
  );
}
