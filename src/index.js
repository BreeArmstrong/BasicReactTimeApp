import React from "react";
import ReactDOM from "react-dom";
import styles from "/public/styles.css";

const date = new Date(20, 1, 1, 23, 15);
let hour = date.getHours();
const min = date.getMinutes();
let greeting;
let timeDenoter;
const customStyle = {
  color: ""
};

if (hour < 12 && hour >= 0) {
  customStyle.color = "red";
  greeting = "Good Morning";
  timeDenoter = "am";
} else if (hour < 18 && hour >= 12) {
  hour = hour - 12;
  customStyle.color = "green";
  greeting = "Good Afternoon";
  timeDenoter = "pm";
} else if (hour > 18) {
  hour = hour - 12;
  customStyle.color = "blue";
  greeting = "Good Evening";
  timeDenoter = "pm";
}

if (hour === 0) {
  hour = hour += 12;
}

ReactDOM.render(
  <h1 className="header">
    <span style={customStyle}>{greeting}</span>, The current time is {hour}:
    {min}
    {timeDenoter}{" "}
  </h1>,
  document.getElementById("root")
);
