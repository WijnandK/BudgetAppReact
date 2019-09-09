import {
  setStartDate,
  setEndDate,
  sortByAmount,
  sortByDate,
  setTextFilter
} from "../../actions/filters";
import moment from "moment";
test("Should generate set start date action", () => {
  const action = setStartDate(moment(0));

  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0)
  });
});

test("Should generate set end date action", () => {
  const action = setEndDate(moment(0));

  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0)
  });
});

test("Should set sortAmount", () => {
  const action = sortByAmount();

  expect(action).toEqual({
    type: "SORT_BY_AMOUNT"
  });
});
test("Should set sortByDate", () => {
  const action = sortByDate();

  expect(action).toEqual({
    type: "SORT_BY_DATE"
  });
});
test("Should set Text filter with default value", () => {
  const action = setTextFilter();

  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: ""
  });
});
test("Should set text filter with set value", () => {
  const textFilter = "SomeTextValue";
  const action = setTextFilter(textFilter);

  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: textFilter
  });
});
