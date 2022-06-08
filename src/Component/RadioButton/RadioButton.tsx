import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import {useFormikContext } from "formik";
import React from "react";

const RadioButton = ({ element }: { element: any }) => {
  const { setFieldValue } = useFormikContext();
  const {fieldOptions, fieldId} = element
  return (
    <div>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        {
          fieldOptions.map((value:string) => {
            return <FormControlLabel value={value} control={<Radio onChange={(event) => {setFieldValue(fieldId,event.target.value)}}/>} label={value}/>
          })
        }
      </RadioGroup>
    </div>
  );
};

export default RadioButton;
