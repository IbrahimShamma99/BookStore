import styled from "styled-components";
import BaseComponent from "./Base";

const Styles = (theme) => {
  if (theme === "light") {
    return {
      ...BaseComponent,
      alert: styled.div`
        padding: 20px;
        background-color: #f44336; /* Red */
        color: white;
        margin-bottom: 15px;
      `,
      InfoContainer: styled.div`
        position: absolute;
        margin-left: 70%;
        top: 9%;
      `,
      InfoH4: styled.h4`
        overflow: auto;
        display: block;
        font-weight: bold;
        position: relative;
      `,
      Img: styled.img`
        margin-top: 40px;
        margin-left: 40px;
        border-radius: 50%;
        position: relative;
        height: 200px;
        width: 200px;
        visibility: visible;
        background: #e93333;
        border: 3px solid #e93333;
        overflow: hidden;
        transition: transform 0.5s ease;
        &:hover {
          transition: transform 0.8s ease;
          overflow: hidden; /* [1.2] Hide the overflowing of child elements */
          transform: scale(1.05);
        }
      `,
      usernameContainerP: styled.p`
        position: absolute;
        top: 50%;
        left: 25%;
        font-size: 24px;
        color: rgb(30, 30, 30);
        font-weight: lighter;
        max-width: 40%;
        overflow: visible;
      `,
      usernameContainerH3: styled.h3`
        position: absolute;
        top: 10%;
        word-break: break-word;
        display: block;
        left: 20%;
        font-size: 60px;
        color: rgb(30, 30, 30);
        font-weight: bolder;
        max-width: 40%;
      `,
      usernameContainerButton: styled.button`
        width: 160px;
        height: 50px;
        font-size: x-large;
        position: relative;
        font-weight: bolder;
        position: absolute;
        top: 70%;
        left: 4%;
        margin-top: 10px;
        color: rgb(0, 0, 0);
        background-color: #c93333;
        margin-top: auto;
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
      `,
      InfoAttributes: styled.h5`
        font-weight: lighter;
        width: 100%;
      `,
    };
  } else {
    return {
      ...BaseComponent,
      alert: styled.div`
        padding: 20px;
        background-color: #f44336; /* Red */
        color: white;
        margin-bottom: 15px;
      `,
      InfoContainer: styled.div`
        position: absolute;
        margin-left: 70%;
        top: 9%;
      `,
      InfoH4: styled.h4`
        overflow: auto;
        display: block;
        color: beige;
        font-weight: bold;
        position: relative;
      `,
      Img: styled.img`
        margin-top: 40px;
        margin-left: 40px;
        border-radius: 50%;
        position: relative;
        height: 200px;
        width: 200px;
        visibility: visible;
        background: #e93333;
        border: 3px solid #e93333;
        overflow: hidden;
        transition: transform 0.5s ease;
        &:hover {
          transition: transform 0.8s ease;
          overflow: hidden; /* [1.2] Hide the overflowing of child elements */
          transform: scale(1.05);
        }
      `,
      usernameContainerP: styled.p`
        position: absolute;
        top: 50%;
        left: 25%;
        font-size: 24px;
        color: azure;
        font-weight: lighter;
        max-width: 40%;
        overflow: visible;
      `,
      usernameContainerH3: styled.h3`
        position: absolute;
        top: 10%;
        word-break: break-word;
        display: block;
        left: 20%;
        font-size: 60px;
        color: azure;
        font-weight: bolder;
        max-width: 40%;
      `,
      usernameContainerButton: styled.button`
        width: 160px;
        height: 50px;
        font-size: x-large;
        position: relative;
        font-weight: bolder;
        position: absolute;
        top: 70%;
        left: 4%;
        margin-top: 10px;
        color: rgb(0, 0, 0);
        background-color: #c93333;
        margin-top: auto;
        border-radius: 8px;
        &: hover {
          text-shadow: 0 0 2em rgba(255, 255, 255, 1);
          color: rgb(50, 0, 0);
          border-color: rgb(202, 28, 28);
          background-color: #ffffff;
          border: #c93333 solid 2px;
          width: 160px;
          height: 50px;
        }
      `,
      InfoAttributes: styled.h5`
        font-weight: lighter;
        width: 100%;
        color: beige;
      `,
    };
  }
};

export default Styles;
