import React from "react";
// import "./App.scss";
import "./components/PicoDemo/demoPico.scss";
import Form from "./components/Form/index.jsx";
import ShowCreators from "./pages/ShowCreators.js";
import AddCreators from "./pages/AddCreator.js";

const App = () => {
  return (
    <div>
      <AddCreators />
      <ShowCreators />
      <Form />
    </div>
  );
};

export default App;
