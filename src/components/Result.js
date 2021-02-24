import React from 'react';
import forwardArrow from '../assets/Forward.svg';
import TicketCard from './TicketCard';

function Result() {
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
          <TicketCard />
        </div>
      </div>
    </div>
  );
}

export default Result;
