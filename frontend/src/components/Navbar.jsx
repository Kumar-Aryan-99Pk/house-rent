import { Link } from "react-router-dom";

function Navbar() {

  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

        <Link className="navbar-brand" to="/">Home Hunt</Link>

        <div>

          <Link className="btn btn-light me-2" to="/">Home</Link>

          {!token ? (
            <>
              <Link className="btn btn-light me-2" to="/login">Login</Link>
              <Link className="btn btn-light me-2" to="/register">Register</Link>
            </>
          ) : (
            <>
              <Link className="btn btn-warning me-2" to="/add-property">
                Add Property
              </Link>

              <button className="btn btn-danger" onClick={handleLogout}>
                Logout
              </button>
            </>
          )}

        </div>

      </div>
    </nav>
  );
}

export default Navbar;