const SingleTrip = ({ trip, onDelete }) => {
  return (
    <div className="card h-100">
      <div className="card-body d-flex flex-column justify-content-between align-items-center">
        <h5 className="card-title">{trip.name}</h5>
        <p className="card-text">{trip.description}</p>
        <p className="price">
          <strong>À partir de</strong> {trip.price}$
        </p>
        <div className="d-flex gap-2">
          <a className="btn-primary  btn-outline-primary">Plus de détails</a>
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
