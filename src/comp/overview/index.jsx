import React from 'react'

const Overview = () => {
  return (
    <div>
        <h2 className='mt-4 m-4 text-dark bold'>Welcome to your account, Nitish</h2>
        <div className='col-12 d-flex' style={{justifyContent:"space-around"}}>
          <div className='col-8'>
          <div className='col-12'>
        <div className='col-12'> 
        <div class="navbar  bg-light col-12" style={{height:"100%"}}>
        <i class="bi bi-x-lg mt-4" style={{marginLeft:"100%"}}></i>
 
  <div class=" d-flex" style={{justifyContent:"space-around"}}>
    <div className='m-4'>
        <img src="https://odin.adobe.com/content/dam/account/en/alin-hva/visuals/MAX22_4429905_Account_Management_Hub_Icon_48x48.jpg" alt="" />
    </div>
    <div>
        <h5 className='text-dark'>Adobe MAX. The Creativity Conference.<br/>
October 18–20 Los Angeles and virtual</h5>
<p>Come to MAX to discover how Creative Cloud can fuel your creativity. Learn new skills and find inspiration.</p>
    </div>
    <div>
        <button className="btn  btn-lg  bg-primary text-white mt-4">
            Register
        </button>
    </div>
  </div>
  </div>
  <div class="navbar mt-4 bg-light col-12" style={{height:"100%"}}>
        <i class="bi bi-x-lg mt-4" style={{marginLeft:"100%"}}></i>
 
  <div class=" d-flex" style={{justifyContent:"space-around"}}>
    <div className='m-4'>
    <div class="row row-cols-1 row-cols-md-1 ">
  <div class="col-12 mb-8">
    <div class="card h-100 col-8">
      <img src="https://wwwimages.adobe.com/content/dam/acom/images/shared/retention_background_images/high_res/CCPP@2x.png" class=" card-img-top" alt="..." style={{height:"200px",borderRadius:"13px"}}/>
      
    </div>
    
  </div>
  </div>    </div>
    <div>
        <h5 className='text-dark'>Upgrade your free plan today<br/>
</h5>
<p>Take advantage of all the capabilities that the Photography plan (20GB) has to offer. Benefit by upgrading today.</p>
<p>Starting at <h5>₹797.68/mo</h5></p>
<div style={{display:"flex",justifyContent:"space-around"}}>
    <button className="btn    bg-primary text-white ">
            Upgrade
        </button>
        <button className="btn    bg-primary text-white " >
        View other plane
        </button>
    </div>
    </div>
    
    
  </div>
  </div>
  
  </div>
  <div>
    
  </div>
  
</div>            </div>
          <div className='col-3'>
          <div class="navbar  bg-light col-12" style={{height:"100%"}}>
 
  <div style={{marginBottom:"100%",}}>
    <div className='m-4' style={{display:"flex",justifyContent:"center"}}>
        <img src="https://odin.adobe.com/content/dam/account/en/alin-hva/visuals/MAX22_4429905_Account_Management_Hub_Icon_48x48.jpg" alt="" style={{borderRadius:"30px",width:"100px",height:"100px"}} />
    </div>
    <div style={{display:"flex",alignItems:"center", flexDirection:"column"}}>
        <h5 className='text-dark'>Not add</h5>
        <button className="btn    border-dark text-dark " style={{borderRadius:"30px"}}>
          <b>
            Edit Profile
            </b>
        </button>
    </div>
    <div className='mt-4' style={{borderBottom:"1px solid",borderTop:"1px solid"}}>
      <p>RevivingIndia@gmail.com</p>
      <a href="#">change email</a>
    </div>
    <div className='mt-4' style={{borderBottom:"1px solid",borderTop:"1px solid"}}>
      <p>No current password set</p>
      <a href="#">Set password</a>
    </div>
  </div>
  </div>            </div>
        </div>
    
    </div>
  )
}

export default Overview