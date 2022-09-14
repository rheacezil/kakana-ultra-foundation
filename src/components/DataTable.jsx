import React from "react";
import { useState } from "react";
import { db } from "../firebase";
import { handleDelete } from "./utilities";

export default function DataTable({
  input,
  firstName,
  lastName,
  email,
  address,
  phoneNumber,
  timestamp,
}) {
  const [colors, setColors] = useState([{ name: "loading", id: "initial" }]);
  return (
    <div className="data-table">
      {colors.map((color) => (
        <ul className="list-group p-3 mx-3" key={color.id}>
          <button className="btn btn-success" onClick={handleDelete(color.id)}>
            Edit
          </button>
          <button className="btn btn-danger" onClick={handleDelete(color.id)}>
            Delete
          </button>
          <li className="list-group-item list-group-item-primary">
            {`Donate : ${input}`}
          </li>
          <li className="list-group-item list-group-item-primary">
            {`First name : ${firstName}`}
          </li>
          <li className="list-group-item list-group-item-primary">
            {`Last name : ${lastName}`}
          </li>
          <li className="list-group-item list-group-item-primary">
            {`Email : ${email}`}
          </li>
          <li className="list-group-item list-group-item-primary">
            {`Complete Address : ${address}`}
          </li>
          <li className="list-group-item list-group-item-primary">
            {`Phone number : ${phoneNumber}`}
          </li>
          <li className="list-group-item list-group-item-primary">
            {`Date/time : ${new Date(timestamp?.toDate()).toLocaleString()}`}
          </li>
        </ul>
      ))}
    </div>
  );
}
