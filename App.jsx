import { useState } from "react";
import './App.css';
import ClassExapmle from "./ClassExapmle.jsx";
import Lifecycle from "./lifecycle.jsx";
import LifecycleFunction from "./LifecycleFunction.jsx";

function App() {  
  return (
    <div>
      <h1>Hello, React!</h1>
      <ClassExapmle />
      <Lifecycle myname="khushi" />
      <LifecycleFunction />
    </div>
  );
}
export default App;