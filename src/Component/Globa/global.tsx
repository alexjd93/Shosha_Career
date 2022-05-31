import React from "react";
import { element } from "../../formData";
import { Field, ErrorMessage } from "formik";
import Calendar from "../Calendar/calendar";
type Props<DataItem> = {
  element: DataItem;
};
const Global = <T extends element>({ element }: Props<T>) => {
  console.log(element)
  let component;
  switch (element.fieldType) {
    case "input":
      component = (
        <Field
          className="input"
          as={element.fieldType}
          id={element.fieldId}
          name={element.fieldId}
          placeholder={element.fieldName}
        />
      );
      break;
    case "calendar":
      component = <Calendar fieldId= {element.fieldId}/>;
      break;
    case "button":
      component = <Field />;
  }
  return (
    <div className="inputBox">
      <div>
        <label>
          {element.isOptional ? <p> <span>* </span> {element.fieldName} </p>: <p>{element.fieldName} <span>(Optional)</span> </p>}
          
        </label>
      </div>
      <div>
        {component}
        {/* <ErrorMessage name={element.fieldId} /> */}
      </div>
    </div>
  );
};

export default Global;
