import React from 'react';
import { useAuthState } from '../Context/Auth/index';
import { Card, Table, Button } from 'react-bootstrap';
import { getPosts } from '../Context/Auth/index';

export default function Index({ props }) {
  const { jwt } = useAuthState();

  if (jwt) getPosts(jwt);
  const loginUser = async (jwt) => {};

  // function GetPosts() {
  //   const GET_POSTS = gql`
  //     query allPosts {
  //       posts {
  //         id
  //         title
  //         body
  //       }
  //     }
  //   `;
  //   const { loading, error, data } = useQuery(GET_POSTS);

  //   if (loading) return console.log(`Fetching...`);
  //   if (error) return console.log(`Error! ${error.message}`);
  //   console.log(data);

  //   return (
  //     <tbody>
  //       {data.posts.map((post, index) => {
  //         return (
  //           <tr key={post.id.toString() + `a`}>
  //             <td key={post.id.toString() + `b`}>{index + 1}</td>
  //             <td key={post.id.toString() + `c`}>
  //               <div key={index + 1}>{post.title}</div>
  //             </td>

  //             <td key={post.id.toString() + `d`}>
  //               <Button
  //                 // onClick={() => setFindContract(post.id)}
  //                 id={post.id}
  //                 size="sm"
  //                 className="shadow-none"
  //               >
  //                 Go To Article
  //               </Button>
  //             </td>
  //           </tr>
  //         );
  //       })}
  //     </tbody>
  //   );
  // }

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
            {/* {GetPosts()} */}
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
}
