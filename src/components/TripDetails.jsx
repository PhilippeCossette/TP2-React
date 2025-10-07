import { useParams, Link } from "react-router-dom";
import { use, useEffect, useState } from "react";
import AddTrip from "./AddTrip";

const TripDetails = ({ onUpdate, toggleAddMenu, addMenuStatus }) => {
  const { id } = useParams();
  const [refresh, setRefresh] = useState(false);
  const [trip, setTrip] = useState([]);

  useEffect(() => {
    const fetchTrip = async () => {
      const res = await fetch(`http://localhost:5000/trips/${id}`);
      const data = await res.json();
      setTrip(data);
    };
    fetchTrip();
  }, [id, refresh]);

  const handleUpdate = async (updatedTrip) => {
    await onUpdate(updatedTrip);
    setRefresh((prev) => !prev);
    toggleAddMenu();
  };

  return (
    <section className="py-5 bg-light section-top">
      {addMenuStatus && (
        <AddTrip
          toggleAddMenu={toggleAddMenu}
          trip={trip}
          onSubmit={handleUpdate}
        />
      )}
      <div class="container my-4">
        <div class="trip-banner">
          <img
            src={trip.image}
            className="img-fluid w-100"
            alt="Trip banner"
            style={{ maxHeight: "70vh", objectFit: "cover" }}
          />
        </div>

        <div className="trip-info mt-4 text-start">
          <h2 className="fw-bold">{trip.name}</h2>
          <p className="category">{trip.category}</p>
          <p className="text-muted mb-1">{trip.length} nuits</p>
          <p className="lead">
            A partir de{" "}
            <strong style={{ fontSize: "1.25em" }}>${trip.price}</strong> par
            personne
          </p>
          <p>{trip.description}</p>
          <div className="d-flex justify-content-start align-items-center mt-4">
            <button className="btn-primary">Reserver</button>
            <a
              onClick={toggleAddMenu}
              className="btn btn-outline-secondary ms-2"
            >
              <i className="bi bi-gear"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TripDetails;
