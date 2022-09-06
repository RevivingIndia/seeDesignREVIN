import React from 'react'

const Payment = () => {
  return (
    <div>
<div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header" style={{borderBottom:"0px"}}>
        {/* <h5 class="modal-title" id="exampleModalToggleLabel2">Modal 2</h5> */}
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" style={{textAlign:"center",color:"black"}}>
      <form action="">

            

            

            <p class="fw-bold mb-2">Add new card:</p>

           

            <div class="row mb-2">
              <div class="col-12 d-flex" style={{justifyContent:"space-around"}}>
              <div class="form-outline mb-4 col-5">
              <input type="text" id="formControlLgXsd" class="form-control form-control-md"
                value="Anna Doe" />
              <label class="form-label" for="formControlLgXsd">Cardholder's Name</label>
            </div>
                <div class="form-outline col-6">
                  <input type="text" id="formControlLgXM" class="form-control form-control-md"
                    value="1234 5678 1234 5678" />
                  <label class="form-label" for="formControlLgXM">Card Number</label>
                </div>
              </div>
              <div class="col-4">
                <div class="form-outline">
                  <input type="number" id="formControlLgExpk" class="form-control form-control-md"
                    placeholder="MM/YY" />
                  <label class="form-label" for="formControlLgExpk">Expire</label>
                </div>
              </div>
              <div class="col-4">
                <div class="form-outline">
                  <input type="password" id="formControlLgcvv" class="form-control form-control-md"
                    placeholder="Cvv" />
                  <label class="form-label" for="formControlLgcvv">Cvv</label>
                </div>
              </div>
            </div>

            <button class="btn btn-success btn-md bg-primary btn-block">Add card</button>
          </form>
      </div>
     
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModalToggle4" aria-hidden="true" aria-labelledby="exampleModalToggleLabel4" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header" style={{borderBottom:"0px"}}>
        {/* <h5 class="modal-title" id="exampleModalToggleLabel2">Modal 2</h5> */}
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" style={{textAlign:"center",color:"black"}}>
      <form action="">

            

            

            <p class="fw-bold mb-2">Add UPI ID</p>

           

            <div class="row mb-2">
              <div class="col-12 d-flex" style={{justifyContent:"space-around"}}>
              <div class="form-outline mb-4 col-5">
              <input type="text" id="formControlLgXsd" class="form-control form-control-md"
               placeholder='your Name' />
              <label class="form-label" for="formControlLgXsd">Name</label>
            </div>
                <div class="form-outline col-6">
                  <input type="text" id="formControlLgXM" class="form-control form-control-md"
                    placeholder='UPI ID'  />
                  <label class="form-label" for="formControlLgXM">UPI ID</label>
                </div>
              </div>
              <div class="col-4">
                <div class="form-outline">
                  <input type="text" id="formControlLgExpk" class="form-control form-control-md"
                    placeholder="Bank" />
                  <label class="form-label" for="formControlLgExpk">Bank </label>
                </div>
              </div>
              <div class="col-4">
                <div class="form-outline">
                  <input type="password" id="formControlLgcvv" class="form-control form-control-md"
                    placeholder="Cvv" />
                  <label class="form-label" for="formControlLgcvv">Cvv</label>
                </div>
              </div>
            </div>

            <button class="btn btn-success btn-md bg-primary btn-block">Add card</button>
          </form>
      </div>
     
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModalToggle3" aria-hidden="true" aria-labelledby="exampleModalToggleLabel3" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header" style={{borderBottom:"0px"}}>
        {/* <h5 class="modal-title" id="exampleModalToggleLabel2">Modal 2</h5> */}
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" style={{textAlign:"center",color:"black"}}>
      <p>Are You Sure To Delete !</p>
      </div>
     
    </div>
  </div>
</div>

<div className='col-12 d-flex mt-4' style={{justifyContent:"space-around",minHeight:"600px"}}>
<div className='col-3'>
<div class="navbar  bg-light col-12" style={{height:"100%"}}>
 
 <div style={{marginBottom:"auto",marginTop:"50px"}}>
    <a  style={{textDecoration:"none",cursor:"pointer"}}  data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">
 <h6 className='text-dark'>Save Card</h6>
 </a>
 <a   style={{textDecoration:"none",cursor:"pointer"}}  data-bs-target="#exampleModalToggle4" data-bs-toggle="modal" data-bs-dismiss="modal">
 <h6 className='text-dark'>UPI ID</h6>
 </a>
 
 </div>
 </div>  
    </div>
<div className='col-8' >
    <div id='account'>
   <div>
    <h2 className='text-dark text-bold'>Saved Card</h2>
   </div>
   <div class="navbar  bg-light col-12" style={{display:"flex",alignItems:"center"}}>
  <img src="https://pngimg.com/uploads/mastercard/mastercard_PNG23.png" alt="" style={{width:"70px",height:"50px"}}/>
     <p className='mt-2'>**** **** **** 3193</p>
   <p>
    credit Card
   </p>
  <button className="btn    border-dark text-dark " data-bs-target="#exampleModalToggle3" data-bs-toggle="modal" data-bs-dismiss="modal" style={{borderRadius:"30px"}}>
          <b>
            Delete
            </b>
        </button>
  </div>
  <div class="navbar  bg-light col-12 mt-4" style={{display:"flex",alignItems:"center"}}>
  <img src="https://www.visa.co.in/dam/VCOM/regional/ap/india/global-elements/images/in-visa-gold-card-498x280.png" alt="" style={{width:"70px",height:"50px"}}/>
     <p className='mt-2'>**** **** **** 3193</p>
   <p>
    Debit Card
   </p>
  <button className="btn    border-dark text-dark " data-bs-target="#exampleModalToggle3" data-bs-toggle="modal" data-bs-dismiss="modal" style={{borderRadius:"30px"}}>
          <b>
            Delete
            </b>
        </button>
  </div>
</div>
<div id='info' className='mt-4'>
  <div>
    <h2 className='text-dark text-bold'>UPI ID</h2>
   </div>
  
  <div class="navbar  bg-light col-12 mt-4" style={{display:"flex",alignItems:"center"}}>
     <p>AXIS</p>
     <p>
     1234567890@axis</p>
  <button className="btn    border-dark text-dark " data-bs-target="#exampleModalToggle3" data-bs-toggle="modal" data-bs-dismiss="modal" style={{borderRadius:"30px"}}>
          <b>
            Delete
            </b>
        </button>
  </div>
  
  
  </div>
 
    </div>
    </div>






   
    </div>
  )
}

export default Payment