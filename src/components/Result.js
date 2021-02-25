import React from 'react';
import forwardArrow from '../assets/Forward.svg';
import TicketCard from './TicketCard';

function Result(props) {
  const { filteredData, bookReturn, isSearchClicked, returnFilterData } = props;

  return (
    <div className="card">
      <div className="card-body">
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
                <TicketCard filteredData={filteredData} />
              </div>
              {returnFilterData.length && returnFilterData ? (
                <div className="col">
                  <p style={{ color: 'deepskyblue', fontWeight: 'bold' }}>
                    Return flight
                  </p>
                  <TicketCard filteredData={returnFilterData} />
                </div>
              ) : null}
            </div>
          ) : (
            <>
              <p style={{ color: 'deepskyblue', fontWeight: 'bold' }}>
                Departure flight
              </p>
              <TicketCard filteredData={filteredData} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Result;
