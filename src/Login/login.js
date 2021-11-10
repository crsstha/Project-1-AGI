import "./login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const adminUser = {
    email: "agiinfotech@gmail.com",
    password: "admin123",
  };
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const login = (details) => {
    console.log(details);
    if (details.email === "" && details.password === "") {
      setError("*Enter your Email Address and Password!");
    } else if (!re.test(details.email)) {
      if (details.email !== "") {
        setError("*Enter your Email Address Correctly!");
      } else {
        setError("*Enter your Email Address!");
      }
    } else if (details.password === "") {
      setError("*Enter your Password!");
    } else {
      if (
        adminUser.email === details.email &&
        adminUser.password === details.password
      ) {
        setUser({
          email: details.email,
          password: details.password,
        });
      } else {
        setError("*Email and Password Do not Match!");
      }
    }
  };
  const logout = () => {
    console.log("logout");
    setUser({ email: "", password: "" });
  };
  return (
    <div className="Login">
      {user.email !== "" && user.password !== "" ? (
        <div className="homePage">
          <h2>Welcome</h2>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={login} error={error} />
      )}
    </div>
  );
}
export default Login;

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ email: "", password: "" });

  const submitHander = (e) => {
    e.preventDefault();
    Login(details);
  };
  return (
    <form onSubmit={submitHander}>
      <div className="form-inner" novalidate>
        <h2 className="hed">LOGIN</h2>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="validationCustom01"
            placeholder="Email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />
          <div class="valid-feedback">Looks good!</div>
          <label htmlFor="floatingInput">Email Address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
          {error !== "" ? <div className="error">{error}</div> : ""}
          <label htmlFor="floatingPassword">Password</label>
          <a href="#" className="pass">
            Forget Password?
          </a>
        </div>
        <button type="submit" className="btn btn-outline-success">
          Login
        </button>

        <Link to="/Register" className="re">
          Create a Account?
        </Link>
      </div>
    </form>
  );
}
