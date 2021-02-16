import React, { Component, useState } from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from "./components/Form";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpense from "./components/incomeExpense";
import History from "./components/History";

class App extends Component {
  state = {
    transactions: [
      { id: 1, text: "Cash", amount: 200 },
      { id: 2, text: "Texi", amount: -50 },
      { id: 3, text: "Books", amount: -100 },
    ],
  };

  submitHandler = (e) => {
    e.preventDefault();
    const transactions = [...this.state.transactions];

    const data = {};
    if (e.target.text.value === "" || e.target.amount.value === "") {
      toast.info("Add transaction details");
    } else {
      data.id = "_" + Math.random().toString().substr(2, 9);
      data.text = e.target.text.value;
      data.amount = +e.target.amount.value;

      transactions.push(data);
      this.setState({
        transactions,
      });

      toast.success("Transaction added");

      e.target.text.value = "";
      e.target.amount.value = "";
    }
  };

  deleteHandler = (id) => {
    const transactions = [...this.state.transactions].filter(
      (transaction) => transaction.id !== id
    );
    this.setState({ transactions });
    toast.error("Transaction deleted");
  };



  render() {
    const transactions = this.state.transactions;

    return (
      <div className="">
        <ToastContainer />
        <Header />
        <div className="container">
          <Balance transactions={transactions} />
          <IncomeExpense transactions={transactions} />
          <Form submitHandler={this.submitHandler} />
          <History transactions={transactions} onClick={this.deleteHandler} />
        </div>
      </div>
    );
  }
}

export default App;
