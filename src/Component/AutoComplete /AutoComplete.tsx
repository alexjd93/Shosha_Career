import { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Global from "../Globa/global";
import { useFormikContext } from "formik";

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
        renderInput={(params) => <TextField {...params} label="Movie" />}
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
