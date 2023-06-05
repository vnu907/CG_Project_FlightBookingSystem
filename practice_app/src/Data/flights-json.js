const FLIGHTS = [];

const startDate = new Date(2023, 5, 1); // Set the desired start date (MAY 1, 2023)
const endDate = new Date(2023, 8, 30); // Set the desired end date (September 30, 2023)

let currentFlightId = 1;

// Loop through each date from start to end and create flights
for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
  const formattedDate = date.toISOString();

  FLIGHTS.push(
    {
      id: currentFlightId++,
      airline_code: "ai",
      airline: "Air India",
      number: "AI-407",
      from: "PUNE",
      to: "DELHI",
      from_code: "PNQ",
      to_code: "DEL",
      depart_date: formattedDate,
      arrive_date: formattedDate,
      price: 2500
    },
    {
      id: currentFlightId++,
      airline_code: "indigo",
      airline: "Indigo",
      number: "IND-202",
      from: "HYDERABAD",
      to: "DELHI",
      from_code: "HYD",
      to_code: "DEL",
      depart_date: formattedDate,
      arrive_date: formattedDate,
      price: 4900
    },
    {
        id: currentFlightId++,
        airline_code: "indigo",
        airline: "Indigo",
        number: "IND-202",
        from: "DELHI",
        to: "HYDERBAD",
        from_code: "DEL",
        to_code: "HYD",
        depart_date: formattedDate,
        arrive_date: formattedDate,
        price: 5000
      },
    {
      id: currentFlightId++,
      airline_code: "indigo",
      airline: "Air India",
      number: "AI-203",
      from: "DELHI",
      to: "PUNE",
      from_code: "DEL",
      to_code: "PNQ",
      depart_date: formattedDate,
      arrive_date: formattedDate,
      price: 1500
    },
    {
      id: currentFlightId++,
      airline_code: "indigo",
      airline: "Indigo",
      number: "IND-203",
      from: "DELHI",
      to: "HYDERABAD",
      from_code: "DEL",
      to_code: "HYD",
      depart_date: formattedDate,
      arrive_date: formattedDate,
      price: 1800
    },
    {
      id: currentFlightId++,
      airline_code: "ai",
      airline: "Air India",
      number: "AI-204",
      from: "PUNE",
      to: "DELHI",
      from_code: "PNQ",
      to_code: "DEL",
      depart_date: formattedDate,
      arrive_date: formattedDate,
      price: 2000
    },
    {
      id: currentFlightId++,
      airline_code: "ai",
      airline: "Air India",
      number: "AI-205",
      from: "DELHI",
      to: "PUNE",
      from_code: "DEL",
      to_code: "PNQ",
      depart_date: formattedDate,
      arrive_date: formattedDate,
      price: 1600
    },
    {
      id: currentFlightId++,
      airline_code: "indigo",
      airline: "Indigo",
      number: "IND-204",
      from: "HYDERABAD",
      to: "DELHI",
      from_code: "HYD",
      to_code: "DEL",
      depart_date: formattedDate,
      arrive_date: formattedDate,
      price: 6000
    },
    {
      id: currentFlightId++,
      airline_code: "indigo",
      airline: "Indigo",
      number: "IND-205",
      from: "DELHI",
      to: "HYDERABAD",
      from_code: "DEL",
      to_code: "HYD",
      depart_date: formattedDate,
      arrive_date: formattedDate,
      price: 1500
    },












    {
        id: currentFlightId++,
        airline_code: "indigo",
        airline: "Indigo",
        number: "IND-205",
        from: "DELHI",
        to: "HYDERABAD",
        from_code: "DEL",
        to_code: "HYD",
        depart_date: formattedDate,
        arrive_date: formattedDate,
        price: 1500
      },
      {
        id: currentFlightId++,
        airline_code: "ai",
        airline: "Air India",
        number: "AI-205",
        from: "DELHI",
        to: "PUNE",
        from_code: "DEL",
        to_code: "PNQ",
        depart_date: formattedDate,
        arrive_date: formattedDate,
        price: 1600
      },
      {
        id: currentFlightId++,
        airline_code: "indigo",
        airline: "Indigo",
        number: "IND-205",
        from: "DELHI",
        to: "HYDERABAD",
        from_code: "DEL",
        to_code: "HYD",
        depart_date: formattedDate,
        arrive_date: formattedDate,
        price: 1500
      },
      {
        id: currentFlightId++,
        airline_code: "ai",
        airline: "Air India",
        number: "AI-205",
        from: "DELHI",
        to: "PUNE",
        from_code: "DEL",
        to_code: "PNQ",
        depart_date: formattedDate,
        arrive_date: formattedDate,
        price: 1600
      },



      {
        id: currentFlightId++,
        airline_code: "indigo",
        airline: "Indigo",
        number: "IND-205",
        from: "DELHI",
        to: "HYDERABAD",
        from_code: "DEL",
        to_code: "HYD",
        depart_date: formattedDate,
        arrive_date: formattedDate,
        price: 1500
      },
      {
        id: currentFlightId++,
        airline_code: "ai",
        airline: "Air India",
        number: "AI-205",
        from: "DELHI",
        to: "PUNE",
        from_code: "DEL",
        to_code: "PNQ",
        depart_date: formattedDate,
        arrive_date: formattedDate,
        price: 1600
      },




      {
        id: currentFlightId++,
        airline_code: "indigo",
        airline: "Indigo",
        number: "IND-205",
        from: "DELHI",
        to: "HYDERABAD",
        from_code: "DEL",
        to_code: "HYD",
        depart_date: formattedDate,
        arrive_date: formattedDate,
        price: 1500
      },
      {
        id: currentFlightId++,
        airline_code: "ai",
        airline: "Air India",
        number: "AI-205",
        from: "DELHI",
        to: "PUNE",
        from_code: "DEL",
        to_code: "PNQ",
        depart_date: formattedDate,
        arrive_date: formattedDate,
        price: 1600
      },



      {
        id: currentFlightId++,
        airline_code: "indigo",
        airline: "Indigo",
        number: "IND-205",
        from: "DELHI",
        to: "HYDERABAD",
        from_code: "DEL",
        to_code: "HYD",
        depart_date: formattedDate,
        arrive_date: formattedDate,
        price: 1500
      },
      {
        id: currentFlightId++,
        airline_code: "ai",
        airline: "Air India",
        number: "AI-205",
        from: "DELHI",
        to: "PUNE",
        from_code: "DEL",
        to_code: "PNQ",
        depart_date: formattedDate,
        arrive_date: formattedDate,
        price: 1600
      },
      {
        id: currentFlightId++,
        airline_code: "ai",
        airline: "Air India",
        number: "AI-205",
        from: "Nagpur",
        to: "PUNE",
        from_code: "NAG",
        to_code: "PNQ",
        depart_date: formattedDate,
        arrive_date: formattedDate,
        price: 1800
      },
      {
        id: currentFlightId++,
        airline_code: "ai",
        airline: "Air India",
        number: "AI-205",
        from: "DELHI",
        to: "NAGPUR",
        from_code: "DEL",
        to_code: "NAG",
        depart_date: formattedDate,
        arrive_date: formattedDate,
        price: 3600
      },
      {
        id: currentFlightId++,
        airline_code: "ai",
        airline: "Air India",
        number: "AI-205",
        from: "NAGPUR",
        to: "DELHI",
        from_code: "NAG",
        to_code: "DEL",
        depart_date: formattedDate,
        arrive_date: formattedDate,
        price: 6600
      },
      {
        id: currentFlightId++,
        airline_code: "ai",
        airline: "Air India",
        number: "AI-205",
        from: "NAGPUR",
        to: "BENGALURU",
        from_code: "NAG",
        to_code: "BLR",
        depart_date: formattedDate,
        arrive_date: formattedDate,
        price: 6600
      },
      {
        id: currentFlightId++,
        airline_code: "ai",
        airline: "Air India",
        number: "AI-205",
        from: "NAGPUR",
        to: "BENGALURU",
        from_code: "NAG",
        to_code: "BLR",
        depart_date: formattedDate,
        arrive_date: formattedDate,
        price: 4600
      },
      {
        id: currentFlightId++,
        airline_code: "ai",
        airline: "Air India",
        number: "AI-205",
        from: "NAGPUR",
        to: "MUMBAI",
        from_code: "NAG",
        to_code: "BOM",
        depart_date: formattedDate,
        arrive_date: formattedDate,
        price: 6600
      },
      {
        id: currentFlightId++,
        airline_code: "ai",
        airline: "Air India",
        number: "AI-205",
        from: "BHOPAL",
        to: "BENGALURU",
        from_code: "BHO",
        to_code: "BLR",
        depart_date: formattedDate,
        arrive_date: formattedDate,
        price: 4600
      },
      {
        id: currentFlightId++,
        airline_code: "ai",
        airline: "Air India",
        number: "AI-205",
        from: "BHOPAL",
        to: "NAGPUR",
        from_code: "BHO",
        to_code: "NAG",
        depart_date: formattedDate,
        arrive_date: formattedDate,
        price: 2600
      },
      {
        id: currentFlightId++,
        airline_code: "ai",
        airline: "Air India",
        number: "AI-205",
        from: "BHOPAL",
        to: "PUNE",
        from_code: "BHO",
        to_code: "PNQ",
        depart_date: formattedDate,
        arrive_date: formattedDate,
        price: 3602
      },
      {
        id: currentFlightId++,
        airline_code: "ai",
        airline: "Air India",
        number: "AI-205",
        from: "BHOPAL",
        to: "GOA",
        from_code: "BHO",
        to_code: "GOI",
        depart_date: formattedDate,
        arrive_date: formattedDate,
        price: 4600
      },
      {
        id: currentFlightId++,
        airline_code: "ai",
        airline: "Air India",
        number: "AI-205",
        from: "BHOPAL",
        to: "KANPUR",
        from_code: "BHO",
        to_code: "KNU",
        depart_date: formattedDate,
        arrive_date: formattedDate,
        price: 4360
      },
      









  );






  
}

export default FLIGHTS;
