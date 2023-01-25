import "./App.css";
import Amplify, { API } from "aws-amplify";
import React, { useEffect, useState } from "react";

const myAPI = "apiamplifydemo";
const path = "/customers";

function App() {
  const [input, setInput] = useState("");
  const [customers, setCustomers] = useState([]);

  // function to fetch from our backend and update customers array
  function getCustomer(e) {
    let customerId = e.input;
    API.get(myAPI, path + "/" + customerId)
      .then((response) => {
        console.log(response);
        let newCustmers = [...customers];
        newCustmers.push(response);
        setCustomers(newCustmers);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="App">
      <h1>Super Simple React App</h1>
      <div>
        <input
          placeholder="customer id"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <br />
      <button onClick={() => getCustomer({ input })}>
        Get Customer From Backend
      </button>
      <h2 style={{ visability: customers.length > 0 ? "visible" : "hidden" }}>
        Response
      </h2>
      {customers.map((customer, index) => {
        return (
          <div key={customer.customerId}>
            <span>
              <b>CustomerId:</b>
              {customer.customerId} <b>Customer Name:</b>
              {customer.customerName}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default App;
