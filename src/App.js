import React, { useState, useEffect } from 'react';
import DynamicForm from './components/DynamicForm';


function App() {
  let [ result, setResult ] = useState("");

  const postFlight = async (data) => {
    
    const response = await fetch('/flight', {
       method: 'POST',
       body: JSON.stringify(data),
       headers: {
         'Content-Type': 'application/json'
       }
    });
    const flight = await response.json();
    if(flight){
       console.log(flight);
      let result = Object.values(flight).join("-");
     
      setResult(result);
    }
  }
  
  const onSubmit = (data) => {
    postFlight(data);
  }

  return (
    <div className="container">
    <div className="row">
      <DynamicForm 
         title="Filed Flight Plan Form"
         model={[
           {key: "MessageType", label: "Message Type, Number, and Reference Data", placeholder: ""},
           {key: "AircraftId", label: "Aircraft ID and SSR Mode and Code", placeholder: ""},
           {key: "FlightRules", label: "Flight Rules and Type of Flight", placeholder: ""},
           {key: "AircraftType", label: "Type of Aircraft and Wake Turbulence Category", placeholder: ""},
           {key: "Equipment", label: "Equipment and Capabilities", placeholder: ""},
           {key: "Departure", label: "Departure acrodrome and time", placeholder: ""},
           {key: "Route", label: "Route(using more than one line if necessary)", placeholder: ""},
           {key: "Destination", label: "Destination acrodrome and total estimated elapsed time, destination alternate acrodromes", placeholder: ""},
           {key: "Other", label: "Other information(using more than one if necessary", placeholder: ""}
         ]}
         onSubmit= {onSubmit}
      />
      </div>
      <div className="output-section">
         <div className="row">
         <h3>Filed Flight Plan Output</h3>
         </div>
         <div className="row">{result}</div>
      </div>
    </div>
  );
}

export default App;
