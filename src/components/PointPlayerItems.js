import React from "react";

const PointPlayerItems = (props) => {
  // eslint-disable-next-line no-extend-native
  Number.prototype.format = function (n, x, s, c) {
    var re = "\\d(?=(\\d{" + (x || 3) + "})+" + (n > 0 ? "\\D" : "$") + ")",
      num = this.toFixed(Math.max(0, ~~n));

    return (c ? num.replace(".", c) : num).replace(
      new RegExp(re, "g"),
      "$&" + (s || ",")
    );
  };

  return (
    <div>
      <div className= {props.point > 0 ? 'alert alert-primary': 'alert alert-danger'} >
        <h4 className="alert-heading">{props.name}</h4>
        <hr />
        <p>{props.point.format(2, 3, ".", ",")}</p>
      </div>
    </div>
  );
};

export default PointPlayerItems;
