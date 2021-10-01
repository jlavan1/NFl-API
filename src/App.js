import './App.css';
import axios from "axios";
import NavBar from './Components/NavBar';
import PlayerCard from './Components/PlayerCard';

const url = " https://api.sportsdata.io/v3/nfl/stats/json/PlayerGameStatsByWeek/"
//const week = inputField.value
const season = 2020;
const apiKey = "5f5aa085c45f4019acaccecee722c906";

const urlToFetch = `${url}${season}/5?key=${apiKey}`;


// const getDataEventHandler = async () => {
//   try {
//     const res = await axios.get(urlToFetch);
//     if (res.status === 200) {
//       console.log(res.data.[0]);
//       return res;
//     } throw new Error('Request Failed')
//   } catch (err) {
//     console.log(err);
//   }
// }



const arrayMaker = () => {
  const myQB = ["tb", "Ar", "Rw"]
  const myRB = ["DC", "Cm", "DH"]
  const flup = {}

  for (const qb in myQB) {
    for (const rb in myRB) {
      flup[qb] = rb;
    }
    console.log(flup)
  }}


function App() {

  return (    
    <div className="App">
        <NavBar/>
        <PlayerCard />
      <header className="App-header">
        <button onClick={() => {
          arrayMaker();
        }}> Pull NFL Data</button>
      </header>
    </div>
  );
}

export default App;
