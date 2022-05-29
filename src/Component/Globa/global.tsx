import React from "react";
import { element } from "../../formData";
import { Field, ErrorMessage } from "formik";
import Test from "../Calendar/calendar";
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
          placeholder={element.fieldName}
        />
      );
      break;
    case "calendar":
      component = <Test />;
      break;
    case "button":
      component = <Field />;
  }
  return (
    <div className="inputBox">
      <div>
        <label>
          <span>*</span> {element.fieldName}
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
