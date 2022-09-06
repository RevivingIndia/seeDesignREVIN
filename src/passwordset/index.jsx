import React, { useState } from 'react'
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Passwordset = () => {
  const nav=useNavigate();
  const url = "http://127.0.0.1:8000/verifyresetpassword/";

  const [data,setData]=useState({
    email:"",
    otp:"",
    password:"",
    confirm_password:""
  })
  
  const submit=(e)=>{
    e.preventDefault();
    Axios.post(url, {
      email: data.email,
      otp:data.otp,
      password:data.password,
      confirm_password:data.confirm_password

    
    })
      .then((res) => {
        console.log(res.data); 
        if(res.data.message==="Password Reset Successfully"){
          nav("/login")
        }

        setData(res.data);
      })
      .catch((error) => {
        console.error(error);
        // setmsg(error.message)
      });
  
  }
  function handlepassword(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData,"data available");
  }
  return (
    <div>
          <section class="h-100" style={{backgroundColor: "#eee"}}>
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black" style={{borderRadius: "25px"}}>
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p class=" h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Password set</p>

                <form class="mx-1 mx-md-4"  onSubmit={(e) => submit(e)} style={{margin:"0px"}}>

                <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="email"  id="email"
                          value={data.email}
                          onChange={(e) => handlepassword(e)} class="form-control" />
                      <label class="form-label" for="form3Example1c">Email</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="number"  id="otp"
                          value={data.otp}
                          onChange={(e) => handlepassword(e)} class="form-control" />
                      <label class="form-label" for="form3Example1c">OTP</label>
                    </div>
                  </div>

                 

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="password"   id="password"
                          value={data.password}
                          onChange={(e) => handlepassword(e)} class="form-control" />
                      <label class="form-label" for="form3Example4c">Password</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="password"  id="confirm_password"
                          value={data.confirm_password}
                          onChange={(e) => handlepassword(e)} class="form-control" />
                      <label class="form-label" for="form3Example4cd">Confirm password</label>
                    </div>
                  </div>

                 

                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" class="btn btn-primary btn-lg">submit</button>
                  </div>
                 
                </form>

              </div>
              <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  class="img-fluid" alt="Sample image" />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Passwordset