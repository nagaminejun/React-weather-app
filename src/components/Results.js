const Results = ({ results }) => {
  const { country, cityName, temperature, conditionText, icon } = results;
  return (
    <>
      {country &&
        <div className="results-country">{country}</div>
       }
      {cityName &&
        <div className="results-city">{cityName}</div>
        }
      {temperature &&
        <div className="results-temp">{temperature}<sapn>°C</sapn></div>
        }
      {conditionText &&
        <div className= "results-condition">
          <imag src={icon} alt="icon"/>
          <span>{conditionText}</span>
        </div>

      }
    </>
  );
};

export default Results;
