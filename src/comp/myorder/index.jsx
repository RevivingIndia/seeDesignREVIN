import React from 'react'
import { NavLink } from 'react-router-dom'

const MyOrder = () => {
  return (
    <div>
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
     <h6 className='text-dark'>My Order</h6>
     </a>
    
     </div>
     </div>  
        </div>
    <div className='col-9' style={{height:"100vh"}}>
        <div id='account'>
       <div>
        <h2 className='text-dark text-bold'>My Order</h2>
        <p className='text-dark text-bold'>Adobe needs to occasionally send you emails related to your account, like billing issues or security alerts. These emails will be sent to your primary email address. You can also opt to receive updates by text message (SMS).</p>
       </div>
      
       <div class="row">
        <div class="col-12">
          <div class="card mb-4" style={{borderRadius:"0px"}}>
            <div class="card-header pb-0">
             
            </div>
            <div class="card-body px-0 pt-0 pb-2">
              <div class="table-responsive p-0">
                <table class="table align-items-center mb-0">
                  <thead>
                    <tr>
                      <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Designer_To</th>
                      <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Designer_Id</th>
                      <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Order_Id</th>
                      <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Status</th>
                      <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">WorkHrs</th>
                      <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">price</th>
                      <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Editor</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div class="d-flex px-2 py-1">
                          <div>
                            <img src="../assets/img/team-2.jpg" class="avatar avatar-sm me-3" alt="user1" />
                          </div>
                          <div class="d-flex flex-column justify-content-center">
                            <h6 class="mb-0 text-sm">John Michael</h6>
                            <p class="text-xs text-secondary mb-0">john@creative-tim.com</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p class="text-xs font-weight-bold mb-0">username_seeDesign</p>
                      </td>
                      <td class="align-middle text-center text-sm">
                        <span class="text-secondary text-xs font-weight-bold">rvrnknj@seeDesign</span>
                      </td>
                      <td class="align-middle text-center">
                      <span class="badge badge-sm bg-gradient-success">Processing</span>
                      </td>
                      <td class="align-middle text-center">
                        <span class="text-secondary text-xs font-weight-bold" >4-8 hr</span>
                      </td>
                      <td class="align-middle text-center">
                        <span class="text-secondary text-xs font-weight-bold" >$5</span>
                      </td>
                      <td class="align-middle text-center">
                        <NavLink to="/customize">
                        <span class="text-secondary text-xs font-weight-bold" >Visit</span>
                        </NavLink>
                      </td>
                     
                    </tr>
                    <tr>
                      <td>
                        <div class="d-flex px-2 py-1">
                          <div>
                            <img src="../assets/img/team-3.jpg" class="avatar avatar-sm me-3" alt="user2"/>
                          </div>
                          <div class="d-flex flex-column justify-content-center">
                            <h6 class="mb-0 text-sm">Alexa Liras</h6>
                            <p class="text-xs text-secondary mb-0">alexa@creative-tim.com</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p class="text-xs font-weight-bold mb-0">username_seeDesign</p>
                      </td>
                      <td class="align-middle text-center text-sm">
                      <span class="text-secondary text-xs font-weight-bold">rvrnknj@seeDesign</span>
                      </td>
                      <td class="align-middle text-center">
                      <span class="badge badge-sm bg-gradient-secondary">Complete</span>
                      </td>
                      <td class="align-middle text-center">
                        <span class="text-secondary text-xs font-weight-bold" >4-8 hr</span>
                      </td>
                      <td class="align-middle text-center">
                        <span class="text-secondary text-xs font-weight-bold" >$15</span>
                      </td>
                      <td class="align-middle text-center">
                      <NavLink to="/customize">
                        <span class="text-secondary text-xs font-weight-bold" >Visit</span>
                        </NavLink>
                      </td>
                    </tr>
                   
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  
        </div>
        </div>
    </div>
  )
}

export default MyOrder