import React from 'react';
import './App.css';


function App() {
  const arrowL = "<";
  const arrowR = ">";
  const employeeDetails = {
    "name" : "Alan Ford",
    "empid" : 1234567890,
    "Appointment": "9:00 (24-05-2022)",
    "Email":"alan.form@gmail.com",
    "phone": 31123456789,
    "status":"In Progress",
    "Door" : "Mark",
    "Time" : new Date().toLocaleString(),
    "avatar" : "https://www.w3schools.com/howto/img_avatar.png",
    "title" : "Boltaart Bosbessen",
    "desc" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, non? Rem maiores repellat consequatur inventore quisquam"
  };
  return (
    <div className="site-container">
    {/* Start Your code here */}
    
    <div className="nav-bar">
      <div className='arrow'><a href='#' className='a-arrow'>{arrowL}</a></div>
      <div className='name-id'>
        <p className='name'>{employeeDetails.name}</p>
        <p className='id'>{employeeDetails.empid}</p>
      </div>
      <div className='nav-button'>
        <button className='btn'>Print</button>
      </div>
    </div>


    <div className='customer-info'>
      <label><strong>Appointment&nbsp;</strong> {employeeDetails.Appointment}</label>
      <label><strong>Email:&nbsp;</strong>{employeeDetails.Email}</label>
      <label><strong>Phone&nbsp;</strong>{employeeDetails.phone}</label>
    </div>


    <div className='order-info'>

      <div className='order'>
        <p className='bold'>Status</p>
        <p>{employeeDetails.status}</p>
      </div>

      <div className='order'>
        <p className='bold'>Door</p>
        <p>{employeeDetails.Door}</p>
      </div>

      <div className='order'>
        <p className='bold'>Time</p>
        <p>{employeeDetails.Time}</p>
      </div>

    </div>


    <div className='product-list'>
      <div className='product-check'>
        <input id="check" type="checkbox"></input>
      </div>

      <div className='product-img'>
        <img src={employeeDetails.avatar} alt='Avatar' height="120px" width="120px"></img>
      </div>

      <div className='product-title'>
        <p className='title'>{employeeDetails.title}</p>
        <p className='title-desc'>{employeeDetails.desc}</p>
      </div>

      <div className='product-arrow'>
        <a href='#'> {arrowR}</a>
      </div>


    </div>



    </div>


    
  );
}

export default App;
