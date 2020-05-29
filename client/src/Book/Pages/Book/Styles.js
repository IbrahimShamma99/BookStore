import styled from "styled-components";
const Page = styled.div``;

const BookDiv = styled.div`
  margin: 10px;
  position: absolute;
  width: 90%;
  left: 50%;
  height: 60%;
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
  @media (min-width: 320px) {
    height: 80%;
  }
  @media (min-width: 420px) {
    height: 60%;
  }
`;

const coverImage = styled.img`
  position: absolute;
  float: right;
  height: auto;
  max-height: 430px;
  max-width: 350px;
  visibility: visible;
  background: rgb(40, 51, 85);
  border: 3px solid rgb(40, 51, 85);
  border-color: rgb(40, 51, 85);
  overflow: visible;
  transition: transform 0.5s ease;
  @media (min-width: 768px) {
    top: 5%;
    left: 5%;
  }
  @media (min-width: 1024px) {
    top: 15px;
    left: 15px;
  }
  &: hover {
    transition: transform 0.8s ease;
    overflow: hidden; /* [1.2] Hide the overflowing of child elements */
    transform: scale(1.05);
  }
`;

const react = styled.div`
  border-radius: 50%;
  background: transparent;
  position: absolute;

  @media (min-width: 320px) {
    left: 4%;
    top: 83%;
  }
  @media (min-width: 420px) {
    left: 4%;
    top: 72%;
  }
  @media (min-width: 768px) {
    left: 8%;
    top: 76%;
  }
  @media (min-width: 1024px) {
    left: 2%;
    top: 72%;
  }
  @media (min-width: 1115px) {
    left: 2%;
    top: 80%;
  }
  & > button {
    padding: 4px;
    background: transparent;
    border-radius: 50%;
    width: 42px;
    height: 42px;

    &:hover {
      boder: 2px 2px 2px 2px;
      border-color: purple;
      border-radius: 50%;
    }
    &:focus {
      boder: 2px 2px 2px 2px;
      background: #958aee;
      border-radius: 50%;
    }
    &::selected {
      boder: 2px 2px 2px 2px;
      background: #958aee;
      border-radius: 50%;
    }

    & > img {
      left: 50%;
      border-radius: 50%;
      top: 50%;
      width: 23px;
      height: 23px;
    }
  }
`;

const ButtonWrapper = styled.button`
  width: 160px;
  height: 50px;
  padding: 5px;
  position: absolute;
  bottom: -120px;
  font-size: x-large;
  font-weight: bolder;
  color: rgb(0, 0, 0);
  background-color: #c93333;
  border-radius: 8px;
  @media (min-width: 320px) {
    left: 4%;
    top: 90%;
  }
  @media (min-width: 420px) {
    left: 4%;
    top: 60%;
  }
  @media (min-width: 768px) {
    left: 8%;
    top: 65%;
  }
  @media (min-width: 1024px) {
    left: 2%;
    top: 60%;
  }
  @media (min-width: 1115px) {
    left: 2%;
    top: 65%;
  }

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
  position: absolute;
  height: auto;
  min-height: auto;
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
  @media (min-width: 320px) {
    top: 65%;
    left: 40%;
    width: 200px;
    min-width: 200px;
    height: auto;
  }
  @media (min-width: 425px) {
    top: 25%;
    left: 75%;
    min-width: auto;
    width: auto;
  }
  @media (min-width: 640px) {
    top: 25%;
    left: 60%;
    width: auto;
  }
  @media (min-width: 768px) {
    top: 25%;
    left: 50%;
    width: auto;
  }
  @media (min-width: 896px) {
    top: 25%;
    left: 40%;
    width: auto;
  }
  @media (min-width: 1024px) {
    top: 25%;
    left: 30%;
  }
  @media (min-width: 1115px) {
    top: 25%;
    left: 26%;
    min-width: 200px;
    width: auto;
  }
  & > p {
    font-wight: bold;
    margin-left: 3px;
  }
  & > h4 {
    font-weight: bolder;
    margin-left: 2px;
  }
`;

const Comment = styled.div`
  background: ${(props) => (props.primary ? "bisque" : "rgb(30,41,55)")};
  width: 450px;
  position: absolute;
  height: 100px;
  top: 65%;
  border-radius: 10%;
  left: 25%;
  @media (min-width: 320px) {
    left: 4%;
    top: 83%;
  }
  @media (min-width: 420px) {
    left: 4%;
    top: 72%;
  }
  @media (min-width: 768px) {
    left: 8%;
    top: 76%;
  }
  @media (min-width: 1024px) {
    left: 2%;
    top: 72%;
  }
  @media (min-width: 1115px) {
    left: 8%;
    top: 72%;
    min-width: 500px;
  }

  & > img {
    margin-top: 15px;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    margin-left: 10px;
  }
`;

const submit = styled.button`
  position: relative;
  left: 63%;
  top: 35%;
  width: 50px;
  & > img {
    width: 32px;
    height: 32px;
  }
`;
const media = styled.button`
  position: relative;
  left: 73%;
  width: 50px;
  & > img {
    width: 32px;
    height: 32px;
  }
`;

const CommentForm = styled.textarea`
  top: 10%;
  position: absolute;
  margin-left: 10px;
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
  submit,
  coverImage,
  bookInfo,
  media,
};

export default StyleComponent;
