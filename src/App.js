import React from "react";
import Head from "./components/Head";
import Todo from "./components/Todo";
import Foot from "./components/Foot";
import "./index.css";

const App = () => {
  return (
    <div>
      <Head />
      <Todo />
      <Foot />
    </div>
  );
};

export default App;
