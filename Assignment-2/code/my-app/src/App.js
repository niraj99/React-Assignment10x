import React from "react";
import "./App.css";

function App(props) {
  // const { employee } = props;
  const employee = {
    name: "Tom",
    location: "New York",
    bloodGroup: "B+",
    age: 28,
    profileImg: "https://www.w3schools.com/howto/img_avatar.png",
  };
  return (
    <div className="container">
      <div className="main-content">
      {/* Start your React code here */}
      <div className="Img-div">
      <img src={employee.profileImg} alt="Img" width="120px" height="120px"></img>
      </div>
      <div className="name-div">
      <h1>{employee.name}</h1>
      </div>
      <div className="content">
        <p className="light">Location</p>
        <p className="variable">{employee.location}</p>
      </div>
      <div className="content">
        <p className="light">Blood Group</p>
        <p className="variable">{employee.bloodGroup}</p>
      </div>
      <div className="content">
        <p className="light">Age</p>
        <p className="variable">{employee.age}</p>
      </div>
      
      </div>
    </div>
  );
}

export default App;
