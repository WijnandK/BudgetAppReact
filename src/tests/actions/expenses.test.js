import { addExpense, removeExpense, editExpense } from "../../actions/expenses";
import uuid from "uuid";

test("Should setup action for remove expense", () => {
  const action = removeExpense({ id: "123" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123"
  });
});

test("Should setup action for EditExpense", () => {
  const id = "123";
  const description = "newdescription";
  const note = "newnote";
  const newformstate = {
    description,
    note
  };
  const action = editExpense(id, newformstate);

  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123",
    updates: {
      description: "newdescription",
      note: "newnote"
    }
  });
});

test("Should setup action for empty values", () => {
  const action = addExpense();
  const expense = {
    description: "",
    note: "",
    amount: 0,
    createdAt: 0,
    id: uuid()
  };
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: { ...expense, id: expect.any(String) }
  });
});

test("action with values", () => {
  const data = {
    description: "test desc",
    note: "test note",
    amount: 21,
    createdAt: 1000
  };
  const action = addExpense(data);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...data,
      id: expect.any(String)
    }
  });
});
