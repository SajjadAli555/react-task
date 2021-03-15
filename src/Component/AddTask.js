import React, {useState}from "react";
import { Checkbox, TextField, Button, FormControl } from "@material-ui/core";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("plase add task");
      return;
    }

    onAdd({ text, day, reminder });
    setText("");
    setDay("");
    setReminder(false);
  };
  return (
    <FormControl variant="outlined">
      <TextField id="outlined-basic" label="Text"  onChange={(e) => setText(e.target.value)} variant="outlined" />
      <br />
      <TextField id="outlined-basic"  onChange={(e) => setDay(e.target.value)} label="Day & Time" variant="outlined" />
      <br />
      <Checkbox inputProps={{ "aria-label": "uncontrolled-checkbox" }} />
      <br />
      <Button variant="outlined" onClick={onSubmit} size="medium" color="primary">
        Save Task
      </Button>
    </FormControl>
  );
};

export default AddTask;
