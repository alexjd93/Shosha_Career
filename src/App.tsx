
import './App.css';
import {formData} from '../src/formData';
import DynamicForm from '../src/DynamicForm/dynamicForm';
interface IDataType {
  firstName: string,
  lastName: string,
  email: string,
  phoneNumber: number,
  dateOfBirth: string,
  preferStore: [],
}

const App = () => {
  console.log("test")
  const initialValues = {
    experience: [],
    education:[]
  };
  return (
    <div className="App"> 
        <DynamicForm formData = {formData}/>
    </div>
  );
}

export default App;