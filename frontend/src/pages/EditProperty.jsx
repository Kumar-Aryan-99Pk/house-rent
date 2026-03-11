import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../services/api";

function EditProperty() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {

    const fetchProperty = async () => {

      const res = await API.get("/properties");

      const property = res.data.find(p => p._id === id);

      if (property) {
        setTitle(property.title);
        setDescription(property.description);
        setLocation(property.location);
        setPrice(property.price);
        setType(property.type);
      }

    };

    fetchProperty();

  }, [id]);

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const token = localStorage.getItem("token");

      await API.put(`/properties/${id}`, {
        title,
        description,
        location,
        price,
        type
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      alert("Property updated");
      navigate("/");

    } catch (error) {

      alert("Update failed");

    }

  };

  return (
    <div className="container-fluid mt-4">

      <h2>Edit Property</h2>

      <form onSubmit={handleSubmit}>

        <div className="mb-3">
          <input
            className="form-control"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            placeholder="Title"
          />
        </div>

        <div className="mb-3">
          <textarea
            className="form-control"
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
            placeholder="Description"
          />
        </div>

        <div className="mb-3">
          <input
            className="form-control"
            value={location}
            onChange={(e)=>setLocation(e.target.value)}
            placeholder="Location"
          />
        </div>

        <div className="mb-3">
          <input
            className="form-control"
            value={price}
            onChange={(e)=>setPrice(e.target.value)}
            placeholder="Price"
          />
        </div>

        <div className="mb-3">
          <input
            className="form-control"
            value={type}
            onChange={(e)=>setType(e.target.value)}
            placeholder="Type"
          />
        </div>

        <button className="btn btn-primary">
          Update Property
        </button>

      </form>

    </div>
  );
}

export default EditProperty;