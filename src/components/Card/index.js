import React from "react";
import Button from "../Button/index";
import "./style.css";

function Card({ title, text, url }) {
  return (
    <div className="card">
      <h3 id="title-main"> {title}</h3>
      <p id="text-main"> {text} </p>
      <img alt="soc" width={"100%"} src={url} id="image-main" />
      {""}
      <Button />
      {""}
    </div>
  );
}
export default Card;
