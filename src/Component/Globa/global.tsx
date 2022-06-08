import React from "react";
import { element } from "../../formData";
import { Field, ErrorMessage } from "formik";
import RadioButton from "../RadioButton/RadioButton";
import AutocompleteBox from "../AutoComplete/AutoComplete";
import Calendar from "../Calendar/calendar";
type Props<DataItem> = {
  element: DataItem;
};
const Global = <T extends element>({ element }: Props<T>) => {
  let component;
  switch (element.fieldType) {
    case "input":
      component = (
        <Field
          className="input"
          as={element.fieldType}
          id={element.fieldId}
          name={element.fieldId}
        />
      );
      break;
    case "calendar":
      component = <Calendar fieldId={element.fieldId} />;
      break;
    case "radio":
      component = <RadioButton element={element} />;
      break;
    case "autocomplete":
      component = <AutocompleteBox element={element} />;
      break;
    case "button":
      component = <Field />;
  }
  return (
    <div className="inputBox">
      <div>
        <label>
          {element.isOptional ? (
            <p>
              {" "}
              <span>* </span> {element.fieldName}{" "}
            </p>
          ) : (
            <p>
              {element.fieldName} <small>(Optional)</small>{" "}
            </p>
          )}
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
