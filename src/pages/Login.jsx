import { useState } from "react";
import { login } from "../services/authService";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await login({
        email,
        password,
      });

      localStorage.setItem("token", data.token);

      if (data.role) {
        localStorage.setItem("role", data.role);
      }

      if (data.email) {
        localStorage.setItem("email", data.email);
      }

      if (data.role === "ADMIN") {
        navigate("/admin");
      } else if (data.role === "MANAGER") {
        navigate("/manager");
      } else {
        navigate("/employee");
      }
    } catch (err) {
      setError("Invalid Credentials");
    }
  };

  return (
    <div className="login-page">

      <div className="login-card">

        <h1 className="login-title">
          Employee Leave Management System
        </h1>

        <p className="login-subtitle">
          Sign in to continue
        </p>

        <form onSubmit={handleSubmit}>

          <input
            className="login-input"
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            required
          />

          <input
            className="login-input"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            required
          />

          <button
            className="login-btn"
            type="submit"
          >
            Login
          </button>

        </form>

        {error && (
          <p className="login-error">
            {error}
          </p>
        )}

      </div>

    </div>
  );
}

export default Login;