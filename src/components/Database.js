import React from "react";

export default function Card({ data, indexDelete }) {
  return (
    <>
      <div className="allData">
        {data.map((item, index) => (
          <div key={index} className="card1">
            <div className="header1">Data {index + 1}</div>
            <div className="body1">
              <div>First name : {item.fname}</div>
              <div>Last name : {item.lname}</div>
              <div>Email : {item.email}</div>
              <div>Gender : {item.gender}</div>
              <div>Transport : {item.transport}</div>
              <div>Nationality : {item.nationality}</div>
            </div>
            <div className="footer1">
              <button className="button1" onClick={() => indexDelete(index)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
