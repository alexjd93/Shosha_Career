import React from "react";
import ExperienceSection from "../Component/Experience";
import DefaultSection from "../Component/Default/default";
import PreliminarySection from "../Component/Preliminary/preliminary";
import { FormDataType, MyFormValueType } from "../formData";
import { Formik, Form } from "formik";
import { formData } from "../formData";

type formData = {
  formData: FormDataType;
};

const DynamicForm = () => {
  const [nextPage, setNextPage] = React.useState<Boolean>(false);

  const initialValues: MyFormValueType = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: 0,
    address: "",
    store: "",
    dateOfBirth: new Date(),
    experience: [],
    checkAge: null,
    checkEntitlement: null,
    checkVapeKnowledge: null,
    checkWeekendShift: null,
    checkLongShift: null,
    checkAttitude: null,
    guideline: null,
    checkTransport: null,
    visaExpire: new Date()
  };

  const deleteAll = (setFieldValue: any, key: any, data: any) => {
    if (key === "experienceField") {
      setFieldValue("experience", []);
    } else {
      for (const i of data[key]) {
        setFieldValue(i.fieldId, "");
      }
    }
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        // validationSchema={errorSchema}
        onSubmit={(values, action) => {
          console.log(values);
        }}
      >
        {({ values, setFieldValue }: any) => (
          <Form>
            {Object.keys(formData).map((key: string) => {
              if (!nextPage) {
                switch (key) {
                  case "personalInfoField":
                    return (
                      <DefaultSection
                        key={key}
                        data={formData[key]}
                        deleteAll={() =>
                          deleteAll(setFieldValue, key, formData)
                        }
                      />
                    );
                  case "profileField":
                    return (
                      <ExperienceSection
                        key={key}
                        data={formData[key]}
                        values={values}
                        deleteAll={() =>
                          deleteAll(setFieldValue, key, formData)
                        }
                      />
                    );
                }
              } else {
                if (key === "preliminary")
                  return (
                    <PreliminarySection
                      key={key}
                      data={formData[key]}
                      values={values}
                    />
                  );
              }
            })}
            {nextPage ? (
              <button>Submit</button>
            ) : (
              <button
                onClick={() => {
                  setNextPage(true);
                }}
              >
                Next
              </button>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default DynamicForm;
