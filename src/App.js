import React from "react";
// import "./App.scss";
import "./components/PicoDemo/demoPico.scss";
import Form from "./components/Form/index.jsx";
// import ShowCreators from "./pages/ShowCreators.js";
import AddCreators from "./pages/AddCreator.js";

import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import ShowCreators from "./pages/ShowCreators.js";
import ViewCreator from "./pages/ViewCreator.js";
import EditCreator from "./pages/EditCreator.js";
import AddCreator from "./pages/AddCreator.js";

const AppRoutes = () => {
  const routes = useRoutes([
    { path: "/", element: <ShowCreators /> },
    { path: "view/:creatorId", element: <ViewCreator /> },
    { path: "edit/:creatorId", element: <EditCreator editMode={true} /> },
    { path: "/new", element: <AddCreator /> },
  ]);

  return routes;
};
const App = () => {
  return (
    <Router>
      <div class="container">
        <h1>Creatorverse</h1>
        <div class="grid">
          <div>
            <a href="/" type="button">
              View All Creators
            </a>
          </div>
          <div>
            <a href="/new" type="button">
              Add a Creators
            </a>
          </div>
        </div>
      </div>
      <div className="App">
        <AppRoutes />
      </div>
    </Router>
  );
};

export default App;
