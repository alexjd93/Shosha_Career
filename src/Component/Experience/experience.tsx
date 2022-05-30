import React from "react";
import Global from "../Globa/global";
import { element } from "../../formData";
import { Form } from "formik";

type DataType = {
  key?: string;
  data: any[];
  id?: number;
  show?: (t: boolean) => void;
  saveExperience?: (t: any) => any;
};

const ExperienceChild = ({ data, key, show, saveExperience, id }: DataType) => {
  return (
    <div>
      <div className="subSection">
        {data.map((element: element) => {
          return <Global element={element} />;
        })}
        {/* <button onClick={() => show(false)}>Cancel</button> */}
        <button type="submit" onClick={saveExperience}>
          Save
        </button>
      </div>
    </div>
  );
};

export default ExperienceChild;
