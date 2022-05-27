import React from "react";
import Global from "../Globa/global";
import { element } from "../../formData";
import { Form } from "formik";

type DataType = {
  key?: string;
  data: element[];
};

const ExperienceChild = ({ data,key }: DataType) => {
    console.log(key)
  return ( 
    <div>
        <div className="subSection">
          {data.map((element: element) => {
              return <Global element={element} />;
          })}
        </div>

    </div>
  );
};

export default ExperienceChild;
