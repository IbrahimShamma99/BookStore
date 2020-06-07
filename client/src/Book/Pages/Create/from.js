import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { TextareaAutosize } from "@material-ui/core";

const Form = (props) => {
  const onChangeHandler = (name) => (event) => {
    if (name === "cover") {
      return props.change(name, event.target.files[0]);
    }
    props.change(name, event.target.value);
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Book Info
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="title"
            name="title"
            label="Title"
            onChange={onChangeHandler("title")}
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="author"
            name="author"
            label="Author"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextareaAutosize maxLength="1200" placeholder="brief" rowsMax={4} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Form;
