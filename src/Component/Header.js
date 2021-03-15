import { Button } from "@material-ui/core";
const Header = ({ showAdd, onAdd }) => {
  return (
    <div>
      <h3>Task Tarcker</h3>
      <Button
        variant="contained"
        type="primery"
        onClick={onAdd}
        text={showAdd ? "close" : "Add"}
      >
        OnAdd
      </Button>
    </div>
  );
};
export default Header;
