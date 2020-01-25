import React from "react";

function Header() {
  const date = new Date();
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

  return (
    <h1 className="header">
      <span style={customStyle}>{greeting}</span>, The current time is {hour}:
      {min}
      {timeDenoter}{" "}
    </h1>
  );
}

export default Header;
