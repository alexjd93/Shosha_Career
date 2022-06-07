import "./App.css";
import DynamicForm from "../src/DynamicForm/dynamicForm";
import Head from "../src/Component/Head/head";
import ProgressBar from '../src/Component/ProgressBar/progressBar';
import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";

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
      <Head/>
      <ProgressBar scroll={scrollPosition + '%'}/>
      <div className = "wrapper">
      <div className="container mx-auto">
        {/* <Routes>
          <Route path="/" element={<DynamicForm/>}></Route>
          <Route path="nextPage" element={<Preliminary/>}></Route>
        </Routes> */}
        <DynamicForm />
      </div>
      </div>
    </>
  );
};

export default App;
