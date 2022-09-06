import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import  Axios  from 'axios';
import { useEffect } from 'react';
const OrderUpload = () => {
    const [sideBar,setSideBar]=useState(false);
    const [sideBar1,setSideBar1]=useState(false);
    const [sideBar2,setSideBar2]=useState(false);
    const [sideBar3,setSideBar3]=useState(false);
    const [open,setOpen]=useState(false)

const nav=useNavigate()

    const [arr,setArr]=useState([]);
    const [img,setImg]=useState('https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg');
    const [img1,setImg1]=useState('https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg');
    const [img2,setImg2]=useState('https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg');
    const [img3,setImg3]=useState('https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg');


    const handleimgpreview=(e)=>{
      e.preventDefault();
         const reader=new FileReader();
       
          reader.onload=()=>{
            if(reader.readyState ===2){
             
             e.preventDefault();
             console.log(reader.result,"result")
            //  setImg(reader.result)
          console.log(e.target.files[0].name,"nnn")
 console.log(img)
 if(reader.result){
  setImg('https://www.iconpacks.net/icons/2/free-check-mark-icon-3279-thumb.png')

 }else{
  setImg('https://cdn-icons-png.flaticon.com/512/59/59836.png')

 }
          }
         }
        
         reader.readAsDataURL(e.target.files[0])
        }


        const handleimgpreview1=(e)=>{
          e.preventDefault();
             const reader=new FileReader();
           
              reader.onload=()=>{
                if(reader.readyState ===2){
                 
                 e.preventDefault();
                 console.log(reader.result,"result")
                //  setImg1(reader.result)
              console.log(e.target.files[0].name,"nnn")
     
              if(reader.result){
                setImg1('https://www.iconpacks.net/icons/2/free-check-mark-icon-3279-thumb.png')
  
               }else{
                setImg1('https://cdn-icons-png.flaticon.com/512/59/59836.png')
  
               }
              
                }
              }
            
             reader.readAsDataURL(e.target.files[0])
            }

            const handleimgpreview2=(e)=>{
              e.preventDefault();
                 const reader=new FileReader();
               
                  reader.onload=()=>{
                    if(reader.readyState ===2){
                     
                     e.preventDefault();
                     console.log(reader.result,"result")
                    //  setImg2(reader.result)
                  console.log(e.target.files[0].name,"nnn")
         
                  if(reader.result){
                    setImg2('https://www.iconpacks.net/icons/2/free-check-mark-icon-3279-thumb.png')
      
                   }else{
                    setImg2('https://cdn-icons-png.flaticon.com/512/59/59836.png')
      
                   }
                   
                    }
                  }
                
                 reader.readAsDataURL(e.target.files[0])
                }
                const handleimgpreview3=(e)=>{
                    e.preventDefault();
                       const reader=new FileReader();
                     
                        reader.onload=()=>{
                          if(reader.readyState ===2){
                           
                           e.preventDefault();
                           console.log(reader.result,"result")
                          //  setImg3(reader.result)
                        console.log(e.target.files[0].name,"nnn")
               
                        if(reader.result){
                          setImg3('https://www.iconpacks.net/icons/2/free-check-mark-icon-3279-thumb.png')
            
                         }else{
                          setImg3('https://cdn-icons-png.flaticon.com/512/59/59836.png')
            
                         }
                         
                          }
                        }
                      
                       reader.readAsDataURL(e.target.files[0])
                      }
        const handleRevision=()=>{
        const Designer_Data=[{
          type:"Image File",
          Img:img,
        },{
          type:"Image File",
          Img:img1,
        },{
          type:"Design File",
          Img:img2,
        },
        {
            type:"Job File",
            Img:img3,
          }]
       
          console.log(Designer_Data,"Designer_Data")

        }
        const handledropdown=(e)=>{
          console.log(e.target.value);
          if(e.target.value==='Complete'){
            setOpen(true);
          }else{
            setOpen(false)
          }
        }
        const handlepaint=()=>{
          const obj={
            k9mGwrThRedQieNQCk5R3:{
              fill: "transparent",
height: 230.5085686725588,
rotation: 0,
stroke: "#ece4e4",
type: "rect",
width: 809.0450552835614,
x: 78.97747235821926,
y: 85.24571566372039,

            }
          }
          localStorage.setItem('__integrtr_diagrams__',JSON.stringify(obj));
          if(localStorage.getItem('__integrtr_diagrams__')){
            nav('/paintingTool')
            window.location.reload(false);
          }
      
        }
        const token=localStorage.getItem('token')
        const dataget=()=>{
          Axios.get('http://127.0.0.1:8000/api/getDesignerOrderData/',{
            
              headers:{
                "Authorization":`Token ${token}`
              }
            
          }).then((res)=>{
            console.log(res.data)
          }).catch((err)=>{
            console.log(err)
          })
        }
        useEffect(()=>{
          dataget();
        },[])
  return (
    <div>



<div class="modal fade" id="exampleModalTogglescreenname12hjhj2" aria-hidden="true" aria-labelledby="exampleModalToggleLabelh3" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header" style={{borderBottom:"0px"}}>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" style={{textAlign:"center",color:"black"}}>
      <p>Successfully Send !</p>

      <div className='d-flex' style={{justifyContent:"space-around"}}>
      
      </div>
      </div>
     
    </div>
  </div>
</div>



      <div class={`modal fade ${open ? 'show':''}`} id="exampleModalTogglescreenname" aria-hidden="true" aria-labelledby="exampleModalToggleLabel3" tabindex="-1" style={{display:`${open ? 'block':'none'}`}}>
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header" style={{borderBottom:"0px"}}>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={()=>setOpen(!open)}></button>
      </div>
      <div class="modal-body" style={{textAlign:"center",color:"black"}}>
      <p>Are Want To Sure Complete ?</p>

      <div className='d-flex' style={{justifyContent:"space-around"}}>
      <button class="btn btn-success btn-md bg-primary btn-block mt-4" onClick={()=>setOpen(!open)}>No</button>
      <button class="btn btn-success btn-md bg-primary btn-block mt-4" data-bs-target="#exampleModalTogglescreenname1" data-bs-toggle="modal" data-bs-dismiss="modal" onClick={()=>setOpen(!open)}>Yes</button>

      </div>
      </div>
     
    </div>
  </div>
</div>




<div class="modal fade" id="exampleModalTogglescreenname1" aria-hidden="true" aria-labelledby="exampleModalToggleLabel3" tabindex="-1" >
  <div class="modal-dialog modal-dialog-centered" style={{paddingRight:"0px",minWidth:"1250px"}}>
    <div class="modal-content">
      <div class="modal-header" style={{borderBottom:"0px"}}>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" style={{textAlign:"center",color:"black"}}>
    
      <div style={{minHeight:"500px"}} >
  
  <form>
  <main class="main-content position-relative max-height-vh-100 h-100 mt-1 border-radius-lg ">
    
    <nav class="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" navbar-scroll="true">
      <div class="container-fluid py-1 ">
        <nav aria-label="breadcrumb" className='w-100'>
        <h4>Upload Design To Complete Order</h4>

          <ol class="breadcrumb1 bg-transparent mb-0 pb-0 pt-0 px-0  me-5" style={{display:"flex",justifyContent:"space-between"}}>
          <div className='w-full '>
              <label htmlFor="txt" className='mr-2' style={{marginRight:"5px"}}>
                <h6>
                Order Id
                </h6>
                </label>
          <input type="text" id='txt' className='mt-0 w-full' value='see2334' required style={{border:"none",outline:"none"}}/>
          </div>
         
          </ol>
        
        </nav>
       
      </div>
    </nav>
    <div class="container-fluid py-4">
      <div class="row">
        <div class="col-12">
          <div class="card ">
            
            <div class="card-body px-0 pt-0 pb-2">
              <div class="table-responsive p-0">
                <table class="table align-items-center mb-0">
                  <thead>
                    <tr>
                      <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-100"><h6> Preview</h6></th>
                      <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-100 ps-2"><h6>File Type</h6></th>
                      <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-100"></th>
                      <th class="text-secondary opacity-7"></th>
                    </tr>
                  </thead>
                  <tbody>
  <tr>
  
    <td>
      <div class="d-flex px-2 py-1" style={{justifyContent:"center"}}>

        <div>
          <img src={img} class="avatar  me-3" alt="user1" style={{width:"100px",height:"100px"}} />
        </div>
        
      </div>
    </td>
    <td>
      <p class="text-xs font-weight-bold mb-0">Image File</p>
    </td>
   
   
    <td class="align-middle text-center">
      <div>
      
        <label htmlFor="file" class="btn bg-gradient-primary " >
        Upload
        </label>
        <input type="file" id="file" style={{display:"none"}} onChange={handleimgpreview} required/>
      </div>
      
    </td>
  </tr>
  <tr>

    <td>
      <div class="d-flex px-2 py-1" style={{justifyContent:"center"}}>

        <div>
          <img src={img1} class="avatar  me-3" alt="user1" style={{width:"100px",height:"100px"}} />
        </div>
        
      </div>
    </td>
    <td>
      <p class="text-xs font-weight-bold mb-0">Preview File</p>
    </td>
   
   
    <td class="align-middle text-center">
    <div>
      
      <label htmlFor="file1" class="btn bg-gradient-primary " >
      Upload
      </label>
      <input type="file" id="file1" style={{display:"none"}} onChange={handleimgpreview1} required/>
    </div>
    </td>
  </tr>
  <tr>
  
    <td>
      <div class="d-flex px-2 py-1" style={{justifyContent:"center"}}>

        <div>
          <img src={img2} class="avatar  me-3" alt="user1" style={{width:"100px",height:"100px"}} />
        </div>
        
      </div>
    </td>
    <td>
      <p class="text-xs font-weight-bold mb-0">Design File</p>
    </td>
   
   
    <td class="align-middle text-center">
    <div>
      
      <label htmlFor="file2" class="btn bg-gradient-primary " >
      Upload
      </label>
      <input type="file" id="file2" style={{display:"none"}} onChange={handleimgpreview2} required/>
    </div>
    </td>
  </tr>
  <tr>
 
    <td>
      <div class="d-flex px-2 py-1" style={{justifyContent:"center"}}>

        <div>
          <img src={img3} class="avatar  me-3" alt="user1" style={{width:"100px",height:"100px"}} />
        </div>
        
      </div>
    </td>
    <td>
      <p class="text-xs font-weight-bold mb-0">Job File</p>
    </td>
   
   
    <td class="align-middle text-center">
    <div>
      
      <label htmlFor="file3" class="btn bg-gradient-primary " >
      Upload
      </label>
      <input type="file" id="file3" style={{display:"none"}} onChange={handleimgpreview3} required/>
    </div>
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
    <button class="btn bg-gradient-primary mt-0 w-20 mr-0" type="submit"  data-bs-target="#exampleModalTogglescreenname12hjhj2" data-bs-toggle="modal" data-bs-dismiss="modal">Submit</button>

    </main>
  </form>
    </div>
      </div>
     
    </div>
  </div>
</div>







<div class="container-fluid px-4 py-5  text-center" style={{backgroundImage:`url("https://images.ctfassets.net/hrltx12pl8hq/1fR5Y7KaK9puRmCDaIof7j/09e2b2b9eaf42d450aba695056793607/vector1.jpg")`,height:"300px",display:"flex",alignItems:"center",justifyContent:"center"}}>
	<div class="lc-block d-block mx-auto mb-4 w-100">
	<h2 style={{color:"white",textAlign:"center"}}>My Order</h2>
	</div>
	<div class="lc-block">
		
	</div>
	

	
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
                      <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-100"><h6> UserName </h6></th>
                      <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-100 ps-2">
                      <h6> Design File </h6>
                        </th>
                      <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-100">
                      <h6> OrderId </h6>
                        </th>
                      <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-100">
                      <h6>   Status </h6>
                      </th>
                      <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-100">
                        
                      <h6>  WorkHrs</h6>
                      </th>
                      <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-100">
                      <h6>  price</h6>
                      </th>
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
                        <a href='/photo/2015/04/23/22/00/' download='tree-736885__480.jpg'>
                        <p class="text-xs font-weight-bold mb-0"><i class="bi bi-cloud-download" style={{fontSize:"40px"}}></i></p>
                        </a>
                      </td>
                      <td class="align-middle text-center text-sm">
                        <span class="text-secondary text-xs font-weight-bold">rvrnknj@seeDesign</span>
                      </td>
                      <td class="align-middle text-center">
                      <span  style={{cursor:"pointer"}}>
                        <select style={{height:"30px"}} onChange={(e)=>handledropdown(e)} >
                          <option>
                            Processing
                          </option>
                          <option >
                            <span >
                            Complete
                            </span>
                          </option>
                        </select>
                      </span>
                      </td>
                      <td class="align-middle text-center">
                        <span class="text-secondary text-xs font-weight-bold" >4-8 hr</span>
                      </td>
                      <td class="align-middle text-center">
                        <span class="text-secondary text-xs font-weight-bold" >$5</span>
                      </td>
                      <td class="align-middle text-center">
                        <span class="text-secondary text-xs font-weight-bold" onClick={handlepaint}>Painting</span>
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
                      <a href="/wp-content/uploads/file.mp4" download="file.mp4">
                        <p class="text-xs font-weight-bold mb-0"><i class="bi bi-cloud-download" style={{fontSize:"40px"}}></i> </p>
                     </a>
                      </td>
                      <td class="align-middle text-center text-sm">
                      <span class="text-secondary text-xs font-weight-bold">rvrnknj@seeDesign</span>
                      </td>
                      <td class="align-middle text-center">
                      <span style={{cursor:"pointer"}}>
                      <select style={{height:"30px"}} onChange={(e)=>handledropdown(e)} >
                          <option>
                            Processing
                          </option>
                          <option >
                            <span >
                            Complete
                            </span>
                          </option>
                        </select>
                      </span>
                      </td>
                      <td class="align-middle text-center">
                        <span class="text-secondary text-xs font-weight-bold" >4-8 hr</span>
                      </td>
                      <td class="align-middle text-center">
                        <span class="text-secondary text-xs font-weight-bold" >$15</span>
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
                      <a href='/photo/2015/04/23/22/00/' download='tree-736885__480.jpg'>
                        <p class="text-xs font-weight-bold mb-0"><i class="bi bi-cloud-download" style={{fontSize:"40px"}}></i></p>
                     </a>
                      </td>
                      <td class="align-middle text-center text-sm">
                      <span class="text-secondary text-xs font-weight-bold">rvrnknj@seeDesign</span>
                      </td>
                      <td class="align-middle text-center">
                      <span style={{cursor:"pointer"}}>
                      <select style={{height:"30px"}} onChange={(e)=>handledropdown(e)} >
                          <option>
                            Processing
                          </option>
                          <option >
                            <span >
                            Complete
                            </span>
                          </option>
                        </select>
                      </span>
                      </td>
                      <td class="align-middle text-center">
                        <span class="text-secondary text-xs font-weight-bold" >4-8 hr</span>
                      </td>
                      <td class="align-middle text-center">
                        <span class="text-secondary text-xs font-weight-bold" >$15</span>
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
                      <a href='/photo/2015/04/23/22/00/' download='tree-736885__480.jpg'>
                        <p class="text-xs font-weight-bold mb-0"><i class="bi bi-cloud-download" style={{fontSize:"40px"}}></i> </p>
                      </a>
                      </td>
                      <td class="align-middle text-center text-sm">
                      <span class="text-secondary text-xs font-weight-bold">rvrnknj@seeDesign</span>
                      </td>
                      <td class="align-middle text-center">
                      <span style={{cursor:"pointer"}}>
                      <select style={{height:"30px"}} onChange={(e)=>handledropdown(e)} >
                          <option>
                            Processing
                          </option>
                          <option >
                            <span >
                            Complete
                            </span>
                          </option>
                        </select>
                      </span>
                      </td>
                      <td class="align-middle text-center">
                        <span class="text-secondary text-xs font-weight-bold" >4-8 hr</span>
                      </td>
                      <td class="align-middle text-center">
                        <span class="text-secondary text-xs font-weight-bold" >$15</span>
                      </td>
                    
                    </tr>
                  </tbody>
                </table>
              </div>
              
            </div>
            <nav aria-label="Page navigation example">
  <ul class="pagination" style={{justifyContent:"center"}}>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
          </div>
        </div>
      </div>












    </div>
  )
}

export default OrderUpload