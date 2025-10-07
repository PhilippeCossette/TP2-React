import SingleTrip from "./SingleTrip";

const Trips = ({ trips, onDelete }) => {
  return (
    <main className="py-5">
      <section className="max-1200 mx-auto px-4 py-5">
        <header className="d-flex justify-content-between align-items-center   my-3">
          <h1>Nos Forfaits</h1>
          <a className="btn-primary add-button">
            <i className="bi bi-plus"></i>
          </a>
        </header>
        <div className="row">
          {trips.map((trip) => (
            <div className="col-12 col-sm-6 col-md-4 mb-3" key={trip.id}>
              <SingleTrip trip={trip} onDelete={onDelete} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Trips;
