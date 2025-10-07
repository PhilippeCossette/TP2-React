import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  const [trips, setTrips] = useState([
    {
      id: 1,
      name: "Paris, France",
      image:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80",
      description:
        "The city of lights awaits you with art, culture, and romance.",
      price: "$1200",
      link: "#",
    },
    {
      id: 2,
      name: "Maldives",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
      description: "Relax on pristine beaches and enjoy crystal-clear waters.",
      price: "$2500",
      link: "#",
    },
    {
      id: 3,
      name: "Tokyo, Japan",
      image:
        "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?w=600&q=80",
      description: "Experience the blend of modern and traditional Japan.",
      price: "$1800",
      link: "#",
    },
    {
      id: 4,
      name: "New York, USA",
      image:
        "https://images.unsplash.com/photo-1520975920383-1c62e07e0ad0?w=600&q=80",
      description: "The city that never sleeps, full of iconic sights.",
      price: "$1500",
      link: "#",
    },
    {
      id: 5,
      name: "Sydney, Australia",
      image:
        "https://images.unsplash.com/photo-1506973035872-a4f7c44bb9e0?w=600&q=80",
      description: "Enjoy the stunning harbor, beaches, and vibrant culture.",
      price: "$2200",
      link: "#",
    },
    {
      id: 6,
      name: "Rome, Italy",
      image:
        "https://images.unsplash.com/photo-1526481280695-3bfa7568f23c?w=600&q=80",
      description: "Discover ancient ruins, art, and delicious cuisine.",
      price: "$1400",
      link: "#",
    },
  ]);

  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default App;
