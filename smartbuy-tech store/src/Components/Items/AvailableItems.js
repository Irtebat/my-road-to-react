import React from "react";
import classes from "./AvailableItems.module.css";
import Card from "../UI/Card";
import Item from "./Item/Item";

const DUMMY_ITEMS = [
  {
    id: "m1",
    name: "Logitech C930e",
    description: "Webcamera",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Logitech G915",
    description: "Gaming laptop",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Lenovo 300 Mosue",
    description: "USB mouse",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Logitech C920",
    description: "Webcamera",
    price: 18.99,
  },
];

const AvailableItems = () => {
  const itemsList = DUMMY_ITEMS.map((item) => {
    return (
      <Item
        key={item.id}
        name={item.name}
        description={item.description}
        price={item.price}
      />
    );
  });
  return (
    <section className={classes["items"]}>
      <Card>
        <ul>{itemsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableItems;
