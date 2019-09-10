import getTotalExpense from "../../selectors/expense-total";
import expenses from "../fixtures/expenses";

test("should return 0 if no expenses", () => {
  const response = getTotalExpense([]);

  expect(response).toBe(0);
});

test("should correctly add up a single expense", () => {
  const res = getTotalExpense([expenses[0]]);
  expect(res).toBe(195);
});
test("should correctly add up a single expense", () => {
  const res = getTotalExpense(expenses);
  expect(res).toBe(670);
});
