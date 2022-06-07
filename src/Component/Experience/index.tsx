import React from "react";
import Title from "../Header/header";
import { element,MyFormValueType } from "../../formData";
import ExperienceChild from "./experience";
import ExperienceDetail from "./experienceDetail";
import Global from "../Globa/global";
import {
  FieldArray,
  validateYupSchema,
  useFormikContext,
  ArrayHelpers,
} from "formik";

type DataType = {
  key: string;
  data: {experienceField:element[], profile:element[]};
  values: MyFormValueType;
  deleteAll:(() => void);
};

const ExperienceSection = ({ data, values, deleteAll }: DataType) => {
  const [disable, setDisable] = React.useState(false);
  // const { values, submitForm } = useFormikContext<any>();

  const removeExperience = (arrayHelpers: any, index: number) => {
    console.log(index);
    arrayHelpers.remove(index);
  };


  return (
    <div>
      <Title title="Profile" deleteAll={deleteAll}/>
      <FieldArray
        name="experience"
        render={(arrayHelpers: ArrayHelpers) => (
          <div>
            <div className="profile_subSection">
              <p>
                Experience <small>(Optional)</small>
              </p>
              <button disabled={disable} onClick={() => arrayHelpers.push({})}>
                + Add
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
                setDisable(true)
                let newArray = [];
                let obj = {};
                for (const i of data.experienceField) {
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
                        setDisable(false)
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
