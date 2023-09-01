import React, { useEffect, useState } from "react";
import { Router } from "@reach/router";

import Home from "./pages/home";
import "./styles/style.css";
import TopPicks from "./pages/top-picks";
import axios from "axios";

const App = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://navgurukul.github.io/tarabai-shinde/data/meraki_partners.json`
      )
      .then((response) => {
        console.log(response);
        setCourses(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <h4>Partners</h4>
      <ul>
        {Object.keys(courses).map((c) => (
          <li>{courses[c].Name}</li>
        ))}
      </ul>
    </>
  );
};
export default App;
