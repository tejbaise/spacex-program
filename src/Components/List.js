import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

const List = (props) => {
  const { flights } = props;
  if (!flights || flights.length === 0) return <p>No flights, sorry</p>;
  return (
    <Container style={{ padding: '4px' }}>
      <Row xs={1} sm={1} md={2} lg={4} xl={4}>
        {flights.map((item) => {
          let missionIds = item.mission_id.map((item) => {
            return <li key={item}>{item}</li>;
          });
          return (
            <Col key={item.flight_number}>
              <Card style={{ width: '14rem', padding: '10px', margin: '10px' }}>
                <div style={{ padding: '20px' }}>
                  <Image
                    style={{ padding: '2px', backgroundColor: 'lightgrey' }}
                    variant='top'
                    src={item.links.mission_patch_small}
                    thumbnail
                  />
                </div>
                <Card.Body>
                  <Card.Title style={{ color: '#4267b2' }}>
                    <span style={{ fontWeight: 'bold' }}>
                      {item.mission_name} #{item.flight_number}
                    </span>
                  </Card.Title>
                  <Card.Text>
                    <span style={{ fontWeight: 'bold' }}>Mission Ids:</span>
                  </Card.Text>
                  {missionIds.length > 0 ? (
                    <ul>{missionIds}</ul>
                  ) : (
                    <span>Not Available</span>
                  )}
                  <Card.Text>
                    <span style={{ fontWeight: 'bold' }}>Launch Year:</span>{' '}
                    {item.launch_year}
                  </Card.Text>
                  <Card.Text>
                    <span style={{ fontWeight: 'bold' }}>
                      Successful Launch:
                    </span>{' '}
                    {item.launch_success.toString()}
                  </Card.Text>
                  <Card.Text>
                    <span style={{ fontWeight: 'bold' }}>
                      Successful Landing:
                    </span>{' '}
                    {item.rocket.first_stage.cores[0].land_success?.toString()}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
export default List;
