import React, { useState } from 'react';
import Result from './Result';

function Search() {
  const [clickedBtn, setClickedBtn] = useState('oneWay');
  const [passengerCount, setPassengerCount] = useState(0);
  const [priceRange, setPriceRange] = useState(5000);

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
      if (passengerCount === 0) {
        return;
      }
      setPassengerCount(passengerCount - 1);
    }
  };

  const handleFocus = (e) => {
    e.currentTarget.type = 'date';
  };
  const handleBlur = (e) => {
    e.currentTarget.type = 'text';
  };

  return (
    <div>
      <div className="row mt-4 ml-5 mr-5">
        <div className="col-md-5">
          <div className="card">
            <div className="card-body">
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
                    type="text"
                    placeholder="Enter departure date"
                    className="form-control mt-2"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    // onChange={(e) => console.log(e.target.value)}
                  />
                  {clickedBtn === 'return' ? (
                    <input
                      type="text"
                      placeholder="Enter return date"
                      className="form-control mt-2"
                      onFocus={handleFocus}
                      onBlur={handleBlur}
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
                    <div className="text-muted">
                      {passengerCount} passengers
                    </div>
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
              <div className="card mt-4">
                <div className="card-body">
                  <div
                    style={{
                      marginBottom: '.7rem',
                      fontWeight: 'bold',
                    }}
                  >
                    Refine flight search
                  </div>
                  <div>
                    <span tabIndex="0" data-toggle="tooltip" title={priceRange}>
                      <input
                        type="range"
                        style={{
                          width: '100%',
                        }}
                        min="0"
                        max="10000"
                        defaultValue={priceRange}
                        onChange={(e) => setPriceRange(e.target.value)}
                      />
                    </span>
                    <div
                      className="d-flex justify-content-between"
                      style={{ fontSize: '14px' }}
                    >
                      <span>0</span>
                      <span
                        style={{
                          fontSize: '12px',
                          backgroundColor: 'black',
                          borderRadius: '35%',
                          alignItems: 'center',
                          padding: '2px',
                          color: 'white',
                        }}
                      >
                        {priceRange}
                      </span>
                      <span>10000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-7">
          <Result />
        </div>
      </div>
    </div>
  );
}

export default Search;
