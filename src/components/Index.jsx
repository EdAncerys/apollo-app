import React, { useState } from 'react';
import { useAuthState } from '../Context/Auth/index';
import { Card, Table, Button } from 'react-bootstrap';
import { getPosts } from '../Context/Auth/index';

export default function Index({ props }) {
  const [posts, setPosts] = useState([]);
  const { jwt } = useAuthState();
  console.log('posts ', posts);

  const renderPosts = async (jwt) => {
    const data = await getPosts(jwt);
    setPosts(data);
  };

  if (jwt) renderPosts();

  return (
    <div>
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
              {posts.map((post, index) => {
                console.log(post.title);
                return (
                  <tr key={post.id.toString() + `a`}>
                    <td key={post.id.toString() + `b`}>{index + 1}</td>
                    <td key={post.id.toString() + `c`}>
                      <div key={index + 1}>{post.title}</div>
                    </td>
                    <td key={post.id.toString() + `d`}>
                      <Button
                        // onClick={() => setFindContract(post.id)}
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
    </div>
  );
}
