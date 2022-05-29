import { useState } from "react";
import Title from "../Header/header";
import { element } from "../../formData";
import ExperienceChild from "./experience";
import { FieldArray, validateYupSchema } from "formik";

type DataType = {
  key: string;
  data: element[];
};

const ExperienceSection = ({ data, key }: DataType) => {
  const [show, setShow] = useState<Boolean>(false);

  const saveExperience = () => {};

  return (
    <div>
      <Title title="Profile" />
      <FieldArray
        name="experience"
        render={(arrayHelpers) => (
          <div>
            <button onClick={() => setShow(true)}>ADD</button>
            <div className="subSection">
              {show && (
                <ExperienceChild
                  data={data}
                  show={setShow}
                  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                  saveExperience={(data) => {
                    console.log("tset");
                    arrayHelpers.insert(1, "test");
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
