import styled from "styled-components";
import Button from "react-bootstrap/Button";

const BaseH5 = styled.h5`
  font-family: "Times New Roman", Times, serif;
  font-weight: bold;

  display: inline;
  position: relative;

  text-shadow: 0 1px 0 #ccc, 0 6px 1px rgba(0, 0, 0, 0.1),
    0 0 5px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.3),
    0 3px 5px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.25);

  &: hover {

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

const NavButton = styled(Button)`
  background: transparent;
  border-color: transparent;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: transparent;
  }
  &::selected {
    background: rgba(255, 255, 255, 0.1);
  }
  &:focus {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const wrap = styled.div``;

const Styles = (theme) => {
  if (theme === "light") {
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
        color: rbga(40, 30, 30, 0.8);
      `,
      HOME: styled.div`
        background: rgba(0, 0, 0, 0.8);
      `,
      wrap,
      StyledNavButton: styled(NavButton)`
        &:hover {
          background: rgba(0, 0, 0, 0.2);
          border-color: transparent;
        }
        &::selected {
          background: rgba(0, 0, 0, 0.2);
        }
        &:focus {
          background: rgba(0, 0, 0, 0.2);
        }
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
      HOME: styled.div``,

      H5: styled(BaseH5)`
        color: azure;
      `,
      wrap,
      StyledNavButton: NavButton,
    };
  }
};

export default Styles;
