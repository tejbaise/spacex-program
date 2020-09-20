import React, { useCallback, useState } from 'react';
import '../Stylesheets/ProgramDetails.scss';
import Container from 'react-bootstrap/Container';
import Filter from './Filter';
import List from './List';
import withListLoading from '../HOCUtils/withListLoading';

function ProgramDetails() {
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: true,
  });

  const onFilterChange = useCallback((response) => {
    //Add Filter Change Logic Here
  }, []);

  return (
    <Container fluid='xl'>
      <h1>SpaceX Launch Programs</h1>
      <div className='FilterDisplay'>
        <Filter onFilterChange={onFilterChange} />
      </div>
      <div className='ListDisplay'>
        <ListLoading isLoading={appState.loading} />
      </div>
    </Container>
  );
}

export default ProgramDetails;
