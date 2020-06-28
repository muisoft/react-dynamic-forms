import React, { useState } from 'react';

const FormControl = ({ line, onControl }) => {
    
    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        onControl(key, value);
    }

    return (
        <div className="row">
            {
                line.map((model, index) => {
                    return (
                        <div key={index + model.key} className="col-lg-4 form-group">
                            <label
                                key={"label" + model.key + index}
                                htmlFor={model.key}>
                                {model.label}
                            </label>
                            <input {...model.props || {}}
                                className="form-control"
                                key={"input" + model.key + index}
                                name={model.key}
                                placeholder={model.placeholder}
                                type={model.type || 'text'}
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                    );
                })
            }
        </div>
    );
}
export default FormControl;