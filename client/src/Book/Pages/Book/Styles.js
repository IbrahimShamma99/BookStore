import styled from "styled-components";
const Page = styled.div``;

const BookDiv = styled.div`
  position: absolute;
  margin: 10px;
  width: 90%;
  height: 50%;
  top: 40%;
  transform: translateX(-50%) translateY(-50%);
  max-width: 1400px;
  max-height: 600px;
  border-width: 2px 4px 4px 2px; /*top left bottom right */
  border-style: solid;
  border-color: rgb(40, 51, 85);
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
  height: auto;
  max-height: 430px;
  max-width: 350px;
  visibility: visible;
  background: rgb(40, 51, 85);
  border: 3px solid rgb(40, 51, 85);
  border-color: rgb(40, 51, 85);
  overflow: visible;
  transition: transform 0.5s ease;
  &: hover {
    transition: transform 0.8s ease;
    overflow: hidden; /* [1.2] Hide the overflowing of child elements */
    transform: scale(1.05);
  }
`;

const react = styled.div`
  position: relative;
  left:40%;
  top: 50px;
  border-radius: 50%;
  background:transparent;
  & > button {
    padding:4px;
    background:transparent;
    position: relative;red
    margin-left: 15px;
    border-radius: 50%;
    width: 42px;
    height: 42px;
    &:hover {
      boder: 2px 2px 2px 2px ;
      border-color:purple;
      border-radius: 50%;
    }
    &:focus {
      boder: 2px 2px 2px 2px ;
      background:#958aee;
      border-radius: 50%;
    }
    &::selected {
      boder: 2px 2px 2px 2px ;
      background:#958aee;
      border-radius: 50%;
    }
    & > img {
      left:50%;
      border-radius: 50%;
      top:50%;
      width: 23px;
      height: 23px;
    }
  }
`;

const ButtonWrapper = styled.button`
  position: relative;
  width: 160px;
  height: 50px;
  padding: 5px;
  bottom: -120px;
  left: 4%;
  top: 5%;
  font-size: x-large;
  font-weight: bolder;
  color: rgb(0, 0, 0);
  background-color: #c93333;
  margin-top: 1%;
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
  margin-top: 2%;
  margin-left: 2%;
  top: 30%;
  left: 30%;
  position: absolute;
  height: auto;
  max-height: 430px;
  max-width: 350px;
  transform: translateX(-50%) translateY(-50%);
  border-width: 2px 4px 2px 4px; /*top left bottom right */
  border-style: solid;
  border-color: beige;
  border-radius: 5px;
  background-color: ${(props) => (props.primary ? "azure" : "rgb(40,51,85)")};
  font-family: "Times New Roman", Times, serif;
  overflow: visible;
  & > p {
    margin-left: 7px;
    font-wight: bold;
  }
  & > h4 {
    margin-left: 5px;
    font-weight: bolder;
  }
`;

const Comment = styled.div`
  margin: 10px;
  background: ${(props) => (props.primary ? "bisque" : "rgb(30,41,55)")};
  width: 450px;
  margin-top: 7%;
  height: 100px;
  position: absolute;
  top: 65%;
  border-radius: 10%;
  left: 25%;
  & > img {
    margin-top: 10px;
    margin-left: 5px;
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }
`;

const CommentForm = styled.textarea`
  position: absolute;
  margin-left: 10px;
  top: 10%;
  color: ${(props) => (props.primary ? "rgb(30,41,55)" : "bisque")};
  font-weight: bold;
  border-color: ${(props) => (props.primary ? "rgb(20,31,45)" : "azure")};
  background: ${(props) => (props.primary ? "azure" : "rgb(20,31,45)")};
  border-radius: 5px;
  height: auto;
  width: 70%;
`;

const StyleComponent = {
  Comment,
  CommentForm,
  react,
  ButtonWrapper,
  BookDiv,
  Page,
  coverImage,
  bookInfo,
};

export default StyleComponent;
