import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";

const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  function convertModifier(modifier) {
    console.log(modifier)
    switch (modifier) {
      case 1:
        return "Thường";
      case 2:
        return "10 điểm";
      case 3:
        return "Tam";
      case 4:
        return "Đồng Hoa";
      default:
        return "Thường";
    }
  }

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <span class="badge badge-secondary mr-1">{props.number}</span>
        {props.name}
      </div>

      <div>
        <span class="badge badge-secondary">
          {convertModifier(props.multiplier)}
        </span>
      </div>
      {props.playerBoard && (
        <em className="pl-1">
          {" "}
          {props.playerBoard.map((player) => (
            <em>
              <span class="badge badge-secondary mr-1">{player.name}</span>
            </em>
          ))}
        </em>
      )}
      {/* {props.timeStamp.toString()} */}

      <div className="d-flex">
        <span className="badge badge-primary mr-3">{props.cost}</span>
        <TiDelete size="1.5em" onClick={handleDeleteExpense} />
      </div>
    </li>
  );
};

export default ExpenseItem;
