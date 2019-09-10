export default expenseList => {
  return expenseList.map(exp => exp.amount).reduce((a, c) => a + c, 0);
};
