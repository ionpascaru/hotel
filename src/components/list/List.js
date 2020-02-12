import React from "react";
import "../styles/styles.css";

const List = props => {
  return (
    <li className={"list-item"}>
      <div className="card w-100 mb-3">
        <div className="card-body">
          <div>
            <h3>
              <span>{props.roomName}</span>
            </h3>
          </div>
          <div>
            <span>{props.boardName}</span>
          </div>
          <div className={"room-capacity"}>
            <span>{props.occupancy.numAdults} Adults</span>
            <br></br>
            <span>{props.occupancy.numChilds} Children</span>
            <br></br>
            <span>{props.occupancy.numBabies} Babies</span>
          </div>
          <div className={"room-price"}>
            <span>{props.netPrice} €</span>
            <div className={"room discount"}>
              <span>{props.offerName}</span>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default List;
