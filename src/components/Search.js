import React, { useState } from 'react';
import Result from './Result';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

function Search() {
  const [btnType, setbtnType] = useState('oneWay');
  const [passengerCount, setPassengerCount] = useState(1);
  const [priceRange, setPriceRange] = useState(5000);

  const [bookReturn, setBookReturn] = useState(false);
  const [originCity, setOriginCity] = useState('');
  const [destinationCity, setDestinationCity] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

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

  const handleBookType = (id) => {
    console.log(id, 'clicked');
    setbtnType(id);
    if (id === 'oneWay') {
      setBookReturn(false);
    } else if (id === 'return') {
      setBookReturn(true);
    }
  };

  const handleCount = (key) => {
    if (key === 'add') {
      setPassengerCount(passengerCount + 1);
    } else if (key === 'less') {
      if (passengerCount === 1) {
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

  const handleSearch = () => {
    console.log('bookReturn', bookReturn);
    console.log('originCity', originCity);
    console.log('destinationCity', destinationCity);
    console.log('departureDate', departureDate);
    console.log('passengerCount', passengerCount);
    console.log('returnDAte', returnDate);
    if (bookReturn && !returnDate) {
      alert("Return date can't be empty!");
    } else if (!originCity) {
      alert("Origin city can't be empty!");
    } else if (!destinationCity) {
      alert("Destination city can't be empty!");
    } else if (!departureDate) {
      alert("Departure date can't be empty!");
    }
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
                            btnType === type.id ? 'active_btn' : ''
                          }`}
                          key={type.id}
                          onClick={() => handleBookType(type.id)}
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
                    onChange={(e) => setOriginCity(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Enter destination city"
                    className="form-control mt-2"
                    onChange={(e) => setDestinationCity(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Enter departure date"
                    className="form-control mt-2"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={(e) => setDepartureDate(e.target.value)}
                  />
                  {btnType === 'return' ? (
                    <input
                      type="text"
                      placeholder="Enter return date"
                      className="form-control mt-2"
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      onChange={(e) => setReturnDate(e.target.value)}
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
                    <button
                      type="button"
                      className="btn search_btn"
                      onClick={handleSearch}
                    >
                      <b>Search</b>
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
                  <div className="mt-4 mb-4">
                    <InputRange
                      minValue={0}
                      maxValue={10000}
                      formatLabel={(price) => `${price}`}
                      value={priceRange}
                      onChange={(price) => setPriceRange(price)}
                    />
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
