import React from "react";

export default function DataTable({
  input,
  firstName,
  lastName,
  email,
  address,
  phoneNumber,
  timestamp,
}) {
  return (
    <div className="data-table">
      <ul className="list-group p-3 mx-3">
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
    </div>
  );
}
