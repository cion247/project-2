import Script from 'next/script'
import React, { useState } from 'react'

const BgOne = () => {

  


    
    return (
      
      

        
        
        <section class="text-orange-300 text-shadow-xl body-font  justify-center ">
            <div class="container mx-auto px-2 py-y mt-40">
                <h1>
                Hellow there ok

         </h1>

         <p >Type a value ANY:</p>
  <div class="col-25">
  <label>Feet</label>
    <input id="inputFeet" class=".col-25" type="number" placeholder="Feet" oninput="lengthConverter(this.id,this.value)" onchange="lengthConverter(this.id,this.value)">
  </input>
  </div>
  <div class="w3-half w3-margin-top">
    <label>Meters</label>
    <input id="inputMeters" class="w3-input w3-border" type="number" placeholder="Meters" oninput="lengthConverter(this.id,this.value)" onchange="lengthConverter(this.id,this.value)">
  </input>
  </div>
  <div class="w3-half w3-margin-top">
    <label>Inches</label>
    <input id="inputInches" class="w3-input w3-border" type="number" placeholder="Inches" oninput="lengthConverter(this.id,this.value)" onchange="lengthConverter(this.id,this.value)">
  </input>
  </div>
  <div class="w3-half w3-margin-top">
    <label>cm</label>
    <input id="inputcm" class="w3-input w3-border" type="number" placeholder="cm" oninput="lengthConverter(this.id,this.value)" onchange="lengthConverter(this.id,this.value)">
  </input>
  </div>
  <div class="w3-half w3-margin-top">
    <label>Yards</label>
    <input id="inputYards" class="w3-input w3-border" type="number" placeholder="Yards" oninput="lengthConverter(this.id,this.value)" onchange="lengthConverter(this.id,this.value)">
  </input>
  </div>
  <div class="w3-half w3-margin-top">
    <label>Kilometers</label>
    <input id="inputKilometers" class="w3-input w3-border" type="number" placeholder="Kilometers" oninput="lengthConverter(this.id,this.value)" onchange="lengthConverter(this.id,this.value)">
  </input>
  </div>
  <div class="w3-half w3-margin-top">
    <label>Miles</label>
    <input id="inputMiles" class="w3-input w3-border" type="number" placeholder="Miles" oninput="lengthConverter(this.id,this.value)" onchange="lengthConverter(this.id,this.value)">
  </input>
  </div>
</div>

         <script src="BGtwo_p2.js"></script>
                
  



 

 
 
   
        </section>
        
        
    )
 
   

}
export default BgOne

