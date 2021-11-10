import "./register.css";
import useForm from "./useForm";
import regValidation from "./regValidation";
import { Link } from "react-router-dom";

export default function Register() {
  const { handleChange, values, handleSubmit, errors } = useForm(regValidation);
  return (
    <div className="reg-center">
      <form className="reg-form" onSubmit={handleSubmit}>
        <h1>
          Get Started with us today! Create Your Account byfilling out the
          information below
        </h1>
        <div className="col-md-6">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            id="validationServer01"
            name="firstName"
            className="form-control is-validt"
            placeholder="Enter your First Name"
            value={values.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <p>{errors.firstName}</p>}
        </div>
        <div className="col-md-6">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="form-control is-validt"
            placeholder="Enter your Last Name"
            value={values.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <p>{errors.lastName}</p>}
        </div>
        <div className="col-md-6">
          <label htmlFor="dob" className="form-label">
            Date of Birth
          </label>
          <input
            type="text"
            id="dob"
            name="dob"
            className="form-control"
            placeholder="Enter your Date of birth"
            value={values.dob}
            onChange={handleChange}
          />
          {errors.dob && <p>{errors.dob}</p>}
        </div>
        <div className="col-md-6">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="form-control"
            placeholder="Enter your Username"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control is-validt"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="col-md-6">
          <label htmlFor="passsword" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control is-validt"
            placeholder="Enter your Password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="col-md-6">
          <label htmlFor="passsword2" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            id="password2"
            name="password2"
            className="form-control is-validt"
            placeholder="Enter your Password"
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-outline-success">
            Sign Up
          </button>
        </div>
        <span>
          Already have an acoout?{" "}
          <div className="col-12">
            <Link to="/login" classname="btn btn-primary">
              Login
            </Link>
          </div>
        </span>
      </form>
    </div>
  );
}
