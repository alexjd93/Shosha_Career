import React from "react";
import Title from "../Header/header";
import Global from "../Globa/global";
import { element } from "../../formData";
import { Form } from "formik";

type DataType = {
  key: string;
  data: element[];
  deleteAll: () => void;
};

const defaultSection = ({ data, deleteAll }: DataType) => {
  return (
    <div className="">
      <Title title="Personal information" deleteAll={deleteAll} />
      <div className="subSection">
        {data.map((element: element) => {
          return <Global element={element} />;
        })}
      </div>
    </div>
  );
};

export default defaultSection;
