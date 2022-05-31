import { FaEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";

type DataType = {
    exp:any;
    removeExperience:() => any;
  };

const ExperienceDetail = ({exp,removeExperience}:DataType) => {
    console.log(exp)
    return(
        <div className="subGroup">
            <div>
                
                <dl>
                    <dt>Title</dt>
                    <dd><span>{exp.company}</span></dd>
                </dl>
                <dl>
                    <dt>Detail</dt>
                    <dd><span>{exp.detail}</span></dd>
                </dl>
                <dl>
                    <dt>Location</dt>
                    <dd><span>{exp.location}</span></dd>
                </dl>
                <div className="subGroupButton">
                    <a><FaEdit size='17'/></a>
                    <a onClick={removeExperience}><FaRegTrashAlt size='17'/></a>
                </div>
            </div>
        </div>
    )
}

export default ExperienceDetail;