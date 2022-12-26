import { login } from "./utils";
import "./index.css";
import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isRequesting, setIsRequesting] = useState(false);

  const handleSubmit = async () => {
    setError(null);
    setIsRequesting(true);
    try {
      await login({
        email,
        password,
      });
      alert("sucess");
      setIsRequesting(false);
    } catch (error) {
      setError(error.message);
      setIsRequesting(false);
    }
  };

  return (
    <div className="wrapper">
      <div className="login-form">
        <h1>Login Form 🐞</h1>
        {/* Coloque a mensagem de erro de login na div abaixo. Mostre a div somente se houver uma mensagem de erro. */}
        {error && <div className="errorMessage">{error}</div>}
        <div className="row">
          <label htmlFor={"email"}>Email</label>
          <input
            id={"email"}
            type={"email"}
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="row">
          <label htmlFor={"password"}>Password</label>
          <input
            id={"password"}
            type={"password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="button">
          <button
            onClick={handleSubmit}
            disabled={email === "" || password.length < 6 || isRequesting}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
