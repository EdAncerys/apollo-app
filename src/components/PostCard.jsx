import React from 'react';
import { useAuthState } from '../Context/Auth/index';
import {
  setOnePost,
  deletePost,
  updatePostAction,
  useAuthDispatch,
} from '../Context/Auth/index';
import { Card, Button } from 'react-bootstrap';

import CreatePostCard from './CreatePostCard';

export default function PostCard({ props }) {
  const dispatchAuth = useAuthDispatch();
  const { onePost, jwt, updatePostActionState } = useAuthState();
  console.log(updatePostActionState);

  let postAuthor;
  const findPostAuthor = onePost.users_post;
  if (findPostAuthor) postAuthor = onePost.users_post.username;

  return (
    <>
      {!updatePostActionState.action && (
        <Card bg="Light" text="dark" style={{ width: '100%' }} className="mb-2">
          <Card.Header style={{ textAlign: 'center' }}>
            {onePost.title}
            <br />
          </Card.Header>
          {findPostAuthor && (
            <span
              style={{ textAlign: 'center', fontSize: '16px', margin: '10px' }}
            >
              Post by: {postAuthor}
            </span>
          )}
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
            <Button
              onClick={() => {
                setOnePost(dispatchAuth, false);
                updatePostAction(dispatchAuth, { action: false });
              }}
              size="sm"
              className="shadow-none"
            >
              Go Back
            </Button>
            <Button
              onClick={() => updatePostAction(dispatchAuth, { action: true })}
              size="sm"
              variant="warning"
              className="shadow-none mt-2"
            >
              Update
            </Button>
            <Button
              onClick={() => deletePost({ id: onePost.id }, jwt, dispatchAuth)}
              size="sm"
              variant="danger"
              className="shadow-none mt-2"
            >
              Delete Post
            </Button>
          </Card.Body>
        </Card>
      )}
      {updatePostActionState.action && <CreatePostCard />}
    </>
  );
}
