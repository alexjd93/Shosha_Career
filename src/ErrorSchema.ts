import * as Yup from "yup";

export const ErrorSchema = Yup.object().shape({
    firstName: Yup.string().required("Required field"),
    lastName: Yup.string().required("Required field"),
    email: Yup.string().email("Invalid email").required("Required"),
    phoneNumber: Yup.number().required("Required field"),
    store: Yup.string().required("Required field"),
  });