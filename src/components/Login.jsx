import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default function login() {
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
            // onClick={() => userLogin()}
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
