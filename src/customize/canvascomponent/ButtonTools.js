import {
    ButtonContainer,
    InputLabel,
    Label,
    Icon,
    Button,
    ColorButton,
    ToolsContainer
  } from "./ElementsDrawing";
  import html2canvas from "html2canvas";
  import BtnColor from "./ComponentColor";
  import {
    faPencilAlt,
    faSlash,
    faEraser,
    faFillDrip,
    faPalette,
    faTriangleCircleSquare,
    faExclamationTriangle,
    faArrowAltCircleLeft
  } from "@fortawesome/free-solid-svg-icons";
  import {
    faCircle,
    faSquare,
    faSave
  } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useEffect } from "react";
import  Axios from "axios";
  //------------------------------------------------------
  const rectangle = (
    <svg
      style={{ pointerEvents: "none" }}
      xmlns="http://www.w3.org/2000/svg"
      width="400" height="20"
    >
        <rect width="50" height="20"  stroke="black"
        strokeWidth="3"
        fill="transparent" border="2" />

      
    </svg>
  );
  //------------------------------------------------
  const ButtomTools = ({
    inRotation,
    change,
    lineColor,
    clearAll,
    downloadImg,
    getFillColor,
    dropper,
    moveColor,
    goBack,
  }) => {
    //-------------------------------------------
    const [data,setData]=useState([])
    function handleClik(e) {
      e.target.previousSibling.click();
    }
    function printDiv2(div)
    {
      const screenshotTarget = document.querySelector("#canvasimgdownload");
      html2canvas(screenshotTarget).then((Canvas) => {
        const baseimg = Canvas.toDataURL("image/png");
        var anchor = document.createElement("a");
        anchor.setAttribute("href", baseimg);
        anchor.setAttribute("download", "my-Image.png");
        anchor.click();
        anchor.remove();
      });
    }
    const token=localStorage.getItem('token')
    const handledataguyg=()=>{
    const local=JSON.parse(localStorage.getItem('id'));
    console.log(local,token)
    Axios.post('http://127.0.0.1:8000/api/postDimensionData/',
    {
      dimensionList:local
    },{
      headers:{
        'Authorization':`Token ${token}`
      }
    }).then((res)=>{
      console.log(res.data,"gvgv");
      // if(res.data.Message==='Dimension Data Details gvgv'){
        dataget(res.data);
      // }
    }).catch((err)=>{
      console.log(err)
    })
  }
  const dataget=(e)=>{
    console.log(e.customiseDesignName,"hhh")
    Axios.post('http://127.0.0.1:8000/api/getDimensionData/',{
      customiseDesignName:e.customiseDesignName
    },{
      headers:{
        'Authorization':`Token ${token}`
      }
    }).then((data)=>{
      
      console.log(JSON.parse(data.data.resultset.dimensionList))
      setData(data.data.resultset.dimensionList)
      // setData(res.data.data)
    }).catch((err)=>{
      console.log(err)
    })
  }
        
    useEffect(()=>{
      setData(JSON.parse(localStorage.getItem('id')));
      // alert("hello")
    },[])
    //-------------------------------------------
    return (
      <>
      <ButtonContainer onClick={inRotation} style={{margin:"0px",padding:"0px",width:"100px",height:"89vh",backgroundColor:"#d3d3d3",display:"flex",justifyContent:"start"}}>
        <ToolsContainer style={{width:"100px",display:"flex",flexDirection:"column",alignItems:"center",marginTop:"10px"}}>
          <InputLabel
            type={"radio"}
            id={"normal"}
            name={"type"}
            onChange={change}
          />
          <Label onClick={handleClik} style={{width:"80px"}}>
            <Icon icon={faPencilAlt} />
          </Label>
          
          {/* <InputLabel
            type={"radio"}
            id={"straightLine"}
            name={"type"}
            onChange={change}
          /> */}
          <Label onClick={handledataguyg} data-bs-target="#exampleModalToggleuploadbtnnn" data-bs-toggle="modal" data-bs-dismiss="modal">
            <Icon icon={faSave} />
          </Label>
          <InputLabel
            type={"radio"}
            id={"circle"}
            name={"type"}
            onChange={change}
          />
          <Label onClick={handleClik} style={{width:"80px"}}>
            <Icon icon={faCircle} />
          </Label>
          <InputLabel
            type={"radio"}
            id={"square"}
            name={"type"}
            onChange={change}
          />
          <Label onClick={handleClik} style={{width:"80px"}}>
            <Icon icon={faSquare} />
          </Label>
           <FontAwesomeIcon
            style={{ fontSize: "25px" }}
            icon={faArrowAltCircleLeft}
          />
          {/* <InputLabel
            type={"radio"}
            id={"trangle"}
            name={"type"}
            onChange={change}
        /> */}
          <Label onClick={handleClik} style={{width:"80px"}}> 
          <Button onClick={goBack}> <FontAwesomeIcon
            style={{ fontSize: "25px" }}
            icon={faArrowAltCircleLeft}
          />
          </Button>
          </Label> 
          <InputLabel
            type={"radio"}
            id={"rectangle"}
            name={"type"}
            onChange={change}
          />
          <Label onClick={handleClik} style={{width:"60px"}}>{rectangle}</Label>
          <InputLabel
            type={"radio"}
            id={"eraser"}
            name={"type"}
            onChange={change}
          />
          <Label onClick={handleClik} style={{width:"80px"}}>
            <Icon icon={faEraser} />
          </Label>
          {/* <InputLabel
            type={"radio"}
            id={"filled"}
            name={"type"}
            onChange={change}
          />
          <Label>
            <Icon icon={faFillDrip} />
            <BtnColor
              funcColor={getFillColor}
              dropper={dropper}
              moveColor={moveColor}
              type={"fill"}
            />
          </Label>
          <ColorButton>
            <Icon icon={faPalette} />
            <BtnColor
              funcColor={lineColor}
              dropper={dropper}
              moveColor={moveColor}
              type={"pencil"}
            />
          </ColorButton> */}
          <div>

          </div>
        </ToolsContainer>
        <Button onClick={clearAll} style={{border:"2px solid"}}><i class="bi bi-eraser"></i></Button>
        <Button style={{ height: "33px" }}  data-bs-target="#exampleModalToggleuploadbtn" data-bs-toggle="modal" data-bs-dismiss="modal"   >
          <Icon icon={faSave}  />
        </Button>

      </ButtonContainer>

      <div class="modal fade" id="exampleModalToggleuploadbtnnn" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header" style={{borderBottom:"0px"}}>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" style={{textAlign:"center",color:"black"}}>
      <p>Are You Sure To Save ?</p>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">L(MM)</th>
      <th scope="col">w(MM)</th>
      <th scope="col">T(MM)</th>
    </tr>
  </thead>
  <tbody>
    {data ? data.map((data,index)=>(
 <tr>
 <th scope="row">{data.id}</th>
 <td>{data.length}</td>
 <td>{data.width}</td>
 <td><input type="text" style={{width:"60px"}}/></td>
</tr>
    )):
    <tr>
 <th scope="row"><input type="text" style={{width:"60px"}}/></th>
 <td><input type="text" style={{width:"60px"}}/></td>
 <td><input type="text" style={{width:"60px"}}/></td>
 <td><input type="text" style={{width:"60px"}}/></td>
</tr>
    }
   
   
    
  </tbody>
</table>
<div className="d-flex" style={{justifyContent:"space-around"}}>
      <button class="btn btn-success btn-md bg-primary btn-block mt-4" onClick={(e)=>printDiv2(e)}>No</button>
     
      <button class="btn btn-success btn-md bg-primary btn-block mt-4" data-bs-dismiss="modal" aria-label="Close">Yes</button>
      </div>
      </div>
     
    </div>
  </div>
</div>
      <div class="modal fade" id="exampleModalToggleuploadbtn" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header" style={{borderBottom:"0px"}}>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" style={{textAlign:"center",color:"black"}}>
      <p>Are You Sure To Proceed Payment?</p>
<div className="d-flex" style={{justifyContent:"space-around"}}>
      <button class="btn btn-success btn-md bg-primary btn-block mt-4" onClick={(e)=>printDiv2(e)}>No</button>
     
      <button class="btn btn-success btn-md bg-primary btn-block mt-4" data-bs-target="#exampleModalToggleuploadbtntype" data-bs-toggle="modal" data-bs-dismiss="modal">Yes</button>
      </div>
      </div>
     
    </div>
  </div>
</div>


<div class="modal fade" id="exampleModalToggleuploadbtntype" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header" style={{borderBottom:"0px"}}>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" style={{textAlign:"center",color:"black"}}>
      <p>Select Your Payment Type</p>
<div className="d-flex" style={{justifyContent:"space-around"}}>
{/* onClick={(e)=>printDiv2(e)} */}
      <button class="btn btn-success btn-md bg-primary btn-block mt-4"  data-bs-target="#exampleModalToggle4" data-bs-toggle="modal" data-bs-dismiss="modal" >NetBanking</button>
     
      <button class="btn btn-success btn-md bg-primary btn-block mt-4" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Card</button>
      </div>
      </div>
     
    </div>
  </div>
</div>
 {/* card payment  */}

<div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header" style={{borderBottom:"0px"}}>
        {/* <h5 class="modal-title" id="exampleModalToggleLabel2">Modal 2</h5> */}
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" style={{textAlign:"center",color:"black"}}>
      <form action="">

            

            

            <p class="fw-bold mb-2">Payment with Card</p>

           

            <div class="row mb-2">
              <div class="col-12 d-flex" style={{justifyContent:"space-around"}}>
              <div class="form-outline mb-4 col-5">
              <input type="text" id="formControlLgXsd" class="form-control form-control-md"
                 />
              <label class="form-label" for="formControlLgXsd">Cardholder's Name</label>
            </div>
                <div class="form-outline col-6">
                  <input type="text" id="formControlLgXM" class="form-control form-control-md"
            />
                  <label class="form-label" for="formControlLgXM">Card Number</label>
                </div>
              </div>
              <div class="col-4">
                <div class="form-outline">
                  <input type="number" id="formControlLgExpk" class="form-control form-control-md"
                    placeholder="MM/YY" />
                  <label class="form-label" for="formControlLgExpk">Expire</label>
                </div>
              </div>
              <div class="col-4">
                <div class="form-outline">
                  <input type="password" id="formControlLgcvv" class="form-control form-control-md"
                    placeholder="Cvv" />
                  <label class="form-label" for="formControlLgcvv">Cvv</label>
                </div>
                
              </div>
              <div class="col-4">
                <div class="form-outline">
                  <select class="form-control form-control-md">
                    <option class="form-control form-control-md">Credit</option>
                    <option class="form-control form-control-md">Debit</option>
                  </select>
                  <label class="form-label" for="formControlLgcvv">Card Type</label>
                </div>
                
              </div>
            </div>

            <button class="btn btn-success btn-md bg-primary btn-block" >Add card</button>
          </form>
      </div>
     
    </div>
  </div>
</div>

{/* netbanking  */}

<div class="modal fade" id="exampleModalToggle4" aria-hidden="true" aria-labelledby="exampleModalToggleLabel4" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header" style={{borderBottom:"0px"}}>
        {/* <h5 class="modal-title" id="exampleModalToggleLabel2">Modal 2</h5> */}
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" style={{textAlign:"center",color:"black"}}>
      <form action="">

            

            

            <p class="fw-bold mb-2">Add UPI ID</p>

           

            <div class="row mb-2">
              <div class="col-12 d-flex" style={{justifyContent:"space-around"}}>
              <div class="form-outline mb-4 col-5">
              <input type="text" id="formControlLgXsd" class="form-control form-control-md"
               placeholder='your Name' />
              <label class="form-label" for="formControlLgXsd">Name</label>
            </div>
                <div class="form-outline col-6">
                  <input type="text" id="formControlLgXM" class="form-control form-control-md"
                    placeholder='UPI ID'  />
                  <label class="form-label" for="formControlLgXM">UPI ID</label>
                </div>
              </div>
              <div class="col-4">
                <div class="form-outline">
                  <input type="text" id="formControlLgExpk" class="form-control form-control-md"
                    placeholder="Bank" />
                  <label class="form-label" for="formControlLgExpk">Bank </label>
                </div>
              </div>
              <div class="col-4">
                <div class="form-outline">
                  <input type="password" id="formControlLgcvv" class="form-control form-control-md"
                    placeholder="Cvv" />
                  <label class="form-label" for="formControlLgcvv">Cvv</label>
                </div>
              </div>
            </div>

            <button class="btn btn-success btn-md bg-primary btn-block">Add card</button>
          </form>
      </div>
     
    </div>
  </div>
</div>
      </>
    );
  };
  
  export default ButtomTools;
  