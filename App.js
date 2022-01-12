import React, { useEffect, useState  } from "react";
import axios from 'axios'





function App() {

  const[zip, setZip] = useState("")
  const [data, setData] = useState([])
 

  //let link = 'http://ctp-zip-api.herokuapp.com/zip/' + zip.then(res) 

  // call API
 // const fetchPost = async () => {
   // await axios.get(link)
    //.then(response => {
      //setData(res.data)
      //console.log(res)
    //})
    //}




 function handleSubmit (event) {
    event.preventDefault()
    axios.get("http://ctp-zip-api.herokuapp.com/zip/" + zip).then((res) => {
      setData(res.data)
    console.log("hello its working")
   
 })
}


const handleChange = (event) => {
  event.preventDefault();
  setZip(event.target.value)
console.log(event.target.value)


}


 useEffect(() => {
  }, [])



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



{data.map((info) => {
return(

<ul className=" container">
<li className="info" > Zipcode: {info.Zipcode}</li>
<li className="info" > Country: {info.Country}</li>
  <li className="info" > State: {info.State}</li>
  <li className="info" > City: {info.City}</li>
  <li className="info" > Location: {info.Location}</li>
  <li className="info" > EstimatedPopulation: {info.EstimatedPopulation}</li>
  <li className="info" > Wages: {info.TotalWages}</li>
</ul>


);



      })}
      
     
    </div>
  );
}

export default App;
