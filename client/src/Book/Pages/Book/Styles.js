import styled from "styled-components";

const BookDiv = styled.div`
  position: absolute;
  margin: 10px;
  width: 90%;
  height: 80%;
  top:40%;
  transform: translateX(-50%) translateY(-50%);
  max-width: 1400px;
  max-height: 600px;
  border-width: 2px 4px 4px 2px; /*top left bottom right */
  border-style: solid;
  border-color: rgb(40,51,85);
  border-radius: 5px;
  background: ${(props) => (props.primary ? "bisque" : "rgb(30,41,55)")};
  font-family: "Times New Roman", Times, serif;
  overflow: hidden;
`;

const coverImage = styled.img`
  margin-top: 2%;
  margin-left: 2%;
  top: 10px;
  left: 10px;
  position: absolute;
  height: 430px;
  width: 350px;
  visibility: visible;
  background: rgb(40,51,85);;
  border: 3px solid rgb(40,51,85);;
  border-color: rgb(40,51,85);
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
  bottom:-120px;
  left:10%;
  font-size: x-large;
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
  left:45%;
  top:45%;
  margin: 15px;
  width: 20%;
  height: 60%;
  transform: translateX(-50%) translateY(-50%);
  max-width: 95%;
  max-height:350px;
  border-width: 2px 4px 2px 4px; /*top left bottom right */
  border-style: solid;
  border-color: beige;
  border-radius: 5px;
  background-color: ${(props) => (props.primary ? "azure" : "rgb(40,51,85);")};
  font-family: "Times New Roman", Times, serif;
  overflow: visible;
  & > p {
    margin-left: 7px;
    font-wight:bold;
  }
  & > h4 {
    margin-left: 5px;
    font-weight: bolder;
  }
`;

const StyleComponent = { ButtonWrapper, BookDiv, coverImage, bookInfo };

export default StyleComponent;
