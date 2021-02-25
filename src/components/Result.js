import React from 'react';
import forwardArrow from '../assets/Forward.svg';
import TicketCard from './TicketCard';
import EmptyPage from './emptyPage';

function Result(props) {
  const {
    filteredData,
    bookReturn,
    isSearchClicked,
    returnFilterData,
    passengerCount,
  } = props;

  return (
    <div className="card">
      <div className="card-body">
        {!isSearchClicked &&
        filteredData.length === 0 &&
        returnFilterData.length === 0 ? (
          <div>
            <EmptyPage />
          </div>
        ) : isSearchClicked &&
          filteredData.length === 0 &&
          returnFilterData.length === 0 ? (
          <div
            className="d-flex justify-content-center"
            style={{ color: 'red' }}
          >
            <h3>Not Found</h3>
          </div>
        ) : (
          <div>
            <div className="mb-4">
              <div
                style={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                }}
              >
                Available flights{' '}
                <span>
                  <img src={forwardArrow} alt="arrow" className="ml-2" />
                </span>
              </div>
              <div>
                Date : {new Date().getDate()}/{new Date().getMonth()}/
                {new Date().getFullYear()}
              </div>
            </div>
            <div>
              {bookReturn && isSearchClicked ? (
                <div className="row">
                  <div className="col">
                    <p style={{ color: 'deepskyblue', fontWeight: 'bold' }}>
                      Departure flight
                    </p>
                    <TicketCard
                      filteredData={filteredData}
                      passengerCount={passengerCount}
                    />
                  </div>
                  {returnFilterData.length && returnFilterData ? (
                    <div className="col">
                      <p style={{ color: 'deepskyblue', fontWeight: 'bold' }}>
                        Return flight
                      </p>
                      <TicketCard
                        filteredData={returnFilterData}
                        passengerCount={passengerCount}
                      />
                    </div>
                  ) : null}
                </div>
              ) : (
                <>
                  <p style={{ color: 'deepskyblue', fontWeight: 'bold' }}>
                    Departure flight
                  </p>
                  <TicketCard
                    filteredData={filteredData}
                    passengerCount={passengerCount}
                  />
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Result;
