import React from "react";

import { DRAG_DATA_KEY, SHAPE_TYPES } from "./constants";
import { clearSelection, delete1, reset, saveDiagram } from "./state";

const handleDragStart = (event) => {
  const type = event.target.dataset.shape;

  if (type) {
    // x,y coordinates of the mouse pointer relative to the position of the padding edge of the target node
    const offsetX = event.nativeEvent.offsetX;
    const offsetY = event.nativeEvent.offsetY;

    // dimensions of the node on the browser
    const clientWidth = event.target.clientWidth;
    const clientHeight = event.target.clientHeight;

    const dragPayload = JSON.stringify({
      type,
      offsetX,
      offsetY,
      clientWidth,
      clientHeight,
    });

    event.nativeEvent.dataTransfer.setData(DRAG_DATA_KEY, dragPayload);
  }
};
 
const saveDiagram1=()=>{
  saveDiagram()
}
export function Palette() {
  return (
<>
<div class="modal fade" id="exampleModalToggleupdate" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header" style={{borderBottom:"0px"}}>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" style={{textAlign:"center",color:"black"}}>
      <p>Order created Successfully!</p>

      </div>
     
    </div>
  </div>
</div>
<aside className="palette panel" style={{width:"250px",display:"flex",flexDirection:"column",backgroundColor:"#eeebe9"}}>
      <h4>Shapes</h4>
      <div
        className="shape rectangle"
        data-shape={SHAPE_TYPES.RECT}
        draggable
        onDragStart={handleDragStart}
    
      />
      
      <div
        className="shape circle"
        data-shape={SHAPE_TYPES.CIRCLE}
        draggable
        onDragStart={handleDragStart}
      />
        <div className="buttons" style={{position:"relative",flexDirection:"column"}}>
        <button onClick={saveDiagram1} className='btn btn-success btn-md bg-primaryh btn-block ' style={{backgroundColor:"#82d616"}} data-bs-target="#exampleModalToggleupdate" data-bs-toggle="modal" data-bs-dismiss="modal">Save</button>
        <button onClick={reset} className='btn btn-success btn-md bg-primaryj btn-block ' style={{backgroundColor:"#82d616"}}> Reset</button>
        <button onClick={delete1} className='btn btn-success btn-md bg-primaryj btn-block ' style={{backgroundColor:"#82d616"}}>delete</button>

        <button onClick={clearSelection} className='btn btn-success btn-md bg-primaryj btn-block ' style={{backgroundColor:"#82d616"}}>clear</button>
      </div>
    </aside>
    </>
  );
}
