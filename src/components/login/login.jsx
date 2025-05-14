import React, { useState, useEffect, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaLock, FaUser } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);

    setErrorMessage("");

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "username": inputs.username,
      "password": inputs.password
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:8089/api/auth/authenticate", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result.token)
        if (result.token) {
          localStorage.setItem("token", result.token);
          navigate('/doctorProfile')
        }
      })
      .catch(error => console.log('error', error));

    //   axios.post("http://localhost:8089/api/auth/authenticate", requestOptions)
    //     .then(response => {
    //       //get token from response
    //       const token  =  response.data.token;

    //       //set JWT token to local
    //       localStorage.setItem("token", token);

    //       //set token to axios common header
    //       setAuthToken(token);

    // //redirect user to home page
    //       window.location.href = '/doctorProfile'
    //     })
    //     .catch(err => console.log(err));
  };


  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg" style={{ width: "400px" }}>
        <div className="card-header text-center bg-secondary text-white">
          <h3>
            <FaUser /> Login
          </h3>
        </div>
        <div className="card-body">
          {/* Show error message if any */}
          {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

          {/* Login Form */}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <div className="input-group">
                <span className="input-group-text">
                  <FaUser />
                </span>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  placeholder="Enter your username"
                  value={inputs.username || ""}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <div className="input-group">
                <span className="input-group-text">
                  <FaLock />
                </span>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  value={inputs.password || ""}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-secondary btn-lg">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;