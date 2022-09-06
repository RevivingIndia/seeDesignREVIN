import React from 'react'
import { useState } from 'react';
import img1 from "./images/img-1.jpg";
import img2 from "./images/img-2.jpg";
import img3 from "./images/img-3.jpg";
const Lightbox = () => {
    const[ig,setig]=useState(1);
const handle=()=>{
    const a=document.getElementsByTagName('img').src;
console.log(img1,"img")

    setig(ig+1)
}
  return (
    <div>
        <button onClick={handle}>+</button>
        <div class="gallery">
      <div class="image"><span><img src={`./assets/images copy/img-${ig}.jpg`} alt=""/></span></div>
    
    </div>
    </div>
  )
}

export default Lightbox