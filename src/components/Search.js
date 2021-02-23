import React, { useState } from 'react';
import Result from './Result';

function Search() {
  const [clickedBtn, setClickedBtn] = useState('oneWay');
  const [passengerCount, setPassengerCount] = useState(0);

  const bookType = [
    {
      name: 'One way',
      id: 'oneWay',
    },
    {
      name: 'Return',
      id: 'return',
    },
  ];

  const handleClick = (id) => {
    console.log(id, 'clicked');
    setClickedBtn(id);
  };

  const handleCount = (key) => {
    if (key === 'add') {
      setPassengerCount(passengerCount + 1);
    } else if (key === 'less') {
      setPassengerCount(passengerCount - 1);
    }
  };

  return (
    <div>
      <div className="row mt-4 ml-5 mr-5">
        <div className="col-md-5">
          <div className="card">
            <div className="card-body">
              <div className="btn-group d-flex justify-content-center">
                {bookType.map((type) => {
                  return (
                    <button
                      type="button"
                      className={`btn ${
                        clickedBtn === type.id ? 'active_btn' : ''
                      }`}
                      key={type.id}
                      onClick={() => handleClick(type.id)}
                    >
                      {type.name}
                    </button>
                  );
                })}
              </div>
              <input
                type="text"
                placeholder="Enter origin city"
                className="form-control mt-4"
              />
              <input
                type="text"
                placeholder="Enter destination city"
                className="form-control mt-2"
              />
              <input
                type="date"
                placeholder="Enter departure date"
                className="form-control mt-2"
                // onChange={(e) => console.log(e.target.value)}
              />
              {clickedBtn === 'return' ? (
                <input
                  type="date"
                  placeholder="Enter return date"
                  className="form-control mt-2"
                />
              ) : null}
              <div
                className="d-flex justify-content-center mt-2"
                style={{ alignItems: 'center' }}
              >
                <button
                  type="button"
                  className="btn btn-secondary mr-2"
                  onClick={() => handleCount('less')}
                >
                  -
                </button>
                <div className="text-muted">{passengerCount} passengers</div>
                <button
                  type="button"
                  className="btn btn-secondary ml-2"
                  onClick={() => handleCount('add')}
                >
                  +
                </button>
              </div>
              <div>
                <button type="button" className="btn search_btn">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-7">
          <div style={{ border: '1px solid' }}>
            <Result />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
