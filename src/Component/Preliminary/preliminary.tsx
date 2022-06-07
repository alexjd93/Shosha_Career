import * as React from "react";
import Global from "../Globa/global";
import { MyFormValueType } from "../../formData";
import Title from "../Header/header";

type DataType = {
    key: string;
    data: {preliminary:any[]};
    values: MyFormValueType;
  };

const PreliminarySection = ({data, values}:DataType) => {
    console.log(data)
    return(
        <div>
            <Title title="Preliminary Question"/>
        </div>
    )

}

export default PreliminarySection;