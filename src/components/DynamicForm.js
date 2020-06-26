import React, { useState } from 'react';

const DynamicForm = ({title, className, model, onSubmit}) => {
   let [control, setControl] = useState("");
 
   let form_title = title || "Dynamic Form";

   const handleSubmit = (e) => {
       e.preventDefault();
      if(onSubmit) onSubmit(control);
   } 
   const handleChange = (e) => {
      setControl({
          ...control,
          [e.target.name]: e.target.value
      });
   }
    const renderControls = () => {
        return model.map(model => {
            return (
                <div key={model.key} className="form-group">
                   <label
                     key={"label" + model.key}
                     htmlFor={model.key}>
                         {model.label}
                    </label>
                   <input {...model.props || {}}
                      className="form-control"
                      key={"input" + model.key}
                      name={model.key}
                      placeholder={model.placeholder}
                      type={model.type || 'text'}
                      onChange={(e) => handleChange(e, model.key)}
                   />
                </div>
            );
        });
    }
   return (
       <div className={className}>
           <h3>{form_title}</h3>
           <form onSubmit={handleSubmit}>
               {renderControls()}
               <div className="form-group">
                  <button type="submit" className="btn btn-primary">Submit</button>
              </div>
           </form>
       </div>
   );
}
export default DynamicForm; 