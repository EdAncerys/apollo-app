import React from 'react';
import { useAuthState } from '../Context/Auth/index';
import { Card, Button } from 'react-bootstrap';
import { setOnePost, useAuthDispatch } from '../Context/Auth/index';

export default function PostCard({ props }) {
  const dispatchAuth = useAuthDispatch();
  const { onePost } = useAuthState();

  return (
    <Card bg="Light" text="dark" style={{ width: '100%' }} className="mb-2">
      <Card.Header>
        <div style={{ textAlign: 'center' }}>{onePost.title}</div>
      </Card.Header>
      {onePost.image.map((img) => {
        console.log(img.url);
        // <Card.Img variant="top" src=`${img.url}/100px180` />
      })}
      <Card.Body>
        <Card.Text>{onePost.body}</Card.Text>
      </Card.Body>
      <Button
        onClick={() => setOnePost(dispatchAuth, false)}
        id={onePost.id}
        size="sm"
        className="shadow-none"
      >
        Go Back
      </Button>
    </Card>
  );
}
