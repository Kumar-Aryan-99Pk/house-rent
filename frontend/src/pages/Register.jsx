import { useState } from "react";
import API from "../services/api";

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      await API.post("/users/register", {
        name,
        email,
        password
      });

      alert("Registration successful");

    } catch (error) {

      alert("Registration failed");

    }
  };

  return (
    <div className="container-fluid px-4 mt-4">

      <h2>Register</h2>

      <form onSubmit={handleSubmit}>

        <div className="mb-3">
          <input
            className="form-control"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <input
            className="form-control"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="btn btn-primary">Register</button>

      </form>

    </div>
  );
}

export default Register;