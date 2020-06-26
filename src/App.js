import React, { useState } from 'react';
import DynamicForm from './components/DynamicForm';


function App() {
  let [ result, setResult ] = useState("");

  const onSubmit = (data) => {
    setResult(JSON.stringify(data));
  }

  return (
    <div className="dynamic_form">
      <DynamicForm 
         title="Filed Flight Plan Form"
         model={[
           {key: "MessageType", label: "Message Type, Number, and Reference Data", placeholder: ""},
           {key: "AircraftId", label: "Aircraft ID and SSR Mode and Code", placeholder: ""},
           {key: "FlightRules", label: "Flight Rules and Type of Flight", placeholder: ""},
           {key: "AircraftType", label: "Type of Aircraft and Wake Turbulence Category", placeholder: ""}
         ]}
         onSubmit= {onSubmit}
      />
      <div className="output-section">
         <h3>Filed Flight Plan Output</h3>
         <div>{result}</div>
      </div>
    </div>
  );
}

export default App;
