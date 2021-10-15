import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import PointPlayerItems from "./PointPlayerItems";

const PointPlayerList = () => {
  const { expenses } = useContext(AppContext);

  const [calculatedPoint, setCalculatedPoint] = useState({});
  useEffect(() => {
    let filtered = {};
    expenses.forEach((element) => {
      let point = element.multiplier * element.cost;
      element.playerBoard.forEach((miniElement) => {
        let calCulatepoint =
          element.name === miniElement.name
            ? point * (element.playerBoard.length - 1)
            : point * -1;
        filtered[miniElement.name] = filtered[miniElement.name]
          ? filtered[miniElement.name] + calCulatepoint
          : calCulatepoint;
      });
    });
    console.log(filtered);
    setCalculatedPoint(filtered);
  }, [expenses]);

  return (
    <div className="row">
      {Object.entries(calculatedPoint).map((item) => (
        <div className="col-sm">
          <PointPlayerItems name={item[0]} point={item[1]} />
        </div>
      ))}
    </div>
  );
};

export default PointPlayerList;
