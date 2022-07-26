import Script from 'next/script'
import React, { useState, useEffect } from 'react'
import { render } from 'react-dom';


const BgTwo = () => {

  // useEffect(()=>{
  //   function lengthConverter(source,valNum) {
  //     valNum = parseFloat(valNum);
  //     var inputFeet = document.getElementById("inputFeet");
  //     var inputMeters = document.getElementById("inputMeters");
  //     var inputInches = document.getElementById("inputInches");
  //     var inputcm = document.getElementById("inputcm");
  //     var inputYards = document.getElementById("inputYards");
  //     var inputKilometers = document.getElementById("inputKilometers");
  //     var inputMiles = document.getElementById("inputMiles");
  //     if (source=="inputFeet") {
  //       inputMeters.value=(valNum/3.2808).toFixed(2);
  //       inputInches.value=(valNum*12).toFixed(2);
  //       inputcm.value=(valNum/0.032808).toFixed();
  //       inputYards.value=(valNum*0.33333).toFixed(2);
  //       inputKilometers.value=(valNum/3280.8).toFixed(5);    
  //       inputMiles.value=(valNum*0.00018939).toFixed(5);
  //     }
  //     if (source=="inputMeters") {
  //       inputFeet.value=(valNum*3.2808).toFixed(2);
  //       inputInches.value=(valNum*39.370).toFixed(2);
  //       inputcm.value=(valNum/0.01).toFixed();
  //       inputYards.value=(valNum*1.0936).toFixed(2);
  //       inputKilometers.value=(valNum/1000).toFixed(5);    
  //       inputMiles.value=(valNum*0.00062137).toFixed(5);
  //     }
  //     if (source=="inputInches") {
  //       inputFeet.value=(valNum*0.083333).toFixed(3);
  //       inputMeters.value=(valNum/39.370).toFixed(3);
  //       inputcm.value=(valNum/0.39370).toFixed(2);
  //       inputYards.value=(valNum*0.027778).toFixed(3);    
  //       inputKilometers.value=(valNum/39370).toFixed(6);
  //       inputMiles.value=(valNum*0.000015783).toFixed(6);
  //     }
  //     if (source=="inputcm") {
  //       inputFeet.value=(valNum*0.032808).toFixed(3);
  //       inputMeters.value=(valNum/100).toFixed(3);
  //       inputInches.value=(valNum*0.39370).toFixed(2);
  //       inputYards.value=(valNum*0.010936).toFixed(3);    
  //       inputKilometers.value=(valNum/100000).toFixed(6);
  //       inputMiles.value=(valNum*0.0000062137).toFixed(6);
  //     }
  //     if (source=="inputYards") {
  //       inputFeet.value=(valNum*3).toFixed();
  //       inputMeters.value=(valNum/1.0936).toFixed(2);
  //       inputInches.value=(valNum*36).toFixed();
  //       inputcm.value=(valNum/0.010936).toFixed();
  //       inputKilometers.value=(valNum/1093.6).toFixed(5);
  //       inputMiles.value=(valNum*0.00056818).toFixed(5);
  //     }
  //     if (source=="inputKilometers") {
  //       inputFeet.value=(valNum*3280.8).toFixed();
  //       inputMeters.value=(valNum*1000).toFixed();
  //       inputInches.value=(valNum*39370).toFixed();
  //       inputcm.value=(valNum*100000).toFixed();
  //       inputYards.value=(valNum*1093.6).toFixed();
  //       inputMiles.value=(valNum*0.62137).toFixed(2);    
  //     }
  //     if (source=="inputMiles") {
  //       inputFeet.value=(valNum*5280).toFixed();
  //       inputMeters.value=(valNum/0.00062137).toFixed();
  //       inputInches.value=(valNum*63360).toFixed();
  //       inputcm.value=(valNum/0.0000062137).toFixed();
  //       inputYards.value=(valNum*1760).toFixed();
  //       inputKilometers.value=(valNum/0.62137).toFixed(2);    
  //     }
  //   }
  // })


  useEffect(()=>{
    console.log("hell0");
    
    function funcshift(shifbuttonown) {
      var shift = document.getElementById("shiftBtn") ;
      var arr = document.getElementsByTagName("button ") ;
      if (shifbuttonown == 1) {
        shift.setAttribute("onclick", "funcshift(0)") ;
        shift.style.backgroundColor = "skyblue" ;
        arr[2].innerHTML = "sin<sup>-1</sup>" ;
        arr[2].setAttribute("onclick", "solve1('sin')") ;
        arr[3].innerHTML = "cos<sup>-1</sup>" ;
        arr[3].setAttribute("onclick", "solve1('cos')") ;
        arr[4].innerHTML = "tan<sup>-1</sup>" ;
        arr[4].setAttribute("onclick", "solve1('tan')") ;
        arr[10].innerHTML = "ln" ;
        arr[10].setAttribute("onclick", "log(0)") ;
        arr[28].innerHTML = "\u0065" ;
        arr[28].setAttribute("onclick", "piOrE('e')") ;
      } else {
        shift.setAttribute("onclick", "funcshift(1)") ;
        shift.style.backgroundColor = "blue" ;
        arr[2].innerHTML = "sin" ;
        arr[2].setAttribute("onclick", "solve('sin')") ;
        arr[3].innerHTML = "cos" ;
        arr[3].setAttribute("onclick", "solve('cos')") ;
        arr[4].innerHTML = "tan" ;
        arr[4].setAttribute("onclick", "solve('tan')") ;
        arr[10].innerHTML = "log" ;
        arr[10].setAttribute("onclick", "log(1)") ;
        arr[28].innerHTML = "\u03C0" ;
        arr[28].setAttribute("onclick", "piOrE('pi')") ;
      } 
    }
    function input(add) {
      type="number";
      var x = document.getElementById("result") ;
      var y = document.getElementById("area") ;
      x.value += add ;
     y.innerHTML += add ;
  
    }
    function factorial(fact) {
      if (Number.isInteger(fact)) {
        if (fact < 2) return 1 ;
      return fact * factorial(fact - 1) ;
      }
    }
    function sqrt() {
      var x = document.getElementById("result") ;
      var y = document.getElementById("area") ;
      x.value += "sqrt(" ;
      y.innerHTML += (/[\d)IE]/.test(y.innerHTML.slice(-1))) ? 
    " * Math.sqrt(" : "Math.sqrt(" ;
    }
    function leftParen() {
      var x = document.getElementById("result") ;
      var y = document.getElementById("area") ;
      x.value += "(" ;
      y.innerHTML += (/[\d)IE]/.test(y.innerHTML.slice(-1))) ? 
      " * (" : "(" ;
    }
    function piOrE(pii) {
      var x = document.getElementById("result") ;
      var y = document.getElementById("area") ;
      if (pii == "pi") {
      x.value += "\u03C0" ;
      y.innerHTML += (/[\d)IE]/.test(y.innerHTML.slice(-1))) ? 
      " * Math.PI" : "Math.PI" ;
      } else {
      x.value += "\u0065" ;
      y.innerHTML += (/[\d)IE]/.test(y.innerHTML.slice(-1))) ? 
      " * Math.E" : "Math.E" ;
      }
    }
    function log(logfn) {
      var x = document.getElementById("result") ;
      var y = document.getElementById("area") ;
      if (logfn == 1) {
      x.value += "log(" ;
      y.innerHTML += (/[\d)IE]/.test(y.innerHTML.slice(-1))) ? 
      " * Math.log10(" : "Math.log10(" ;
      } else {
      x.value += "ln(" ;
      y.innerHTML += (/[\d)IE]/.test(y.innerHTML.slice(-1))) ? 
      " * Math.log(" : "Math.log(" ;
      }
    }
    function solve(calculate) {
      var x = document.getElementById("result") ;
      var y = document.getElementById("area") ;
      x.value += calculate + "(" ;
      y.innerHTML += (/[\d)IE]/.test(y.innerHTML.slice(-1))) ? 
      " * Math." + calculate + "(Math.PI / 180 * " : "Math." + calculate + "(Math.PI / 180 * " ;
    }
    function solve1(calculateB) {
      var x = document.getElementById("result") ;
      var y = document.getElementById("area") ;
      x.value += calculateB + "\u207B\u00B9("
      y.innerHTML += (/[\d)IE]/.test(y.innerHTML.slice(-1))) ? 
      " * 180 / Math.PI * Math.a" + calculateB + "(" : "180 / Math.PI * Math.a" + calculateB + "(" ;
    }
    function divmul(divmul) {
      var x = document.getElementById("result") ;
      var y = document.getElementById("area") ;
      if (divmul == "mult") {
        x.value += "\u00D7" ;
        y.innerHTML += "*" ;
      } else {
        x.value += "\u00F7" ;
        y.innerHTML += "/"
      }
    }
    function del() {
      var x = document.getElementById("result") ;
      var y = document.getElementById("area") ;
      var z = document.getElementById("Answer") ;
      if (x.value.slice(-3) == "Ans") {
        y.innerHTML = (/[\d)IE]/.test(x.value.slice(-4, -3))) ? 
        y.innerHTML.slice(0, -(z.innerHTML.length + 3)) : y.innerHTML.slice(0, -(z.innerHTML.length)) ;
        x.value = x.value.slice(0, -3) ;
      } else if (x.value == "Error!") {
        ac() ;
      } else {
        switch (y.innerHTML.slice(-2)) {
          case "* ": // sin cos tan
            y.innerHTML = (/[\d)IE]/.test(x.value.slice(-5, -4))) ? 
            y.innerHTML.slice(0, -28) : y.innerHTML.slice(0, -25) ;
            x.value = x.value.slice(0, -4) ;
            break ;
          case "n(":
          case "s(": // asin acos atan
            y.innerHTML = (/[\d)IE]/.test(x.value.slice(-7, -6))) ? 
            y.innerHTML.slice(0, -29) : y.innerHTML.slice(0, -26) ;
            x.value = x.value.slice(0, -6) ;
            break ;
          case "0(": // log
            y.innerHTML = (/[\d)IE]/.test(x.value.slice(-5, -4))) ? 
            y.innerHTML.slice(0, -14) : y.innerHTML.slice(0, -11) ;
            x.value = x.value.slice(0, -4) ;
            break ;
          case "g(": // ln
            y.innerHTML = (/[\d)IE]/.test(x.value.slice(-4, -3))) ? 
            y.innerHTML.slice(0, -12) : y.innerHTML.slice(0, -9) ;
            x.value = x.value.slice(0, -3) ;
            break ;
          case "t(": // sqrt
            y.innerHTML = (/[\d)IE]/.test(x.value.slice(-6, -5))) ? 
            y.innerHTML.slice(0, -13) : y.innerHTML.slice(0, -10) ;
            x.value = x.value.slice(0, -5) ;
            break ;
          case "PI": // pi
            y.innerHTML = (/[\d)IE]/.test(x.value.slice(-2, -1))) ? 
            y.innerHTML.slice(0, -10) : y.innerHTML.slice(0, -7) ;
            x.value = x.value.slice(0, -1) ;
            break ;
          case ".E": // e
            y.innerHTML = (/[\d)IE]/.test(x.value.slice(-2, -1))) ? 
            y.innerHTML.slice(0, -9) : y.innerHTML.slice(0, -6) ;
            x.value = x.value.slice(0, -1) ;
            break ;
          default:
            y.innerHTML = y.innerHTML.slice(0, -1) ;
            x.value = x.value.slice(0, -1) ;
        } ;
      }
    }
    function ac() {
      var x = document.getElementById("result") ;
      var y = document.getElementById("area") ;
      x.value = y.innerHTML = "" ;
    }

    function ans() {
      var x = document.getElementById("result") ;
      var y = document.getElementById("area") ;
      var z = document.getElementById("Answer") ;
      x.value += "Ans" ;
      y.innerHTML += (/[\d)IE]/.test(y.innerHTML.slice(-1))) ? 
      " * " + z.innerHTML : z.innerHTML ;
    }

    function equal() {
      var x = document.getElementById("result") ;
      var y = document.getElementById("area") ;
      var z = document.getElementById("Answer") ;
      for (var i = 0; i < x.value.split("(").length - x.value.split(")").length; i++) {
        y.innerHTML += ")" ;
      }
      if (y.innerHTML != "") {
        x.value = y.innerHTML = z.innerHTML = eval(y.innerHTML
        .replace(/(\d+\.?\d*)\!/g, "factorial($1)")
        .replace(/(\(?[^(]*\)?)\^(\(?.*\)?)/, "Math.pow($1, $2)")
        ) ;
      }
      if (!isFinite(x.value)) x.value = "Error!" ;
    }
  });

  return (
    <section class="text-orange-300 text-shadow-xl body-font  justify-center ">
      <div class="container mx-auto px-2 py-y mt-40">
              {/* <h1> Hello ok</h1>
              <p >Type a value ANY:</p>
              <div class="col-25">
                  <label>Feet</label>
                  <input id="inputFeet" class=".col-25" type="number" placeholder="Feet" oninput={lengthConverter(this.id,this.value)} onchange={lengthConverter(this.id,this.value)}>
                  </input>
              </div>
              <div class="w3-half w3-margin-top">
                  <label>Meters</label>
                  <input id="inputMeters" class="w3-input w3-border" type="number" placeholder="Meters" oninput={lengthConverter(this.id,this.value)} onchange={lengthConverter(this.id,this.value)}>
                  </input>
              </div>
              <div class="w3-half w3-margin-top">
                  <label>Inches</label>
                  <input id="inputInches" class="w3-input w3-border" type="number" placeholder="Inches" oninput={lengthConverter(this.id,this.value)} onchange={lengthConverter(this.id,this.value)}>
                  </input>
              </div>
              <div class="w3-half w3-margin-top">
                  <label>cm</label>
                  <input id="inputcm" class="w3-input w3-border" type="number" placeholder="cm" oninput={lengthConverter(this.id,this.value)} onchange={lengthConverter(this.id,this.value)}>
                  </input>
              </div>
              <div class="w3-half w3-margin-top">
                  <label>Yards</label>
                  <input id="inputYards" class="w3-input w3-border" type="number" placeholder="Yards" oninput={lengthConverter(this.id,this.value)} onchange={lengthConverter(this.id,this.value)}>
                  </input>
              </div>
              <div class="w3-half w3-margin-top">
                  <label>Kilometers</label>
                  <input id="inputKilometers" class="w3-input w3-border" type="number" placeholder="Kilometers" oninput={lengthConverter(this.id,this.value)} onchange={lengthConverter(this.id,this.value)}>
                  </input>
              </div>
              <div class="w3-half w3-margin-top">
                  <label>Miles</label>
                  <input id="inputMiles" class="w3-input w3-border" type="number" placeholder="Miles" oninput={lengthConverter(this.id,this.value)} onchange={lengthConverter(this.id,this.value)}>
                 </input>
                </div> */}
      </div>

      <div className='container mx-auto text-white'>
        <h1>hello</h1>
        {/* <Calculator/> */}
        <p id='area'></p>
        <p id='Answer'>0</p>

        if (typeof input !== 'undefined'){
            <table>
            <tr>
              <td className="px-4 mx-1 border-0 bg-blue-500" colspan='5'><input id='result' readonly/></td >
            </tr>
            <h1>hwllo</h1>
            <tr>
               <button className="px-4 mx-1 border-0 bg-blue-500" onclick={input('!')}>!</button >
               <button className="px-4 mx-1 border-0 bg-blue-500" onclick={solve('sin')}>sin</button >
               <button className="px-4 mx-1 border-0 bg-blue-500" onclick={solve('cos')}>cos</button >
               <button className="px-4 mx-1 border-0 bg-blue-500" onclick={solve('tan')}>tan</button >
               <button className="px-4 mx-1 border-0 bg-blue-500" onclick={funcshift(1)} id='shiftBtn'>more</button >
           </tr>
           <tr>
              <button className="px-4 mx-1 border-0 bg-blue-500" onclick={input('^(')}>^</button >
              <button className="px-4 mx-1 border-0 bg-blue-500" onclick={sqrt()}>√</button >
              <button className="px-4 mx-1 border-0 bg-blue-500" onclick={leftParen()}>(</button >
              <button className="px-4 mx-1 border-0 bg-blue-500" onclick={input(')')}>)</button >
              <button className="px-4 mx-1 border-0 bg-blue-500" onclick={log(1)}>log</button >
           </tr>
           <tr>
              <button className="px-4 mx-1 border-0 bg-blue-500" onclick={input('7')}>7</button >
              <button className="px-4 mx-1 border-0 bg-blue-500" onclick={input('8')}>8</button >
              <button className="px-4 mx-1 border-0 bg-blue-500" onclick={input('9')}>9</button >
              <button className="px-4 mx-1 border-0 bg-blue-500" onclick={del()}>DEL</button >
              <button className="px-4 mx-1 border-0 bg-blue-500" onclick={ac()}>AC</button >
           </tr>
           <tr>
              <button className="px-4 mx-1 border-0 bg-blue-500" onclick={input('4')}>4</button >
              <button className="px-4 mx-1 border-0 bg-blue-500" onclick={input('5')}>5</button >
              <button className="px-4 mx-1 border-0 bg-blue-500" onclick={input('6')}>6</button >
              <button className="px-4 mx-1 border-0 bg-blue-500" onclick={divmul('mult')}>&#x00D7;</button >
              <button className="px-4 mx-1 border-0 bg-blue-500" onclick={divmul('div')}>&#x00F7;</button >
           </tr>    
            <tr>
              <button className="px-4 mx-1 border-0 bg-blue-500" onclick={input('1')}>1</button >
              <button className="px-4 mx-1 border-0 bg-blue-500" onclick={input('2')}>2</button >
              <button className="px-4 mx-1 border-0 bg-blue-500" onclick={input('3')}>3</button >
              <button className="px-4 mx-1 border-0 bg-blue-500" onclick={input('+')}>+</button >
              <button className="px-4 mx-1 border-0 bg-blue-500" onclick={input('-')}>-</button >
            </tr>    
            <tr>
              <button className="px-4 mx-1 border-0 bg-blue-500" onclick={input('0')}>0</button >
              <button className="px-4 mx-1 border-0 bg-blue-500" onclick={input('.')}>.</button >
              <button className="px-4 mx-1 border-0 bg-blue-500" onclick={piOrE('pi')}>&#x03C0;</button >
              <button className="px-4 mx-1 border-0 bg-blue-500" onclick={ans()}>Ans</button >
              <button className="px-4 mx-1 border-0 bg-blue-500" onclick={equal()}>=</button >
              </tr>
            </table>
          }
        


        


      </div>
    </section>
  ) 
}
export default BgTwo