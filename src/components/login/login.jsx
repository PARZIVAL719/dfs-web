import React, { useState, useEffect, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";

function Login(){
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values,[name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);

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
    if(result.token){
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
      <div className="container justify-content-md-center">
        <div className="row justify-content-md-center col-md-3">
        <form className="col align-self-center" onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="text" className="form-control" id="txtUsername" aria-describedby="emailHelp" 
      name="username" 
      value={inputs.username || ""} 
      onChange={handleChange}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" 
      name="password" 
      value={inputs.password || ""} 
      onChange={handleChange}/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
</div>
    )

}

export default Login;