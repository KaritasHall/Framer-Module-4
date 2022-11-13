import React from "react";

/* This is for the information inside the purple box. To keep the html clean
I made a reusable component for this. Here we have props and we add value to them in html*/
export const InformationBlock = ({
  title = "", // defaults to empty string
  subTitleOne = "",
  subTitleTwo = "",
  subTitleThree = "",
}) => {
  return (
    <div className="col">
      <strong>{title}</strong>
      <p>{subTitleOne}</p>
      {/* Ternary to avoid having empty p tags. Not all infoblocks are
      using three subtitles, so here we only want the subtitle rendered if
      it actually has value */}
      {subTitleTwo !== "" && <p>{subTitleTwo}</p>}
      {subTitleThree !== "" && <p>{subTitleThree}</p>}
    </div>
  );
};
