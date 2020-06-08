import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { TextareaAutosize } from "@material-ui/core";
import { connect } from "react-redux";
import * as bookTypes from "../../Store/book.actions";

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
          <TextareaAutosize 
          onChange={onChangeHandler("brief")}
          maxLength="1200" 
          minLength="300"
          placeholder="brief" 
          rowsMax={4} />
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
