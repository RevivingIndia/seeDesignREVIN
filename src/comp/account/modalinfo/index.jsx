import React from 'react'

const ModalInfo = () => {
  return (
    <div>
        <div class="modal fade" id="exampleModalToggleupload" aria-hidden="true" aria-labelledby="exampleModalToggleLabel3" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header" style={{borderBottom:"0px"}}>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" style={{textAlign:"center",color:"black"}}>
      <p>Upload Your Profile Image</p>

      <input type="file" id='fileupload'/>
      <button class="btn btn-success btn-md bg-primary btn-block">Save</button>
      </div>
     
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModalToggleprofilename" aria-hidden="true" aria-labelledby="exampleModalToggleLabel3" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header" style={{borderBottom:"0px"}}>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" style={{textAlign:"center",color:"black"}}>
      <p>Add your Profile Name</p>

      <input type="text" />
      <br/>
      <button class="btn btn-success btn-md bg-primary btn-block mt-4">Save</button>
      </div>
     
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModalTogglescreenname" aria-hidden="true" aria-labelledby="exampleModalToggleLabel3" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header" style={{borderBottom:"0px"}}>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" style={{textAlign:"center",color:"black"}}>
      <p>Add your Screen Name</p>

      <input type="text" />
      <br/>
      <button class="btn btn-success btn-md bg-primary btn-block mt-4">Save</button>
      </div>
     
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModalTogglecompanyname" aria-hidden="true" aria-labelledby="exampleModalToggleLabel3" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header" style={{borderBottom:"0px"}}>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" style={{textAlign:"center",color:"black"}}>
      <p>Add your Company Name</p>

      <input type="text" />
      <br/>
      <button class="btn btn-success btn-md bg-primary btn-block mt-4">Save</button>
      </div>
     
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModalToggleupdatename" aria-hidden="true" aria-labelledby="exampleModalToggleLabel3" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header" style={{borderBottom:"0px"}}>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" style={{textAlign:"center",color:"black"}}>
      <p>Update your Name</p>

      <input type="text" />
      <br/>
      <button class="btn btn-success btn-md bg-primary btn-block mt-4">Update</button>
      </div>
     
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModalToggleupdateemail" aria-hidden="true" aria-labelledby="exampleModalToggleLabel3" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header" style={{borderBottom:"0px"}}>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" style={{textAlign:"center",color:"black"}}>
      <p>Update your Email</p>

      <input type="email" />
      <br/>
      <button class="btn btn-success btn-md bg-primary btn-block mt-4">Update</button>
      </div>
     
    </div>
  </div>
</div>

<div class="modal fade" id="exampleModalToggleupdatemobile" aria-hidden="true" aria-labelledby="exampleModalToggleLabel3" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header" style={{borderBottom:"0px"}}>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" style={{textAlign:"center",color:"black"}}>
      <p>Update your Mobile Number</p>

      <input type="number" />
      <br/>
      <button class="btn btn-success btn-md bg-primary btn-block mt-4">Update</button>
      </div>
     
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModalToggleupdatelang1" aria-hidden="true" aria-labelledby="exampleModalToggleLabel3" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header" style={{borderBottom:"0px"}}>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" style={{textAlign:"center",color:"black"}}>
      <p>Update your First language</p>

      <input type="text" />
      <br/>
      <button class="btn btn-success btn-md bg-primary btn-block mt-4">Update</button>
      </div>
     
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModalToggleupdatelang2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel3" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header" style={{borderBottom:"0px"}}>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" style={{textAlign:"center",color:"black"}}>
      <p>Update your Second language</p>

      <input type="text" />
      <br/>
      <button class="btn btn-success btn-md bg-primary btn-block mt-4">Update</button>
      </div>
     
    </div>
  </div>
</div>
    </div>
  )
}

export default ModalInfo