import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useField,useFormikContext } from "formik";
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const Example = () => {
    const [field] = useField({name:"dateOfBirth"});
  const { setFieldValue } = useFormikContext();
  return (
    <DatePicker name="dateOfBirth" selected={field.value && new Date(field.value)} onChange={(date:Date) => setFieldValue("dateOfBirth",date)} />
  );
};

export default Example