import React, { useCallback, useState, useEffect } from 'react';
import '../Stylesheets/ProgramDetails.scss';
import Container from 'react-bootstrap/Container';
import Filter from './Filter';
import List from './List';
import withListLoading from '../HOCUtils/withListLoading';
import axios from 'axios';

async function fetchFlightData(attributes) {
  try {
    const response = await axios.get(
      `https://api.spacexdata.com/v3/launches?limit=100${attributes}`
    );
    return response.data;
  } catch (error) {
    console.error({ error });
    return [];
  }
}

function ProgramDetails() {
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: true,
    flights: null,
  });

  useEffect(() => {
    fetchFlightData().then((flights) => {
      setAppState({ loading: false, flights: flights });
    });
  }, []);

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
        <ListLoading isLoading={appState.loading} flights={appState.flights} />
      </div>
    </Container>
  );
}

export default ProgramDetails;
