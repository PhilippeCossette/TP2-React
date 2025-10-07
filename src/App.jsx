import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Header from "./components/Header";
import Home from "./components/Home";
import Trips from "./components/Trips";
import TripDetails from "./components/TripDetails";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  const [showAddMenu, setShowAddMenu] = useState(false);
  console.log(showAddMenu);

  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const fetchTrips = async () => {
      const response = await fetch("http://localhost:5000/trips");
      const data = await response.json();
      setTrips(data);
    };
    fetchTrips();
  }, []);

  const addTrip = async (trip) => {
    const res = await fetch("http://localhost:5000/trips", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(trip),
    });
    const data = await res.json();
    setTrips([...trips, data]);
  };

  const updateTrip = async (updatedTrip) => {
  
    const res = await fetch(`http://localhost:5000/trips/${updatedTrip.id}`, {
      method: "PUT", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTrip),
    });

    if (!res.ok) {
      console.error("Failed to update trip");
      return;
    }

    const data = await res.json();

    
    setTrips(trips.map((trip) => (trip.id === updatedTrip.id ? data : trip)));
  };

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
        <Route path="/about" element={<About />} />
        <Route
          path="/trips/"
          element={
            <Trips
              trips={trips}
              onDelete={deleteTrip}
              toggleAddMenu={() => setShowAddMenu(!showAddMenu)}
              addMenuStatus={showAddMenu}
              onAdd={addTrip}
              onUpdate={updateTrip}
            />
          }
        />
        <Route
          path="/trips/:id"
          element={
            <TripDetails
              onUpdate={updateTrip}
              toggleAddMenu={() => setShowAddMenu(!showAddMenu)}
              addMenuStatus={showAddMenu}
            />
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
