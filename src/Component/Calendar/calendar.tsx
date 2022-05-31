import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useField, useFormikContext } from "formik";
import moment from 'moment';
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const Example = ({ fieldId }: { fieldId: string }) => {
  const [field] = useField({ name: fieldId });
  console.log(field);
  const { setFieldValue } = useFormikContext();
  return (
    <div>
      <style>
        {`.date-picker input {
          width: 100%;
          padding: 8px;
          border-color: #333e49;
          border:none;
          border-bottom: 2px solid red;
          &:focus {
            outline: none;
          }
      }`}
      </style>
      <DatePicker
        placeholderText="Enter date of birth"
        name={field.name}
        selected={field.value}
        onChange={(date: Date) => {
          console.log(date)
          // TODO return date to dd/mm/yyyy
          const newDate = moment(date).format("DD/MM/yyyy");
          setFieldValue(fieldId,date)
        }}
        wrapperClassName="date-picker"
      />
    </div>
  );
};

export default Example;
