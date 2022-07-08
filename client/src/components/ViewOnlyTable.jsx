import React, { useEffect, useState,  } from "react";
import Axios from 'axios';

  
function Table() {


//-----------------------------BACK - END-----------------------------//
//-------------------------------HUMVEES------------------------------//
const [humveeList, setHumveeList] = useState([]); 


  useEffect(() => {
   Axios.get('http://localhost:3001/api/getHumveeData').then((response) => {
      setHumveeList(response.data)
    }) 
  }, [])
//-------------------------------HUMVEES------------------------------//

//-------------------------------OE254s------------------------------//
const [oe254List, setOE254List] = useState([]); 


  useEffect(() => {
   Axios.get('http://localhost:3001/api/getOE254Data').then((response) => {
    setOE254List(response.data)
    }) 
  }, [])
//-----------------------------OE254s-----------------------------//

//-------------------------------LLDRS------------------------------//
const [lldrList, setLLDRList] = useState([]); 


  useEffect(() => {
   Axios.get('http://localhost:3001/api/getLLDRData').then((response) => {
    setLLDRList(response.data)
    }) 
  }, [])
//-----------------------------LLDRS-----------------------------//

//-------------------------------NODS------------------------------//
const [nodsList, setNodsList] = useState([]); 


  useEffect(() => {
   Axios.get('http://localhost:3001/api/getNODSData').then((response) => {
    setNodsList(response.data)
    }) 
  }, [])
//-----------------------------NODS-----------------------------//

//-------------------------------RADIOS------------------------------//
const [radioList, setRadioList] = useState([]); 

  useEffect(() => {
   Axios.get('http://localhost:3001/api/getRadioData').then((response) => {
    setRadioList(response.data)
    }) 
  }, [])
//-----------------------------RADIOS-----------------------------//

//-------------------------------RIFLES------------------------------//
const [rifleList, setRifleList] = useState([]); 


  useEffect(() => {
   Axios.get('http://localhost:3001/api/getRifleData').then((response) => {
    setRifleList(response.data)
    }) 
  }, [])
//-----------------------------RIFLES-----------------------------//
//-----------------------------BACK - END-----------------------------//
const [tableIndex, setTableIndex] = useState();

const [showhide, setShowhide]=useState('');
  
   const handleshowhide=(event)=>{
     const tableIndex = event.target.value;    
     setShowhide(tableIndex);
   }

  return (
    

    <section className="loginsectionone">
      
  <div className="test" style={{height:'0px'}}>
  <img

              src="viewOnlyTableBackground.jpg"
              alt=""
              width="1500" 
              height="1080"
            />
  </div>
  <div className="overlay">   
  </div>
  <div className="tablescreen">
                
            <h1>Selected Table: {tableIndex}</h1>
              <div className ="tableDropDownBox">
              <select id="selectOptions" value={tableIndex}  
                onChange={(e) => { setTableIndex(e.target.value); handleshowhide(e); }}>
                <option value="">Select a table from the menu</option>
                <option value="HUMVEE" >HUMVEES AND LMTVS</option>
                <option value="OE254">OE-254</option>
                <option value="LLDR">LLDRS</option>
                <option value="NODS">NIGHT-VISION</option>
                <option value="RADIOS">RADIOS</option>
                <option value="M4A1">M4A1s</option>
              </select>
              </div>

{/*------------------------------------------------------- HUMVEES ------------------------------------------------------- */}
{showhide==='HUMVEE' && (             
          <div className="humveeScreen">
            <h1 className="text-center mt-5"><u> Humvee List</u></h1>
       <table>
        <tbody>
        <tr>
          <th>Humvee ID</th>
          <th>Humve Number</th>
          <th>Humvee Color</th>
        </tr>
        {humveeList.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.humvee_id}</td>
              <td>{val.humvee_number}</td>
              <td>{val.humvee_color}</td>
            </tr>
          )
        })}
        </tbody>
      </table>
            <br></br>   
            </div>
)} 
{/*------------------------------------------------------- HUMVEES ------------------------------------------------------- */}

{/* ====================================================================================================================== */}

{/*------------------------------------------------------- OE-254s ------------------------------------------------------- */}
{showhide==='OE254' && (     
            <div className="oe254Screen">
            <h1 className="text-center mt-5"><u> OE254 List</u></h1>
            <table>
            <tbody>
        <tr>
          <th>ID</th>
          <th>Number</th>
          <th>Platoon</th>
        </tr>
        {oe254List.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.oe254_id}</td>
              <td>{val.oe254_number}</td>
              <td>{val.oe254_platoon}</td>
            </tr>
          )
        })}
        </tbody>
      </table>
            <br></br>   
            </div>
)}            
{/*------------------------------------------------------- OE-254s ------------------------------------------------------- */}

{/* ====================================================================================================================== */}

{/*------------------------------------------------------- LLDRS ------------------------------------------------------- */}
{showhide==='LLDR' && (             
          <div className="lldrScreen">
            <h1 className="text-center mt-5"><u> LLDR List</u></h1>
       <table>
        <tbody>
        <tr>
          <th>LLDR ID</th>
          <th>LLDR Number</th>
          <th>Platoon</th>
        </tr>
        {lldrList.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.lldr_id}</td>
              <td>{val.lldr_number}</td>
              <td>{val.lldr_platoon}</td>
            </tr>
          )
        })}
        </tbody>
      </table>
            <br></br>   
            </div>
)} 
{/*------------------------------------------------------- LLDRS ------------------------------------------------------- */}

{/* ====================================================================================================================== */}

{/*------------------------------------------------------- NODS ------------------------------------------------------- */}
{showhide==='NODS' && (             
          <div className="humveeScreen">
            <br></br>
            <h1 className="text-center mt-5"><u> Night-Vision List</u></h1>
       <table>
        <tbody>
        <tr>
          <th>Night-Vision ID</th>
          <th>Night-Vision Number</th>
          <th>Platoon</th>
          <th>Owner</th>
        </tr>
        {nodsList.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.nods_id}</td>
              <td>{val.nods_number}</td>
              <td>{val.nods_platoon}</td>
              <td>{val.nods_owner}</td>
            </tr>
          )
        })}
        </tbody>
      </table>
            <br></br>   
            </div>
)} 
{/*------------------------------------------------------- NODS ------------------------------------------------------- */}

{/* ====================================================================================================================== */}

{/*------------------------------------------------------- RADIOS ------------------------------------------------------- */}
{showhide==='RADIOS' && (             
          <div className="radioScreen">
            <br></br>
            <h1 className="text-center mt-5"><u> Radios List</u></h1>
       <table>
        <tbody>
        <tr>
          <th>Radio ID</th>
          <th>Radio Number</th>
          <th>Platoon</th>
        </tr>
        {radioList.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.radio_id}</td>
              <td>{val.radio_number}</td>
              <td>{val.radio_platoon}</td>
            </tr>
          )
        })}
        </tbody>
      </table>

            <br></br>   
            </div>
)} 
{/*------------------------------------------------------- RADIOS ------------------------------------------------------- */}

{/* ====================================================================================================================== */}

{/*------------------------------------------------------- RIFLES ------------------------------------------------------- */}
{showhide==='M4A1' && (     
            <div className="rifleScreen">
            <br></br>
            <h1 className="text-center mt-5"><u> Rifle List</u></h1>
            <table>
            <tbody>
        <tr>
          <th>Rifle ID</th>
          <th>Rifle Number</th>
          <th>Rifle Owner</th>
        </tr>
        {rifleList.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.m4_id}</td>
              <td>{val.m4_number}</td>
              <td>{val.m4_owner}</td>
            </tr>
          )
        })}
        </tbody>
      </table>
            <br></br>   
            </div>
)}            
{/*------------------------------------------------------- RIFLES ------------------------------------------------------- */}

{/* ====================================================================================================================== */}
            </div>
            
            <br></br>



            
</section>
  );
}

  
export default Table;