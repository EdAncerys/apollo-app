import React, { useEffect } from 'react';
import { useAuthState } from '../Context/Auth/index';
import {
  createNewPost,
  createPostAction,
  updatePostAction,
  useAuthDispatch,
  updateOldPost,
} from '../Context/Auth/index';
import { Card, Button, Form } from 'react-bootstrap';

export default function CreatePostCard({ props }) {
  const dispatchAuth = useAuthDispatch();
  const { jwt, updatePostActionState, onePost } = useAuthState();
  const updateAction = updatePostActionState.action;

  useEffect(() => {
    if (updateAction) document.querySelector('#title').value = onePost.title;
    if (updateAction) document.querySelector('#body').value = onePost.body;
  }, [updateAction]);

  const publishPost = async () => {
    const title = document.querySelector('#title').value;
    const body = document.querySelector('#body').value;
    // const image = document.querySelector('#image').files[0];
    // console.log(image);
    const newPostData = { title, body };

    createNewPost(newPostData, jwt, dispatchAuth);
  };

  const updatePost = async () => {
    const title = document.querySelector('#title').value;
    const body = document.querySelector('#body').value;
    const updatePostData = { id: onePost.id, title, body };

    updateOldPost(updatePostData, jwt, dispatchAuth);
  };

  return (
    <Card bg="Light" text="dark" style={{ width: '100%' }} className="mb-2">
      <Card.Header style={{ textAlign: 'center' }}>
        {updateAction ? 'Update' : 'Create New'} Post Page
      </Card.Header>

      <Card.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Subject</Form.Label>
            <Form.Control id="title" placeholder="Post title" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              id="body"
              as="textarea"
              placeholder="Post description"
              rows={6}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Choose your image</Form.Label>
            <Form.Control id="image" type="file" size="sm" accept="image/*" />
          </Form.Group>

          <Button
            onClick={() => {
              if (!updateAction) publishPost();
              if (updateAction) updatePost();
            }}
            size="sm"
            variant="success"
            className="shadow-none"
          >
            {updateAction ? 'Update' : 'Publish'} Post
          </Button>
          <Button
            onClick={() => {
              if (!updateAction)
                createPostAction(dispatchAuth, { action: false });
              if (updateAction)
                updatePostAction(dispatchAuth, { action: false });
            }}
            size="sm"
            className="shadow-none mt-2"
          >
            Go Back
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
