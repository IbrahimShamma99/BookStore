import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { TextareaAutosize } from "@material-ui/core";
import { connect } from "react-redux";
import * as bookTypes from "../../Store/book.actions";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";

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
            value={props.title}
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
            value={props.author}
            label="Author"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={15}>
          <InputLabel id="demo-simple-select-label">Genre</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            placeholder="Genre"
            value={props.genre}
            onChange={onChangeHandler("genre")}
          >
            <MenuItem value={"psychology"}>Psychology</MenuItem>
            <MenuItem value={"software_development"}>
              Software development
            </MenuItem>
            <MenuItem value={"self_improvement"}>Self improvement</MenuItem>
          </Select>
        </Grid>

        <Grid item xs={12}>
          <TextareaAutosize
            onChange={onChangeHandler("brief")}
            maxLength="1200"
            minLength="300"
            value={props.brief}
            placeholder="brief"
            rowsMax={4}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
const mapStateToProps = (state) => {
  const BookState = {
    userId: state.UserState.user._id,
    ...state.BookState.book,
    error: state.BookState.error,
    open_error: state.BookState.open_error,
    open_message: state.BookState.open_message,
    message: state.BookState.message,
  };
  return BookState;
};

const mapDispatchToProps = (dispatch) => {
  return {
    change: (name, value) => dispatch({ type: bookTypes.MODIFY, name, value }),
    submit: (userId) => dispatch({ type: bookTypes.CREATE_BOOK, user: userId }),
    refreshBook: () => dispatch({ type: bookTypes.REFRESH_BOOK }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
