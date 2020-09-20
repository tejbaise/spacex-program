import React from 'react';
import Container from 'react-bootstrap/Container';

const List = (props) => {
  const { flights } = props;
  console.log('flights', flights)
  return <Container style={{ padding: '4px' }}></Container>;
};

export default List;
