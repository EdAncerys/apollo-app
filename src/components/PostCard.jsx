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
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          justifyContent: 'center',
          margin: '5px',
        }}
      >
        {onePost.image.map((img) => {
          const url = `http://localhost:1337` + img.url;
          console.log(url);
          return (
            <Card.Img
              src={url}
              alt="Card image"
              key={img.id.toString()}
              style={{ width: '25%', padding: '2px' }}
            />
          );
        })}
      </div>
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
