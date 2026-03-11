import { useState } from "react";
import API from "../services/api";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const res = await API.post("/users/login", {
        email,
        password
      });

      // save token in browser
      localStorage.setItem("token", res.data.token);

      alert("Login successful");

    } catch (error) {

      alert("Login failed");

    }
  };

  return (
    <div className="container mt-4">

      <h2>Login</h2>

      <form onSubmit={handleSubmit}>

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

        <button className="btn btn-primary">Login</button>

      </form>

    </div>
  );
}

export default Login;