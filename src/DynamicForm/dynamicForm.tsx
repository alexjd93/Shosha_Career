import * as React from "react";
import ExperienceSection from "../Component/Experience";
import DefaultSection from "../Component/Default/default";
import { FormDataType } from "../formData";
import { Formik, Form } from "formik";
import * as Yup from "yup";

type formData = {
  formData: FormDataType;
};

type ExperienceType = {
  title: string;
  industry: string;
  summary: string;
  startDate?: string;
  endDate?: string;
  currentWork: Boolean;
};

interface MyFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  address: string;
  store: string;
  dateOfBirth: Date | string;
  experience: ExperienceType[];
}

const errorSchema = Yup.object().shape({
  firstName: Yup.string().required("Required field"),
  lastName: Yup.string().required("Required field"),
  email: Yup.string().email("Invalid email").required("Required"),
  phoneNumber: Yup.number().required("Required field"),
  store: Yup.string().required("Required field"),
});

const DynamicForm = ({ formData }: formData) => {
  const initialValues: MyFormValues = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: 0,
    address: "",
    store: "",
    dateOfBirth: new Date(),
    experience: [
      // {
      //   title: "",
      //   industry: "",
      //   summary: "",
      //   currentWork: false,
      // },
    ],
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
        {({ values }:any) => (
          <Form>
            {Object.keys(formData).map((key: string) => {
              switch (key) {
                case "personalInfoField":
                  return <DefaultSection key={key} data={formData[key]} />;
                case "experienceField":
                  return <ExperienceSection key={key} data={formData[key]} values={values} />;
                // case "education":
                //   return <ChildForm key={key} data={formData[key]} />;
              }
            })}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default DynamicForm;
