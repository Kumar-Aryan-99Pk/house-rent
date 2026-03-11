function PropertyCard({ property }) {

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">

      <div className="card shadow-sm h-100 border-0">

        <div className="card-body">

          <h5 className="card-title fw-bold">{property.title}</h5>

          <p className="mb-1">
             {property.location}
          </p>

          <p className="mb-1">
             ₹{property.price}
          </p>

          <span className="badge bg-primary">
            {property.type}
          </span>

        </div>

      </div>

    </div>
  );
}

export default PropertyCard;