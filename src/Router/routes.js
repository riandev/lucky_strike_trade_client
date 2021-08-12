import React from "react";
import SurveyBody from "../components/SurveyBody";

const routes = [
  {
    path: "/dashboard",
    exact: true,
    name: "Survey",
    toolbar: () => <p style={{ color: "white" }}>Lucky Strick Trade</p>,
    main: () => <SurveyBody />,
  },
];

export default routes;
