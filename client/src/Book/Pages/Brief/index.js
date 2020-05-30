import React from "react";
import { connect } from "react-redux";

const mapStatetoProps = (state) => {
  return {
    theme: state.util.theme,
    book: state.BookState.book,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

const brief = (props) => <p>{props.book.brief}</p>;

export default connect(mapStatetoProps,mapDispatchToProps)(brief);
