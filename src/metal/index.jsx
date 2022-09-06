import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./icon.css"
const Metal = () => {
  const [modalimg,setmodalimg]=useState("");
  const nav=useNavigate();
  const metal=[
    {imgsrc:"https://www.refractorymetal.org/wp-content/uploads/2019/10/Common_Metal_Materials-2.png"},
    {imgsrc:"https://images.squarespace-cdn.com/content/v1/571079941bbee00fd7f0470f/1534799119980-PRY9DCBYV547AHYIOBSH/Iron+%284%29.JPG?format=2500w"},
    {imgsrc:"https://qph.cf2.quoracdn.net/main-qimg-3eba01ac4f8297849fecae7c1668ab09-lq"},
    {imgsrc:"https://s4x3n5c7.stackpathcdn.com/wp-content/uploads/2019/04/goldeffects__1.png"},
    {imgsrc:"https://samrajpolytexltd.com/wp-content/uploads/2019/07/4S-metallic-gold-spray-paint.jpg"},
    {imgsrc:"https://cdn.pixabay.com/photo/2019/08/19/15/13/eiffel-tower-4416700__340.jpg"},
    {imgsrc:"https://tampasteel.com/wp-content/uploads/2018/08/metals-that-dont-rust.jpg"},
    {imgsrc:"https://cdn.pixabay.com/photo/2016/01/14/20/55/factory-1140760__340.jpg"},
    {imgsrc:"https://cdn.pixabay.com/photo/2016/03/23/19/38/shopping-carts-1275480__340.jpg"},
  ]
  const handlemodal=(e)=>{
    const a=e.target.id;
    console.log(e.target.id)

    const b=document.getElementById(a).getAttribute('src');
    setmodalimg(b);
 
  }
  const handledata=()=>{
   const bg=metal.
   console.log(bg)
  }
  const handlefilter=(e)=>{
 const a=e.target.id;
 const b=document.getElementById(a).parentNode.previousSibling.getAttribute('src');
        nav("/dashbord",{state:{id:1,name:b,txt:"your uploaded image"}})
        console.log(b,"moda")
  }
  const handledownload=(e)=>{
    const a=e.target.id;
    const b=document.getElementById(a).parentNode.previousSibling.getAttribute('src');
    console.log(b,"moda")
    setmodalimg(b);
  }











  return (
    <div>
       {/* free trail modal */}

       <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title text-dark" id="exampleModalToggleLabel">Free trail for 7 Days</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
        
        <label style={{fontSize:"20px",color:"black"}}>Enter Your Email Id</label>
       <input type="email" placeholder='Enter Your email' style={{width:"80%",height:"40px",color:"black"}} required={true}/>
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary" type='submit' data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Submit</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        {/* <h5 class="modal-title" id="exampleModalToggleLabel2">Modal 2</h5> */}
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" style={{textAlign:"center",color:"black"}}>
        Email submit sucessfully !
      </div>
      <div class="modal-footer">
        {/* <button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" data-bs-dismiss="modal">Back to first</button> */}
      </div>
    </div>
  </div>
</div>






       
       {/* free trail modal end  */}
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{cursor:"pointer",width:"100vw"}}>
  <div class="modal-dialog" style={{maxWidth:"1200px"}}>
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"></h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div style={{display:"flex",justifyContent:"end",marginRight:"10px"}}>
      <i class="bi bi-arrow-left " style={{marginRight:"10px"}} onClick={handledata}></i>
      <i class="bi bi-arrow-right"></i>
      </div>
      <div class="modal-body w-100 d-flex">
     <img src={modalimg} alt=""  className='w-50'/>
     <div className='w-50 p-2'>
      <h4>Little girl using VR glasses at home for learning Solar system planets</h4>
      <span>By lithiumphoto</span>
      <div id="icon"  style={{width:"100%",opacity:"1",display:"flex",justifyContent:"start",flexDirection:"column",alignItems:"end"}}>
                            <div style={{display:"flex",zIndex:"999",justifyContent:"space-around",alignItems:"center",background:"white",height:"30px",margin:"10px",borderRadius:"6px"}}>
                           <span style={{width:"150px",display:"flex",justifyContent:"space-around",border:"1px solid",margin:"5px",alignItems:"center",height:"30px",borderRadius:"6px"}}>
                            <i class="bi bi-heart"></i>
                            Save to Library
                            </span>
                            <span style={{width:"180px",display:"flex",justifyContent:"space-around",border:"1px solid",margin:"5px",alignItems:"center",height:"30px",borderRadius:"6px"}}>
                            <i class="bi bi-download"></i>
                            Download Preview
                            </span>
                            <span style={{width:"150px",display:"flex",justifyContent:"space-around",border:"1px solid",margin:"5px",alignItems:"center",height:"30px",borderRadius:"6px"}}>
                            <i class="bi bi-upload"></i>
                          Open in App
                            </span>
                  </div>
                  <div style={{marginRight:"auto"}}>
                  <div style={{display:"flex",justifyContent:"start"}}>
                    <input type="radio" className='m-2'/>
                    <span className='m-2'>
                    Standard license (Free with trial) 
                    </span>
                  </div>
                  <div style={{display:"flex",justifyContent:"start"}}>
                    <input type="radio" className='m-2'/>
                    <span className='m-2'>
                    Extended license (₹6,386.16) 


                    </span>
                  </div>
                </div>
                  <span data-bs-target="#exampleModalToggle" data-bs-toggle="modal" data-bs-dismiss="modal" style={{background:"royalblue",height:"40px",color:"#fff",display:"flex",justifyContent:"space-around",alignItems:"center",width:"40%",borderRadius:"12px",margin:"10px",marginRight:"auto"}}>
                  <i class="bi bi-cart"></i>
                    free width trial</span>
                </div>
                
     </div>
      </div>
      
<table style={{width:"60%",margin:"10px"}}>
  <tr>
    <th>DIMENSIONS</th>
    <th>FILE TYPE</th>
    <th>CATEGORY</th>
    <th>
LICENSE TYPE</th>
  </tr>
  <tr>
    <td>6000 x 4000px</td>
    <td>JPEG</td>
    <td>People</td>
    <td>Standard or Extended</td>
  </tr>
  </table>
      <div class="modal-footer">
       
      </div>
    </div>
  </div>
</div>

<div class="form-outline mb-4 mt-4 d-flex m-4" style={{justifyContent:"center",alignItems:"center",height:"50px"}}>
<select name="cars"  style={{width:"100px",height:"100%",outline:"none"}}>
    <option value="volvo">All</option>
    <option value="saab">Stone</option>
    <option value="opel">Metal</option>
    <option value="audi">Wood</option>
  </select>
  <input type="search" class="form-control" id="datatable-search-input" style={{height:"100%"}} />
  <label class="form-label mb-0" for="datatable-sea" style={{width:"100px",display:"flex",justifyContent:"center",alignItems:"center",background:"royalblue",height:"100%"}}>
  <select name="cars"  style={{width:"200px",height:"100%",outline:"none"}}>
    <option value="volvo">Library</option>
    <option value="saab">View All</option>
    <option value="opel">My Libraries</option>
  </select>
  </label>
</div>

        <div style={{width:"100%",height:"300px",display:"flex",alignItems:"center",justifyContent:"center",backgroundPosition:"center",backgroundImage:`url("https://masswallpapers.com/wp-content/uploads/2020/10/1-12.jpg")`}}>
            <h2 style={{color:"#fff",fontSize:"50px",textAlign:"center",fontFamily:"fantasy"}}>Metal Gallery</h2>
        </div>


        <div class="row mt-4">
          {metal.map((data,index)=>(
    <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
    <div id='imagicon' style={{position:"relative",cursor:"pointer"}}>
    {/* <button type="button" class="btn btn-primary"> */}
    <img id={index+"img"}
      src={data.imgsrc}
      
      class="w-100  shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
      onClick={(e)=>handlemodal(e)}
      data-bs-toggle="modal" data-bs-target="#exampleModal"
      style={{height:"250px"}}
    />
    {/* </button> */}
    <div id="icons" style={{display:"flex",justifyContent:"space-around",alignItems:"center",borderRadius:"3px",position:"absolute",top:"10px",right:"10px",width:"100px",background:"#fff",height:"30px"}}>
    <i class="fas fa-heart"></i>
    <i class="fas fa-download" id={index+"down"} data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(data)=>handledownload(data)}></i>
    <i class="fas fa-camera" id={index} onClick={(data)=>handlefilter(data)}></i>
    </div>
    <span id="icons" data-bs-toggle="modal" href="#exampleModalToggle"  style={{display:"flex",justifyContent:"space-around",alignItems:"center",borderRadius:"3px",position:"absolute",bottom:"40px",right:"10px",width:"150px",background:"royalblue",color:"#fff",height:"30px"}}>
    <i class="bi bi-cart"></i>
      free with trial</span>
    </div>


  </div>
          ))}
    
          </div>
          










        {/* <!-- Gallery --> */}

{/* <!-- Gallery --> */}
    </div>
  )
}

export default Metal