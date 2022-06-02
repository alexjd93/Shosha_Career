import { FaEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import moment from "moment";

type DataType = {
  exp: any;
  removeExperience: () => void;
  editExperience: () => void;
};

const ExperienceDetail = ({
  exp,
  removeExperience,
  editExperience,
}: DataType) => {
  let startDate;
  let endDate;
  let getDuration;

  // when user entered both start date and end date
//   if (exp.startDate && exp.endDate) {
//     startDate = moment(exp.startDate).format("MMMM/yyyy");
//     endDate = moment(exp.endDate).format("MMMM/yyyy");
//   }
//   // when user entered only start date
//   else if (exp.startData && exp.endDate === undefined) {
//     startDate = moment(exp.startDate).format("MMMM/yyyy");
//     // getDuration = moment(exp.startDate).diff(mo)
//   }

  console.log(exp)
  return (
    <div className="subGroup">
      <div>
        <dl>
          <dt>Title</dt>
          <dd>
            <span>{exp.company}</span>
          </dd>
        </dl>
        <dl>
          <dt>Detail</dt>
          <dd>
            <span>{exp.detail}</span>
          </dd>
        </dl>
        <dl>
          <dt>Location</dt>
          <dd>
            <span>{exp.location}</span>
          </dd>
        </dl>
        {exp.startDate && exp.endDate ? (
          <dl>
            <dt>Period</dt>
            <dd>
              <span>
                {exp.startDate && moment(exp.startData).format("MMMM/yyyy")} -{" "}
                {exp.endDate && moment(exp.endDate).format("MMMM/yyyy")}
              </span>
            </dd>
          </dl>
        ) : (
          <></>
        )}
        {exp.startDate && (exp.endDate === undefined || null) && (
          <dl>
            <dt>Period</dt>
            <dd>
              <span>
                {exp.startDate && moment(exp.startData).format("MMMM/yyyy")} -{" "}
                Current
              </span>
            </dd>
          </dl>
        )}
        {(exp.startDate === null) && exp.endDate && (
            <dl>
            <dt>Period</dt>
            <dd>
              <span>
                Until {moment(exp.endDate).format("MMMM/yyyy")}
              </span>
            </dd>
          </dl>
        )}
        <div className="subGroupButton">
          <a onClick={editExperience}>
            <FaEdit size="17" />
          </a>
          <a onClick={removeExperience}>
            <FaRegTrashAlt size="17" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ExperienceDetail;
