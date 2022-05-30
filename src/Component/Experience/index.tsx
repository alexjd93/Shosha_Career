import { useState } from "react";
import React from "react";
import Title from "../Header/header";
import { element } from "../../formData";
import ExperienceChild from "./experience";
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
  dateOfBirth: Date | null;
  experience: ExperienceType[];
}

const ExperienceSection = ({ data, key }: DataType) => {
  const [show, setShow] = useState<Boolean>(true);
  const [experienceData, setExperienceData] = useState<any>([]);
  const { values, submitForm } = useFormikContext<any>();

  // React.useEffect(() => {
  //   if (values) {
  //     let experience = [];
  //     const id = values.experience.length;
  //     for (const i of data) {
  //       let obj = {};
  //       if (id !== 0) {
  //         obj = {
  //           ...i,
  //           fieldId: `experience[${id + 1}].${i.fieldId}`,
  //         };
  //       }
  //       obj = {
  //         ...i,
  //         fieldId: `experience[${id}].${i.fieldId}`,
  //       };
  //       experience.push(obj);
  //       setExperienceData(experience);
  //     }
  //   }
  // }, [show]);

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
                return <p>TEST</p>;
              } else {
                let newArray = [];
                let obj = {};
                for (const i of data) {
                  obj = { ...i, fieldId: `experience[${index}].${i.fieldId}` };
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
