import React from 'react';
import { useAuthState } from '../Context/Auth/index';
import { setOnePost, useAuthDispatch } from '../Context/Auth/index';
import { Card, Button } from 'react-bootstrap';

export default function PostCard({ props }) {
  const dispatchAuth = useAuthDispatch();
  const { onePost } = useAuthState();

  return (
    <Card bg="Light" text="dark" style={{ width: '100%' }} className="mb-2">
      <Card.Header style={{ textAlign: 'center' }}>
        {onePost.title}
        <br />
      </Card.Header>
      <span style={{ textAlign: 'center', fontSize: '16px', margin: '10px' }}>
        Post by: {onePost.users_post.username}
      </span>
      <span
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
      </span>
      <Card.Body>
        <Card.Text>{onePost.body}</Card.Text>
        <Card.Text>
          {onePost.tags.map((tag) => {
            return (
              <span
                style={{ fontSize: '16px', color: 'silver', margin: '5px' }}
                key={tag.id.toString()}
              >
                {tag.tagName}
              </span>
            );
          })}
        </Card.Text>
      </Card.Body>
      <Button
        onClick={() => setOnePost(dispatchAuth, false)}
        size="sm"
        className="shadow-none"
      >
        Go Back
      </Button>
      <Button
        // onClick={() => setOnePost(dispatchAuth, false)}
        size="sm"
        variant="warning"
        className="shadow-none mt-2"
      >
        Update
      </Button>
      <Button
        // onClick={() => setOnePost(dispatchAuth, false)}
        size="sm"
        variant="danger"
        className="shadow-none mt-2"
      >
        Delete Post
      </Button>
    </Card>
  );
}
