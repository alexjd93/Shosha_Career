import * as React from "react";

export const formData: FormDataType = {
  personalInfoField: [
    {
      fieldName: "First Name",
      fieldId: "firstName",
      fieldType: "input",
      isOptional: true
    },
    {
      fieldName: "Last Name",
      fieldId: "lastName",
      fieldType: "input",
      isOptional: true
    },
    {
      fieldName: "Email",
      fieldId: "email",
      fieldType: "input",
      isOptional: true
    },
    {
      fieldName: "Phone Number",
      fieldId: "phoneNumber",
      fieldType: "input",
      isOptional: true
    },
    {
      fieldName: "Date of Birth",
      fieldId: "dateOfBirth",
      fieldType: "calendar",
      isOptional: false
    },
    {
      fieldName: "Address",
      fieldId: "address",
      fieldType: "input",
      isOptional: true
    },

    // {
    //   fieldName: "Your preferred stores!",
    //   fieldId: "store",
    //   fieldType: "select",
    // },
  ],
  personalWebInfoField: [
    {
      fieldName: "LinkedIn",
      fieldId: "linkedIn",
      fieldType: "text",
    },
    {
      fieldName: "Facebook",
      fieldId: "facebook",
      fieldType: "text",
    },
    {
      fieldName: "Twitter",
      fieldId: "twitter",
      fieldType: "text",
    },
    {
      fieldName: "Website",
      fieldId: "website",
      fieldType: "text",
    },
  ],
  experienceField: [
    {
      fieldName: "Company",
      fieldId: "company",
      fieldType: "input",
      isOptional: true
    },
    {
      fieldName: "Location (City)",
      fieldId: "location",
      fieldType: "input",
      isOptional: true
    },
    {
      fieldName: "Detail",
      fieldId: "detail",
      fieldType: "input",
      isOptional: false
    },
    {
      fieldName: "Start date",
      fieldId: "startDate",
      fieldType: "calendar",
      isOptional: false
    },
    {
      fieldName: "End date",
      fieldId: "endDate",
      fieldType: "calendar",
      isOptional: false
    }
  ],
  // education: [
  //   {
  //     fieldName: "Institution",
  //     fieldId: "institution",
  //     fieldType: "text",
  //   },
  //   {
  //     fieldName: "Major",
  //     fieldId: "major",
  //     fieldType: "text",
  //   },
  //   {
  //     fieldName: "Degree",
  //     fieldId: "degree",
  //     fieldType: "text",
  //   },
  //   {
  //     fieldName: "Location (City)",
  //     fieldId: "location",
  //     fieldType: "text",
  //   },
  //   {
  //     fieldName: "Detail",
  //     fieldId: "detail",
  //     fieldType: "text",
  //   },
  //   {
  //     fieldName: "Save",
  //     fieldId: "save",
  //     fieldType: "button",
  //   },
  // ],
  preliminary: [
    {
      fieldName: "Are you 18 years or older?",
      fieldId: "ageCheck",
      fieldOptions: ["Yes", "No"],
      fieldType: "radio",
    },
    {
      fieldName:
        "What is your entitlement to work in New Zealand? If you are invited for an interview, you will be required to bring a copy of your identification and Right to Work document.",
      fieldId: "entitlement",
      fieldOptions: [
        "New Zealand/Australian Citizen",
        "New Zealand Permanent Resident",
        "Valid New Zealand Work Visa (If selected, please specify expiry date below)",
        "Valid New Zealand Student Visa (If selected, please specify expiry date below)",
        "Sponsorship in progress",
        "Not currently entitled to work in New Zealand",
      ],
      fieldType: "autocomplete",
    },
    {
      fieldName: "What is your vape knowledge?",
      fieldId: "vapeKnowledge",
      fieldOptions: ["Zero", "Beginner", "Intermediate", "Advanced"],
      fieldType: "radio",
    },
    {
      fieldName: "Can you work on weekend?",
      fieldId: "workWeekend",
      fieldOptions: ["Yes", "No"],
      fieldType: "radio",
    },
    {
      fieldName: "Can you work long shift?",
      fieldId: "long-shift",
      fieldOptions: ["Yes", "No"],
      fieldType: "radio",
    },
    {
      fieldName: "Will-Do Attitude",
      fieldId: "attitude",
      fieldOptions: ["Yes", "No"],
      fieldType: "radio",
    },
    {
      fieldName: "Experience on working with guideline",
      fieldId: "experience",
      fieldOptions: ["Yes", "No"],
      fieldType: "radio",
    },
    {
      fieldName: "Do you have your own transport?",
      fieldId: "transport",
      fieldOptions: ["Yes", "No"],
      fieldType: "radio",
    },
  ],
};

export type FormDataType = {
  personalInfoField: element[];
  personalWebInfoField: element[];
  experienceField: element[];
  preliminary: element[];
};

export type element = {
  fieldName: string;
  fieldId: string;
  fieldOptions?: string[];
  fieldType: string;
  isOptional?: boolean;
  buttonEvent?: () => void;
};
