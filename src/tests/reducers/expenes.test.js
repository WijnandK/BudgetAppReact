import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("Default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toHaveLength(2);
});

test("should Not remove expense if no id found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "noidfound"
  };
  const state = expensesReducer(expenses, action);
  expect(state).toHaveLength(3);
});

test("should add expense", () => {
  const action = {
    type: "ADD_EXPENSE",
    expense: {
      description: "new",
      amount: 0,
      createdAt: 0
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toHaveLength(4);
});

test("should Edit expense", () => {
  const action = {
    type: "EDIT_EXPENSE",
    id: "1",
    updates: {
      description: "new description"
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[0].description).toEqual("new description");
});
