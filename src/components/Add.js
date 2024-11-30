import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Add.css";

function Add() {
  const [addresses, setAddresses] = useState([]);
  const [adName, setaddName] = useState("");
  const [adAddress, setaddAddress] = useState("");
  const [adEmail, setaddEmail] = useState("");
  const [adPhone, setaddPhone] = useState("");

  useEffect(() => {
    fetchAddress();
  }, []);

  function fetchAddress() {
    axios.get("http://localhost:8080/api/address").then((res) => {
      setAddresses(res.data);
    });
  }

  function addAddress() {
    const contactData = {name: adName,address: adAddress,email: adEmail,phoneNumber: adPhone, };

    axios.post("http://localhost:8080/api/address", contactData).then(() => {
      fetchAddress(); 
      resetForm(); 
    });
  }

  

  function resetForm() {
    setaddName("");
    setaddAddress("");
    setaddEmail("");
    setaddPhone("");
  }

  return (
    <div className="input">
      <h2>Enter the Details:</h2>
      <div>
        <table>
          <tr>
        <label>Name:</label><input
          type="text"
          placeholder="Enter contact name"
          value={adName}
          onChange={(e) => setaddName(e.target.value)}
        />
        </tr>

        <tr>
        <label>Address:</label><input
          type="text"
          placeholder="Enter contact address"
          value={adAddress}
          onChange={(e) => setaddAddress(e.target.value)}
        />
          </tr>

        <tr><label>Email:</label><input
          type="text"
          placeholder="Enter contact email"
          value={adEmail}
          onChange={(e) => setaddEmail(e.target.value)}
        />
        </tr>
        
        <tr>
        <label>Phone Number:</label><input
          type="text"
          placeholder="Enter contact phone"
          value={adPhone}
          onChange={(e) => setaddPhone(e.target.value)}
        />
        </tr>
        <button onClick={addAddress}>Add Details</button>
        </table>
      </div>

      <div className="container">
        <h1>Contacts</h1>
       
          {addresses.map((address) => (
            <div key={address.id} className="address-card">
              <div className="fields">Id: {address.id}</div>
              <div className="fields">Name: {address.name}</div>
              <div className="fields">Address: {address.address}</div>
              <div className="fields">Email: {address.email}</div>
              <div className="fields">Phone Number: {address.phoneNumber}</div>
            </div>
          ))}
        </div>
     
    </div>
  );
}

export default Add;
