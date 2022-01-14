import React, { useEffect, useState  } from "react";
import axios from 'axios'
import './City.css';

function App() {

  const[zip, setZip] = useState("")
  const [data, setData] = useState([])
 
let jsonData = [];


  function handleSubmit (event) {
  axios.get (`http://ctp-zip-api.herokuapp.com/city/` + zip.toUpperCase())
  .then((res) => { 
    setData(res.data)
    console.log(res.data)
    console.log("hello its working")
  })

 }
 



const handleChange = (event) => {
 event.preventDefault();
  setZip((event.target.value).toUpperCase())
console.log((event.target.value).toUpperCase())


}


function displayZip() {
if (jsonData) {
  console.log(jsonData)

}
}

function noZip(){
console.log("noZip")
}



 useEffect(() => {
   handleSubmit()
   console.log("inside Useffect")
  }, [jsonData])



  return (
    <div className="App">
      <h1>City Search App!</h1>
      <p> Enter the City to access the Zipcodes </p>
      <form  onSubmit = {handleSubmit} >
  <label>
    Enter city :
    <input type="text" name="city"  onChange = {handleChange} /> 
  </label>
  <button type = "submit"> Submit</button>
</form>



<div>

{jsonData ? displayZip() : noZip() }
</div>



{data.map((element) => {
return(

<ul className=" container">
<li className="info" > Zipcode: {element}</li>

</ul>
);
      })}
      
     
    </div>
  );
}

export default App;
