import expensesFilter from "./expenses";
export default (expenses, filters) => {
  const filtered = expensesFilter(expenses, filters);
  return filtered.length;
};
