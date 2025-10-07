import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Header from "./components/Header";
import Home from "./components/Home";
import Trips from "./components/Trips";

function App() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const fetchTrips = async () => {
      const response = await fetch("http://localhost:5000/trips");
      const data = await response.json();
      setTrips(data);
    };
    fetchTrips();
  }, []);

   const deleteTrip = async (id) => {
     await fetch(`http://localhost:5000/trips/${id}`, {
       method: "DELETE",
     });
     setTrips(trips.filter((trip) => trip.id !== id));
   };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trips/" element={<Trips trips={trips} onDelete={deleteTrip} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
