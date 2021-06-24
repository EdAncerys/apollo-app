import React, { useContext } from 'react';
import { AppContext } from '../App';
import { Card, Table, Button } from 'react-bootstrap';
import { gql, useQuery } from '@apollo/client';

export default function CustomerCard({ props }) {
  const { manageAppContext } = useContext(AppContext);

  const GET_GREETING = gql`
    query allPosts {
      posts {
        id
        title
        body
      }
    }
  `;

  const allPosts = useQuery(GET_GREETING).data;
  console.log(allPosts);

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
                <th>Title</th>
                <th>More</th>
              </tr>
            </thead>
            <tbody>
              {/* {pageData.map((post, index) => {
                return (
                  <tr key={customer._id.toString()}>
                    <td key={customer._id.toString() + 'a'}>{index + 1}</td>
                    <td key={customer._id.toString() + 'b'}>
                      <div key={index + 1}>
                        {customerData.companyName}
                        {notFound && `Customer not found!`}
                      </div>
                      <div key={index + 2} style={styles.bottomRow}>
                        {customerData.companyName}
                      </div>
                    </td>
                    <td key={customer._id.toString() + 'c'}>
                      <div key={index + 1}>
                      </div>
                      <div key={index + 2} style={styles.bottomRow}>
                        {customerData.postcode}
                      </div>
                    </td>
                    <td key={customer._id.toString() + 'd'}>
                      <div key={index + 1}>{broadbandData.provider}</div>
                      <div key={index + 2} style={styles.bottomRow}>
                        {broadbandData.technology}
                      </div>
                    </td>
                    <td key={customer._id.toString() + 'e'} style={styles.btn}>
                      <Button
                        onClick={() => setFindContract(customer._id)}
                        id={customer._id}
                        size="sm"
                        className="shadow-none"
                      >
                        Contract Info
                      </Button>
                    </td>
                  </tr>
                );
              })} */}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
}
