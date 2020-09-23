import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import './List.scss';

const List = (props) => {
  const { flights } = props;
  if (!flights || flights.length === 0) return <p>No flights, sorry!</p>;
  return (
    <Row xs={1} sm={1} md={2} lg={4} xl={4}>
      {flights.map((item) => {
        let missionIds = item.mission_id.map((item) => {
          return <li key={item}>{item}</li>;
        });
        return (
          <Col className='ListWrapper' key={item.flight_number}>
            <Card
              style={{
                width: '14rem',
                padding: '10px',
                height: '450px',
              }}
            >
              <div style={{ padding: '10px' }}>
                <Image
                  style={{ padding: '4px', backgroundColor: '#f0f0f0' }}
                  variant='top'
                  src={item.links.mission_patch_small}
                  thumbnail
                  alt={'Flight Image'}
                />
              </div>

              <Card.Body style={{ padding: '0px' }}>
                <Card.Title className='BlueSpan'>
                  <span className='BoldSpan'>
                    {item.mission_name} #{item.flight_number}
                  </span>
                </Card.Title>
                <span className='BoldSpan'>Mission Ids:</span>
                <br />
                <span className='BlueSpan'>
                  {missionIds.length > 0 ? (
                    <ul style={{ marginBottom: '-25px' }}>{missionIds}</ul>
                  ) : (
                    <span>Not Available</span>
                  )}
                </span>
                <br />
                <span className='BoldSpan'>Launch Year:</span>{' '}
                <span className='BlueSpan'>{item.launch_year}</span>
                <br />
                <span className='BoldSpan'>Successful Launch:</span>{' '}
                <span className='BlueSpan'>
                  {item.launch_success.toString()}
                </span>
                <br />
                <span className='BoldSpan'>Successful Landing:</span>{' '}
                <span className='BlueSpan'>
                  {item.rocket.first_stage.cores[0].land_success?.toString()}
                </span>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};
export default List;
