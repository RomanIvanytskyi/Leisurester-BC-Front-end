import { Button } from "reactstrap";
import classes from "./RandomButton.module.css";
const RandomButton = () => {
  return (
    <Button className={classes.RandomButton} color="secondary" size="lg">Generate
    </Button>
  );
};
export default RandomButton;
