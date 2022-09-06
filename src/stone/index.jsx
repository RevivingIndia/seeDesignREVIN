import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Lightbox from 'react-image-lightbox';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import "./stone.css"
const Stone = () => {
  const [gallery,setGallery]=useState([]);
  const [state,setState]=useState({  photoIndex: 0,
    isOpen: false,})
const [num,setNum]=useState(0);
  const nav=useNavigate();
 const location=useLocation();
 

  const handlefilter=(e)=>{
 const a=e.target.id;
 const b=document.getElementById(a).parentNode.previousSibling.getAttribute('src');
        nav("/dashbord",{state:{id:1,name:b,txt:"your uploaded image"}})
  }
  const handlelibrary=(e)=>{
  //  alert(e)
   
   setGallery([...gallery,e.data])
   if(gallery.length<1){
    console.log("press again")
   }else if(gallery>1){
    nav('/mylibrary',{state:{id:2,name:new Set(gallery)}})

   }
   console.log(new Set(gallery))
  }
  useEffect(()=>{
    window.scrollTo(0, 0);
  })
const { photoIndex, isOpen } = state;
const handlelightbox=(e)=>{
   setState({ isOpen: true })
}
const img=location.state.data[0].list;
  return (
    <div>

{location.state.data && location.state.data.map((data,index)=>(
  <div>
    <div class="form-outline mb-4 mt-4 d-flex m-4" style={{justifyContent:"center",alignItems:"center",height:"50px"}}>
<select name="cars"  style={{width:"auto",height:"100%",outline:"none"}}>
<option value="volvo">All</option>
    <option value="saab">2D Doors</option>
    <option value="opel">2.5D Doors</option>
    <option value="audi">3D Doors</option>
    <option value="audi">Side Mouldings</option>
    <option value="audi">Kitchen Cabinets</option>
    <option value="audi">Wardrobe Design</option>
    <option value="audi">2D Wall Art</option>
    <option value="audi">3D Wall Art</option>
    <option value="audi">Grill Board/Eaves</option>
    <option value="audi">Staircase/Posts/Railings</option>
  </select>
  <input type="search" class="form-control" id="datatable-search-input" style={{height:"100%"}} />
  <label class="form-label mb-0" for="datatable-sea" style={{width:"100px",display:"flex",justifyContent:"center",alignItems:"center",background:"#fff",height:"100%"}}>

  <NavLink to='/mylibrary'> Search</NavLink>
  </label>
  <label class="form-label mb-0" for="datatable-sea" style={{width:"100px",display:"flex",justifyContent:"center",alignItems:"center",background:"#fff",height:"100%"}}>
  <NavLink to='/mylibrary'> My Libraries</NavLink>
  </label>
</div>
  <div style={{width:"100%",height:"300px",display:"flex",alignItems:"center",justifyContent:"center",backgroundPosition:"center",backgroundImage:`url("https://cdn.pixabay.com/photo/2022/07/19/22/11/wallpaper-7333087_960_720.png")`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
      <h2 style={{color:"#fff",fontSize:"50px",textAlign:"center",fontFamily:"fantasy"}}>{data.title}</h2>
  </div>


  <div class="row mt-4">
    {data.list.map((data,index)=>(
<div class="col-lg-4 col-md-12 mb-4 mb-lg-0" id={index} >

<div id='imagicon' style={{position:"relative",cursor:"pointer"}}>
<img id={index}
src={data.imgsrc}

class="w-100  shadow-1-strong rounded mb-4"
alt="Boat on Calm Water"
style={{height:"250px"}}
/>

<div id="icons" style={{display:"flex",justifyContent:"space-around",alignItems:"center",borderRadius:"3px",position:"absolute",top:"10px",right:"10px",width:"100px",background:"#fff",height:"30px"}}>
<i class="fas fa-heart"  onClick={(e)=>handlelibrary({data})}></i>
<i class="fas fa-eye" id={index+"down"} onClick={(e)=>handlelightbox(e)}></i>
<i class="fas fa-camera" id={index} onClick={(data)=>handlefilter(data)}></i>
</div>
<span id="icons" data-bs-toggle="modal" href="#exampleModalToggle"  style={{display:"flex",justifyContent:"space-around",alignItems:"center",borderRadius:"3px",position:"absolute",bottom:"40px",right:"10px",width:"80px",background:"royalblue",color:"#fff",height:"30px"}}>
<i class="bi bi-pen"></i>
Edit</span>
</div>


</div>
    ))}

    </div>
</div>
))}





{isOpen && (
          <Lightbox 
            mainSrc={img[num].imgsrc}
            nextSrc={img[(num + 1) % img.length].imgsrc}
            prevSrc={img[(num + img.length - 1) % img.length].imgsrc}
            onCloseRequest={() => setState({ isOpen: false })}
            onImageLoad={()=>setNum(num)}
            imageTitle={img[num].tag}
            imageCaption="discription"
            loader={3000}
            animationDisabled={true}
            onMovePrevRequest={() =>
              setNum( (num + img.length - 1) % img.length)
            }
            onMoveNextRequest={() =>
              setNum((num + 1) % img.length)
            }
          />
        )}





    </div>
  )
}

export default Stone