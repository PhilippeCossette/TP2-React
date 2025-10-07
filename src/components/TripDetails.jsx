import { useParams, Link } from "react-router-dom";
import { use, useEffect, useState } from "react";

const TripDetails = ({}) => {
  const { id } = useParams();
  const [trip, setTrip] = useState([]);

  useEffect(() => {
    const fetchTrip = async () => {
      try {
        const res = await fetch(`http://localhost:5000/trips/${id}`);
        const data = await res.json();
        setTrip(data);
      } catch (error) {
        console.error("Error fetching trip:", error);
      }
    };
    fetchTrip();
  }, [setTrip]);
  return (
    <section className="py-5 bg-light section-top">
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
          <p className="text-muted mb-1">{trip.length} nuits</p>
          <p className="lead">
            A partir de <strong style={{ fontSize: "1.25em" }}>${trip.price}</strong> par personne
          </p>
          <p>
            Explore the stunning beaches, lush jungles, and vibrant culture of
            Hawaii. Enjoy guided tours, delicious cuisine, and unforgettable
            sunsets.
          </p>
          <div className="d-flex justify-content-start align-items-center mt-4">
            <button className="btn-primary">Book Now</button>
            <Link to="/trips" className="btn btn-outline-secondary ms-2">
              <i className="bi bi-gear"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TripDetails;
