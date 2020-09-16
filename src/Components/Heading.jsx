import React from "react";

const customeStyle = {
  color: ""
};

const Heading = () => {
  let greetings = "";
  const day = new Date();
  const currentTime = day.getHours();

  if (currentTime < 12) {
    greetings = "Goodmorning";
    customeStyle.color = "red";
  } else if (currentTime < 18) {
    greetings = "good Afternoon";
    customeStyle.color = "green";
  } else {
    greetings = "goodnight";
    customeStyle.color = "blue";
  }
  return (
    <div>
      <h1 style={customeStyle}>{greetings}</h1>
    </div>
  );
};

export default Heading;
