import React, { useState } from 'react';
import FormControl from './FormControl';

const DynamicForm = ({ title, className, model, onSubmit }) => {
    let form_title = title || "Dynamic Form";
    
    let obj = {};
    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSubmit) onSubmit(obj);       
    }
    const onControl = (key, value) => {
        obj[key]= value;
    };
    const arrangeFields = () => {
        let firstRow = 3;
        let list = [];
        while (model.length > 0) {
            list.push(model.splice(0, firstRow));
            if (firstRow > 1) {
                firstRow--;
            }
        }
        return list;
    }
    const renderControls = () => {
        return arrangeFields().map((line, key) =>
            <FormControl
            id={key}
                key={key}
                line={line}
                onControl={onControl}
            />
        );
    }
    return (
        <div>
            <h3>{form_title}</h3>
            <form  className="row">
                <div className="container">
                    {renderControls()}
                </div>
                <div className="container">
                    <button onClick={handleSubmit} className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
}
export default DynamicForm;

