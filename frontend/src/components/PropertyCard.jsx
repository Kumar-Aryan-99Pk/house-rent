import API from "../services/api";
import { Link } from "react-router-dom";

function PropertyCard({ property }) {

    const handleDelete = async () => {

        const confirmDelete = window.confirm("Delete this property?");
        if (!confirmDelete) return;

        try {

            const token = localStorage.getItem("token");

            await API.delete(`/properties/${property._id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            window.location.reload();

        } catch (error) {

            alert("Failed to delete property");

        }

    };

    return (
        <div className="col-xl-3 col-lg-4 col-md-6 mb-4">

            <div className="card shadow-sm h-100">

                <div className="card-body">

                    <h5 className="card-title">{property.title}</h5>

                    <p>{property.description}</p>

                    <p>📍 {property.location}</p>
                    <p>💰 ₹{property.price}</p>
                    <p>🏠 {property.type}</p>

                    <div className="mt-3 d-flex gap-2">

                        <Link
                            className="btn btn-warning btn-sm"
                            to={`/edit-property/${property._id}`}
                        >
                            Edit
                        </Link>

                        <button
                            className="btn btn-danger btn-sm"
                            onClick={handleDelete}
                        >
                            Delete
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default PropertyCard;