import { useEffect, useState } from "react";
import PropertyCard from "../components/PropertyCard";
import API from "../services/api";

function Home() {

  const [properties, setProperties] = useState([]);
  const [location, setLocation] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    const fetchProperties = async () => {
      const res = await API.get("/properties");
      setProperties(res.data);
    };

    fetchProperties();
  }, []);

  const searchProperties = async () => {

    const res = await API.get(
      `/properties/search?location=${location}&maxPrice=${maxPrice}`
    );

    setProperties(res.data);

  };

  return (
    <div className="container mt-4">

      <h2>Available Houses</h2>

      {/* Search bar */}
      <div className="row mb-4">

        <div className="col-md-4">
          <input
            className="form-control"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div className="col-md-4">
          <input
            className="form-control"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>

        <div className="col-md-4">
          <button className="btn btn-primary w-100" onClick={searchProperties}>
            Search
          </button>
        </div>

      </div>

      {/* Property list */}
      {properties.length === 0 ? (
        <p>No properties found</p>
      ) : (
        <div className="row">

          {properties.map((p) => (
            <PropertyCard key={p._id} property={p} />
          ))}

        </div>
      )}

    </div>
  );
}

export default Home;