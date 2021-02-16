import React, { useState, useEffect } from 'react'

const Form = ({ submitHandler }) => {
   


   return (
      <>
         <h3>Add new transaction</h3>
         <form id="form" onSubmit={submitHandler}>
            <div className="form-control">
               <label htmlFor="text">Text</label>
               <input
                  type="text"
                  id="text"
                  name="text"
                  placeholder="Enter text..."
               />
            </div>
            <div className="form-control">
               <label htmlFor="amount">Amount <br />
               (negative - expense, positive - income)</label>
               <input
                  type="number"
                  id="amount"
                  name="amount"
                  placeholder="Enter amount..."
               />
            </div>
            <button className="btn" type='submit' >Add transaction</button>
         </form>
      </>
   )
}

export default Form

// var uid = (function () {
//   var id = 0;
//   return function () {
//     if (arguments[0] === 0) id = 0; return id++;
//   }
// })();