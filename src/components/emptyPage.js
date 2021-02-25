import React from 'react';
import airplane from '../assets/airplane.png';

function emptyPage() {
  return (
    <div className="h-100">
      <div className="d-flex justify-content-center">
        <div>
          <div style={{ height: '100px', width: '100px' }}>
            <img
              src={airplane}
              alt="logo"
              style={{ height: '100%', width: '100%' }}
            />
          </div>
          <div
            className="text-muted"
            style={{ fontSize: '20px', fontWeight: 'bold' }}
          >
            Search for flights
          </div>
        </div>
      </div>
    </div>
  );
}

export default emptyPage;
