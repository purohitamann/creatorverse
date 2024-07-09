import React from "react";
// import "./App.scss";
import "./components/PicoDemo/demoPico.scss";
import Form from "./components/Form/index.jsx";
// import ShowCreators from "./pages/ShowCreators.js";
import AddCreators from "./pages/AddCreator.js";
import "./App.css";
import bg from "./assets/CreatorverseBg.jpg";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import ShowCreators from "./pages/ShowCreators.js";
import ViewCreator from "./pages/ViewCreator.js";
import EditCreator from "./pages/EditCreator.js";
import AddCreator from "./pages/AddCreator.js";
import DeleteDialog from "./components/DeleteDialog/index.jsx";

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
  const header = {
    color: "#017FC0",
    backgroundImage: `linear-gradient(rgba(1, 1, 1, 0.1), rgba(1, 1, 1, 0.1)), url(${bg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",

    height: "80vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  };
  return (
    <Router>
      <div class="container-fluid headerContainer" style={header}>
        <h1>Creatorverse</h1>
        <div class="grid">
          <nav>
            <ul>
              <li>
                <a href="/" type="button" class="button">
                  View All Creators
                </a>
              </li>
              <li>
                <a href="/new" type="button" class="button">
                  Add a Creators
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div class="App">
        <AppRoutes />
      </div>
    </Router>
  );
};

export default App;
