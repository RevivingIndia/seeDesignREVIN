import React, { useCallback } from "react";

import { useShapes, updateAttribute } from "./state";

const shapeSelector = (state) => state.shapes[state.selected];

export function PropertiesPanel() {
  const selectedShape = useShapes(shapeSelector);

  const updateAttr = useCallback((event) => {
    const attr = event.target.name;

    updateAttribute(attr, event.target.value);
  }, []);

  return (
    <>
    <div class="modal fade" id="exampleModalToggleupdate" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header" style={{borderBottom:"0px"}}>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" style={{textAlign:"center",color:"black"}}>
      <p>Data Update Successfully !</p>

      </div>
     
    </div>
  </div>
</div>
    <aside className="panel">
      <h4>Properties</h4>
      <div className="properties">
        {selectedShape ? (
          <>
            <div className="key">
              Type <span className="value">{selectedShape.type}</span>
            </div>

            <div className="key">
              Stroke{" "}
              <input
                className="value"
                name="stroke"
                type="color"
                value={selectedShape.stroke}
                onChange={updateAttr}
              />
            </div>

            <div className="key">
            height{" "}
              <input
                className="value"
                style={{width:"100px"}}
                name="fill"
                type="text"
                value={Math.round(selectedShape.height)}
                onChange={updateAttr}
              />
            </div>
            <div className="key">
            {isNaN(selectedShape.width) ? "Radius":"width"}
              <input
                className="value"
                style={{width:"100px"}}
                name="fill"
                type="text"
                value={Math.round(isNaN(selectedShape.width)? selectedShape.radius:selectedShape.width)}
                onChange={updateAttr}
              />
            </div>
            <div className="key">
            x{" "}
              <input
                className="value"
                style={{width:"100px"}}
                name="fill"
                type="text"
                value={Math.round(selectedShape.x)}
                onChange={updateAttr}
              />
            </div>
            <div className="key">
        Y{" "}
              <input
                className="value"
                style={{width:"100px"}}
                name="fill"
                type="text"
                value={Math.round(selectedShape.y)}
                onChange={updateAttr}
              />
            </div>
            <div className="key">
        Depth{" "}
              <input
                className="value"
                style={{width:"100px"}}
                name="fill"
                type="text"
                
               
              />
            </div>
            <div className="key " style={{position:"relative",flexDirection:"column"}}>
            <button className='btn btn-success btn-md bg-primaryk btn-block 'style={{backgroundColor:"#82d616"}} data-bs-target="#exampleModalToggleupdate" data-bs-toggle="modal" data-bs-dismiss="modal" >Submit</button>
            </div>
          </>
        ) : (
         <div>Click Inside The Shape To Check Properties</div>
        )}
      </div>
    </aside>
    </>
  );
}
