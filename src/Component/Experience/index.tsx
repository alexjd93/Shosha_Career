import {useState} from "react";
import Title from "../Header/header";
import { element } from "../../formData";
import ExperienceChild from './experience';

type DataType = {
  key: string;
  data: element[];
};

const ExperienceSection = ({ data,key }: DataType) => {
    const [show,setShow] = useState<Boolean>(false);

    const saveExperience = () => {
    }

  return ( 
    <div>
      <Title title ="Profile" />
        <button onClick={() => setShow(true)}>Button</button>
        <div className="subSection">
          {show && <ExperienceChild data={data}/>}
        </div>

    </div>
  );
};

export default ExperienceSection;
