import { useState } from "react";
import React from "react";
import Title from "../Header/header";
import { element } from "../../formData";
import ExperienceChild from "./experience";
import ExperienceDetail from "./experienceDetail";
import {
  FieldArray,
  validateYupSchema,
  useFormikContext,
  ArrayHelpers,
} from "formik";

type ExperienceType = {
  title: string;
  company: string;
  summary: string;
  startDate: string;
  endDate: string;
  currentWork: Boolean;
  saved: boolean;
  edit: boolean;
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
type DataType = {
  key: string;
  data: element[];
  values: MyFormValues;
};

const ExperienceSection = ({ data, key, values }: DataType) => {
  const [show, setShow] = useState<Boolean>(false);
  const [experienceData, setExperienceData] = useState<any>([]);
  // const { values, submitForm } = useFormikContext<any>();

  const removeExperience = (arrayHelpers: any, index: number) => {
    console.log(index);
    arrayHelpers.remove(index);
  };

  const editExperience = (arrayHelpers: any, index: number) => {
    const getData = arrayHelpers;
  };

  return (
    <div>
      <Title title="Profile" />
      <FieldArray
        name="experience"
        render={(arrayHelpers: ArrayHelpers) => (
          <div>
            <div className="profile_subSection">
              <p>Experience (Optional)</p>
              <button type="button" onClick={() => arrayHelpers.push({})}>
                ADD
              </button>
            </div>

            {values.experience.map((exp: any, index: number) => {
              if (exp && exp.saved === true) {
                return (
                  <ExperienceDetail
                    exp={exp}
                    removeExperience={() => {
                      removeExperience(arrayHelpers, index);
                    }}
                    editExperience={() => {
                      const getData = values.experience[index];
                      getData["saved"] = false;
                      getData["edit"] = true;
                      arrayHelpers.replace(index, getData);
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
                  <div className="subForm">
                  <ExperienceChild
                    data={newArray}
                    saveExperience={() => {
                      const getData = values.experience[index];
                      getData["saved"] = true;
                      arrayHelpers.replace(index, getData);
                      setShow(false);
                    }}
                    removeExperience={() => {
                      const getData = values.experience[index];
                      //when user press cancel in edit mode
                      if (getData.edit) {
                        getData["edit"] = false;
                        getData["saved"] = true;
                        //when user cancel in create mode
                      } else {
                        removeExperience(arrayHelpers, index);
                      }
                    }}
                  />
                  </div>
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
