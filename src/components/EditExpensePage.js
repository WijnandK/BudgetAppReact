import React from "react";
import { connect } from "react-redux";
import FormField from "./FormField";
import { editExpense, removeExpense } from "../actions/expenses";

const EditExpensePage = props => {
  return (
    <div>
      <FormField
        expense={props.expense}
        onSubmit={expense => {
          props.dispatch(editExpense(props.expense.id, expense));
          props.history.push("/");
        }}
      />
      <button
        onClick={() => {
          props.dispatch(removeExpense({ id: props.expense.id }));
          props.history.push("/");
        }}
      >
        Remove
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(exp => exp.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(EditExpensePage);