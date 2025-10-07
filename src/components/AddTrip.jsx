import { useState } from "react";

const AddTrip = ({ toggleAddMenu, onAdd }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [length, setLength] = useState("");
  const [price, setPrice] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    onAdd({ name, image, description, length, price });
    setName("");
    setImage("");
    setDescription("");
    setLength("");
    setPrice("");
    toggleAddMenu();
  };

  return (
    <div className="add-trip-form">
      {/* Header with Close Button */}
      <div className="d-flex justify-content-between align-items-center p-3 border-bottom">
        <h2 className="mb-0">Add a New Trip</h2>
        <i
          className="bi bi-x fs-3"
          style={{ cursor: "pointer" }}
          onClick={toggleAddMenu}
        ></i>
      </div>

      {/* Form */}
      <form className="d-flex flex-column p-3" onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Trip Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            name="image"
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
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
            required
          ></textarea>
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
              name="length"
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
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
        </div>

        <button type="submit" className="btn-primary">
          Add Trip
        </button>
      </form>
    </div>
  );
};

export default AddTrip;
