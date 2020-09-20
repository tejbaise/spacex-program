import React, {useCallback} from 'react';
import '../Stylesheets/ProgramDetails.scss';
import Container from 'react-bootstrap/Container'
import Filter from './Filter';
import List from './List';

function ProgramDetails() {

  const onFilterChange = useCallback((response) => {
    //Add Filter Change Logic Here
  }, []);

  return (
    <Container fluid='xl'>
      <h1>SpaceX Launch Programs</h1>
      <div className='FilterDisplay'>
        <Filter onFilterChange={onFilterChange}/>
      </div>
      <div className='ListDisplay'>
        <List />
      </div>
    </Container>
  );
}

export default ProgramDetails;
