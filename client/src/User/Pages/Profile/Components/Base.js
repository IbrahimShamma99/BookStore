import styled from "styled-components";

const BaseComponent = {
  ProfileContainer: styled.div`
    vertical-align: middle;
    align-content: middle;
    position: absolute;
    margin: 10px;
    top: 40%;
    left: 50%;
    width: 100%;
    height: 60%;
    max-height: 450px;
    transform: translateX(-50%) translateY(-50%);
    max-width: 95%;
    border-width: 2px 4px 4px 2px; /*top left bottom right */
    border-style: solid;
    border-color: #c93333;
    border-radius: 5px;
    background: ${props => props.primary? "bisque": "rgb(40,51,85)"};
    font-family: "Times New Roman", Times, serif;
    overflow: visible;
    `,
};
export default BaseComponent;
