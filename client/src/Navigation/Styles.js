import styled from "styled-components";

const BaseH5 = styled.h5`
  font-family: "Times New Roman", Times, serif;
  font-weight: bold;
  &: hover {
    color: rgba(180, 55, 55, 1);
  }
  & > img {
    border-radius:50%;
    height: 32px;
    width: 32px;
    &:hover {
      transition: transform 0.8s ease;
      overflow: hidden; /* [1.2] Hide the overflowing of child elements */
      transform: scale(1.1);  
      border:4px;
      border-color:azure;
    }
  }
`;

const Styles = (theme) => {
  if (theme === "light") {
    return {
      H4: styled.h4`
        font-family: "Times New Roman", Times, serif;
        color: black;
        font-weight: bold;
        &: hover {
          color: rgba(180, 55, 55, 1);
        }
      `,
      H5: styled(BaseH5)`
        color: black;
      `,
    };
  } else {
    return {
      H4: styled.h4`
        font-family: "Times New Roman", Times, serif;
        color: azure;
        font-weight: bold;
        &: hover {
          color: rgba(180, 55, 55, 1);
        }
      `,
      H5: styled(BaseH5)`
        color: azure;
      `,
    };
  }
};

export default Styles;
