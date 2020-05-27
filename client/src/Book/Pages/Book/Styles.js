import styled from "styled-components";

const BookDiv = styled.div`
  vertical-align: middle;
  align-content: middle;
  position: absolute;
  margin: 10px;
  width: 95%;
  height: 80%;
  transform: translateX(-50%) translateY(-50%);
  max-width: 95%;
  max-height: 80%;
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
  top: 10px;
  left: 10px;
  margin-left: 40px;
  position: absolute;
  height: 430px;
  width: 350px;
  visibility: visible;
  background: #e93333;
  border: 3px solid #e93333;
  overflow: visible;
  transition: transform 0.5s ease;
  &: hover {
    transition: transform 0.8s ease;
    overflow: hidden; /* [1.2] Hide the overflowing of child elements */
    transform: scale(1.05);
  }
`;

const ButtonWrapper = styled.button`
  position: relative;
  width: 160px;
  height: 50px;
  padding: 5px;
  font-size: x-large;
  position: relative;
  font-weight: bolder;
  color: rgb(0, 0, 0);
  background-color: #c93333;
  margin-top: auto;
  margin-left: 5px;
  border-radius: 8px;
  &: hover {
    text-shadow: 0 0 2em rgba(255, 255, 255, 1);
    color: rgb(50, 0, 0);
    border-color: rgb(202, 28, 28);
    background-color: #ffffff;
    border: #c93333 sInfoH4olid 2px;
    width: 160px;
    height: 50px;
  }
`;


const bookInfo = styled.div`
  vertical-align: middle;
  align-content: middle;
  position: relative;
  margin: 10px;
  top: 35%;
  left: 44%;
  width: 20%;
  height: 60%;
  transform: translateX(-50%) translateY(-50%);
  max-width: 95%;
  max-height: 100%;
  border-width: 1px 2px 2px 4px; /*top left bottom right */
  border-style: solid;
  border-color: #c93333;
  border-radius: 5px;
  background-color: ${(props) => (props.primary ? "azure" : "#505050")};
  font-family: "Times New Roman", Times, serif;
  overflow: visible;
  & > p {
    margin-left: 7px;
  }
  & > h4 {
    margin-left: 5px;
    font-weight: bolder;
  }
`;

const StyleComponent = { ButtonWrapper, BookDiv, coverImage, bookInfo };

export default StyleComponent;
