import { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Global from "../Globa/global";
import { useFormikContext } from "formik";
import { ThemeProvider,createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  overrides:{
    MuiOutlinedInput:{
      root:{
        "&&& $input": {
          padding: "1px"
        }
      }
    }
  }
})

const AutocompleteBox = ({ element }: any) => {
  const { setFieldValue } = useFormikContext();
  const { fieldOptions, fieldId } = element;
  const [show, setShow] = useState<Boolean>(false);
  const findId = (value: string) => {
    for (const i of element.fieldOptions) {
      if (i.value === value) {
        return i.id;
      }
    }
  };

  let newArr = [];
  for (const i of element.fieldOptions) {
    newArr.push(i.value);
  }
  return (
    <div>
      <Autocomplete
      // classes={{ paper: classes.paper }}
        style={{width:"100%"}}
        disablePortal
        id="combo-box-demo"
        onChange={(event, value) => {
          setFieldValue(fieldId, value);
          if (element.fieldId === "checkEntitlement") {
            const id = findId(value);
            if (id === 3 || id === 4) {
              setShow(true);
            } else {
              setShow(false);
            }
          }
        }}
        options={newArr}
        sx={{ width: 300 }}
        renderInput={(params) => <ThemeProvider theme={theme}>
          <TextField {...params} label={"Entilement"} variant="outlined" />
        </ThemeProvider>}
      />
      {show && (
        <Global
          element={{
            fieldName: "Visa exire date",
            fieldId: "visaExpire",
            fieldType: "calendar",
            isOptional: false,
          }}
        />
      )}
    </div>
  );
};

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top

export default AutocompleteBox;
