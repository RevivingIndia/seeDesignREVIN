import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./signup.css";
import Axios from "axios";
const Signup = () => {
  const [msg,setmsg]=useState('')
  const [modal, setModal]=useState('')
  const url = "http://127.0.0.1:8000/signup/";
const nav=useNavigate();
  const [data, setData] = useState({
    mobile: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const submit = (e) => {
    e.preventDefault();
    Axios.post(url, {
      mobile: data.mobile,
      email: data.email,
      password: data.password,
      confirm_password: data.confirm_password,
    })
      .then((res) => {
        console.log(res.data);
        if(data.password===data.confirm_password ){
          setmsg(res.data.message)
          setModal("show-modal2")
          if(res.data.message!=='User Already Exist With Provided Email-ID'){
            console.log(res.data.message);
            
            setTimeout(()=>{
              nav("/login")
            },2000)
          }
        
        }
        else{
          setmsg("confirm password is not same!")
        }
      })
      .catch((error) => {
        // console.error(error);
        setmsg(error.message)
      });
  };
  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    // console.log(newData,"data available");
  }
  return (
    <>
    
      <section class="h-100" style={{backgroundColor: "#eee"}}>
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black" style={{borderRadius: "25px"}}>
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p class=" h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form class="mx-1 mx-md-4"  onSubmit={(e) => submit(e)} style={{margin:"0px"}}>
                
                  {/* <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="text"  id="name"
                          value={data.name}
                          onChange={(e) => handle(e)} class="form-control" />
                      <label class="form-label" for="form3Example1c">Your Name</label>
                    </div>
                  </div> */}

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="email" id="email"
                          value={data.email}
                          onChange={(e) => handle(e)} class="form-control" />
                      <label class="form-label" for="form3Example3c">Your Email</label>
                    </div>
                  </div>
                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-mobile fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="number" id="mobile"
                          value={data.mobile}
                          onChange={(e) => handle(e)} class="form-control" style={{ WebkitAppearance:"none"}}/>
                      <label class="form-label" for="form3Example3c">Mobile Number</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="password"   id="password"
                          value={data.password}
                          onChange={(e) => handle(e)} class="form-control" />
                      <label class="form-label" for="form3Example4c">Password</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="password"  id="confirm_password"
                          value={data.confirm_password}
                          onChange={(e) => handle(e)} class="form-control" />
                      <label class="form-label" for="form3Example4cd">Repeat your password</label>
                    </div>
                  </div>

                  <div class="form-check d-flex justify-content-center mb-5">
                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label class="form-check-label text-dark" for="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>

                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" class="btn btn-primary btn-lg">Register</button>
                  </div>
                  <p className=" text-muted mt-5 mb-0" style={{color:"black"}}>
                        Have already an account?{" "}
                        <NavLink to="/login" className="fw-bold " style={{textDecoration:"none"}}>
                          Login here
                        </NavLink>
                      </p>
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
      {/*------------------------------ modal section ----------------------- */}
      <div class={`modal2 ${modal}`}>
    <div class="modal-content2">
        <span class="close-button2" onClick={()=>setModal("")}>×</span>
        <h1 style={{color:"black",fontWeight:"500",
    fontSize:"28px"}}>{msg}</h1>
    </div>
</div>
{/*----------------------------------- modal end ----------------------------- */}
      
    </>
  );
};

export default Signup;
