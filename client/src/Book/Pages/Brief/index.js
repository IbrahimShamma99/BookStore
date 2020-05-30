import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const briefDiv = styled.div`
  position: absolute;
  max-width: 1000px;
  transform: translateX(-50%) translateY(-50%);
  border-width: 2px 4px 2px 4px; /*top left bottom right */
  border-style: solid;
  border-color: beige;
  border-radius: 5px;
  background-color: ${(props) => (props.primary ? "azure" : "rgb(40,51,85)")};
  font-family: "Times New Roman", Times, serif;
  overflow: visible;
`;

const mapStatetoProps = (state) => {
  return {
    theme: state.util.theme,
    book: state.BookState.book,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

const brief = (props) => (
  <div>
    <briefDiv primary={props.theme === "light" ? true : null}>
      <p>{props.book.brief}</p>
    </briefDiv>
  </div>
);

export default connect(mapStatetoProps, mapDispatchToProps)(brief);
