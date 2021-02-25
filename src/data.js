import airAsia from './assets/airAsia.png';
import airIndia from './assets/airIndia.png';
import emirates from './assets/emirates.png';
import kuwait from './assets/Kuwait_Airways.png';
import qatar from './assets/qatar_Airways.png';
import saudia from './assets/Saudia.png';
import vistara from './assets/vistara.png';

const data = [
  // Date:25/02/2021
  {
    price: 2500,
    depart: '2021-02-25',
    arrival: '2021-02-25',
    departTime: '10.15 am',
    arrivalTime: '11.45 am',
    code: 'TY-6239',
    flightImg: saudia,
    from: {
      city: 'Delhi-DEL',
      short: 'DEL',
    },
    to: {
      city: 'Mumbai-BOM',
      short: 'BOM',
    },
  },
  {
    price: 8500,
    depart: '2021-02-25',
    arrival: '2021-02-25',
    departTime: '12.20 pm',
    arrivalTime: '1.45 pm',
    code: 'TY-6239',
    flightImg: airIndia,
    from: {
      city: 'Delhi-DEL',
      short: 'DEL',
    },
    to: {
      city: 'Mumbai-BOM',
      short: 'BOM',
    },
  },
  {
    price: 5500,
    depart: '2021-02-25',
    arrival: '2021-02-25',
    departTime: '4.20 pm',
    arrivalTime: '6.35 pm',
    code: 'TY-6239',
    flightImg: emirates,
    from: {
      city: 'Mumbai-BOM',
      short: 'BOM',
    },
    to: {
      city: 'Delhi-DEL',
      short: 'DEL',
    },
  },
  {
    price: 3800,
    depart: '2021-02-25',
    arrival: '2021-02-25',
    departTime: '7.05 pm',
    arrivalTime: '8.25 pm',
    code: 'TY-6239',
    flightImg: kuwait,
    from: {
      city: 'Mumbai-BOM',
      short: 'BOM',
    },
    to: {
      city: 'Delhi-DEL',
      short: 'DEL',
    },
  },
  {
    price: 7300,
    depart: '2021-02-25',
    arrival: '2021-02-25',
    departTime: '5.05 pm',
    arrivalTime: '6.25 pm',
    code: 'TY-6239',
    flightImg: qatar,
    from: {
      city: 'Mumbai-BOM',
      short: 'BOM',
    },
    to: {
      city: 'Bangalore-BLR',
      short: 'BLR',
    },
  },
  {
    price: 2400,
    depart: '2021-02-25',
    arrival: '2021-02-25',
    departTime: '9.05 am',
    arrivalTime: '10.25 am',
    code: 'TY-6239',
    flightImg: saudia,
    from: {
      city: 'Mumbai-BOM',
      short: 'BOM',
    },
    to: {
      city: 'Bangalore-BLR',
      short: 'BLR',
    },
  },
  {
    price: 2900,
    depart: '2021-02-25',
    arrival: '2021-02-25',
    departTime: '9.50 am',
    arrivalTime: '11.25 am',
    code: 'TY-6239',
    flightImg: airAsia,
    from: {
      city: 'Bangalore-BLR',
      short: 'BLR',
    },
    to: {
      city: 'Mumbai-BOM',
      short: 'BOM',
    },
  },
  {
    price: 3500,
    depart: '2021-02-25',
    arrival: '2021-02-25',
    departTime: '11.23 am',
    arrivalTime: '12.25 pm',
    code: 'TY-6239',
    flightImg: vistara,
    from: {
      city: 'Mumbai-BOM',
      short: 'BOM',
    },
    to: {
      city: 'Hyderabad-HYD',
      short: 'HYD',
    },
  },
  {
    price: 4500,
    depart: '2021-02-25',
    arrival: '2021-02-25',
    departTime: '1.25 pm',
    arrivalTime: '2.45 pm',
    code: 'TY-6239',
    flightImg: airAsia,
    from: {
      city: 'Mumbai-BOM',
      short: 'BOM',
    },
    to: {
      city: 'Hyderabad-HYD',
      short: 'HYD',
    },
  },
  {
    price: 3300,
    depart: '2021-02-25',
    arrival: '2021-02-25',
    departTime: '1.55 pm',
    arrivalTime: '3.10 pm',
    code: 'TY-6239',
    flightImg: airIndia,
    from: {
      city: 'Hyderabad-HYD',
      short: 'HYD',
    },
    to: {
      city: 'Mumbai-BOM',
      short: 'BOM',
    },
  },
  {
    price: 3400,
    depart: '2021-02-25',
    arrival: '2021-02-25',
    departTime: '4.05 pm',
    arrivalTime: '5.45 pm',
    code: 'TY-6239',
    flightImg: emirates,
    from: {
      city: 'Hyderabad-HYD',
      short: 'HYD',
    },
    to: {
      city: 'Mumbai-BOM',
      short: 'BOM',
    },
  },
  {
    price: 5100,
    depart: '2021-02-25',
    arrival: '2021-02-25',
    departTime: '1.23 pm',
    arrivalTime: '3.45 pm',
    code: 'TY-6239',
    flightImg: kuwait,
    from: {
      city: 'Delhi-DEL',
      short: 'DEl',
    },
    to: {
      city: 'Bangalore-BLR',
      short: 'BLR',
    },
  },
  {
    price: 3500,
    depart: '2021-02-25',
    arrival: '2021-02-25',
    departTime: '2.33 pm',
    arrivalTime: '3.27 pm',
    code: 'TY-6239',
    flightImg: qatar,
    from: {
      city: 'Delhi-DEL',
      short: 'DEl',
    },
    to: {
      city: 'Bangalore-BLR',
      short: 'BLR',
    },
  },
  {
    price: 9500,
    depart: '2021-02-25',
    arrival: '2021-02-25',
    departTime: '4.19 pm',
    arrivalTime: '5.50 pm',
    code: 'TY-6239',
    flightImg: saudia,
    from: {
      city: 'Bangalore-BLR',
      short: 'BLR',
    },
    to: {
      city: 'Delhi-DEL',
      short: 'DEL',
    },
  },
  {
    price: 1500,
    depart: '2021-02-25',
    arrival: '2021-02-25',
    departTime: '7.33 am',
    arrivalTime: '8.57 am',
    code: 'TY-6239',
    flightImg: vistara,
    from: {
      city: 'Bangalore-BLR',
      short: 'BLR',
    },
    to: {
      city: 'Delhi-DEL',
      short: 'DEL',
    },
  },
  {
    price: 6540,
    depart: '2021-02-25',
    arrival: '2021-02-25',
    departTime: '9.14 am',
    arrivalTime: '10.45 am',
    code: 'TY-6239',
    flightImg: airAsia,
    from: {
      city: 'Delhi-DEL',
      short: 'DEL',
    },
    to: {
      city: 'Hyderabad-HYD',
      short: 'HYD',
    },
  },
  {
    price: 8943,
    depart: '2021-02-25',
    arrival: '2021-02-25',
    departTime: '11.00 am',
    arrivalTime: '12.30 pm',
    code: 'TY-6239',
    flightImg: airIndia,
    from: {
      city: 'Hyderabad-HYD',
      short: 'HYD',
    },
    to: {
      city: 'Delhi-DEL',
      short: 'DEL',
    },
  },
  {
    price: 4578,
    depart: '2021-02-25',
    arrival: '2021-02-25',
    departTime: '12.45 pm',
    arrivalTime: '1.50 pm',
    code: 'TY-6239',
    flightImg: emirates,
    from: {
      city: 'Hyderabad-HYD',
      short: 'HYD',
    },
    to: {
      city: 'Delhi-DEL',
      short: 'DEL',
    },
  },
  {
    price: 6712,
    depart: '2021-02-25',
    arrival: '2021-02-25',
    departTime: '2.05 pm',
    arrivalTime: '3.10 pm',
    code: 'TY-6239',
    flightImg: kuwait,
    from: {
      city: 'Bangalore-BLR',
      short: 'BLR',
    },
    to: {
      city: 'Hyderabad-HYD',
      short: 'HYD',
    },
  },
  {
    price: 2500,
    depart: '2021-02-25',
    arrival: '2021-02-25',
    departTime: '3.15 pm',
    arrivalTime: '4.25 pm',
    code: 'TY-6239',
    flightImg: qatar,
    from: {
      city: 'Bangalore-BLR',
      short: 'BLR',
    },
    to: {
      city: 'Hyderabad-HYD',
      short: 'HYD',
    },
  },
  {
    price: 2500,
    depart: '2021-02-25',
    arrival: '2021-02-25',
    departTime: '4.35 pm',
    arrivalTime: '5.53 pm',
    code: 'TY-6239',
    flightImg: saudia,
    from: {
      city: 'Hyderabad-HYD',
      short: 'HYD',
    },
    to: {
      city: 'Bangalore-BLR',
      short: 'BLR',
    },
  },
  {
    price: 3500,
    depart: '2021-02-25',
    arrival: '2021-02-25',
    departTime: '6.00 pm',
    arrivalTime: '7.20 pm',
    code: 'TY-6239',
    flightImg: vistara,
    from: {
      city: 'Hyderabad-HYD',
      short: 'HYD',
    },
    to: {
      city: 'Bangalore-BLR',
      short: 'BLR',
    },
  },
  // date-26/02/2021
  {
    price: 5500,
    depart: '2021-02-26',
    arrival: '2021-02-26',
    departTime: '10.15 am',
    arrivalTime: '11.45 am',
    code: 'TY-6239',
    flightImg: airAsia,
    from: {
      full: 'Delhi-DEL',
      short: 'DEL',
    },
    to: {
      city: 'Mumbai-BOM',
      short: 'BOM',
    },
  },
  {
    price: 4590,
    depart: '2021-02-26',
    arrival: '2021-02-26',
    departTime: '12.20 pm',
    arrivalTime: '1.45 pm',
    code: 'TY-6239',
    flightImg: airIndia,
    from: {
      city: 'Delhi-DEL',
      short: 'DEL',
    },
    to: {
      city: 'Mumbai-BOM',
      short: 'BOM',
    },
  },
  {
    price: 2500,
    depart: '2021-02-26',
    arrival: '2021-02-26',
    departTime: '4.20 pm',
    arrivalTime: '6.35 pm',
    code: 'TY-6239',
    flightImg: emirates,
    from: {
      city: 'Mumbai-BOM',
      short: 'BOM',
    },
    to: {
      city: 'Delhi-DEL',
      short: 'DEL',
    },
  },
  {
    price: 5500,
    depart: '2021-02-26',
    arrival: '2021-02-26',
    departTime: '7.05 pm',
    arrivalTime: '8.25 pm',
    code: 'TY-6239',
    flightImg: kuwait,
    from: {
      city: 'Mumbai-BOM',
      short: 'BOM',
    },
    to: {
      city: 'Delhi-DEL',
      short: 'DEL',
    },
  },
  {
    price: 2500,
    depart: '2021-02-26',
    arrival: '2021-02-26',
    departTime: '5.05 pm',
    arrivalTime: '6.25 pm',
    code: 'TY-6239',
    flightImg: qatar,
    from: {
      city: 'Mumbai-BOM',
      short: 'BOM',
    },
    to: {
      city: 'Bangalore-BLR',
      short: 'BLR',
    },
  },
  {
    price: 5500,
    depart: '2021-02-26',
    arrival: '2021-02-26',
    departTime: '9.05 am',
    arrivalTime: '10.25 am',
    code: 'TY-6239',
    flightImg: saudia,
    from: {
      city: 'Mumbai-BOM',
      short: 'BOM',
    },
    to: {
      city: 'Bangalore-BLR',
      short: 'BLR',
    },
  },
  {
    price: 2500,
    depart: '2021-02-26',
    arrival: '2021-02-26',
    departTime: '9.50 am',
    arrivalTime: '11.25 am',
    code: 'TY-6239',
    flightImg: vistara,
    from: {
      city: 'Bangalore-BLR',
      short: 'BLR',
    },
    to: {
      city: 'Mumbai-BOM',
      short: 'BOM',
    },
  },
  {
    price: 2500,
    depart: '2021-02-26',
    arrival: '2021-02-26',
    departTime: '11.23 am',
    arrivalTime: '12.25 pm',
    code: 'TY-6239',
    flightImg: vistara,
    from: {
      city: 'Mumbai-BOM',
      short: 'BOM',
    },
    to: {
      city: 'Hyderabad-HYD',
      short: 'HYD',
    },
  },
  {
    price: 6500,
    depart: '2021-02-26',
    arrival: '2021-02-26',
    departTime: '1.25 pm',
    arrivalTime: '2.45 pm',
    code: 'TY-6239',
    flightImg: airAsia,
    from: {
      city: 'Mumbai-BOM',
      short: 'BOM',
    },
    to: {
      city: 'Hyderabad-HYD',
      short: 'HYD',
    },
  },
  {
    price: 4500,
    depart: '2021-02-26',
    arrival: '2021-02-26',
    departTime: '1.55 pm',
    arrivalTime: '3.10 pm',
    code: 'TY-6239',
    flightImg: airIndia,
    from: {
      city: 'Hyderabad-HYD',
      short: 'HYD',
    },
    to: {
      city: 'Mumbai-BOM',
      short: 'BOM',
    },
  },
  {
    price: 7500,
    depart: '2021-02-26',
    arrival: '2021-02-26',
    departTime: '4.05 pm',
    arrivalTime: '5.45 pm',
    code: 'TY-6239',
    flightImg: emirates,
    from: {
      city: 'Hyderabad-HYD',
      short: 'HYD',
    },
    to: {
      city: 'Mumbai-BOM',
      short: 'BOM',
    },
  },
  {
    price: 2500,
    depart: '2021-02-26',
    arrival: '2021-02-26',
    departTime: '1.23 pm',
    arrivalTime: '3.45 pm',
    code: 'TY-6239',
    flightImg: kuwait,
    from: {
      city: 'Delhi-DEL',
      short: 'DEl',
    },
    to: {
      city: 'Bangalore-BLR',
      short: 'BLR',
    },
  },
  {
    price: 8500,
    depart: '2021-02-26',
    arrival: '2021-02-26',
    departTime: '2.33 pm',
    arrivalTime: '3.27 pm',
    code: 'TY-6239',
    flightImg: qatar,
    from: {
      city: 'Delhi-DEL',
      short: 'DEl',
    },
    to: {
      city: 'Bangalore-BLR',
      short: 'BLR',
    },
  },
  {
    price: 2900,
    depart: '2021-02-26',
    arrival: '2021-02-26',
    departTime: '4.19 pm',
    arrivalTime: '5.50 pm',
    code: 'TY-6239',
    flightImg: saudia,
    from: {
      city: 'Bangalore-BLR',
      short: 'BLR',
    },
    to: {
      city: 'Delhi-DEL',
      short: 'DEL',
    },
  },
  {
    price: 9500,
    depart: '2021-02-26',
    arrival: '2021-02-26',
    departTime: '7.33 am',
    arrivalTime: '8.57 am',
    code: 'TY-6239',
    flightImg: vistara,
    from: {
      city: 'Bangalore-BLR',
      short: 'BLR',
    },
    to: {
      city: 'Delhi-DEL',
      short: 'DEL',
    },
  },
  {
    price: 2900,
    depart: '2021-02-26',
    arrival: '2021-02-26',
    departTime: '9.14 am',
    arrivalTime: '10.45 am',
    code: 'TY-6239',
    flightImg: airAsia,
    from: {
      city: 'Delhi-DEL',
      short: 'DEL',
    },
    to: {
      city: 'Hyderabad-HYD',
      short: 'HYD',
    },
  },
  {
    price: 2800,
    depart: '2021-02-26',
    arrival: '2021-02-26',
    departTime: '11.00 am',
    arrivalTime: '12.30 pm',
    code: 'TY-6239',
    flightImg: airIndia,
    from: {
      city: 'Hyderabad-HYD',
      short: 'HYD',
    },
    to: {
      city: 'Delhi-DEL',
      short: 'DEL',
    },
  },
  {
    price: 6500,
    depart: '2021-02-26',
    arrival: '2021-02-26',
    departTime: '12.45 pm',
    arrivalTime: '1.50 pm',
    code: 'TY-6239',
    flightImg: emirates,
    from: {
      city: 'Hyderabad-HYD',
      short: 'HYD',
    },
    to: {
      city: 'Delhi-DEL',
      short: 'DEL',
    },
  },
  {
    price: 2500,
    depart: '2021-02-26',
    arrival: '2021-02-26',
    departTime: '2.05 pm',
    arrivalTime: '3.10 pm',
    code: 'TY-6239',
    flightImg: kuwait,
    from: {
      city: 'Bangalore-BLR',
      short: 'BLR',
    },
    to: {
      city: 'Hyderabad-HYD',
      short: 'HYD',
    },
  },
  {
    price: 5500,
    depart: '2021-02-26',
    arrival: '2021-02-26',
    departTime: '3.15 pm',
    arrivalTime: '4.25 pm',
    code: 'TY-6239',
    flightImg: qatar,
    from: {
      city: 'Bangalore-BLR',
      short: 'BLR',
    },
    to: {
      city: 'Hyderabad-HYD',
      short: 'HYD',
    },
  },
  {
    price: 2500,
    depart: '2021-02-26',
    arrival: '2021-02-26',
    departTime: '4.35 pm',
    arrivalTime: '5.53 pm',
    code: 'TY-6239',
    flightImg: saudia,
    from: {
      city: 'Hyderabad-HYD',
      short: 'HYD',
    },
    to: {
      city: 'Bangalore-BLR',
      short: 'BLR',
    },
  },
  {
    price: 8500,
    depart: '2021-02-26',
    arrival: '2021-02-26',
    departTime: '6.00 pm',
    arrivalTime: '7.20 pm',
    code: 'TY-6239',
    flightImg: vistara,
    from: {
      city: 'Hyderabad-HYD',
      short: 'HYD',
    },
    to: {
      city: 'Bangalore-BLR',
      short: 'BLR',
    },
  },
  // date-27/02/2021
  {
    price: 2500,
    depart: '2021-02-27',
    arrival: '2021-02-27',
    departTime: '10.15 am',
    arrivalTime: '11.45 am',
    code: 'TY-6239',
    flightImg: airAsia,
    from: {
      full: 'Delhi-DEL',
      short: 'DEL',
    },
    to: {
      city: 'Mumbai-BOM',
      short: 'BOM',
    },
  },
  {
    price: 5500,
    depart: '2021-02-27',
    arrival: '2021-02-27',
    departTime: '12.20 pm',
    arrivalTime: '1.45 pm',
    code: 'TY-6239',
    flightImg: airIndia,
    from: {
      city: 'Delhi-DEL',
      short: 'DEL',
    },
    to: {
      city: 'Mumbai-BOM',
      short: 'BOM',
    },
  },
  {
    price: 2500,
    depart: '2021-02-27',
    arrival: '2021-02-27',
    departTime: '4.20 pm',
    arrivalTime: '6.35 pm',
    code: 'TY-6239',
    flightImg: emirates,
    from: {
      city: 'Mumbai-BOM',
      short: 'BOM',
    },
    to: {
      city: 'Delhi-DEL',
      short: 'DEL',
    },
  },
  {
    price: 8500,
    depart: '2021-02-27',
    arrival: '2021-02-27',
    departTime: '7.05 pm',
    arrivalTime: '8.25 pm',
    code: 'TY-6239',
    flightImg: kuwait,
    from: {
      city: 'Mumbai-BOM',
      short: 'BOM',
    },
    to: {
      city: 'Delhi-DEL',
      short: 'DEL',
    },
  },
  {
    price: 2500,
    depart: '2021-02-27',
    arrival: '2021-02-27',
    departTime: '5.05 pm',
    arrivalTime: '6.25 pm',
    code: 'TY-6239',
    flightImg: qatar,
    from: {
      city: 'Mumbai-BOM',
      short: 'BOM',
    },
    to: {
      city: 'Bangalore-BLR',
      short: 'BLR',
    },
  },
  {
    price: 7500,
    depart: '2021-02-27',
    arrival: '2021-02-27',
    departTime: '9.05 am',
    arrivalTime: '10.25 am',
    code: 'TY-6239',
    flightImg: saudia,
    from: {
      city: 'Mumbai-BOM',
      short: 'BOM',
    },
    to: {
      city: 'Bangalore-BLR',
      short: 'BLR',
    },
  },
  {
    price: 2500,
    depart: '2021-02-27',
    arrival: '2021-02-27',
    departTime: '9.50 am',
    arrivalTime: '11.25 am',
    code: 'TY-6239',
    flightImg: vistara,
    from: {
      city: 'Bangalore-BLR',
      short: 'BLR',
    },
    to: {
      city: 'Mumbai-BOM',
      short: 'BOM',
    },
  },
  {
    price: 3500,
    depart: '2021-02-27',
    arrival: '2021-02-27',
    departTime: '11.23 am',
    arrivalTime: '12.25 pm',
    code: 'TY-6239',
    flightImg: airAsia,
    from: {
      city: 'Mumbai-BOM',
      short: 'BOM',
    },
    to: {
      city: 'Hyderabad-HYD',
      short: 'HYD',
    },
  },
  {
    price: 6500,
    depart: '2021-02-27',
    arrival: '2021-02-27',
    departTime: '1.25 pm',
    arrivalTime: '2.45 pm',
    code: 'TY-6239',
    flightImg: airIndia,
    from: {
      city: 'Mumbai-BOM',
      short: 'BOM',
    },
    to: {
      city: 'Hyderabad-HYD',
      short: 'HYD',
    },
  },
  {
    price: 2500,
    depart: '2021-02-27',
    arrival: '2021-02-27',
    departTime: '1.55 pm',
    arrivalTime: '3.10 pm',
    code: 'TY-6239',
    flightImg: emirates,
    from: {
      city: 'Hyderabad-HYD',
      short: 'HYD',
    },
    to: {
      city: 'Mumbai-BOM',
      short: 'BOM',
    },
  },
  {
    price: 7800,
    depart: '2021-02-27',
    arrival: '2021-02-27',
    departTime: '4.05 pm',
    arrivalTime: '5.45 pm',
    code: 'TY-6239',
    flightImg: kuwait,
    from: {
      city: 'Hyderabad-HYD',
      short: 'HYD',
    },
    to: {
      city: 'Mumbai-BOM',
      short: 'BOM',
    },
  },
  {
    price: 2500,
    depart: '2021-02-27',
    arrival: '2021-02-27',
    departTime: '1.23 pm',
    arrivalTime: '3.45 pm',
    code: 'TY-6239',
    flightImg: qatar,
    from: {
      city: 'Delhi-DEL',
      short: 'DEl',
    },
    to: {
      city: 'Bangalore-BLR',
      short: 'BLR',
    },
  },
  {
    price: 5500,
    depart: '2021-02-27',
    arrival: '2021-02-27',
    departTime: '2.33 pm',
    arrivalTime: '3.27 pm',
    code: 'TY-6239',
    flightImg: saudia,
    from: {
      city: 'Delhi-DEL',
      short: 'DEl',
    },
    to: {
      city: 'Bangalore-BLR',
      short: 'BLR',
    },
  },
  {
    price: 2400,
    depart: '2021-02-27',
    arrival: '2021-02-27',
    departTime: '4.19 pm',
    arrivalTime: '5.50 pm',
    code: 'TY-6239',
    flightImg: vistara,
    from: {
      city: 'Bangalore-BLR',
      short: 'BLR',
    },
    to: {
      city: 'Delhi-DEL',
      short: 'DEL',
    },
  },
  {
    price: 8900,
    depart: '2021-02-27',
    arrival: '2021-02-27',
    departTime: '7.33 am',
    arrivalTime: '8.57 am',
    code: 'TY-6239',
    flightImg: airAsia,
    from: {
      city: 'Bangalore-BLR',
      short: 'BLR',
    },
    to: {
      city: 'Delhi-DEL',
      short: 'DEL',
    },
  },
  {
    price: 2500,
    depart: '2021-02-27',
    arrival: '2021-02-27',
    departTime: '9.14 am',
    arrivalTime: '10.45 am',
    code: 'TY-6239',
    flightImg: airIndia,
    from: {
      city: 'Delhi-DEL',
      short: 'DEL',
    },
    to: {
      city: 'Hyderabad-HYD',
      short: 'HYD',
    },
  },
  {
    price: 6700,
    depart: '2021-02-27',
    arrival: '2021-02-27',
    departTime: '11.00 am',
    arrivalTime: '12.30 pm',
    code: 'TY-6239',
    flightImg: emirates,
    from: {
      city: 'Hyderabad-HYD',
      short: 'HYD',
    },
    to: {
      city: 'Delhi-DEL',
      short: 'DEL',
    },
  },
  {
    price: 2500,
    depart: '2021-02-27',
    arrival: '2021-02-27',
    departTime: '12.45 pm',
    arrivalTime: '1.50 pm',
    code: 'TY-6239',
    flightImg: kuwait,
    from: {
      city: 'Hyderabad-HYD',
      short: 'HYD',
    },
    to: {
      city: 'Delhi-DEL',
      short: 'DEL',
    },
  },
  {
    price: 2500,
    depart: '2021-02-27',
    arrival: '2021-02-27',
    departTime: '2.05 pm',
    arrivalTime: '3.10 pm',
    code: 'TY-6239',
    flightImg: qatar,
    from: {
      city: 'Bangalore-BLR',
      short: 'BLR',
    },
    to: {
      city: 'Hyderabad-HYD',
      short: 'HYD',
    },
  },
  {
    price: 8300,
    depart: '2021-02-27',
    arrival: '2021-02-27',
    departTime: '3.15 pm',
    arrivalTime: '4.25 pm',
    code: 'TY-6239',
    flightImg: saudia,
    from: {
      city: 'Bangalore-BLR',
      short: 'BLR',
    },
    to: {
      city: 'Hyderabad-HYD',
      short: 'HYD',
    },
  },
  {
    price: 2500,
    depart: '2021-02-27',
    arrival: '2021-02-27',
    departTime: '4.35 pm',
    arrivalTime: '5.53 pm',
    code: 'TY-6239',
    flightImg: vistara,
    from: {
      city: 'Hyderabad-HYD',
      short: 'HYD',
    },
    to: {
      city: 'Bangalore-BLR',
      short: 'BLR',
    },
  },
  {
    price: 8100,
    depart: '2021-02-27',
    arrival: '2021-02-27',
    departTime: '6.00 pm',
    arrivalTime: '7.20 pm',
    code: 'TY-6239',
    flightImg: airAsia,
    from: {
      city: 'Hyderabad-HYD',
      short: 'HYD',
    },
    to: {
      city: 'Bangalore-BLR',
      short: 'BLR',
    },
  },
];

export default data;
