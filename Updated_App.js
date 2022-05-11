import './App.css';
import React, { useState } from 'react';

const getCamera = (c) => {
  const inputedCamera = c.target.value;
  console.log(inputedCamera);
}

const getRover = (r) => {
  const inputedRover = r.target.value;
  console.log(inputedRover)
}

const getDate = (d) => {
  const inputedDate = d.target.value;
  console.log(inputedDate);
}
const constructURL = (camera, rover, date) => {
  const userURL = "https://api.nasa.gov/mars-photos/api/v1/rovers/" + rover + "/photos?earth_date=" + date + "&camera=" + camera + "&api_key=DEMO_KEY";
  console.log(userURL)
}

const App = () => {

  const [photos, setPhotos] = useState('');
  const [camera, setCamera] = useState('');
  const [rover, setRover] = useState('');
  const [date, setDate] = useState('');

  const gettingInfo = () => {
    fetch(constructURL(camera, rover, date))
    .then((response) => {setPhotos(response.json()['photos'])}) //sets values for photos 
    .catch(() => console.log("Fetch Failed")) 

  }; 

  return (
    <div className="App">
      <header className="App-header">
        <div id='container'>
          <div>
            <input type="text" id="date-picker" name="date-picker" placeholder="Enter a date" onChange={(d) => setDate(d.target.value)}></input>
            <input type="text" id="rover" name="rover" placeholder="Enter a rover" onChange={(r) => setRover(r.target.value)}></input>
            <input type="text" id="camera" name="camera" placeholder="Enter a camera" onChange={(c) => setCamera(c.target.value)}></input>
          </div>
          <button onClick={gettingInfo}> Search </button>
        </div>
      </header>

      <body>
      </body>
    </div>
  );
}

export default App;
