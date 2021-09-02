import './App.css';
import axios from "axios";

const url = " https://api.sportsdata.io/v3/nfl/stats/json/PlayerGameStatsByWeek/"
//const week = inputField.value
const season = 2021;
const apiKey = "Your API KEY";

const urlToFetch = `${url}${season}/5?key=${apiKey}`;


const res = axios.get(urlToFetch).then(response => (console.log(response)))
console.log(res);

const getData = async () => {
  try {
    const res = await axios.get(urlToFetch);
    if (res.ok) {
      const jsonResponse = await res.json();
      console.log(jsonResponse);
      return jsonResponse;
    } throw new Error('Request Failed')
  } catch (err) {
    console.log(err);
  }
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        {getData}
      </header>
    </div>
  );
}

export default App;
