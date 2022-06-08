import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useFormikContext } from "formik";

const AutocompleteBox = ({ element }: any) => {
  const { setFieldValue } = useFormikContext();
  const { fieldOptions, fieldId } = element;
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      onChange={(event,value) => setFieldValue(fieldId,value)}
      options={element.fieldOptions}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
  );
};

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top

export default AutocompleteBox;
