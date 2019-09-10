import expenseCounter from "../../selectors/expenseCounter";
import expenseFilters from "../../selectors/expenses";
import expenses from "../fixtures/expenses";
import { altFilters } from "../fixtures/expenses";

test("Should render 0 with empty list", () => {
  const res = expenseCounter([]);
  expect(res).toBe(0);
});

test("Should render right amount of expenes", () => {
  const filterExpenses = expenseFilters(expenses, altFilters);
  const res = expenseCounter(filterExpenses);

  expect(res).toBe(1);
});
