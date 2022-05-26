import * as React from "react";
import ChildForm from "./childForm";
import DefaultSection from "../Component/Default/default";
const DynamicForm: React.FC<{ formData: any }> = ({ formData }) => {
  return (
    <div>
      {Object.keys(formData).map((key: any) => {
        switch (key) {
          case "personalInfoField":
            return <DefaultSection data = {formData[key]}/>
          case "experienceField":
            return <ChildForm data={formData[key]} />;
          case "education":
            return <ChildForm data={formData[key]} />;
          
        }
      })}
    </div>
  );
};

export default DynamicForm;
