import React, { useEffect, useState,  } from "react";
import Axios from 'axios';

function Table() {


//-----------------------------BACK - END-----------------------------//

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

//-------------------------------HUMVEES------------------------------//
const [humveeNumber, setHumveeNumber] = useState("");
const [humveeColor, setHumveeColor] = useState("");
const [humveePlatoon, setHumveePlatoon] = useState("");
const [humveeList, setHumveeList] = useState([]); 
const [newHumveeReview, setNewHumveeReview] = useState("");

  useEffect(() => {
   Axios.get('http://localhost:3001/api/getHumveeData').then((response) => {
      setHumveeList(response.data)
    }) 
  }, [])



 const submitHumveeReview = () => {

  Axios.post("http://localhost:3001/api/Humveeinsert", 
  {humveeNumber: humveeNumber, humveeColor: humveeColor, humveePlatoon: humveePlatoon
  });

  Axios.get('http://localhost:3001/api/getHumveeData').then((response) => {
    setHumveeList(response.data)
  }) 

 };

 const deleteHumveeReview = (humveeNumber) => {
  Axios.delete(`http://localhost:3001/api/Humveedelete/${humveeNumber}`)

  Axios.get('http://localhost:3001/api/getHumveeData').then((response) => {
    setHumveeList(response.data)
  })
 }; 

 const updateHumveeReview = (humveeID) => {
  Axios.put("http://localhost:3001/api/Humveeupdate", 
  { humveeID: humveeID, 
    humveeColor: newHumveeReview,
  })

  setNewHumveeReview("");

  Axios.get('http://localhost:3001/api/getHumveeData').then((response) => {
    setHumveeList(response.data)
  })
};
//-------------------------------HUMVEES------------------------------//

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

//-------------------------------OE254s------------------------------//
const [oe254Number, setOE254Number] = useState("");
const [oe254Platoon, setOE254Platoon] = useState("");
const [oe254List, setOE254List] = useState([]); 
const [newOE254Number, setNewOE254Number] = useState("");
const [newOE254Platoon, setNewOE254Platoon] = useState("");

  useEffect(() => {
   Axios.get('http://localhost:3001/api/getOE254Data').then((response) => {
    setOE254List(response.data)
    }) 
  }, [])

 const submitOE254Review = () => {
  Axios.post("http://localhost:3001/api/OE254insert", 
  {oe254Number: oe254Number, oe254Platoon: oe254Platoon
  });

  Axios.get('http://localhost:3001/api/getOE254Data').then((response) => {
    setOE254List(response.data)
    })

 }

 const deleteOE254Review = (oe254Number) => {
  Axios.delete(`http://localhost:3001/api/OE254delete/${oe254Number}`);

  Axios.get('http://localhost:3001/api/getOE254Data').then((response) => {
    setOE254List(response.data)
  })

 }; 
//-------------------------------------------------OE254 UPDATE---------------------------------------------//
 const updateOE254Number = (oe254ID) => {
  Axios.put("http://localhost:3001/api/OE254Numberupdate", 
  { oe254ID: oe254ID, 
    oe254Number: newOE254Number,
  })

  setNewOE254Number("");

  Axios.get('http://localhost:3001/api/getOE254Data').then((response) => {
    setOE254List(response.data)
  })
};


const updateOE254Platoon = (oe254ID) => {
  Axios.put("http://localhost:3001/api/OE254Platoonupdate", 
  { oe254ID: oe254ID, 
    oe254Platoon: newOE254Platoon,
  })

  setNewOE254Platoon("");

  Axios.get('http://localhost:3001/api/getOE254Data').then((response) => {
    setOE254List(response.data)
  })
};
//-------------------------------------------------OE254 UPDATE---------------------------------------------//
//-----------------------------OE254s-----------------------------//

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

//-------------------------------LLDRS------------------------------//
const [lldrNumber, setLLDRNumber] = useState("");
const [lldrPlatoon, setLLDRPlatoon] = useState("");
const [lldrList, setLLDRList] = useState([]); 
const [newLLDRNumber, setNewLLDRNumber] = useState("");
const [newLLDRPlatoon, setNewLLDRPlatoon] = useState("");

  useEffect(() => {
   Axios.get('http://localhost:3001/api/getLLDRData').then((response) => {
    setLLDRList(response.data)
    }) 
  }, [])

 const submitLLDRReview = () => {
  Axios.post("http://localhost:3001/api/LLDRinsert", 
  {lldrNumber: lldrNumber, lldrPlatoon: lldrPlatoon
  });

  Axios.get('http://localhost:3001/api/getLLDRData').then((response) => {
    setLLDRList(response.data)
    })

 }

 const deleteLLDRReview = (lldrNumber) => {
  Axios.delete(`http://localhost:3001/api/LLDRdelete/${lldrNumber}`);

  Axios.get('http://localhost:3001/api/getLLDRData').then((response) => {
    setLLDRList(response.data)
  })

 };
 
 //-------------------------------------------------LLDR UPDATE---------------------------------------------//
 const updateLLDRNumber = (lldrID) => {
  Axios.put("http://localhost:3001/api/LLDRNumberupdate", 
  { lldrID: lldrID, 
    lldrNumber: newLLDRNumber,
  })

  setNewLLDRNumber("");

  Axios.get('http://localhost:3001/api/getLLDRData').then((response) => {
    setLLDRList(response.data)
  })
};


const updateLLDRPlatoon = (lldrID) => {
  Axios.put("http://localhost:3001/api/LLDRPlatoonupdate", 
  { lldrID: lldrID, 
    lldrPlatoon: newLLDRPlatoon,
  })

  setNewLLDRPlatoon("");

  Axios.get('http://localhost:3001/api/getLLDRData').then((response) => {
    setLLDRList(response.data)
  })
};
//-------------------------------------------------LLDR UPDATE---------------------------------------------//
//-----------------------------LLDRS-----------------------------//

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

//-------------------------------NODS------------------------------//
const [nodsNumber, setNodsNumber] = useState("");
const [nodsPlatoon, setNodsPlatoon] = useState("");
const [nodsOwner, setNodsOwner] = useState("");
const [nodsList, setNodsList] = useState([]);
const [newNodsNumber, setNewNodsNumber] = useState("");
const [newNodsPlatoon, setNewNodsPlatoon] = useState("");
const [newNodsOwner, setNewNodsOwner] = useState("");



  useEffect(() => {
   Axios.get('http://localhost:3001/api/getNODSData').then((response) => {
    setNodsList(response.data)
    }) 
  }, [])

 const submitNodsReview = () => {
  Axios.post("http://localhost:3001/api/NODSinsert", 
  {nodsNumber: nodsNumber, nodsPlatoon: nodsPlatoon, nodsOwner: nodsOwner 
  });

  Axios.get('http://localhost:3001/api/getNODSData').then((response) => {
    setNodsList(response.data)
    })

 }

 const deleteNodsReview = (nodsNumber) => {
  Axios.delete(`http://localhost:3001/api/NODSdelete/${nodsNumber}`);

  Axios.get('http://localhost:3001/api/getNODSData').then((response) => {
    setNodsList(response.data)
  })

 };

//-------------------------------------------------NODS UPDATE---------------------------------------------//
const updateNodsNumber = (nodsID) => {
  Axios.put("http://localhost:3001/api/NODSNumberupdate", 
  { nodsID: nodsID, 
    nodsNumber: newNodsNumber,
  })

  setNewNodsNumber("");

  Axios.get('http://localhost:3001/api/getNODSData').then((response) => {
    setNodsList(response.data)
  })
};


const updateNodsPlatoon = (nodsID) => {
  Axios.put("http://localhost:3001/api/NODSPlatoonupdate", 
  { nodsID: nodsID, 
    nodsPlatoon: newNodsPlatoon,
  })

  setNewNodsPlatoon("");

  Axios.get('http://localhost:3001/api/getNODSData').then((response) => {
    setNodsList(response.data)
  })
};

const updateNodsOwner = (nodsID) => {
  Axios.put("http://localhost:3001/api/NODSOwnerupdate", 
  { nodsID: nodsID, 
    nodsOwner: newNodsOwner,
  })

  setNewNodsOwner("");

  Axios.get('http://localhost:3001/api/getNODSData').then((response) => {
    setNodsList(response.data)
  })
};
//-------------------------------------------------NODS UPDATE---------------------------------------------//

//-----------------------------NODS-----------------------------//

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

//-------------------------------RADIOS------------------------------//
const [radioNumber, setRadioNumber] = useState("");
const [radioPlatoon, setRadioPlatoon] = useState("");
const [radioList, setRadioList] = useState([]); 
const [newRadioNumber, setNewRadioNumber] = useState("");
const [newRadioPlatoon, setNewRadioPlatoon] = useState("");

  useEffect(() => {
   Axios.get('http://localhost:3001/api/getRadioData').then((response) => {
    setRadioList(response.data)
    }) 
  }, [])

 const submitRadioReview = () => {
  Axios.post("http://localhost:3001/api/Radioinsert", 
  {radioNumber: radioNumber, radioPlatoon: radioPlatoon
  });

  Axios.get('http://localhost:3001/api/getRadioData').then((response) => {
    setRadioList(response.data)
    })

 }

 const deleteRADIOReview = (radioNumber) => {
  Axios.delete(`http://localhost:3001/api/Radiodelete/${radioNumber}`);

  Axios.get('http://localhost:3001/api/getRadioData').then((response) => {
    setRadioList(response.data)
  })
 };

 //-------------------------------------------------RADIO UPDATE---------------------------------------------//
 const updateRadioNumber = (radioID) => {
  Axios.put("http://localhost:3001/api/RadioNumberupdate", 
  { radioID: radioID, 
    radioNumber: newRadioNumber,
  })

  setNewRadioNumber("");

  Axios.get('http://localhost:3001/api/getRadioData').then((response) => {
    setRadioList(response.data)
  })
};


const updateRadioPlatoon = (radioID) => {
  Axios.put("http://localhost:3001/api/RadioPlatoonupdate", 
  { radioID: radioID, 
    radioPlatoon: newRadioPlatoon,
  })

  setNewRadioPlatoon("");

  Axios.get('http://localhost:3001/api/getRadioData').then((response) => {
    setRadioList(response.data)
  })
};
//-------------------------------------------------RADIO UPDATE---------------------------------------------//


//-----------------------------RADIOS-----------------------------//

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

//-------------------------------RIFLES------------------------------//
const [rifleNumber, setRifleNumber] = useState("");
const [rifleOwner, setRifleOwner] = useState("");
const [rifleOwnerPlatoon, setRifleOwnerPlatoon] = useState("");
const [rifleList, setRifleList] = useState([]); 
const [newRifleNumber, setNewRifleNumber] = useState("");
const [newRifleOwner, setNewRifleOwner] = useState("");
const [newRifleOwnerPlatoon, setNewRifleOwnerPlatoon] = useState("");

  useEffect(() => {
   Axios.get('http://localhost:3001/api/getRifleData').then((response) => {
    setRifleList(response.data)
    }) 
  }, [])

 const submitRifleReview = () => {
  Axios.post("http://localhost:3001/api/Rifleinsert", 
  {rifleNumber: rifleNumber, rifleOwner: rifleOwner, rifleOwnerPlatoon: rifleOwnerPlatoon
  });

  Axios.get('http://localhost:3001/api/getRifleData').then((response) => {
    setRifleList(response.data)
    }) 

 }

 const deleteM4A1Review = (rifleNumber) => {
  Axios.delete(`http://localhost:3001/api/Rifledelete/${rifleNumber}`);

  Axios.get('http://localhost:3001/api/getRifleData').then((response) => {
    setRifleList(response.data)
  })

 };

 //-------------------------------------------------RIFLE UPDATE---------------------------------------------//
 const updateRifleNumber = (rifleID) => {
  Axios.put("http://localhost:3001/api/RifleNumberupdate", 
  { rifleID: rifleID, 
    rifleNumber: newRifleNumber,
  })

  setNewRifleNumber("");

  Axios.get('http://localhost:3001/api/getRifleData').then((response) => {
    setRifleList(response.data)
  })
};


const updateRifleOwner = (rifleID) => {
  Axios.put("http://localhost:3001/api/RifleOwnerupdate", 
  { rifleID: rifleID, 
    rifleOwner: newRifleOwner,
  })

  setNewRifleOwner("");

  Axios.get('http://localhost:3001/api/getRifleData').then((response) => {
    setRifleList(response.data)
  })
};

const updateRifleOwnerPlatoon = (rifleID) => {
  Axios.put("http://localhost:3001/api/RifleOwnerPlatoonupdate", 
  { rifleID: rifleID, 
    rifleOwnerPlatoon: newRifleOwnerPlatoon,
  })

  setNewRifleOwnerPlatoon("");

  Axios.get('http://localhost:3001/api/getRifleData').then((response) => {
    setRifleList(response.data)
  })
};
//-------------------------------------------------RIFLE UPDATE---------------------------------------------//


//-----------------------------RIFLES-----------------------------//

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

//-----------------------------BACK - END-----------------------------//

//========================================================================================================================================================================//

//-----------------------------FRONT - END-----------------------------//
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

              src="tableBackground.jpg"
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
                <option value="HUMVEES AND LMTVS" >HUMVEES AND LMTVS</option>
                <option value="OE254">OE-254</option>
                <option value="LLDRS">LLDRS</option>
                <option value="NODS">NIGHT-VISION</option>
                <option value="RADIOS">RADIOS</option>
                <option value="M4A1s">M4A1s</option>
              </select>
              </div>

{/*------------------------------------------------------- HUMVEES ------------------------------------------------------- */}
{showhide==='HUMVEES AND LMTVS' && (  
             
          <div className="humveeScreen">
   

             <br></br>

             <form action="#">
              <label for="lang">Select a platoon: </label>
              <select name="languages" id="lang">
                <option value="1st">1st</option>
                <option value="2nd">2nd</option>
                <option value="3rd">3rd</option>
                <option value="4th">4th</option>
              </select>
              <input type="submit" value="Submit" />
              </form>

          <h1 className="text-center mt-5"><u> Insert into Humvees</u></h1>
            <br></br>
            <label><b>Humvee Number:</b>&nbsp;   </label>
            <input type="text" name="HumveeName" onChange={(e)=> {setHumveeNumber(e.target.value);}}/>
            <br></br>
            <label><b>Humvee Status:</b>&nbsp;   </label>
            <input type="text" name="HumveeColor" onChange={(e)=> {setHumveeColor(e.target.value);}}/>
            <br></br>
            <label><b>Humvee Platoon:</b>&nbsp;   </label>
            <input type="text" name="HumveePlatoon" onChange={(e)=> {setHumveePlatoon(e.target.value);}}/>
            <br></br>
            <button className="SubmitHumvee" onClick={submitHumveeReview}> Submit </button>
            
            <h1 className="text-center mt-5"><u> Humvee List</u></h1>
       <table>
        <tbody>
        <tr>
          <th>Delete</th>
          <th>Update Status</th>
          <th>Humvee ID</th>
          <th>Humve Number</th>
          <th>Humvee Status</th>
          <th>Humvee Platoon</th>
        </tr>
        {humveeList.map((val, key) => {
          return (
            <tr key={key}>
              <td><button id="deleteButton"onClick={() => {deleteHumveeReview(val.humvee_number)}}>Delete</button></td>
              
              <td><text className = "updateInput">[Status:] </text><input className="updateStatusInput" onChange={(e) => {setNewHumveeReview(e.target.value)}}></input>
              <button id="updateButton" onClick={() => {updateHumveeReview(val.humvee_id)}}>&uarr;</button></td>
              <td>{val.humvee_id}</td>
              <td>{val.humvee_number}</td>
              <td>{val.humvee_color}</td>
              <td>{val.humvee_platoon}</td>
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
          <h1 className="text-center mt-5"><u> Insert into OE254s</u></h1>
            <br></br>
            <label><b>OE254 Number:</b>&nbsp;   </label>
            <input type="text" name="HumveeName" onChange={(e)=> {setOE254Number(e.target.value);}}/>
            <br></br>
            <label><b>Platoon:</b>&nbsp;   </label>
            <input type="text" name="HumveeColor" onChange={(e)=> {setOE254Platoon(e.target.value);}}/>
            <br></br>
            <button className="SubmitHumvee" onClick={submitOE254Review}> Submit </button>
            <h1 className="text-center mt-5"><u> OE254 List</u></h1>
            <table>
            <tbody>
        <tr>
          <th>Modify</th>
          <th>Update Number&emsp;&emsp;&emsp;&emsp;Update Platoon</th>
          <th>ID</th>
          <th>Number</th>
          <th>Platoon</th>
        </tr>
        {oe254List.map((val, key) => {
          return (
            <tr key={key}>
              <td><button id="deleteButton"onClick={() => {deleteOE254Review(val.oe254_number)}}>Delete</button></td>


              <td><text className = "updateInput">[Number:] </text><input className="updateNumberInput"onChange={(e) => {setNewOE254Number(e.target.value)}}></input>
              <button id="updateButton" onClick={() => {updateOE254Number(val.oe254_id)}}>&uarr;</button>


              <text className = "updateInput"> [Platoon:] </text><input className="updatePlatoonInput"onChange={(e) => {setNewOE254Platoon(e.target.value)}}></input>
              <button id="updateButton" onClick={() => {updateOE254Platoon(val.oe254_id)}}>&uarr;</button></td>

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
{showhide==='LLDRS' && (             
          <div className="lldrScreen">
          <h1 className="text-center mt-5"><u> Insert into LLDRs</u></h1>
            <br></br>
            <label><b>LLDR Number:</b>&nbsp;   </label>
            <input type="text" name="HumveeName" onChange={(e)=> {setLLDRNumber(e.target.value);}}/>
            <br></br>
            <label><b>Platoon:</b>&nbsp;   </label>
            <input type="text" name="HumveeColor" onChange={(e)=> {setLLDRPlatoon(e.target.value);}}/>
            <br></br>
            <button className="SubmitHumvee" onClick={submitLLDRReview}> Submit </button>
            <h1 className="text-center mt-5"><u> LLDR List</u></h1>
       <table>
        <tbody>
        <tr>
          <th>Delete</th>
          <th>Update Number&emsp;&emsp;&emsp;&emsp;Update Platoon</th>
          <th>LLDR ID</th>
          <th>LLDR Number</th>
          <th>Platoon</th>
        </tr>
        {lldrList.map((val, key) => {
          return (
            <tr key={key}>
              <td><button id="deleteButton"onClick={() => {deleteLLDRReview(val.lldr_number)}}>Delete</button></td>

              <td><text className = "updateInput">[Number:] </text><input className="updateNumberInput"onChange={(e) => {setNewLLDRNumber(e.target.value)}}></input>
              <button id="updateButton" onClick={() => {updateLLDRNumber(val.lldr_id)}}>&uarr;</button>


              <text className = "updateInput"> [Platoon:] </text><input className="updatePlatoonInput"onChange={(e) => {setNewLLDRPlatoon(e.target.value)}}></input>
              <button id="updateButton" onClick={() => {updateLLDRPlatoon(val.lldr_id)}}>&uarr;</button></td>

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
          <h1 className="text-center mt-5"><u> Insert into Night-Vision</u></h1>
            <br></br>
            <label><b>Nods Number:</b>&nbsp;   </label>
            <input type="text" name="HumveeName" onChange={(e)=> {setNodsNumber(e.target.value);}}/>
            <br></br>
            <label><b>Platoon:</b>&nbsp;   </label>
            <input type="text" name="HumveeColor" onChange={(e)=> {setNodsPlatoon(e.target.value);}}/>
            <br></br>
            <label><b>Owner:</b>&nbsp;   </label>
            <input type="text" name="HumveeColor" onChange={(e)=> {setNodsOwner(e.target.value);}}/>
            <br></br>
            <button className="SubmitHumvee" onClick={submitNodsReview}> Submit </button>
            <h1 className="text-center mt-5"><u> Night-Vision List</u></h1>
       <table>
        <tbody>
        <tr>
          <th>Delete</th>
          <th>Update Number&emsp;&nbsp;Update Platoon&emsp;&nbsp;Update Owner</th>
          <th>NODS ID</th>
          <th>NODS Number</th>
          <th>Owner</th>
          <th>Platoon</th>
        </tr>
        {nodsList.map((val, key) => {
          return (
            <tr key={key}>
              <td><button id="deleteButton"onClick={() => {deleteNodsReview(val.nods_number)}}>Delete</button></td>

              <td><text className = "updateNodsInput">[Number:] </text><input className="updateNumberInput"onChange={(e) => {setNewNodsNumber(e.target.value)}}></input>
              <button id="updateButton" onClick={() => {updateNodsNumber(val.nods_id)}}>&uarr;</button>
              
              <text className = "updateNodsInput"> [Owner:] </text><input className="updatePlatoonInput"onChange={(e) => {setNewNodsOwner(e.target.value)}}></input>
              <button id="updateButton" onClick={() => {updateNodsOwner(val.nods_id)}}>&uarr;</button>
              
              <text className = "updateNodsInput"> [Platoon:] </text><input className="updatePlatoonInput"onChange={(e) => {setNewNodsPlatoon(e.target.value)}}></input>
              <button id="updateButton" onClick={() => {updateNodsPlatoon(val.nods_id)}}>&uarr;</button></td>

              <td>{val.nods_id}</td>
              <td>{val.nods_number}</td>
              <td>{val.nods_owner}</td>
              <td>{val.nods_platoon}</td>
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
          <h1 className="text-center mt-5"><u> Insert into Radios</u></h1>
            <br></br>
            <label><b>Radio Number:</b>&nbsp;   </label>
            <input type="text" name="HumveeName" onChange={(e)=> {setRadioNumber(e.target.value);}}/>
            <br></br>
            <label><b>Platoon:</b>&nbsp;   </label>
            <input type="text" name="HumveeColor" onChange={(e)=> {setRadioPlatoon(e.target.value);}}/>
            <br></br>
            <button className="SubmitHumvee" onClick={submitRadioReview}> Submit </button>
            <h1 className="text-center mt-5"><u> Radios List</u></h1>
       <table>
        <tbody>
        <tr>
          <th>Delete</th>
          <th>Update Number&emsp;&emsp;&emsp;&emsp;Update Platoon</th>
          <th>Radio ID</th>
          <th>Radio Number</th>
          <th>Platoon</th>
        </tr>
        {radioList.map((val, key) => {
          return (
            <tr key={key}>
              <td><button id="deleteButton"onClick={() => {deleteRADIOReview(val.radio_number)}}>Delete</button></td>

              <td><text className = "updateInput">[Number:] </text><input className="updateNumberInput"onChange={(e) => {setNewRadioNumber(e.target.value)}}></input>
              <button id="updateButton" onClick={() => {updateRadioNumber(val.radio_id)}}>&uarr;</button>


              <text className = "updateInput"> [Platoon:] </text><input className="updatePlatoonInput"onChange={(e) => {setNewRadioPlatoon(e.target.value)}}></input>
              <button id="updateButton" onClick={() => {updateRadioPlatoon(val.radio_id)}}>&uarr;</button></td>


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
{showhide==='M4A1s' && (     
            <div className="rifleScreen">
          <h1 className="text-center mt-5"><u> Insert into Rifles</u></h1>
            <br></br>
            <label><b>Rifle Number:</b>&nbsp;   </label>
            <input type="text" name="HumveeName" onChange={(e)=> {setRifleNumber(e.target.value);}}/>
            <br></br>
            <label><b>Rifle Owner:</b>&nbsp;   </label>
            <input type="text" name="HumveeColor" onChange={(e)=> {setRifleOwner(e.target.value);}}/>
            <br></br>
            <label><b>Platoon:</b>&nbsp;   </label>
            <input type="text" name="HumveeColor" onChange={(e)=> {setRifleOwnerPlatoon(e.target.value);}}/>
            <br></br>
            <button className="SubmitHumvee" onClick={submitRifleReview}> Submit </button>
            <h1 className="text-center mt-5"><u> Rifle List</u></h1>
            <table>
            <tbody>
        <tr>
          <th>Delete</th>
          <th>Update Number&emsp;&emsp;&emsp;Update Owner&emsp;&emsp;&emsp;Update Platoon</th>
          <th>Rifle ID</th>
          <th>Rifle Number</th>
          <th>Rifle Owner</th>
          <th>Platoon</th>
        </tr>
        {rifleList.map((val, key) => {
          return (
            <tr key={key}>
              <td><button id="deleteButton"onClick={() => {deleteM4A1Review(val.m4_number)}}>Delete</button></td>

              <td><text className = "updateInput">[Number:] </text><input className="updateNumberInput"onChange={(e) => {setNewRifleNumber(e.target.value)}}></input>
              <button id="updateButton" onClick={() => {updateRifleNumber(val.m4_id)}}>&uarr;</button>


              <text className = "updateInput"> [Owner:] </text><input className="updatePlatoonInput"onChange={(e) => {setNewRifleOwner(e.target.value)}}></input>
              <button id="updateButton" onClick={() => {updateRifleOwner(val.m4_id)}}>&uarr;</button>

              <text className = "updateInput"> [Platoon:] </text><input className="updatePlatoonInput"onChange={(e) => {setNewRifleOwnerPlatoon(e.target.value)}}></input>
              <button id="updateButton" onClick={() => {updateRifleOwnerPlatoon(val.m4_id)}}>&uarr;</button></td>


              <td>{val.m4_id}</td>
              <td>{val.m4_number}</td>
              <td>{val.m4_owner}</td>
              <td>{val.m4_owner_platoon}</td>
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