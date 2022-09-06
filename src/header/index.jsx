import React, { useEffect } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import "./header.css";
import profile from "./download.png"
import { useState } from 'react';
import Axios from "axios";

const Header = () => {
  const nav=useNavigate();
  const location=useLocation()
  const[menu,setmenu]=useState(false);
  const [header,setHeader]=useState(true);
  const [txt,setTxt]=useState(true)
  const url = "http://127.0.0.1:8000/logout/";
  console.log(location,"path");
 useEffect(()=>{
  console.log(location.pathname)
  if(location.pathname==='/main'){
    console.log(location.pathname,"mihuihugyug")
    setHeader(true);
    setTxt(true)
    
  document.getElementById("navbar").style.background="white"
  }else if(location.pathname==='/dashbordsee' || location.pathname==='/uploadedfiles' || location.pathname==='/uploadsee'|| location.pathname==='/upload' || location.pathname==='/insightsee' || location.pathname==='/contributoraccount' ){
    setHeader(false);
    setTxt(false)
    document.getElementById("navbar").style.background="black"
  }
 })
  const handlenav=()=>{
    document.body.classList.toggle("menu-active");
  }
  const handlemenu=()=>{
    if(localStorage.getItem('token')){
      setmenu(true)
    }else{
      setmenu(false)
    }
  }
  
  // const a=localStorage.getItem('token');
//  console.log(JSON.parse(a).token);
const token=localStorage.getItem("token");
// const b=JSON.stringify(token).token;
// console.log(JSON.parse(token).token,"token");
const logout=(e)=>{
  // e.preventDefault();
  // Axios.post(url,
  //   {
  //     headers:{
  //       "Authorization":`Token ${token}`
  //       // "Authorization":"Token fdb99936c0e26670ef2bbde86785e0540dcee70e"
  //     }, 
  //   }
  // )
  fetch(url,{
    method:"POST",
    headers:{
      // "Accept":"application/json",
      // "Content-Type":"application/json",
      "Authorization":`Token ${token}`
    }
  })
    .then((res) => {
      localStorage.clear();
      console.log(res,"sccess"); 
      nav("/main")
    
      // if(res.data.message==="E-mail sent successfully Please check email"){
        
      // }

      // setData(res.data);
    })
    .catch((error) => {
      console.error(error);
      nav("/")
      // setmsg(error.message)
    });

  // const a=localStorage.getItem('token');
  // localStorage.clear('token')
}
const profiles=()=>{
  if(localStorage.getItem('token')){
    console.log("corrext")
  }
}
// const logout=()=>{
//   localStorage.clear();
//   nav("/main")
// }
const handlesell=()=>{
  setHeader(false);
  document.getElementById("navbar").style.background="black"

}
const handlebuy=()=>{
  setHeader(true);
  document.getElementById("navbar").style.background="white"
  
}
window.onbeforeunload = function(e) {
  e.preventDefault();
  // return null;
  localStorage.removeItem("token")
  alert("hello")
}


  return (
    <>
      <div class="modal fade" id="exampleModalTogglescreenname122" aria-hidden="true" aria-labelledby="exampleModalToggleLabel4" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header" style={{borderBottom:"0px"}}>
        {/* <h5 class="modal-title" id="exampleModalToggleLabel2">Modal 2</h5> */}
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" style={{textAlign:"center",color:"black"}}>
      <form action="">

            

            

            <p class="fw-bold mb-2">Add Working Hour To Complete Work</p>

           

            <div class="row mb-2">
              <div class="col-12 d-flex" style={{justifyContent:"space-around"}}>
             
                <div class="form-outline col-6">
                  <input type="text" id="formControlLgXM" class="form-control form-control-md"
              required />
                  <label class="form-label" for="formControlLgXM">Working Hour</label>
                </div>
              </div>
            
            </div>
<NavLink to='/order'>
            <button class="btn btn-success btn-md bg-primary btn-block" data-bs-target="#exampleModalTogglescreenname122" data-bs-toggle="modal" data-bs-dismiss="modal">Submit</button>
          </NavLink>
          </form>
      </div>
     
    </div>
  </div>
</div>









    <nav className="navbar" id='navbar' style={{position:"-webkit-sticky"}}>
  <div className="logo" id='logo-header'>
    <NavLink to="/main" onClick={handlebuy}>
    <h5 style={{color:`${txt? "black":"white"}`}}>SEE DESIGN</h5>
    </NavLink>
    </div>
    {header ?
  <div className="push-left">
    <button id="menu-toggler" data-classname="menu-active" className="hamburger" onClick={handlenav}>
      <span className="hamburger-line hamburger-line-top"></span>
      <span className="hamburger-line hamburger-line-middle"></span>
      <span className="hamburger-line hamburger-line-bottom"></span>
    </button>

    {/* <!--  Menu compatible with wp_nav_menu  --> */}
    <ul id="primary-menu" className="menu nav-menu">
      <li>
      <div class="d-flex flex-row align-items-center mb-4">
                    {/* <i class="fas fa-language fa-lg me-3 fa-fw"></i> */}
                    {/* <div class="form-outline flex-fill mb-0" id="google_translate_element"> */}
                    {/* <select style={{border:"none",outline:"none"}}>
                      <option value="en" >English</option>
                      <option value="hi">Hindi</option>
                    </select> */}
                    {/* </div> */}
                  </div>
      </li>
        <li className="menu-item dropdown" style={{cursor:"pointer"}}>
          <NavLink to='/dashbordsee' >
          <h5 className="nav__link mr-2 mt-1"onClick={handlesell} >Sell</h5>
          </NavLink>
        
        </li>

      <li className="menu-item current-menu-item"><NavLink to="/main" className="nav__link" style={{textDecoration:"none"}} >
      <i class="bi bi-house-fill" style={{fontSize:"30px"}}></i>
        </NavLink></li>
      
      {/* <li className="menu-item dropdown"><NavLink to="/login" className="nav__link"  style={{textDecoration:"none"}}>Login</NavLink>
       
      </li> */}
      {/* <li className="menu-item "><NavLink to="/#" className="nav__link" onClick={logout} style={{textDecoration:"none"}}  >Log out</NavLink>
       
      </li> */}
      <li id='imgmenu' className="menu-item " onMouseOver={handlemenu}>
        <img  src={profile} alt="" style={{width:"30px",height:"30px",borderRadius:"50%"}} />
        <ul id='menu12' style={{position:"absolute",right:"10px",fontSize:"13px",listStyle:"none",background:"#fff",paddingLeft:"0px",zIndex:"999999",border:"1px solid",borderRadius:"3px",width:"100px"}}>
          <li style={{}}>
            <NavLink to='/signup' style={{textDecoration:"none",display:"flex",justifyContent:"space-around"}}>
            <i class="bi bi-layout-text-window-reverse"></i>
            <span>
            Signup
            </span>
            </NavLink>
            </li>
          <li >
          <NavLink to='/login'style={{textDecoration:"none",display:"flex",justifyContent:"space-around"}}>
          <i class="bi bi-box-arrow-in-right " style={{fontSize:"20px",marginRight:"10px"}}></i>
            <span>SignIn</span>
            </NavLink>
            </li>
            {menu && 
          <li style={{display:"flex",justifyContent:"space-around"}}>
            
          <NavLink to='/profile' style={{textDecoration:"none"}}>
          <i class="bi bi-person-circle"></i>
          <span style={{marginLeft:"3px"}}>
            Profile
            </span>
            </NavLink>
            </li>
}
{menu && 
          <li className='' style={{display:"flex",justifyContent:"space-around"}}>
          {/* <NavLink to='/' style={{textDecoration:"none",lineHeight:"20px"}}> */}
          <i class="bi bi-box-arrow-left"></i>
           <span onClick={(e)=>logout(e)} style={{cursor:"pointer"}}> LOGOUT</span>
            {/* </NavLink> */}
            </li>
}


        </ul>
      {/* </NavLink> */}
       
       </li>
    </ul>


  </div>
:

<div className="push-left col-10">
   

    {/* <!--  Menu compatible with wp_nav_menu  --> */}
    <ul id="primary-menu" className="menu nav-menu" style={{display:"flex",justifyContent:"space-around",cursor:"pointer"}}>
      <li><NavLink to='/dashbordsee' style={{color:"#fff",fontSize:"20px"}}>Dashboard</NavLink></li>
      <li><NavLink to='/uploadedfiles' style={{color:"#fff",fontSize:"20px"}}>Uploaded Files</NavLink></li>
      <li><NavLink to='/insightsee' style={{color:"#fff",fontSize:"20px"}}>Insights</NavLink></li>
      <li><NavLink to='/order' style={{color:"#fff",fontSize:"20px"}}>My Order</NavLink></li>
      

      {/* <li><NavLink to='/contributoraccount' style={{color:"#fff",fontSize:"20px"}}>Contributor Account</NavLink></li> */}
      <li style={{color:"#fff",fontSize:"20px"}}>Artist Hub</li>
      <li>
        <NavLink to='/designer'>
        <button style={{border:"1px solid white",borderRadius:"13px",width:"100px"}}>
        <i class="bi bi-cloud-arrow-up"></i>
          Upload</button>
          </NavLink>
      </li>
      <li>
      <NavLink to='/main' style={{color:"#fff",fontSize:"20px"}} onClick={handlebuy}>
        Buy
        </NavLink>
        </li>
        <li id='bell'>
          <p className='text-white'>
<i class="bi bi-bell"style={{fontSize:"20px",position:"relative"}}></i>
<span className='' style={{borderRadius:"50%",border:"1px solid white",top:"10px",position:"absolute",height:"20px",width:"20px",fontSize:"smaller"}}>12</span>
</p>
<ul id='bellicon' style={{position:"absolute",right:"10px",fontSize:"13px",listStyle:"none",background:"#fff",paddingLeft:"0px",zIndex:"999999",borderRadius:"3px",width:"300px"}}>
<div class="">
          <div class="card h-100">
            <div class="card-header pb-0">
              <h6>Notification</h6>
            
            </div>
            <div class="card-body p-3">
            <a class="dropdown-item border-radius-md" href="#">
                    <div class="d-flex py-1">
                      <div class="my-auto">
                        <img src="../assets/img/team-2.jpg" class="avatar avatar-sm  me-3 "/>
                      </div>
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="text-sm font-weight-normal mb-1">
                          <span class="font-weight-bold">New message</span> from Laur
                        </h6>
                        <p class="text-xs text-secondary mb-0">
                          <i class="fa fa-clock me-1"></i>
                          13 minutes ago
                        </p>
                        <p class="text-xs text-secondary mb-0"  data-bs-target="#exampleModalTogglescreenname122" data-bs-toggle="modal" data-bs-dismiss="modal">
                          <i class="fa fa-check me-1" ></i>
                         Accept
                        </p>
                      </div>
                    </div>
                  </a>
                  <a class="dropdown-item border-radius-md" href="javascript:;">
                    <div class="d-flex py-1">
                      <div class="my-auto">
                        <img src="../assets/img/small-logos/logo-spotify.svg" class="avatar avatar-sm bg-gradient-dark  me-3 "/>
                      </div>
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="text-sm font-weight-normal mb-1">
                          <span class="font-weight-bold">New album</span> by Travis Scott
                        </h6>
                        <p class="text-xs text-secondary mb-0">
                          <i class="fa fa-clock me-1"></i>
                          1 day
                        </p>
                      </div>
                    </div>
                  </a>
                  <a class="dropdown-item border-radius-md" href="#">
                    <div class="d-flex py-1">
                      <div class="avatar avatar-sm bg-gradient-secondary  me-3  my-auto">
                        <svg width="12px" height="12px" viewBox="0 0 43 36" version="1.1" xmlns="http://www.w3.org/2000/svg">
                          <title>credit-card</title>
                          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g transform="translate(-2169.000000, -745.000000)" fill="#FFFFFF" fill-rule="nonzero">
                              <g transform="translate(1716.000000, 291.000000)">
                                <g transform="translate(453.000000, 454.000000)">
                                  <path class="color-background" d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z" opacity="0.593633743"></path>
                                  <path class="color-background" d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"></path>
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="text-sm font-weight-normal mb-1">
                          Payment successfully completed
                        </h6>
                        <p class="text-xs text-secondary mb-0">
                          <i class="fa fa-clock me-1"></i>
                          2 days
                        </p>
                      </div>
                    </div>
                  </a>
            </div>
          </div>
        </div>
        </ul>
</li>

     
<li id='imgmenu' className="menu-item " onMouseOver={handlemenu}>
        <img  src={profile} alt="" style={{width:"30px",height:"30px",borderRadius:"50%"}} />
        <ul id='menu12' style={{position:"absolute",right:"10px",fontSize:"13px",listStyle:"none",background:"#fff",paddingLeft:"0px",zIndex:"999999",border:"1px solid",borderRadius:"3px",width:"100px"}}>
          <li style={{}}>
            <NavLink to='/signup' style={{textDecoration:"none",display:"flex",justifyContent:"space-around"}}>
            <i class="bi bi-layout-text-window-reverse"></i>
            <span>
            Signup
            </span>
            </NavLink>
            </li>
          <li >
          <NavLink to='/login'style={{textDecoration:"none",display:"flex",justifyContent:"space-around"}}>
          <i class="bi bi-box-arrow-in-right " style={{fontSize:"20px",marginRight:"10px"}}></i>
            <span>SignIn</span>
            </NavLink>
            </li>
            {menu && 
          <li style={{display:"flex",justifyContent:"space-around"}}>
            
          <NavLink to='/profile' style={{textDecoration:"none"}}>
          <i class="bi bi-person-circle"></i>
          <span style={{marginLeft:"3px"}}>
            Profile
            </span>
            </NavLink>
            </li>
}
{menu && 
          <li className='' style={{display:"flex",justifyContent:"space-around"}}>
          {/* <NavLink to='/' style={{textDecoration:"none",lineHeight:"20px"}}> */}
          <i class="bi bi-box-arrow-left"></i>
           <span onClick={(e)=>logout(e)} style={{cursor:"pointer"}}> LOGOUT</span>
            {/* </NavLink> */}
            </li>
}


        </ul>
      {/* </NavLink> */}
       
       </li>
        </ul>
      {/* </NavLink> */}
       
</div>

}
</nav>

    </>
  )
}

export default Header