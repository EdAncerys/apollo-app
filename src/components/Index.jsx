import React, { useContext, useState } from 'react';
import { AppContext } from '../App';
import { Card, Table, Button } from 'react-bootstrap';
import { gql, useQuery } from '@apollo/client';

export default function CustomerCard({ props }) {
  const { manageAppContext } = useContext(AppContext);
  const [posts, setPosts] = useState([]);

  const GET_POSTS = gql`
    query allPosts {
      posts {
        id
        title
        body
      }
    }
  `;

  function GetPosts() {
    const { loading, error, data } = useQuery(GET_POSTS);

    if (loading) return `Fetching...`;
    if (error) return `Error! ${error.message}`;
    console.log(data);

    return (
      <tbody>
        {data.posts.map((post, index) => {
          return (
            <tr key={post.id.toString()}>
              <td key={post.id.toString()}>{index + 1}</td>
              <td key={post.id.toString()}>
                <div key={index + 1}>{post.title}</div>
              </td>

              <td key={post.id.toString()}>
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
    );
  }
  // const allPosts = useQuery(GET_POSTS).data;

  return (
    <div>
      <Card bg="Light" text="dark" style={{ width: '100%' }} className="mb-2">
        <Card.Header>
          <div>Post List</div>
        </Card.Header>
        <Card.Body>
          <Table responsive bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Post Title</th>
                <th>More</th>
              </tr>
            </thead>
            {GetPosts()}
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
}
