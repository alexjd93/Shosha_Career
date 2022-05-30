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
  const [show, setShow] = useState<Boolean>(false);
  const [experienceData, setExperienceData] = useState<any>([]);
  const { values, submitForm } = useFormikContext<any>();
  React.useEffect(() => {
    if (values) {
      let experience = [];
      const id = values.experience.length;
      for (const i of data) {
        let obj = {};
        if (id !== 0) {
          obj = {
            ...i,
            fieldId: `experience[${id + 1}].${i.fieldId}`,
          };
        }
        obj = {
          ...i,
          fieldId: `experience[${id}].${i.fieldId}`,
        };
        experience.push(obj);
        setExperienceData(experience);
      }
    }
  }, [values]);
  
  const saveExperience = ({ data }: DataType) => {};

  return (
    <div>
      <Title title="Profile" />
      <FieldArray
        name="experience"
        render={(arrayHelpers) => (
          <div>
            {values.experience.map((experience: any, index: any) => {
              console.log(arrayHelpers)
              if (experience.save === true) {
                return (
                  <div>
                    {experience["company"]}
                  </div>
                );
              }
            })}
            <button onClick={() => setShow(true)}>ADD</button>
            <div className="subSection">
              {show && (
                <ExperienceChild
                  data={experienceData}
                  show={setShow}
                  id={values.experience.length}
                  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                  saveExperience={() => {
                    const getData = values.experience[0]
                    getData['save'] = true
                    arrayHelpers.replace(0,getData)
                    setShow(false)
                  }}
                />
              )}
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default ExperienceSection;
