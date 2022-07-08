const express = require('express')
const app = express()
const cors = require("cors");
var mysql = require('mysql');
const { reset } = require('nodemon');
const bodyParser = require('body-parser');

app.use(express.json());
app.use(cors());

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "frank105",
  database: "pmcsmanagement",
  port: "3308"
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(express.json());
//===========================================================================================================================//

//------------------------------------------------------ACCOUNT_REQUEST------------------------------------------------------//
app.post('/register', (req, res)=> {

const fullName = req.body.fullName;
const email = req.body.email;
const phoneNumber = req.body.phoneNumber;

con.query(
  "INSERT INTO tempusers (fullName, email, phoneNumber) VALUES (?,?,?)", 
  [fullName, email, phoneNumber], 
  (err, result)=> {
  console.log(err);
    }
  );
});
//------------------------------------------------------ACCOUNT_REQUEST------------------------------------------------------//

//===========================================================================================================================//

//-----------------------------------------------------------LOGIN-----------------------------------------------------------//
app.post('/login', (req, res)=> {
const userName = req.body.userName;
const password = req.body.password;


con.query(
  "SELECT * FROM users WHERE User_name = ? AND User_password = ?", 
  [userName, password], 
  (err, result)=> {

  if(err) {
    res.send({err: err});
  }

    if (result.length > 0) {
      res.send(result)
    } else {
      res.send({message: "Wrong username or password"})
    }

    }
  );
});
//-----------------------------------------------------------LOGIN-----------------------------------------------------------//

//===========================================================================================================================//

//-------------------------------------------------------ADMIN - LOGIN-------------------------------------------------------//
app.post('/adminlogin', (req, res)=> {
  const userName = req.body.userName;
  const password = req.body.password;
  
  
  con.query(
    "SELECT * FROM users WHERE User_name = ? AND User_password = ?", 
    [userName, password], 
    (err, result)=> {
  
    if(err) {
      res.send({err: err});
    }
  
      if (result.length > 0) {
        res.send(result)
      } else {
        res.send({message: "Wrong username or password"})
      }
  
      }
    );
  });
//-------------------------------------------------------ADMIN - LOGIN-------------------------------------------------------//
  
//===========================================================================================================================//

//-------------------------------------------------------HUMVEE-TABLE--------------------------------------------------------//
app.get('/api/getHumveeData', (req, res) => {
  const sqlSelect = 
  "SELECT * FROM humveetest";
  con.query(sqlSelect, (err, result)=> {
    res.send(result)
  })
  });

  app.get('/api/getHumveePlatoonData/:humveePlatoon', (req, res)=> {
    const name = req.params.humveePlatoon; 
    const sqlDelete = "SELECT * FROM humveetest WHERE humvee_platoon = ?";
  
    con.query(sqlDelete, [name], (err, result)=> {
     if(err) console.log(err);
    })
  })
  

  
app.post('/api/Humveeinsert', (req, res)=> {

  const humveeNumber = req.body.humveeNumber; 
  const humveeColor = req.body.humveeColor; 
  const humveePlatoon = req.body.humveePlatoon; 

  const sqlInsert = "INSERT INTO humveetest (humvee_number, humvee_color, humvee_platoon) VALUES (?,?,?)";
  con.query(sqlInsert, [humveeNumber, humveeColor, humveePlatoon], (err, result)=> {
    console.log(result)
  })
});

app.delete('/api/Humveedelete/:humveeNumber', (req, res)=> {
  const name = req.params.humveeNumber; 
  const sqlDelete = "DELETE FROM humveetest WHERE humvee_number = ?";

  con.query(sqlDelete, [name], (err, result)=> {
   if(err) console.log(err);
  })
})

app.put("/api/Humveeupdate", (req, res)=> {
  const humveeID = req.body.humveeID; 
  const humveeColor = req.body.humveeColor; 
  const sqlUpdate = "UPDATE humveetest SET humvee_color = ? WHERE humvee_id = ?";

  con.query(sqlUpdate, [humveeColor, humveeID], (err, result)=> {
    if (err) console.log(err);
  });
});


//-------------------------------------------------------HUMVEE-TABLE--------------------------------------------------------//

//===========================================================================================================================//

//-------------------------------------------------------OE/254-TABLE--------------------------------------------------------//
app.get('/api/getOE254Data', (req, res) => {
  const sqlSelect = 
  "SELECT * FROM oe254";
  con.query(sqlSelect, (err, result)=> {
    res.send(result)
  })
  });

  
app.post('/api/OE254insert', (req, res)=> {

  const oe254Number = req.body.oe254Number; 
  const oe254Platoon = req.body.oe254Platoon; 

  const sqlInsert = "INSERT INTO oe254 (oe254_number, oe254_platoon) VALUES (?, ?)";
  con.query(sqlInsert, [oe254Number, oe254Platoon], (err, result)=> {
    console.log(result)
  })
});

app.delete('/api/OE254delete/:oe254Number', (req, res)=> {
  const name = req.params.oe254Number; 
  const sqlDelete = "DELETE FROM oe254 WHERE oe254_number = ?";

  con.query(sqlDelete, [name], (err, result)=> {
   if(err) console.log(err);
  })
})

app.put("/api/OE254Numberupdate", (req, res)=> {
  const oe254ID = req.body.oe254ID;
  const oe254Number = req.body.oe254Number; 
  const sqlUpdate = "UPDATE oe254 SET oe254_number = ? WHERE oe254_id = ?";

  con.query(sqlUpdate, [oe254Number, oe254ID], (err, result)=> {
    if (err) console.log(err);
  });
});

app.put("/api/OE254Platoonupdate", (req, res)=> {
  const oe254Platoon = req.body.oe254Platoon;
  const oe254ID = req.body.oe254ID;  
  const sqlUpdate = "UPDATE oe254 SET oe254_platoon = ? WHERE oe254_id = ?";

  con.query(sqlUpdate, [oe254Platoon, oe254ID], (err, result)=> {
    if (err) console.log(err);
  });
});

//-------------------------------------------------------OE/254-TABLE--------------------------------------------------------//

//===========================================================================================================================//

//-------------------------------------------------------LLDR-TABLE--------------------------------------------------------//
app.get('/api/getLLDRData', (req, res) => {
  const sqlSelect = 
  "SELECT * FROM lldrs";
  con.query(sqlSelect, (err, result)=> {
    res.send(result)
  })
  });

  
app.post('/api/LLDRinsert', (req, res)=> {

  const lldrNumber = req.body.lldrNumber; 
  const lldrPlatoon = req.body.lldrPlatoon; 

  const sqlInsert = "INSERT INTO lldrs (lldr_number, lldr_platoon) VALUES (?, ?)";
  con.query(sqlInsert, [lldrNumber, lldrPlatoon], (err, result)=> {
    console.log(result)
  })
});

app.delete('/api/LLDRdelete/:lldrNumber', (req, res)=> {
  const name = req.params.lldrNumber; 
  const sqlDelete = "DELETE FROM lldrs WHERE lldr_number = ?";

  con.query(sqlDelete, [name], (err, result)=> {
   if(err) console.log(err);
  })
})

app.put("/api/LLDRNumberupdate", (req, res)=> {
  const lldrID = req.body.lldrID;
  const lldrNumber = req.body.lldrNumber; 
  const sqlUpdate = "UPDATE lldrs SET lldr_number = ? WHERE lldr_id = ?";

  con.query(sqlUpdate, [lldrNumber, lldrID], (err, result)=> {
    if (err) console.log(err);
  });
});

app.put("/api/LLDRPlatoonupdate", (req, res)=> {
  const lldrPlatoon = req.body.lldrPlatoon;
  const lldrID = req.body.lldrID;  
  const sqlUpdate = "UPDATE lldrs SET lldr_platoon = ? WHERE lldr_id = ?";

  con.query(sqlUpdate, [lldrPlatoon, lldrID], (err, result)=> {
    if (err) console.log(err);
  });
});


//-------------------------------------------------------LLDR-TABLE--------------------------------------------------------//

//===========================================================================================================================//

//-------------------------------------------------------NODS-TABLE--------------------------------------------------------//
app.get('/api/getNODSData', (req, res) => {
  const sqlSelect = 
  "SELECT * FROM nods";
  con.query(sqlSelect, (err, result)=> {
    res.send(result)
  })
  });

  
app.post('/api/NODSinsert', (req, res)=> {

  const nodsNumber = req.body.nodsNumber; 
  const nodsPlatoon = req.body.nodsPlatoon; 
  const nodsOwner = req.body.nodsOwner; 

  const sqlInsert = "INSERT INTO nods(nods_number, nods_platoon, nods_owner) VALUES (?, ?, ?)";
  con.query(sqlInsert, [nodsNumber, nodsPlatoon, nodsOwner], (err, result)=> {
    console.log(result)
  })
});

app.delete('/api/NODSdelete/:nodsNumber', (req, res)=> {
  const name = req.params.nodsNumber; 
  const sqlDelete = "DELETE FROM nods WHERE nods_number = ?";

  con.query(sqlDelete, [name], (err, result)=> {
   if(err) console.log(err);
  })
})

app.put("/api/NODSNumberupdate", (req, res)=> {
  const nodsID = req.body.nodsID;
  const nodsNumber = req.body.nodsNumber; 
  const sqlUpdate = "UPDATE nods SET nods_number = ? WHERE nods_id = ?";

  con.query(sqlUpdate, [nodsNumber, nodsID], (err, result)=> {
    if (err) console.log(err);
  });
});

app.put("/api/NODSPlatoonupdate", (req, res)=> {
  const nodsPlatoon = req.body.nodsPlatoon;
  const nodsID = req.body.nodsID;  
  const sqlUpdate = "UPDATE nods SET nods_platoon = ? WHERE nods_id = ?";

  con.query(sqlUpdate, [nodsPlatoon, nodsID], (err, result)=> {
    if (err) console.log(err);
  });
});

app.put("/api/NODSOwnerupdate", (req, res)=> {
  const nodsOwner = req.body.nodsOwner;
  const nodsID = req.body.nodsID;  
  const sqlUpdate = "UPDATE nods SET nods_owner = ? WHERE nods_id = ?";

  con.query(sqlUpdate, [nodsOwner, nodsID], (err, result)=> {
    if (err) console.log(err);
  });
});






//-------------------------------------------------------NODS-TABLE--------------------------------------------------------//

//===========================================================================================================================//

//-------------------------------------------------------RADIOS-TABLE--------------------------------------------------------//
app.get('/api/getRadioData', (req, res) => {
  const sqlSelect = 
  "SELECT * FROM radios";
  con.query(sqlSelect, (err, result)=> {
    res.send(result)
  })
  });

  
app.post('/api/Radioinsert', (req, res)=> {

  const radioNumber = req.body.radioNumber; 
  const radioPlatoon = req.body.radioPlatoon; 

  const sqlInsert = "INSERT INTO radios(radio_number, radio_platoon) VALUES (?, ?)";
  con.query(sqlInsert, [radioNumber, radioPlatoon], (err, result)=> {
    console.log(result)
  })
});

app.delete('/api/Radiodelete/:radioNumber', (req, res)=> {
  const name = req.params.radioNumber; 
  const sqlDelete = "DELETE FROM radios WHERE radio_number = ?";

  con.query(sqlDelete, [name], (err, result)=> {
   if(err) console.log(err);
  })
})

app.put("/api/RadioNumberupdate", (req, res)=> {
  const radioID = req.body.radioID;
  const radioNumber = req.body.radioNumber; 
  const sqlUpdate = "UPDATE radios SET radio_number = ? WHERE radio_id = ?";

  con.query(sqlUpdate, [radioNumber, radioID], (err, result)=> {
    if (err) console.log(err);
  });
});

app.put("/api/RadioPlatoonupdate", (req, res)=> {
  const radioPlatoon = req.body.radioPlatoon;
  const radioID = req.body.radioID;  
  const sqlUpdate = "UPDATE radios SET radio_platoon = ? WHERE radio_id = ?";

  con.query(sqlUpdate, [radioPlatoon, radioID], (err, result)=> {
    if (err) console.log(err);
  });
});



//-------------------------------------------------------RADIOS-TABLE--------------------------------------------------------//

//===========================================================================================================================//

//-------------------------------------------------------RIFLE-TABLE--------------------------------------------------------//
app.get('/api/getRifleData', (req, res) => {
  const sqlSelect = 
  "SELECT * FROM m4a1test";
  con.query(sqlSelect, (err, result)=> {
    res.send(result)
  })
  });

  
app.post('/api/Rifleinsert', (req, res)=> {

  const rifleNumber = req.body.rifleNumber; 
  const rifleOwner = req.body.rifleOwner; 
  const rifleOwnerPlatoon = req.body.rifleOwnerPlatoon;

  const sqlInsert = "INSERT INTO m4a1test (m4_number, m4_owner, m4_owner_platoon) VALUES (?,?,?)";
  con.query(sqlInsert, [rifleNumber, rifleOwner, rifleOwnerPlatoon], (err, result)=> {
    console.log(result)
  })
});

app.delete('/api/Rifledelete/:rifleNumber', (req, res)=> {
  const name = req.params.rifleNumber; 
  const sqlDelete = "DELETE FROM m4a1test WHERE m4_number = ?";

  con.query(sqlDelete, [name], (err, result)=> {
   if(err) console.log(err);
  })
})

app.put("/api/RifleNumberupdate", (req, res)=> {
  const rifleID = req.body.rifleID;
  const rifleNumber = req.body.rifleNumber; 
  const sqlUpdate = "UPDATE m4a1test SET m4_number = ? WHERE m4_id = ?";

  con.query(sqlUpdate, [rifleNumber, rifleID], (err, result)=> {
    if (err) console.log(err);
  });
});

app.put("/api/RifleOwnerupdate", (req, res)=> {
  const rifleOwner = req.body.rifleOwner;
  const rifleID = req.body.rifleID;  
  const sqlUpdate = "UPDATE m4a1test SET m4_owner = ? WHERE m4_id = ?";

  con.query(sqlUpdate, [rifleOwner, rifleID], (err, result)=> {
    if (err) console.log(err);
  });
});

app.put("/api/RifleOwnerPlatoonupdate", (req, res)=> {
  const rifleOwnerPlatoon = req.body.rifleOwnerPlatoon;
  const rifleID = req.body.rifleID;  
  const sqlUpdate = "UPDATE m4a1test SET m4_owner_platoon = ? WHERE m4_id = ?";

  con.query(sqlUpdate, [rifleOwnerPlatoon, rifleID], (err, result)=> {
    if (err) console.log(err);
  });
});


//-------------------------------------------------------RIFLE-TABLE--------------------------------------------------------//

//===========================================================================================================================//



app.listen(3001, () => {
    console.log('running on port 3001')
});