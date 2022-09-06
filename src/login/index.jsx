import React, { useState } from 'react'
import './login.css'
// import img from "./stadob.png"
// import googleimg from "./download.png"
// import fb from "./fb.png"
import { NavLink, useNavigate } from 'react-router-dom'
import Axios  from 'axios'
import Googlelogin from '../googlelogin'
// import Facebook from '../facebook'
// import Twitter from '../twitter'

const Login = () => {
  const [msg,setmsg]=useState("")
  const [modal, setModal]=useState('')
  const nav=useNavigate();
  const url = "http://127.0.0.1:8000/login/";

  const [data, setData] = useState({
    
    email: "",
    password: "",
    
  });
 
  // const email=document.getElementById('typeEmailX')|| "";
  // const pass=document.getElementById('typePasswordX') || "";
  const submitdata=(e)=>{
    // const {email,pass}=document.forms[0]
    // console.log(email,"data")
    e.preventDefault();
    Axios.post(url, {
      email: data.email,
      password: data.password
    
    })
      .then((res) => {
        console.log(res.data);
        setmsg(res.data.message)
        setModal("show-modal1")
        if(res.data.message==="Login Successful"){
          localStorage.setItem("token",res.data.token.token);
          setTimeout(
            ()=>{
              nav("/main")
            },1000
          )
        }

       
        
      })
      .catch((error) => {
        console.error(error);
        setmsg(error.message)
      });
  }
  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    // console.log(newData,"data available");
  }
  return (
    <>
    {/* <section className="vh-100 gradient-custom">
    <div className="container py-3 h-100">
      <div className="row d-flex justify-content-end align-items-center h-100" style={{overflow:"hidden"}}>
      <h1 className='logo'>SEE DESIGN
      
      </h1>
   
        <div className="col-12 col-md-8 col-lg-6 col-xl-5" style={{width:"35%"}}>
          
          <div className="card   text-dark" style={{borderRadius: "1rem", backgroundColor:"#383131c7",color:"#fff"}}>
            <div className="card-body p-5 text-center">
  
              <div className=" pb-1">
  
                <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                <p className="text-dark-50 text-light">Please enter your login and password!</p>
                
  <form  onSubmit={(e)=>submitdata(e)} style={{margin:"0px",marginBottom:"10px"}}
  
  >
                <div className="form-outline form-white mb-2">
                  <input type="email" id="email"  value={data.email}
                          onChange={(e) => handle(e)}  style={{color:"black"}}  className="form-control form-control-lg" name='email'  placeholder='Email' required />
                </div>
  
                <div className="form-outline form-white  ">
                  <input type="password" id="password" style={{color:"black"}}  value={data.password}
                          onChange={(e) => handle(e)} className="form-control form-control-lg" name='pass' placeholder='Password'  required/>
                </div>
  
                <p className="small mb-2 pb-lg-2"><NavLink to="/forgot" className="text-light-50" style={{color:"white", textDecoration: "none"
}} >Forgot password?</NavLink></p>
  
                <button className="btn btn-outline-dark btn-lg px-5 bg-dark text-white" type="submit" >Login</button>
  </form>
  <Googlelogin/>
  
              </div>
  
              <div>
                <p className="mb-3">Don't have an account? <NavLink to="/signup" className="text-dark-50 fw-bold" style={{textDecoration: "none"}}>Sign Up</NavLink>
                </p>
              </div>
  
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> */}
  
  <section class="h-100" style={{backgroundColor: "#eee"}}>
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black" style={{borderRadius: "25px"}}>
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p class=" h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>

                <form class="mx-1 mx-md-4" onSubmit={(e)=>submitdata(e)} style={{margin:"0px"}}>

                  

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="email"  id="email"  value={data.email}
                          onChange={(e) => handle(e)}  class="form-control" />
                      <label class="form-label" for="form3Example3c">Your Email</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="password"  id="password" style={{color:"black"}}  value={data.password}
                          onChange={(e) => handle(e)}  class="form-control" />
                      <label class="form-label" for="form3Example4c">Password</label>
                    </div>
                  </div>
                  <div class="d-flex flex-row align-items-center justify-content-center mb-4">
                   <NavLink to='/forgot'>
                      <label class="form-label" for="form3Example4c">Forgot Password</label>
                    </NavLink>
                  </div>
                 

                  <div class="form-check d-flex justify-content-center mb-5">
                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label class="form-check-label text-dark" for="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>

                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" class="btn btn-primary btn-lg">Login</button>
                  </div>
                  <p className=" text-muted mt-5 mb-0" style={{color:"black"}}>
                        Have already an account?{" "}
                        <NavLink to="/signup" className="fw-bold " style={{textDecoration:"none"}}>
                          Signup
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
     <div class={`modal1 ${modal}`} style={{display:"block"}}>
     <div class="modal-content1">
         <span class="close-button1" onClick={()=>setModal("")}>×</span>
         <h1 style={{color:"black",fontWeight:"500",
     fontSize:"28px"}}>{msg} 
     </h1>
     </div>
 </div>
      </> 
  )
}

export default Login