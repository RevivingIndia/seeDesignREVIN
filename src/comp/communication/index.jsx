import React from 'react'

const Communication = () => {
  return (
    <>
    <div class="modal fade" id="exampleModalToggle4" aria-hidden="true" aria-labelledby="exampleModalToggleLabel4" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header" style={{borderBottom:"0px"}}>
        {/* <h5 class="modal-title" id="exampleModalToggleLabel2">Modal 2</h5> */}
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" style={{textAlign:"center",color:"black"}}>
      <form action="">

            

            

            <p class="fw-bold mb-2">Add Phone Number</p>

           

            <div class="row mb-2">
              <div class="col-12 d-flex" style={{justifyContent:"space-around"}}>
             
                <div class="form-outline col-6">
                  <input type="number" id="formControlLgXM" class="form-control form-control-md"
                    placeholder='Phone Number' required />
                  <label class="form-label" for="formControlLgXM">Phone No.</label>
                </div>
              </div>
            
            </div>

            <button class="btn btn-success btn-md bg-primary btn-block">Add card</button>
          </form>
      </div>
     
    </div>
  </div>
</div>
    <div className='col-12 d-flex' style={{justifyContent:"space-around"}}>
    <div className='col-2'>
    <div class="navbar  bg-light col-12" style={{height:"100%"}}>
     
     <div style={{marginBottom:"auto",marginTop:"50px"}}>
        <a href='#account'  style={{textDecoration:"none"}}>
     <h6 className='text-dark'>Account</h6>
     </a>
    
     </div>
     </div>  
        </div>
    <div className='col-9' style={{height:"100vh",overflow:"auto"}}>
        <div id='account'>
       <div>
        <h2 className='text-dark text-bold'>Account communication preferences</h2>
        <p className='text-dark text-bold'>Adobe needs to occasionally send you emails related to your account, like billing issues or security alerts. These emails will be sent to your primary email address. You can also opt to receive updates by text message (SMS).</p>
       </div>
      
      <div class="navbar  bg-light col-12" style={{display:"flex",alignItems:"center"}}>
         <p>Email</p>
         <p>
kushwaha30nitish2002@gmail.com</p>
      <button className="btn    border-dark text-dark " style={{borderRadius:"30px"}}>
              <b>
              (required)
                </b>
            </button>
      </div>
      <div class="navbar  bg-light col-12 mt-4" style={{display:"flex",alignItems:"center"}}>
         <p>Phone (SMS)</p>
         <p>Not add</p>
      <button className="btn    border-dark text-dark " style={{borderRadius:"30px"}} data-bs-target="#exampleModalToggle4" data-bs-toggle="modal" data-bs-dismiss="modal">
              <b>
                Add
                </b>
            </button>
      </div>
     
    </div>
  
        </div>
        </div>
        </>
  )
}

export default Communication