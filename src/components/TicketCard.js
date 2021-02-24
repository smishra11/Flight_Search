import React from 'react';

function TicketCard() {
  return (
    <div className="card">
      <div className="card-body">
        <div style={{ display: 'flex' }}>
          <div style={{ width: '50%', fontSize: '13px' }}>
            <div style={{ fontSize: '14px', marginBottom: '6px' }}>
              <b>₹ 2500</b>
            </div>
            <div>AI-407</div>
            <div>PNQ {'>>'} DEL</div>
            <div>Date: 23.02.2021</div>
            <div>Depart: 05:10pm</div>
            <div>Arrive: 07:05pm</div>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              width: '50%',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <div>Flight image</div>
            <div>Book</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketCard;
