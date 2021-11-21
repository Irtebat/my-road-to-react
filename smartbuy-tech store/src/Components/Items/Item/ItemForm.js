import React, { useRef, useState } from "react";
import classes from "./ItemForm.module.css";
import Input from "../../UI/Input";

const ItemForm = (props) => {
  const amountInputRef = useRef();

  const [amountIsValid, setAmountIsValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (enteredAmount.trim().length == 0 || enteredAmountNumber < 1) {
      setAmountIsValid(false);
      return;
    } else {
      setAmountIsValid(true);
      props.onAddToCart(enteredAmountNumber);
    }
  };
  return (
    <form className={classes["form"]} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: 1,
          step: 1,
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Enter a valid amount</p>}
    </form>
  );
};

export default ItemForm;
