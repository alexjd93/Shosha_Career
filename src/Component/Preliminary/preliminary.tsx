import * as React from "react";
import Global from "../Globa/global";
import { MyFormValueType, FormDataType } from "../../formData";
import Title from "../Header/header";

type DataType = {
  key: string;
  data: FormDataType["preliminary"];
  values: MyFormValueType;
};

const PreliminarySection = ({ data, values }: DataType) => {
  console.log(data);
  return (
    <div>
      <Title title="Preliminary Question" />
      {data.map((i) => (
        <Global element={i} />
      ))}
    </div>
  );
};

export default PreliminarySection;
