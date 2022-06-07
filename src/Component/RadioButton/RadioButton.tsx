import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useField, useFormikContext } from "formik";
import React from "react";
const RadioButton = ({ fieldId }: { fieldId: string }) => {
  const [field] = useField({ name: fieldId });
  const { setFieldValue } = useFormikContext();
  console.log(field);
  return (
    <div>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        {}
      </RadioGroup>
    </div>
  );
};

export default RadioButton;
