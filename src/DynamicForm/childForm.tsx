import * as React from 'react';
import {Form} from 'formik';

const ChildForm = ({data}:any) => {
    let title;
  switch (data) {
    case "personalInfoField":
        title = <h2>Personal information</h2>
        break;
    case "experienceField":
        title = <h2>Experience</h2>
        break;
    case "preliminary":
        title = <h2>Preliminary Question</h2>
  }

    return(
        {title}
    )

}

export default ChildForm;