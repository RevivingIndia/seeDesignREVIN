import React from 'react'
import { NavLink } from 'react-router-dom'

const Firstscreen = () => {
  setTimeout(()=>{
    new window.google.translate.TranslateElement(
    
      "google_translate_element"
    );
  },100)
  return (
    <div>
         <section class="h-100 w-100" style={{backgroundColor: "#eee",position:"fixed",top:"0px",bottom:"0px"}}>
  <div class=" h-100 w-100" style={{maxWidth:'100%'}}>
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-12">
        <div class="card text-black" >
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-12 col-xl-11 order-2 order-lg-1">

                <p class=" h1 fw-bold mb-5 mx-1  mt-4" style={{textAlign:"center"}}>Welcome To SeeDesign! </p>
                <p class="  fw-medium mb-5   mt-4" style={{textAlign:"center",fontSize:"30px"}}>Select Your Language 
                <div class="d-flex flex-row align-items-center mb-4">
                    <div class="form-outline flex-fill mb-0">
                    <div class="form-outline flex-fill mb-0" id="google_translate_element">
                      </div>
                    </div>
                  </div>
                
                </p>
                <NavLink to='/main'>
                <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" class="btn btn-primary btn-md" style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>Lets Explore
                    <i class="fas fa-arrow-right fa-lg  fa-fw" style={{color:"#fff"}}></i>
                    
                    </button>
                  </div>
                  </NavLink>
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

export default Firstscreen