import styled from "styled-components";

const BaseH5 = styled.h5`
  font-family: "Times New Roman", Times, serif;
  font-weight: bold;

  display: inline;
	position: relative;

  text-shadow: 0 1px 0 #ccc,
  0 6px 1px rgba(0,0,0,.1),
  0 0 5px rgba(0,0,0,.1),
  0 1px 3px rgba(0,0,0,.3),
  0 3px 5px rgba(0,0,0,.2),
  0 5px 10px rgba(0,0,0,.25);

  &: hover {
    color: rgba(180, 55, 55, 1);
  }
  & > img {
    border-radius: 50%;
    height: 32px;
    width: 32px;
    &:hover {
      transition: transform 0.8s ease;
      overflow: hidden; /* [1.2] Hide the overflowing of child elements */
      transform: scale(1.1);
      border: 4px;
      border-color: azure;
    }
  }
`;

const wrap = styled.div``;

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
      wrap,
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
      wrap,
    };
  }
};

export default Styles;
