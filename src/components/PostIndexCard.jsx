import React, { useEffect } from 'react';
import { useAuthState } from '../Context/Auth/index';
import { Card, Table, Button } from 'react-bootstrap';
import { getPosts, getOnePost, useAuthDispatch } from '../Context/Auth/index';

export default function PostIndexCard({ props }) {
  const dispatchAuth = useAuthDispatch();
  const { jwt, posts } = useAuthState();
  const data = Object.entries(posts).map(([key, value]) => value);

  useEffect(() => {
    getPosts(jwt, dispatchAuth);
  }, [jwt, dispatchAuth]);

  return (
    <Card bg="Light" text="dark" style={{ width: '100%' }} className="mb-2">
      <Card.Header>
        <div style={{ textAlign: 'center' }}>Article List</div>
      </Card.Header>
      <Card.Body>
        <Table responsive bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Article Title</th>
              <th>More</th>
            </tr>
          </thead>
          <tbody>
            {data.map((post, index) => {
              return (
                <tr style={{ fontSize: '20px' }} key={post.id.toString() + `a`}>
                  <td key={post.id.toString() + `b`}>{index + 1}</td>
                  <td key={post.id.toString() + `c`}>
                    <div key={index + 1}>{post.title}</div>
                  </td>
                  <td key={post.id.toString() + `d`}>
                    <Button
                      onClick={() => getOnePost(jwt, post.id, dispatchAuth)}
                      id={post.id}
                      size="sm"
                      className="shadow-none"
                    >
                      Go To Article
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}
