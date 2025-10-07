import { Link } from "react-router-dom";

const SingleTrip = ({ trip, onDelete }) => {
  return (
    <div className="card h-100">
      <img src={trip.image} className="card-img-top" alt={trip.name} />
      <div className="card-body  d-flex flex-column justify-content-between align-items-center">
        <h5 className="card-title">{trip.name}</h5>
        <p className="category">{trip.category}</p>
        <p className="card-text">{trip.description}</p>
        <p className="price">
          <strong>À partir de</strong> {trip.price}$
        </p>
        <div className="d-flex gap-2">
          <Link
            to={`/trips/${trip.id}`}
            className="btn-primary  btn-outline-primary"
          >
            Plus de détails
          </Link>
          <button
            className="btn btn-outline-danger"
            onClick={() => onDelete(trip.id)}
          >
            Supprimer
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleTrip;
