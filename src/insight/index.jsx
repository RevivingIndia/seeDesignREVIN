import { Photo } from '@material-ui/icons'
import React, { useState } from 'react'
import Illustration from './illustration'
import Photos from './photos'
import Vectorsee from './vectorsee'

const Insight = () => {
    const [photos,setPhotos]=useState(true);
    const [illustration,setIllustration]=useState(false);
    const [Vectors,setVectors]=useState(false);
    const handlephotos=()=>{
        setPhotos(true);
        setIllustration(false);
        setVectors(false)
    }
    const handleIllustration=()=>{
        setPhotos(false);
        setIllustration(true);
        setVectors(false)
    }
    const handlevector=()=>{
        setPhotos(false);
        setIllustration(false);
        setVectors(true)
    }
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-light" style={{boxShadow:'none'}}>
  <div class="container-fluid">
  
    
    <div class="collapse navbar-collapse" id="navbarNav" style={{display:"flex",justifyContent:"space-between"}} >
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#" >Recent top sellers</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" >My Statistics</a>
        </li>
     
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#" style={{fontSize:"12px"}}>Payout</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" style={{fontSize:"12px"}}>Payout History</a>
        </li>
     
      </ul>
     
    </div>
  </div>
</nav>
<div style={{display:"flex"}}>
    <h2 className='text-dark m-4'>Recent top sellers
</h2>
<select className='m-4' style={{border:"none"}}>
    <option value="a">jan-feb</option>
    <option value="a">feb-march</option>
    <option value="a">march-april</option>
    <option value="a">April-may</option>
</select>
<span className='m-4'>How it works</span>
</div>
<div style={{display:"flex",cursor:"pointer"}}>
    <h5 className='text-dark m-4' onClick={handlephotos}>Photos
</h5>
<h5 className='text-dark m-4' onClick={handleIllustration}>Illustrations
</h5>
<h5 className='text-dark m-4' onClick={handlevector}>Vectors
</h5>
</div>
{illustration &&
    <Illustration/>

}
{photos &&
    <Photos/>

}
{Vectors &&
    <Vectorsee/>

}
    </div>
  )
}

export default Insight