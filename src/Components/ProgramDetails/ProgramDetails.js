import React, { useCallback, useState, useEffect } from 'react';
import './ProgramDetails.scss';
import Container from 'react-bootstrap/Container';
import Filter from '../Filter/Filter';
import List from '../List/List';
import withListLoading from '../../HOCUtils/withListLoading';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

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
  const [urlParams, setUrlParams] = useState('');
  const history = useHistory();

  useEffect(() => {
    history.push(urlParams);
    setAppState({ loading: true });
    fetchFlightData(urlParams).then((flights) => {
      setAppState({ loading: false, flights: flights });
    });
  }, [urlParams, history]);

  const onFilterChange = useCallback((response) => {
    let attr = '';
    if (!!response) {
      if (response.yearFilter) {
        attr += `&launch_year=${response.year[0]}`;
      }
      if (response.successfulLaunchFilter) {
        attr += `&launch_success=${response.successfulLaunch}`;
      }
      if (response.successfulLandingFilter) {
        attr += `&land_success=${response.successfulLanding}`;
      }
    }
    setUrlParams(attr);
  }, []);

  return (
    <Container fluid='xl'>
      <header className='Header'>
        <h1>SpaceX Launch Programs</h1>
      </header>
      <div className='Content'>
        <div className='FilterDisplay'>
          <Filter onFilterChange={onFilterChange} />
        </div>
        <div className='ListDisplay'>
          <ListLoading
            isLoading={appState.loading}
            flights={appState.flights}
          />
        </div>
      </div>
      <footer className='Footer'>
        <h2>
          <span style={{ fontWeight: 'bold' }}>Developed by: </span>Tej Singh
        </h2>
      </footer>
    </Container>
  );
}

export default ProgramDetails;
