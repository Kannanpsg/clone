import './App.css';
import { Row, Col, Card, CardGroup, Container } from 'react-bootstrap';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const INITIAL_LOCATIONS = [

{
  poster:"../img/United States.webp",
  name:"United States",
  summary:"Considering the United States is 3.8 million square miles, nearly as big as all of Europe, it's easy to see why it's the third-most-popular travel destination on Earth.",
  cost:125000,
  Person:1,
},

{
  poster:"../img/China.webp",
  name:"China",
  summary:"Zhaoxing Village is flanked by mountains and touts five drum towers representing five good manners in Chinese tradition: benevolence, righteousness, courtesy, wisdom and trust.",
  cost:145000,
  Person:2,
},

{
  poster:"../img/Turkey.webp",
  name:"Turkey",
  summary:"Antalya's Old Town features Ottoman mosques, Roman towers and an ancient harbor lined with bustling modern-day cafes.",
  cost:115000,
  Person:1,
},

{
  poster:"../img/Malaysia.webp",
  name:"Malaysia",
  summary:" Malaysia is gaining in popularity thanks to its natural charms (rainforests, national parks and wildlife abound) and desirable tropical temps.",
  cost:75000,
  Person:2,
},

{
  poster:"../img/Thailand.webp",
  name:"Thailand",
  summary:"The Phi Phi Islands are so idyllic and popular that the Thai government closed them until 2021 to allow for recovery from over-tourism.",
  cost:145000,
  Person:2,
},

{
  poster:"../img/Tajmahal.jpg",
  name:"Tajmahal",
  summary:"The Taj Mahal, is an ivory-white marble mausoleum on the right bank of the river Yamuna in the Indian city of Agra.",
  cost:115000,
  Person:1,
},

{
  poster:"../img/Mexico.webp",
  name:"Mexico",
  summary:"Chichen Itza, the ancient Mayan settlement, is a UNESCO World Heritage site dating back to A.D. 750 to 1200.",
  cost:75000,
  Person:2,
},
];

function App() {
  
  const[locations, setLocations] = useState(INITIAL_LOCATIONS);

  return (
    <div className="App">
    <AddLocation locations = {locations} setLocations={setLocations}/>
    <LocationList locations={locations}/>
    </div>
  );
}

function AddLocation ({locations, setLocations})
{  
const [name, setName] = useState("");
const [poster, setPoster] = useState("");
const [cost, setCost] = useState("");
const [summary, setSummary] = useState("");

const addLocation = () => {
  const newLocation = {
    name,
    poster,
    cost,
    summary,};
    console.log(newLocation);
setLocations([...locations, newLocation]);
  };

return(
     
    <div class="container">
    <div class="row justify-content-md-center">
    <div class="col-md-auto">


    <div className="add-location-form">
      <TextField 
      value={name}
      onChange={(event) => setName(event.target.value)} 
      label="Name"
      variant="standard" />
      <br/>
      <TextField 
      value={poster}
      onChange={(event) => setPoster(event.target.value)} 
      label="poster"
      variant="standard" />
      <br/>
      <TextField 
      value={cost}
      onChange={(event) => setCost(event.target.value)} 
      label="cost"
      variant="standard" />
      <br/>
      <TextField 
      value={summary}
      onChange={(event) => setSummary(event.target.value)} 
      label="summary"
      variant="standard" />
      <br/>
      <br/>
<Button onClick={addLocation} variant="outlined">
  Add Location
</Button>


    </div>
    </div>
    </div>


  </div>
);
}



function LocationList({locations}) {
  return (
    <div>
      <section className="location-list">
    {locations.map(({name, poster, summary, cost}) => (
    <Locationlist name={name} 
    poster={poster} 
    cost={cost} 
    summary={summary}/>
    ))}
    </section>
    </div>
  )
}



function Locationlist({poster,name,summary,cost}) {
  return (
    <div className="location-container">
      <div className="location-poster">
      <img src={poster}
      alt={name}
      className="location-poster"/>
      </div>
      <div className="location-top">
      <h3 className="location-name">{name}</h3>
      <h4 className="location-cost">₹{cost}/person</h4>
      </div>
      <p className="location-summary">{summary}</p>
    </div>
  );
}





export default App;
