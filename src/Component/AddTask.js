import React from "react";
import { Checkbox, TextField, Button } from "@material-ui/core";

function AddTask() {
  return (
    <div>
      <TextField id="outlined-basic" label="Text" variant="outlined" /><br></br>
      <TextField id="outlined-basic" label="Day & Time" variant="outlined" /><br />
      <Checkbox inputProps={{ "aria-label": "uncontrolled-checkbox" }} /><br />
      <Button
        variant="outlined"
        size="medium"
        color="primary"
      >
        Submit
      </Button>
    </div>
  );
}

export default AddTask;
