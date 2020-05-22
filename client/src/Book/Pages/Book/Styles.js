import styled from "styled-components";

const BookDiv = styled.div`
  vertical-align: middle;
  align-content: middle;
  position: absolute;
  margin: 10px;
  width: 100%;
  height: 80%;
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
`;

const coverImage = styled.img`
  margin-top: 40px;
  margin-left: 40px;
  position: relative;
  height: 430px;
  width: 350px;
  visibility: visible;
  background: #e93333;
  border: 3px solid #e93333;
  overflow: visible;
  transition: transform 0.5s ease;
`;

const bookInfo = styled.div``;

const StyleComponent = { BookDiv, coverImage, bookInfo };

export default StyleComponent;