import { useState, useEffect } from "react";

const AddTrip = ({ trip, toggleAddMenu, onSubmit }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [length, setLength] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");


  useEffect(() => {
    if (trip) {
      setName(trip.name || "");
      setImage(trip.image || "");
      setDescription(trip.description || "");
      setLength(trip.length || "");
      setPrice(trip.price || "");
      setCategory(trip.category || "");
    }
  }, [trip]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTrip = {
      ...trip,
      name,
      category,
      image,
      description,
      length,
      price,
    };
    onSubmit(updatedTrip);
    toggleAddMenu();
  };

  return (
    <div className="add-trip-form">
      <div className="d-flex justify-content-between align-items-center p-3 border-bottom">
        <h2 className="mb-0">{trip ? "Edit Trip" : "Add a New Trip"}</h2>
        <i
          className="bi bi-x fs-3"
          style={{ cursor: "pointer" }}
          onClick={toggleAddMenu}
        ></i>
      </div>

      <form className="d-flex flex-column p-3" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Trip Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <input
            type="text"
            className="form-control"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image URL
          </label>
          <input
            type="text"
            className="form-control"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="row mb-3">
          <div className="col">
            <label htmlFor="length" className="form-label">
              Length (nights)
            </label>
            <input
              type="number"
              className="form-control"
              id="length"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              required
            />
          </div>
          <div className="col">
            <label htmlFor="price" className="form-label">
              Price (per person)
            </label>
            <input
              type="number"
              className="form-control"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
        </div>

        <button type="submit" className="btn-primary">
          {trip ? "Update Trip" : "Add Trip"}
        </button>
      </form>
    </div>
  );
};

export default AddTrip;
