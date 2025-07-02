import React from "react";
import QBrainLogo from "../../assets/Logo.svg";

const Icon = (props) => {
  return (
    <React.Fragment>
      <img
        src={QBrainLogo}
        style={{
          width: props.size,
        }}
        alt="QBrain Logo"
      />
    </React.Fragment>
  );
};

export default Icon;
