import React from "react";
import AvailableItems from "./AvailableItems";
import ItemsSummary from "./ItemsSummary";

const Items = () => {
  return (
    <React.Fragment>
      <ItemsSummary></ItemsSummary>
      <AvailableItems></AvailableItems>
    </React.Fragment>
  );
};

export default Items;
