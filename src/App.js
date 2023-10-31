import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchsParagh } from './redux/paragSlice';

function App() {
  const [num,setNum] = useState(2)
  const [format , setFormat] = useState("text")
  const dispatch = useDispatch()
  const { data } = useSelector( state => state.paragSlice)

  useEffect(()=>{ 
    dispatch(fetchsParagh(num))
    console.log(num);
  },[num,format])
  return (
    <div className="App">
      <h1>
        React Sample Text Generator App
      </h1>
      <hr></hr>
      <div className='form'>
        <input type='number' placeholder='Paragraphs' value={num} onChange={(e)=> setNum(e.target.value)}/>

        <label htmlFor='include'> Include HTML :</label>
        <select
          value={format}
          name="includeHTML"
          onChange={(e) => setFormat(e.target.value)}
        >
          <option value="text">No</option>
          <option value="html">Yes</option>
        </select>
      </div>
      <div className="content"> 
        {
          data
        }
      </div>
    </div>
  );
}

export default App;
