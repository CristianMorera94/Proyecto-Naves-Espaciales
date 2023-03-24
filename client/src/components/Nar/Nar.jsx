import React from "react";
import { Link } from "react-router-dom";
import Search from "../search/search";
import "./Nar.css";

export default function Nar() {
  return (
    <div className="narContainer">
      <div className="container1">
        <div className="title1">
          <a href="#">Inicio</a>
        </div>
        <div className="title2">
          <a href="#">Acerca de</a>
        </div>
      </div>
      <div className="container2">
        <Search />
      </div>
    </div>
  );
}
