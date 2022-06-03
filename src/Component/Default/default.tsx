import React from "react";
import Title from "../Header/header";
import Global from "../Globa/global";
import { element } from "../../formData";
import { Form } from "formik";

type DataType = {
  key: string;
  data: element[];
};

const defaultSection = ({ data,key }: DataType) => {
  
  console.log(data)
  return ( 
    <div className="">
      <Title title ="Personal information" />
        <div className="subSection">
          {data.map((element: element) => {
              return <Global element={element} />;
          })}
        </div>

    </div>
  );
};

export default defaultSection;
