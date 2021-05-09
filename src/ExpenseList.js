import React, { useContext, useState, useEffect } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "./AppContext";
const ExpenseList = () => {
  const { expenses } = useContext(AppContext);
  // const expenses = [
  //   { id: 12, name: "shopping", cost: 40 },
  //   { id: 13, name: "holiday", cost: 400 },
  //   { id: 14, name: "car service", cost: 50 }
  // ];
  const [search, SetSearch] = useState("");
  const [filteredExpense, SetFilteredExpense] = useState([]);
  useEffect(() => {
    SetFilteredExpense(
      expenses.filter((expitem, index) => {
        return expitem.name.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [search, expenses]);
  return (
    <>
      <input
        type="text"
        placeholder="search text"
        className="form-control col-sm-6"
        onChange={(e) => SetSearch(e.target.value)}
      />
      <br />
      <ul className="list-group">
        {filteredExpense.map((expense) => (
          <ExpenseItem
            id={expense.id}
            name={expense.name}
            cost={expense.cost}
          />
        ))}
      </ul>
    </>
  );
};

export default ExpenseList;
