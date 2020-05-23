import React from "react";
import styled from "styled-components";

const BookFeed = styled.div`
  vertical-align: middle;
  align-content: middle;
  position: absolute;
  margin: 10px;
  width: 100%;
  height: 100%;
  transform: translateX(-50%) translateY(-50%);
  max-width: 95%;
  max-height: 100%;
  border-width: 2px 4px 4px 2px; /*top left bottom right */
  border-style: solid;
  border-color: #c93333;
  border-radius: 5px;
  background: ${(props) => (props.primary ? "bisque" : "#333333")};
  font-family: "Times New Roman", Times, serif;
  overflow: hidden;
  & > p {
    margin-left: 5px;
    font-weight: bolder;
  }
`;

const element = (props) => (
  <BookFeed>
      <p>{props.title}</p>
      <p>{props.author}</p>
  </BookFeed>
);

export default element;
