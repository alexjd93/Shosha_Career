import { useState } from "react";
import React from "react";
import Title from "../Header/header";
import { element } from "../../formData";
import ExperienceChild from "./experience";
import ExperienceDetail from "./experienceDetail";
import { FieldArray, validateYupSchema, useFormikContext } from "formik";

type DataType = {
  key: string;
  data: element[];
};

type ExperienceType = {
  title: string;
  company: string;
  summary: string;
  startDate: string;
  endDate: string;
  currentWork: Boolean;
};

interface MyFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  address: string;
  store: string;
  dateOfBirth: string;
  experience: ExperienceType[];
}

const ExperienceSection = ({ data, key }: DataType) => {
  const [show, setShow] = useState<Boolean>(false);
  const [experienceData, setExperienceData] = useState<any>([]);
  const { values, submitForm } = useFormikContext<any>();

  const removeExperience = (arrayHelpers: any, index: number) => {
    console.log(index);
    arrayHelpers.remove(index);
  };

  const editExperience = (arrayHelpers:any,index:number) => {

  }

  return (
    <div>
      <Title title="Profile" />
      <FieldArray
        name="experience"
        render={(arrayHelpers) => (
          <div>
            <button type="button" onClick={() => arrayHelpers.push({})}>
              ADD
            </button>

            {values.experience.map((exp: any, index: number) => {
              if (exp && exp.saved === true) {
                return (
                  <ExperienceDetail
                    exp={exp}
                    removeExperience={() => {
                      removeExperience(arrayHelpers, index);
                    }}
                  />
                );
              } else {
                let newArray = [];
                let obj = {};
                for (const i of data) {
                  obj = {
                    ...i,
                    fieldId: `experience[${index}].${i.fieldId}`,
                  };
                  newArray.push(obj);
                }
                return (
                  <ExperienceChild
                    data={newArray}
                    saveExperience={() => {
                      const getData = values.experience[index];
                      getData["saved"] = true;
                      arrayHelpers.replace(index, getData);
                      setShow(false);
                    }}
                    removeExperience={() => {
                      removeExperience(arrayHelpers, index);
                    }}
                  />
                );
              }
            })}
          </div>
        )}
      />
    </div>
  );
};

export default ExperienceSection;
