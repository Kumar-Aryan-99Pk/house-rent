import { useState } from "react";
import API from "../services/api";

function AddProperty() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const token = localStorage.getItem("token");

      await API.post(
        "/properties/add",
        {
          title,
          description,
          location,
          price,
          type
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      alert("Property added successfully");

    } catch (error) {

      alert(error.response?.data?.message || "Failed to add property");

    }
  };

  return (
    <div className="container mt-4">

      <h2>Add Property</h2>

      <form onSubmit={handleSubmit}>

        <div className="mb-3">
          <input
            className="form-control"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <input
            className="form-control"
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <input
            className="form-control"
            placeholder="Price"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <input
            className="form-control"
            placeholder="Type (Apartment, House, PG)"
            onChange={(e) => setType(e.target.value)}
          />
        </div>

        <button className="btn btn-primary">Add Property</button>

      </form>

    </div>
  );
}

export default AddProperty;