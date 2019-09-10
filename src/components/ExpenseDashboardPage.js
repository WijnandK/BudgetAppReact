import React, { Component } from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";
import expenseTotal from "../selectors/expense-total";
import expenseFilters from "../selectors/expenses";
import { connect } from "react-redux";
import numeral from "numeral";

class ExpenseDashboardPage extends Component {
  getExpensesTotal = () => {
    const filtered = expenseFilters(this.props.expenses, this.props.filters);
    const amount = expenseTotal(filtered);
    const rightAmount = numeral(amount / 100).format("$0,0.00");

    return rightAmount;
  };
  getExpensesLength = () => {
    const filtered = expenseFilters(this.props.expenses, this.props.filters);

    return filtered.length;
  };

  render() {
    return (
      <div>
        <h1>
          Viewing <strong>{this.getExpensesLength()}</strong> Expenses with a
          total of: <strong>{this.getExpensesTotal()}</strong>
        </h1>
        <ExpenseListFilters />
        <ExpenseList />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    expenses: state.expenses,
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseDashboardPage);
