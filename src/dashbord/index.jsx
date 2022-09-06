import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./dash.css";
import Axios  from "axios"

import img from "./img search.svg";
const Dashboard = () => {
  const [data, setData] = useState("");
  const [panel, setPanel] = useState(false);
  const [value, setValue] = useState("rose");
  const [similar, setSimilar] = useState("flex");
  const [altvalue, setAltvalue] = useState("");
  const [display, setDispaly] = useState("none");
  const [imgsrc, setImgsrc] = useState("");
  const [modal, setModal] = useState("none");
  const [subs,setsubs]=useState("none")
  console.log(data.hits, "data");
  const location = useLocation();
const [photo,setphoto]=useState(location.state.name)

  console.log(location, "location");
  const [sub,setsub]=useState(true)
  const [price,setprice]=useState(true)
  const [disc,setdisc]=useState(true)
  const [orient,setorient]=useState(true);
  const [copy,setcopy]=useState(true);
  const [people,setpeople]=useState(true);
  const [right,setright]=useState(true);
  const [size,setsize]=useState(true);
  const [iso,setiso]=useState(true);
  const [color,setcolor]=useState(true);
  const [safe,setsafe]=useState(true);
const [icon,seticon]=useState(true)
const [values,setvalues]=useState([])
const [loading,setloading]=useState(true)
const [index,setindex]=useState(null)
const [modalimg,setmodalimg]=useState("");

const [metal,setmetal]=useState([])
  const nav=useNavigate();

  function SearchImg(e) {

    const a = e.target.id;
    const val = document.getElementById(a).value;
    console.log(a, "dataaagcvghchgcv");
    e.preventDefault();
    setValue(val);

  
  }
  const handlemodal=(e)=>{
    const a=e.target.id;
    console.log(e.target.id)
setindex(Number(e.target.id))
    const b=document.getElementById(a).getAttribute('src');
    setmodalimg(b);
 
  }
  const handledata=()=>{
    if(index==0){
      const bg=index+1;
      console.log(bg,"indexbg")
      setindex(index+1)
    const  a=metal[bg];
    setmodalimg(`../assets/seedesign/${a}`)
      
    console.log(`../assets/seedesign/${a}`,"modalimage",modalimg,bg)


    }else{
      const bg=index-1;
      console.log(bg,"indexbg")
      setindex(index-1)
      console.log(bg)
      const  a=metal[bg];
    setmodalimg(`../assets/seedesign/${a}`)
    console.log(`../assets/seedesign/${a}`,"modalimage",modalimg,bg)

      
    }
  
  }
  const handledata1=()=>{
    if(index ===4){
      const bg=index-1;
      console.log(bg,"indexbg")
      setindex(index-1)
    const  a=metal[bg];
    setmodalimg(`../assets/seedesign/${a}`)
      
    console.log(`../assets/seedesign/${a}`,"modalimage",modalimg,bg)


    }else{
      const bg=index+1;
      console.log(bg,"indexbg")
      setindex(index+1)
      console.log(bg)
      const  a=metal[bg];
    setmodalimg(`../assets/seedesign/${a}`)
    console.log(`../assets/seedesign/${a}`,"modalimage",modalimg,bg)

      
    }
  
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
 

  const handledisc = (e) => {
    console.log(e.target.id, "idvaluejkhj");
    const a = document.getElementById(e.target.id);
    
    const b = a.getAttribute("src");
    console.log(b, "imgsrc");
    setImgsrc(b);
    setAltvalue(a.getAttribute("alt"));
    setDispaly("flex");

    document.getElementById("view").scrollIntoView();
  };
  const imgpath=location.state.localpath;
  const newimagepath=imgpath.split("\\");
  const lastimgpath=newimagepath.pop();
  const submitdata=(e)=>{
    const url="http://127.0.0.1:8000/ImageSearch/"
    // e.preventDefault();
    Axios.post(url,{
      
   "Image":lastimgpath
      })
      .then((res) => {
        if(res.data.message==='Image Result Set Are'){
          setmetal(res.data.data);
          setloading(false)
        }
        console.log(res.data ,"sucess",lastimgpath);
        
        // setmsg(res.data.message)
        // setModal("show-modal1")
        // if(res.data.message==="Login Successful"){
        //   setTimeout(
        //     ()=>{
        //       nav("/")
        //     },5000
        //   )
        // }

       
        
      })
      .catch((error) => {
        console.error(error,"errr");
        // setmsg(error.message)
      });
  }
  useEffect(()=>{
    submitdata();
  },[])
  

// image upload code 
const handleimg=(e)=>{
  e.preventDefault();
  const imgdata=document.getElementById("file").value;
  console.log(imgdata,"imgpath")

     const reader=new FileReader();
     
     reader.onload=()=>{
       if(reader.readyState ===2){
        // setimg(reader.result)
        e.preventDefault();
        console.log(reader,"result")
     nav("/dashbord",{state:{id:1,name:reader.result,txt:"your uploaded image",localpath:imgdata}})
setphoto(reader.result);
// setpath(imgdata)
       }
     }
     reader.readAsDataURL(e.target.files[0])
     console.log(img,"img")
    }
// image upload code end


const handleimge=()=>{
nav("/paintingTool",{state:{id:1,txt:"your uploaded image",localpath:modalimg}})
}



  return (
    <>

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
        <h5 class="modal-title" id="exampleModalLabel">Image Preview</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div style={{display:"flex",justifyContent:"end",marginRight:"10px"}}>
      <i class="bi bi-arrow-left " style={{marginRight:"10px"}} onClick={handledata}></i>
      <i class="bi bi-arrow-right" onClick={handledata1}></i>
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
                           
                          
                  </div>
                 
                  <div style={{marginRight:"auto"}}>
                  <div style={{display:"flex",justifyContent:"start"}}>
                    <span className='m-2'>
                    price :$4
                    </span>
                  </div>
              
                </div>
                  {/* <span data-bs-target="#exampleModalToggle" data-bs-toggle="modal" data-bs-dismiss="modal" style={{background:"royalblue",height:"40px",color:"#fff",display:"flex",justifyContent:"space-around",alignItems:"center",width:"40%",borderRadius:"12px",margin:"10px",marginRight:"auto"}}>
                  <i class="bi bi-cart"></i>
                    free width trial</span> */}
                    <span onClick={handleimge} style={{background:"royalblue",height:"40px",color:"#fff",display:"flex",justifyContent:"center",alignItems:"center",width:"40%",borderRadius:"12px",margin:"10px",marginRight:"auto"}}>
                  <i class="bi bi-pen"></i>
                  Customize
                  
                  </span>
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
      <div className="main-section-dashbord" style={{position:"relative"}}>
        
        <div class="form-outline mb-4 mt-4 d-flex m-2" style={{justifyContent:"center",alignItems:"center",height:"50px"}}>
<select name="cars"  style={{width:"100px",height:"100%",outline:"none"}}>
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
  <input type="search" class="form-control" id="datatable-search-input" placeholder="search" style={{height:"100%"}} />
  <label class="form-label mb-0" for="datatable-sea" style={{width:"100px",display:"flex",justifyContent:"center",alignItems:"center",background:"royalblue",height:"100%"}}>
  <NavLink to='/mylibrary'> My Libraries</NavLink>
  </label>
</div>
        <div className="main-dash" style={{position:"relative",height:"auto",minHeight:"500px"}}>
          {loading &&
        <div style={{width:"100%",minHeight:"500px",zIndex:"999999999999",position:"absolute",background:"#fff",display:"flex",justifyContent:"center",alignItems:"center"}}>
          <h4>Loading.............</h4>
        </div>
}

          <div className="content">
      






   


            <div style={{display:"flex",flexDirection:"column",alignItems:"center",position:"relative",borderRight:"1px solid"}}>
          <div style={{width:"20px",marginBottom:"50px"}}>
            <img src="https://i.stack.imgur.com/kYftr.png" alt="" onClick={()=>seticon(false)}/>
          </div>
          <div style={{width:"20px",marginBottom:"50px"}}>
            <img src={img} alt="" onClick={()=>seticon(true)}/>
          </div>
          </div>
            <div
              className="mini-dash"
              style={{ display: `${panel ? "none" : "block"}` }}
            >

   {icon ?      
<div>
              <h5
                style={{
                  textAlign: "center",
                  width: "100%",
                  textTransform: "capitalize",
                  color: "black",
                  borderBottom:"1px solid",
                }}
              >
                {location.state.txt}
              </h5>
   
    
              <div className="img-upload" style={{ marginLeft: "32px" }}>
              <input type="file" id="file" style={{display:"none"}} onChange={(e)=>handleimg(e)}/>
              <label htmlFor="file" style={{height:"100%"}}>
                <img
                  src={photo}
                  className="img-thumbnail1"
                  alt="..."
                  onClick={submitdata}
                />
                </label>
                 <ul style={{listStyle:"none",marginTop:"50px"}}>
                    <li>
                      <input type="radio" style={{marginRight:"5px"}} />
                      All attributes</li>
                    <li><input type="radio" style={{marginRight:"5px"}} />Content</li>
                    <li> <input type="radio" style={{marginRight:"5px"}} />Color</li>
                    <li> <input type="radio" style={{marginRight:"5px"}} />Composition</li>
                </ul>
              </div>
</div>:

              <div style={{width:"100%",height:"600px",overflowY:"auto"}}>
                <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",borderBottom:"2px solid gray",marginTop:"20px"}}>
                <div style={{width:"30px",display:"flex"}}>
                <i class="bi bi-filter"></i>
                Filter
          </div>
          <div style={{width:"40px"}}>
            <span>Clear</span>
          </div>
                </div>
               
               
               
                <div style={{borderBottom:"2px solid gray"}}>
                <div style={{display:"flex",justifyContent:"space-between",padding:"10px",alignItems:"center",marginTop:"20px"}}>
                <div style={{width:"30px",display:"flex"}}>
            <img src="https://static.thenounproject.com/png/3844729-200.png" alt="" />
            <span>Subcategory</span>
          </div>
          <div style={{width:"40px"}}>
            <span style={{cursor:"pointer"}}>{sub ? <i class="bi bi-chevron-down" onClick={()=>setsub(!sub)}></i>:<i class="bi bi-chevron-left" onClick={()=>setsub(!sub)}></i>}</span>
          </div>
                </div>
                {sub &&
                <div style={{display:"flex",justifyContent:"flex-start"}}>
                  <ul style={{listStyle:"none"}}>
                    <li>
                      <input type="radio" style={{marginRight:"5px"}} />
                      All</li>
                    <li><input type="radio" style={{marginRight:"5px"}} />Photos</li>
                    <li> <input type="radio" style={{marginRight:"5px"}} />Illustrations</li>
                    <li><input type="radio" />vectors</li>
                  </ul>
                </div>
}
                </div>
                
                <div style={{borderBottom:"2px solid gray"}}>
                <div style={{display:"flex",justifyContent:"space-between",padding:"10px",alignItems:"center",marginTop:"20px"}}>
                <div style={{width:"30px",display:"flex"}}>
                <i class="bi bi-cart"></i>
            <span>price</span>
          </div>
          <div style={{width:"40px"}}>
            <span style={{cursor:"pointer"}}>{price ? <i class="bi bi-chevron-down" onClick={()=>setprice(!price)}></i>:<i class="bi bi-chevron-left" onClick={()=>setprice(!price)}></i>}</span>
          </div>
                </div>
                {price &&
                <div style={{display:"flex",justifyContent:"flex-start"}}>
                  <ul style={{listStyle:"none"}}>
                    <li>
                      <input type="radio" style={{marginRight:"5px"}} />
                      All</li>
                    <li><input type="radio" />Standard Content</li>
                    <li> <input type="radio" style={{marginRight:"5px"}} />Premium</li>
                   
                  </ul>
                </div>
}
                </div>

                <div style={{borderBottom:"2px solid gray"}}>
                <div style={{display:"flex",justifyContent:"space-between",padding:"10px",alignItems:"center",marginTop:"20px"}}>
                <div style={{width:"30px",display:"flex"}}>
                <i class="bi bi-globe"></i>
            <span>Undiscovered</span>
          </div>
          <div style={{width:"40px"}}>
            <span style={{cursor:"pointer"}}>{disc ? <i class="bi bi-chevron-down" onClick={()=>setdisc(!disc)}></i>:<i class="bi bi-chevron-left" onClick={()=>setdisc(!disc)}></i>}</span>
          </div>
                </div>
                {disc &&
                <div style={{display:"flex",justifyContent:"flex-start"}}>
                  <ul style={{listStyle:"none"}}>
                    <li>
                      <input type="radio" style={{marginRight:"5px"}} />
                      Undiscovered Content</li>
                  </ul>
                </div>
}
                </div>

                <div style={{borderBottom:"2px solid gray"}}>
                <div style={{display:"flex",justifyContent:"space-between",padding:"10px",alignItems:"center",marginTop:"20px"}}>
                <div style={{width:"30px",display:"flex"}}>
                <i class="bi bi-square"></i>
            <span>Orientation</span>
          </div>
          <div style={{width:"40px"}}>
            <span style={{cursor:"pointer"}}>{orient ? <i class="bi bi-chevron-down" onClick={()=>setorient(!orient)}></i>:<i class="bi bi-chevron-left" onClick={()=>setorient(!orient)}></i>}</span>
          </div>
                </div>
                {orient &&
                <div style={{display:"flex",justifyContent:"flex-start"}}>
                  <ul style={{listStyle:"none"}}>
                    <li>
                      <input type="radio" style={{marginRight:"5px"}} />
                      All</li>
                      <li>
                      <input type="radio" style={{marginRight:"5px"}} />
                      Horizontal</li>
                      <li>
                      <input type="radio" style={{marginRight:"5px"}} />
                      Vertical</li>
                      <li>
                      <input type="radio" style={{marginRight:"5px"}} />
                      Square</li>
                      <li>
                      <input type="radio" style={{marginRight:"5px"}} />
                      Panoramic</li>
                  </ul>
                </div>
}
                </div>

                <div style={{borderBottom:"2px solid gray"}}>
                <div style={{display:"flex",justifyContent:"space-between",padding:"10px",alignItems:"center",marginTop:"20px"}}>
                <div style={{width:"30px",display:"flex"}}>
                <i class="bi bi-fonts"></i>
            <span>CopySpace</span>
          </div>
          <div style={{width:"40px"}}>
            <span style={{cursor:"pointer"}}>{copy ? <i class="bi bi-chevron-down" onClick={()=>setcopy(!copy)}></i>:<i class="bi bi-chevron-left" onClick={()=>setcopy(!copy)}></i>}</span>
          </div>
                </div>
                {copy &&
                <div style={{display:"flex",justifyContent:"flex-start"}}>
                  <ul style={{listStyle:"none"}}>
                    <li>
                      <input type="radio" style={{marginRight:"5px"}} />
                      Images with Copy Space</li>
                  </ul>
                </div>
}
                </div>

                <div style={{borderBottom:"2px solid gray"}}>
                <div style={{display:"flex",justifyContent:"space-between",padding:"10px",alignItems:"center",marginTop:"20px"}}>
                <div style={{width:"30px",display:"flex"}}>
                <i class="bi bi-people-fill"></i>
            <span>People</span>
          </div>
          <div style={{width:"40px"}}>
            <span style={{cursor:"pointer"}}>{people ? <i class="bi bi-chevron-down" onClick={()=>setpeople(!people)}></i>:<i class="bi bi-chevron-left" onClick={()=>setpeople(!people)}></i>}</span>
          </div>
                </div>
                {people &&
                <div style={{display:"flex",justifyContent:"flex-start"}}>
                  <ul style={{listStyle:"none"}}>
                    <li>
                      <input type="radio" style={{marginRight:"5px"}} />
                      All</li>
                      <li>
                      <input type="radio" style={{marginRight:"5px"}} />
                      Include people</li>
                      <li>
                      <input type="radio" style={{marginRight:"5px"}} />
                      Exclude people</li>
                  </ul>
                </div>
}
                </div>

                <div style={{borderBottom:"2px solid gray"}}>
                <div style={{display:"flex",justifyContent:"space-between",padding:"10px",alignItems:"center",marginTop:"20px"}}>
                <div style={{width:"30px",display:"flex"}}>
            <span>UsageRights</span>
          </div>
          <div style={{width:"40px"}}>
            <span style={{cursor:"pointer"}}>{right ? <i class="bi bi-chevron-down" onClick={()=>setright(!right)}></i>:<i class="bi bi-chevron-left" onClick={()=>setright(!right)}></i>}</span>
          </div>
                </div>
                {right &&
                <div style={{display:"flex",justifyContent:"flex-start"}}>
                  <ul style={{listStyle:"none"}}>
                    <li>
                      <input type="radio" style={{marginRight:"5px"}} />
                      All</li>
                      <li>
                      <input type="radio" style={{marginRight:"5px"}} />
                      Commercial Use</li>
                      <li>
                      <input type="radio" style={{marginRight:"5px"}} />
                      Editorial Use</li>
                  </ul>
                </div>
}
                </div>
                <div style={{borderBottom:"2px solid gray"}}>
                <div style={{display:"flex",justifyContent:"space-between",padding:"10px",alignItems:"center",marginTop:"20px"}}>
                <div style={{width:"30px",display:"flex"}}>
                <i class="bi bi-aspect-ratio"></i>
            <span> Size</span>
          </div>
          <div style={{width:"40px"}}>
            <span style={{cursor:"pointer"}}>{size ? <i class="bi bi-chevron-down" onClick={()=>setsize(!size)}></i>:<i class="bi bi-chevron-left" onClick={()=>setsize(!size)}></i>}</span>
          </div>
                </div>
                {size &&
                <div style={{display:"flex",justifyContent:"flex-start"}}>
                  <ul style={{listStyle:"none"}}>
                    <li>
                      <input type="radio" style={{marginRight:"5px"}} />
                      Pixels</li>
                      <li>
                      <input type="radio" style={{marginRight:"5px"}} />
                      Megapixels</li>
                      <li>

                        <span>Minimum Width</span>
                          <input type="number" placeholder="Type here" value="kknkj" style={{width:"80px",outline:"none",border:"none",fontSize:"20px",color:"black",borderBottom:"1px solid"}}/>
</li>
<li>

<span>Minimum Heigh</span>
  <input type="number" placeholder="Type here" value="kknkj" style={{width:"80px",outline:"none",border:"none",fontSize:"20px",color:"black",borderBottom:"1px solid"}}/>
</li>
                  </ul>
                </div>
}
                </div>

                <div style={{borderBottom:"2px solid gray"}}>
                <div style={{display:"flex",justifyContent:"space-between",padding:"10px",alignItems:"center",marginTop:"20px"}}>
                <div style={{width:"30px",display:"flex"}}>
                <i class="bi bi-safe"></i>
            <span> Isolated Assets</span>
          </div>
          <div style={{width:"40px"}}>
            <span style={{cursor:"pointer"}}>{iso ? <i class="bi bi-chevron-down" onClick={()=>setiso(!iso)}></i>:<i class="bi bi-chevron-left" onClick={()=>setiso(!iso)}></i>}</span>
          </div>
                </div>
                {iso &&
                <div style={{display:"flex",justifyContent:"flex-start"}}>
                  <ul style={{listStyle:"none"}}>
                    <li>
                      <input type="radio" style={{marginRight:"5px"}} />
                      Isolated Only</li>
                     
                  </ul>
                </div>
}
                </div>


                <div style={{borderBottom:"2px solid gray"}}>
                <div style={{display:"flex",justifyContent:"space-between",padding:"10px",alignItems:"center",marginTop:"20px"}}>
                <div style={{width:"30px",display:"flex"}}>
                <i class="bi bi-eye-fill"></i>
            <span> Color</span>
          </div>
          <div style={{width:"40px"}}>
            <span style={{cursor:"pointer"}}>{color ? <i class="bi bi-chevron-down" onClick={()=>setcolor(!color)}></i>:<i class="bi bi-chevron-left" onClick={()=>setcolor(!color)}></i>}</span>
          </div>
                </div>
                {color &&
                <div style={{display:"flex",justifyContent:"flex-start"}}>
                  <ul style={{listStyle:"none"}}>
                    <li>
                      <form style={{margin:"0px"}}>
                      <input type="color" value="" /><br/>
<button type="reset" style={{border:"none"}}>clear</button>                                            
                      </form>
                      </li>
                     
                  </ul>
                </div>
}
                </div>
                <div style={{borderBottom:"2px solid gray"}}>
                <div style={{display:"flex",justifyContent:"space-between",padding:"10px",alignItems:"center",marginTop:"20px"}}>
                <div style={{width:"30px",display:"flex"}}>
                <i class="bi bi-gear"></i>
            <span> SafeSearch</span>
          </div>
          <div style={{width:"40px"}}>
            <span style={{cursor:"pointer"}}>{safe ? <i class="bi bi-chevron-down" onClick={()=>setsafe(!safe)}></i>:<i class="bi bi-chevron-left" onClick={()=>setsafe(!safe)}></i>}</span>
          </div>
                </div>
                {safe &&
                <div style={{display:"flex",justifyContent:"flex-start"}}>
                  <ul style={{listStyle:"none"}}>
                    <li>
                      <input type="radio"  />Enabled
                      </li>
                     
                  </ul>
                </div>
}
                </div>

















              </div>
}
            </div>

            <div className="max-dash">
              <div className="card-group">
                <div
                  style={{
                    width: "100%",
                    height: "80px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "royalblue",
                    color: "#fff",
                  }}
                >
                  <h3
                    style={{ textAlign: "center", textTransform: "capitalize" }}
                  >
                    Search result
                  </h3>
                </div>

                <div
                  style={{
                    width: "100%",
                    height: "75px",
                    background: "#fff",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <p
                    style={{
                      marginLeft: "10px",
                      // border: "1px solid black",
                      height: "40px",
                      borderRadius: "20px",
                      width: "100px",
                      textAlign: "center",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      textTransform: "capitalize",
                    }}
                    onClick={() => setPanel(!panel)}
                  >
                    {panel ? <i class="bi bi-eye-fill"></i> : <i class="bi bi-eye-slash-fill"></i>}
                  </p>
                  <div style={{ marginRight: "30px" }}>
                    <label  style={{ marginRight: "10px" }}>
                      Sort by:
                    </label>
                    <select
                      name="cars"
                      id="cars"
                      style={{ borderRadius: "13px" }}
                    >
                      <option value="volvo">25%</option>
                      <option value="saab">50%</option>
                      <option value="opel">75%</option>
                      <option value="audi">100%</option>
                    </select>
                  </div>
                </div>
                <div className="row row-cols-4 row-cols-md-4 g-4 mt-2 ">
           
                <div class="row mt-4 w-100">
          {metal.map((data,index)=>(
    <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
    <div id='imagicon' style={{position:"relative",cursor:"pointer"}}>
    {/* <button type="button" class="btn btn-primary"> */}
    <img id={index}
      src={`../assets/seedesign/${data}`}
      
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
    <i class="bi bi-folder2-open" id={index} onClick={(data)=>handlefilter(data)}></i>
    </div>
    <span id="icons" data-bs-toggle="modal" href="#exampleModalToggle"  style={{display:"flex",justifyContent:"space-around",alignItems:"center",borderRadius:"3px",position:"absolute",bottom:"40px",right:"10px",width:"150px",background:"royalblue",color:"#fff",height:"30px"}}>
    <i class="bi bi-cart"></i>
      Add To Cart</span>
    </div>


  </div>
          ))}
    
          </div>
               
                <div id="imageView"></div>
              </div>
            </div>

          </div>
        </div>
      </div>
      </div>
      
    </>
  );
};

export default Dashboard;
