import React from "react";

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
      {subTitleTwo !== "" && <p>{subTitleTwo}</p>}
      {subTitleThree !== "" && <p>{subTitleThree}</p>}
    </div>
  );
};
