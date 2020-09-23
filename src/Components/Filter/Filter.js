import React, { useState, useEffect } from 'react';
import './Filter.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

let arr = [];
for (let i = 2006; i <= 2019; i++) {
  arr.push(i);
}

function Filter(props) {
  const [filterState, setFilterState] = useState({
    year: arr,
    yearFilter: false,
    successfulLaunch: true,
    successfulLaunchFilter: false,
    successfulLanding: true,
    successfulLandingFilter: false,
  });

  useEffect(() => {
    props.onFilterChange(filterState);
  }, [filterState, props]);

  let yearList = arr.map((item) => {
    return (
      <Col key={item} className='ButtonColumn'>
        <Button
          bsPrefix='FilterButton'
          style={{
            backgroundColor:
              filterState.yearFilter && item === filterState.year[0]
                ? '#70b102'
                : '#bddb8f',
          }}
          value={item}
          onClick={() => {
            if (filterState.year.length === 1 && item !== filterState.year[0]) {
              setFilterState({
                ...filterState,
                yearFilter: true,
                year: [item],
              });
            }
            if (filterState.year.length > 1) {
              setFilterState({
                ...filterState,
                yearFilter: true,
                year: [item],
              });
            }
            if (filterState.year.length === 1 && item === filterState.year[0]) {
              setFilterState({ ...filterState, yearFilter: false, year: arr });
            }
          }}
          variant='primary'
        >
          {item}
        </Button>
      </Col>
    );
  });

  return (
    <div className='FilterWrapper'>
      <Card style={{ width: '14rem', backgroundColor: 'white' }}>
        <h2 style={{ fontWeight: 'bold' }}>Filters</h2>
        <div className='CenterAlign'>
          <div className='FilterSection'>
            <span className='SectionHead'>Launch Year</span>
            <hr className='Divider' />
            <Row xs={2} sm={2} md={2} lg={2} xl={2}>
              {yearList}
            </Row>
          </div>
          <div className='FilterSection'>
            <span className='SectionHead'>Successful Launch</span>
            <hr className='Divider' />
            <Row>
              <Col className='ButtonColumn'>
                <Button
                  bsPrefix='FilterButton'
                  style={{
                    backgroundColor:
                      filterState.successfulLaunchFilter &&
                      filterState.successfulLaunch
                        ? '#70b102'
                        : '#bddb8f',
                  }}
                  variant='primary'
                  disabled={
                    filterState.successfulLaunchFilter &&
                    !filterState.successfulLaunch
                  }
                  onClick={() => {
                    setFilterState({
                      ...filterState,
                      successfulLaunchFilter: !filterState.successfulLaunchFilter,
                      successfulLaunch: true,
                    });
                  }}
                >
                  True
                </Button>
              </Col>
              <Col className='ButtonColumn'>
                <Button
                  bsPrefix='FilterButton'
                  style={{
                    backgroundColor:
                      filterState.successfulLaunchFilter &&
                      !filterState.successfulLaunch
                        ? '#70b102'
                        : '#bddb8f',
                  }}
                  variant='primary'
                  disabled={
                    filterState.successfulLaunchFilter &&
                    filterState.successfulLaunch
                  }
                  onClick={() => {
                    setFilterState({
                      ...filterState,
                      successfulLaunchFilter: !filterState.successfulLaunchFilter,
                      successfulLaunch: false,
                    });
                  }}
                >
                  False
                </Button>
              </Col>
            </Row>
          </div>
          <div className='FilterSection'>
            <span className='SectionHead'>Successful Landing</span>
            <hr className='Divider' />
            <Row>
              <Col className='ButtonColumn'>
                <Button
                  bsPrefix='FilterButton'
                  style={{
                    backgroundColor:
                      filterState.successfulLandingFilter &&
                      filterState.successfulLanding
                        ? '#70b102'
                        : '#bddb8f',
                  }}
                  variant='primary'
                  disabled={
                    filterState.successfulLandingFilter &&
                    !filterState.successfulLanding
                  }
                  onClick={() => {
                    setFilterState({
                      ...filterState,
                      successfulLandingFilter: !filterState.successfulLandingFilter,
                      successfulLanding: true,
                    });
                  }}
                >
                  True
                </Button>
              </Col>
              <Col className='ButtonColumn'>
                <Button
                  bsPrefix='FilterButton'
                  style={{
                    backgroundColor:
                      filterState.successfulLandingFilter &&
                      !filterState.successfulLanding
                        ? '#70b102'
                        : '#bddb8f',
                  }}
                  variant='primary'
                  disabled={
                    filterState.successfulLandingFilter &&
                    filterState.successfulLanding
                  }
                  onClick={() => {
                    setFilterState({
                      ...filterState,
                      successfulLandingFilter: !filterState.successfulLandingFilter,
                      successfulLanding: false,
                    });
                  }}
                >
                  False
                </Button>
              </Col>
            </Row>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Filter;
