import { useState } from "react";
import axios from "axios";
import './App.css';
import Title from "./components/Title";
import Form from "./components/Form";
import Results from "./components/Results";

function App() {
  const [city, setCity] = useState("");
  const [results, setResults] = useState({
    country: "",
    cityName: "",
    temperature: "",
    conditionText: "",
    icon: ""
  });
  const getWeather = (e) => {
    e.preventDefault();
    axios.get(`http://api.weatherapi.com/v1/current.json?key=84c5fda0fd354540960103702240101&q=${city}&aqi=no`)
    .then(res => {
      //const data = res.data.current;
      setResults({
        country: res.data.location.country,
        cityName: res.data.location.name,
        temperature: res.data.current.temp_c,
        conditionText: res.data.current.condition.text,
        icon: res.data.current.condition.icon
      })
      setCity("");
    })
    .catch(err => alert("エラー発生！！！！！"));
  }
  return (
    <div className="wrapper">
      <Title />
      <Form setCity={setCity} getWeather={getWeather} city={city}/>
      <Results results={results}/>
    </div>
  );
}

export default App;
