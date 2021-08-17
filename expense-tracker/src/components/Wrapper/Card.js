import "./Card.css";

const Card = (props) => {
  const classes = "my-card " + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default Card;
