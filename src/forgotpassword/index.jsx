import React, { useState } from 'react'
import "./style.css"
import  Axios  from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
const Forgotpassword = () => {
  const nav=useNavigate();
    const url = "http://127.0.0.1:8000/forgotpassword/";

    const [data,setData]=useState({
      email:""
    })
    // const handlepass=(e)=>{
    //     e.preventDefault();
    //     if(document.getElementById("email").value.length==0){
    //         alert("data not filled")
    //     }else{
    //         setDisplay("block");
    //         setText("set password")
    //     }
    // }
    // const token=localStorage.getItem("token");
    // const newtoken=JSON.parse(token).token;
    const submit=(e)=>{
      e.preventDefault();
      Axios.post(url,
        // {
        //   headers:{
        //     // "Authorization":`Token ${token}`
        //     "Authorization":"Token 9529313d9ef5e83bd76dc86992eeb52f3d22a1b3"
        //   }, 
        // },
      
        {
        email: data.email,
      
      })
        .then((res) => {
          console.log(res.data); 
          if(res.data.message==="E-mail sent successfully Please check email"){
            nav("/passwordset")
          }

          setData(res.data);
        })
        .catch((error) => {
          console.error(error);
          // setmsg(error.message)
        });
    
    }
    function handlemail(e) {
      const newData = { ...data };
      newData[e.target.id] = e.target.value;
      setData(newData);
      console.log(newData,"data available");
    }
  return (
    <>
    <div className='main'>

    
    <section class="h-100 w-100" style={{backgroundColor: "#eee"}}>
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black" style={{borderRadius: "25px"}}>
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p class=" h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Forgot password !</p>

                <form class="mx-1 mx-md-4"  onSubmit={(e) => submit(e)} style={{margin:"0px"}}>

                 

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mt-4">
                      <input type="email" id="email"
                          value={data.email}
                          onChange={(e) =>handlemail(e)} class="form-control" />
                      <label class="form-label" for="form3Example3c">Your Email</label>
                    </div>
                  </div>


                  

                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" class="btn btn-primary btn-lg">Reset Password</button>
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
    </>
  )
}

export default Forgotpassword