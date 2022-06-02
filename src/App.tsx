import "./App.css";
import { formData } from "../src/formData";
import DynamicForm from "../src/DynamicForm/dynamicForm";
import Head from "../src/Component/Head/head";

interface IDataType {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  dateOfBirth: string;
  preferStore: [];
}

const App = () => {
  return (
    <>
      <Head />
      <div className="container mx-auto">
        <DynamicForm formData={formData} />
      </div>
    </>
  );
};

export default App;
