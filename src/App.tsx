import "./App.css";
import { formData } from "../src/formData";
import DynamicForm from "../src/DynamicForm/dynamicForm";
import Head from "../src/Component/Head/head";
import ProgressBar from '../src/Component/ProgressBar/progressBar';
import { useState, useEffect } from "react";
interface IDataType {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  dateOfBirth: string;
  preferStore: [];
}

const App = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(100)

  useEffect(() => {
    listenToScrollEvent()
  },[])

  const listenToScrollEvent = () => {
    document.addEventListener("scroll", () => {
      requestAnimationFrame(() => {
        calculateScrollDistance()
      })
    })
  }
  
  const calculateScrollDistance = () => {
    const scrollTop = window.pageYOffset;
    const winHeight = window.innerHeight;
    const docHegith = getDocHeight();

    const totalDocScrollLength = docHegith - winHeight;
    const scrollPostion = Math.floor(scrollTop / totalDocScrollLength * 100)
    setScrollPosition(scrollPostion)
  }

  const getDocHeight = () => {
    return Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );
  }

  return (
    <>
      <Head />
      <ProgressBar scroll={scrollPosition + '%'}/>
      <div className = "wrapper">
      <div className="container mx-auto">
        <DynamicForm formData={formData} />
      </div>
      </div>
    </>
  );
};

export default App;
