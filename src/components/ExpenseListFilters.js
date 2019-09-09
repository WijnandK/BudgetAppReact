import React, { Component } from "react";
import { DateRangePicker } from "react-dates";
import { connect } from "react-redux";
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate
} from "../actions/filters";

class ExpenseListFilters extends Component {
  state = {
    calendarFocused: null
  };
  onFocusChange = calendarFocused => {
    this.setState(() => ({ calendarFocused }));
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };
  handleDropdown = e => {
    let value = e.target.value;
    if (value === "amount") {
      this.props.dispatch(sortByAmount());
    } else if (value === "date") {
      this.props.dispatch(sortByDate());
    }
  };
  render() {
    return (
      <div>
        <input
          onChange={e => this.props.dispatch(setTextFilter(e.target.value))}
          type="text"
          value={this.props.filters.text}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={e => this.handleDropdown(e)}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);
