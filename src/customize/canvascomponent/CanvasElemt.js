import { useRef, useEffect, useState } from "react";

import {
  Canvas1,
  Canvas2,
  Button,
  InputSizeCanvas,
  InputRotateContainer,
  CanvasContainer,
  EditButtom,
  ArrowsContainer
} from "./ElementsDrawing";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleRight,
  faArrowAltCircleLeft
} from "@fortawesome/free-solid-svg-icons";
import {
  ArrowsElement,
  ArrowsElementC,
  ArrowsElementL
} from "./ArrownsElement";
import { useLocation } from "react-router-dom";

const CanvasElmt = ({
  startDrawing,
  finishDrawing,
  draw,
  rotate,
  leave,
  toEnter,
  inRotation,
  setSizes,
  setElements,
  goBack,
  goForward,
  clickArrow,
  clickEdit,
  modal,
  data
}) => {
  const canvas1Ref = useRef(null);
  const context1Ref = useRef(null);
  const canvas2Ref = useRef(null);
  const context2Ref = useRef(null);
  const rotatorRef = useRef(null);
  const arrowContainer = useRef(null);
  //----------------------------------------------
  const [width, setWidth] = useState(1200);
  const [height, setHeight] = useState(520);
  const [thick, setThick] = useState(20);
  const location=useLocation();
  // console.log(location.state.localpath,"location")
  //-----------------------------------------------
  useEffect(() => {
    //---------Configurando la variable Contex2 y tipo de linea------------------------------
    context1Ref.current = canvas1Ref.current.getContext("2d");
    context2Ref.current = canvas2Ref.current.getContext("2d");
    //--------------------------------------------------------
    rotatorRef.current.children[2].children[0].value = 0;

    setElements({
      c1: canvas1Ref.current,
      c2: canvas2Ref.current,
      cotx1: context1Ref.current,
      cotx2: context2Ref.current,
      rotatorRef: rotatorRef.current,
      arrowsRef: arrowContainer.current
    });
  }, [setElements]);

  //-------------------------------------------------
  useEffect(() => {
    canvas1Ref.current.width = width;
    canvas1Ref.current.height = height;
    canvas1Ref.current.style.width = `${width}px`;
    canvas1Ref.current.style.height = `${height}px`;
    //---------------------------------------
    canvas2Ref.current.width = width;
    canvas2Ref.current.height = height;
    canvas2Ref.current.style.width = `${width}px`;
    canvas2Ref.current.style.height = `${height}px`;
    canvas2Ref.current.parentNode.style.height = `${height}px`;
    
    //--------------------------------------------
    context2Ref.current.lineCap = "round";
    context2Ref.current.lineJoin = "round";
    //--------------------------------------------
    setSizes({ w: width, h: height });
  }, [width, height, setSizes]);
  //----------------------------------------------
  function changeWidth({ target }) {
    if (target.value > 3000) {
      inRotation();
      setWidth(3000);
      return;
    }
    inRotation();
    setWidth(target.value);
  }
  //--------------------------------------------------
  function changeHeight({ target }) {
    if (target.value > 3000) {
      inRotation();
      setHeight(3000);
      return;
    }
    inRotation();
    setHeight(target.value);
  }

  function changeThick({ target }) {
    if (target.value > 3000) {
      inRotation();
      setThick(3000);
      return;
    }
    inRotation();
    setThick(target.value);
  }
  //-----------------------------------------
  return (
    <>
      
      <InputSizeCanvas>
        {/* <label htmlFor={"width"}>WIDTH</label>
        <input
          id={"width"}
          onChange={changeWidth}
          type={"number"}
          value={width}
          step={10}
          min={0}
          max={3000}
        /> */}
        {/* <label htmlFor={"hight"}>HEIGHT</label>
        <input
          id={"hight"}
          onChange={changeHeight}
          type={"number"}
          value={height}
          step={10}
          min={0}
          max={3000}
        /> */}
        {/* <label htmlFor={"thick"}>Thickness</label>
        <input
          id={"thick"}
          onChange={changeThick}
          type={"number"}
          value={thick}
          step={10}
          min={0}
          max={3000}
        /> */}
      </InputSizeCanvas>
      <InputRotateContainer ref={rotatorRef}>
        <EditButtom onClick={clickEdit} style={{borderRadius:"10px",textAlign:"center",margin:"0px",border:"none"}}>EDITAR</EditButtom>
        <Button onClick={goBack}>
          <FontAwesomeIcon
            style={{ fontSize: "25px" }}
            icon={faArrowAltCircleLeft}
          />
        </Button>
        <label>
          ROTAR
          <input type={"range"} min={"-180"} max={"180"} onChange={rotate} />
        </label>
        <Button onClick={goForward}>
          <FontAwesomeIcon
            style={{ fontSize: "25px" }}
            icon={faArrowAltCircleRight}
          />
        </Button>
      </InputRotateContainer>
      <a id="canvasimgdownload" >
      <CanvasContainer onMouseLeave={leave} onMouseEnter={toEnter} 
      
          >
        <ArrowsContainer ref={arrowContainer}>
          <ArrowsElement
            clickArrow={clickArrow}
            draw={draw}
            finishDrawing={finishDrawing}
          />
          <ArrowsElementC
            clickArrow={clickArrow}
            draw={draw}
            finishDrawing={finishDrawing}
          />
        </ArrowsContainer>
        <ArrowsContainer>
          <ArrowsElementL
            clickArrow={clickArrow}
            draw={draw}
            finishDrawing={finishDrawing}
          />
        </ArrowsContainer>
        <Canvas1 ref={canvas1Ref}
          style={{backgroundImage:`url("../../assets/seedesign/03.png")`}}
        
        />
        <Canvas2
          ref={canvas2Ref}
          onTouchStart={startDrawing}
          onTouchEnd={finishDrawing}
          onTouchMove={draw}
          onMouseDown={startDrawing}
          onMouseUp={finishDrawing}
          onMouseMove={draw}
        />
      </CanvasContainer>
      </a>
    </>
  );
};

export default CanvasElmt;
