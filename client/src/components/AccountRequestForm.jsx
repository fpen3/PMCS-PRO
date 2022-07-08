import React, { useState } from "react";
import Axios from 'axios';


function AccountRequestForm() {
const [fullNameReg, setFullNameReg] = useState("");
const [emailReg, setEmailReg] = useState("");
const [phoneNumberReg, setPhoneNumberReg] = useState("");

const register = () => {
  Axios.post('http://localhost:3001/register', {
    fullName: fullNameReg,
    email   : emailReg,
    phoneNumber : phoneNumberReg,
  }).then((response) => {
    console.log(response);
  });
};


  return (
<section class="accountrequestsection">
  <div class="test" >
  <img 
          src="background4.jpg" 
          alt="Logo" 
                              />
  </div>
  <div class="overlay"></div>
  <div className="accountrequest">
    <label for="fullname"><u>Full Name :</u></label>
    <br></br>
    <input type="text" id="fullname" name="firstname" placeholder="Type your full name" onChange={(e)=> {setFullNameReg(e.target.value);}}/>
    <br></br>
    <label for="email"><u>Email Address :</u></label>
    <br></br>
    <input type="text" id="email" name="email" placeholder="Type your email " onChange={(e)=> {setEmailReg(e.target.value);}}/>
    <br></br>
    <label for="email"><u>Phone Number :</u></label>
    <br></br>
    <input type="text" id="email" name="email" placeholder="Type your phone number " onChange={(e)=> {setPhoneNumberReg(e.target.value);}}/>
    <br></br>
    <label for="dept"><u>Department :</u> </label>
    <br></br>
    <select>
    <option value="IT">AGR</option>
    <option value="CS">Supply</option>
    <option value="Sales">CoC</option>
    </select>
    <br></br>
    <br></br>
    <button onClick={register}> Submit</button>
    </div>
</section>


  );
}

export default AccountRequestForm;
