import React,{useState} from "react";
import './Database.css'
import EditForm from "./EditForm";
import Form2 from "./Form2";
export default function Card({ data,indexDelete,showCard}) {
  const[showEdit,setShowEdit] = useState({value:false,i:null})
  const[showOriginalForm,setShowOriginalForm] = useState(false)
  return (
    <>
    
      <>{!showEdit.value && !showOriginalForm && <><div className="allData">
        {data.map((item, index) => (
          <div key={index} className="card1">
            <div className="body1">
              <div>First name : {item.fname}</div>
              <div>Last name : {item.lname}</div>
              <div>Email : {item.email}</div>
              <div>Gender : {item.gender}</div>
              <div>Transport : {item.transport}</div>
              <div>Nationality : {item.nationality}</div>
            </div>
            <div className="footer1">
              <button className="button1" onClick={() => setShowEdit({value:true,i:index})}>
                Edit
              </button>
              <button className="button1" onClick={() => indexDelete(index)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
        <button className="button1 add" onClick={showCard}>
                + Add
              </button></>}
      {showEdit.value && !showOriginalForm && <EditForm show={showCard} data2={data[showEdit.i]} allData={data} index={showEdit.i}/>}</>
      {showOriginalForm && <Form2 originalData={data} />}
    </>
  );
}
