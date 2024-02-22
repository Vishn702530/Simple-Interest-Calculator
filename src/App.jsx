import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './App.css';
import { useState } from 'react';


function App() {
const [amount,setAmount]=useState(0)
const [year,setYear]=useState(0)
const [rate,setRate]=useState(0)


const [interest,setIntereset]=useState(0)
console.log(amount,rate,year)
const calculate=(e)=>{
  const output=amount*year*rate/100
console.log(output)
setIntereset(output)

}
const reset=(e)=>{
  setAmount(0)
  setRate(0)
  setYear(0)
  setIntereset(0)
}

  return (
    <div className="App">
      <div className="container">
<h1>Simple Interest Calculator</h1>
<p>Calculate your simple interest with us</p>
      
      <div className="total">
        <h2>&#8377;{interest}</h2>
        <p>Your Total Interest</p>
      </div>
      <div className="form">
        <form>
          <div className="input">
          <TextField id="outlined-basic" label="Amount" value={amount||""} variant="outlined"onChange={(e)=>setAmount(e.target.value)} />
<TextField id="filled-basic" label="Year" variant="filled"value={year||""} onChange={(e)=>setYear(e.target.value)} />
<TextField id="standard-basic" label="Rate of Interest"value={rate||""} variant="standard"onChange={(e)=>setRate(e.target.value)}  />
          </div>
        </form>
      </div>
      <div className="button">
      
<Button variant="contained"onClick={e=>calculate(e)}>Calculate</Button>
<Button variant="outlined"onClick={e=>reset(e)}>Reset</Button>
      </div>
    </div>
    </div>
  );
}

export default App;