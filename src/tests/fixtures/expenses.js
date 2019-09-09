import moment from "moment";

export default [
  {
    id: "1",
    description: "Coffee",
    note: "",
    amount: 195,
    createdAt: 0
  },
  {
    id: "2",
    description: "Milk",
    note: "",
    amount: 400,
    createdAt: moment(0)
      .subtract(5, "days")
      .valueOf()
  },
  {
    id: "3",
    description: "Gym mem",
    note: "",
    amount: 75,
    createdAt: moment(0)
      .add(5, "days")
      .valueOf()
  }
];
