import React from "react";

function Home() {
  return (
 
<section className="homesectionone">
      <div className="test" >
        <video loop autoPlay><source src="test.mp4" type="video/mp4"/>Your browser does not support the video tag.</video>
      </div>
  <div className="overlay"></div>
    <div className="homepagescreen">
              <h1 className="hometitle"><u>PMCS Pro Management Solution</u></h1>
              <p>
                PMCS or Preventive maintenance checks and services are the checks, services, and maintenance performed 
                before, during, and after any type of movement or before the use of all types of military equipment. 
                Most pieces of military equipment have PMCS charts used to go over every detail needed or noted to 
                ensure the proper function of every mechanical item or non-mechanical surface. A PMCS check is required 
                before, during, and after a piece of equipment or vehicle is used. Checks are also done at weekly, 
                monthly, semi-annual, annual, or bi-annual intervals, depending on the specific part.
              </p>
              <p>
                <b>PMCS Pro Management Solution</b> is aimed at making the process of of PMCSing much more effecient and
                effective. PMCS Pro allows users to search for part numbers and procedures specific to each problem and help cut down time searching through TMs to find one 
                specific part or deficiency. PMCS Pro also allows filing, tracking and copying 2402s or 1801s much more easily though database storage.
                </p>
                <b>
                <u>From:</u>
                <br></br>
                LLDRs, 
                <br></br>
                OE-254s,
                <br></br>
                PFEDS,
                <br></br>
                LFEDS,
                <br></br> 
                AFATADS, 
                <br></br>
                To 
                <br></br>
                Humvees, 
                <br></br>
                LMTVs 
                <br></br>
                and more.
                </b>
                <br></br>
                <br></br>
          <button className="button1"><a href="TechnicalManuals">Technical Manuals</a></button>  <img src="fourtyfourth.png" alt="Logo" width="300" height="300"/>
          <button className="button1"><a href="Login">Get Started</a></button>                   <img src="threeone.png" alt="Logo" width="250" height="300"/>      
    </div>
</section>
       
  );
}

export default Home;
