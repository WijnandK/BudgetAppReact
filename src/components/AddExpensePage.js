import React from "react";
import FormField from "./FormField";
import { connect } from "react-redux";
import { addExpense } from "../actions/expenses";

const AddExpensePage = props => (
  <div>
    <h1>Add new Expense</h1>
    <FormField
      onSubmit={expense => {
        props.dispatch(addExpense(expense));
        props.history.push("/");
      }}
    />
  </div>
);

export default connect()(AddExpensePage);
