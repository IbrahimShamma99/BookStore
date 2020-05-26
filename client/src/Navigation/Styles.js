import styled from "styled-components";

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
      H5: styled.h5`
        font-family: "Times New Roman", Times, serif;
        color: black;
        font-weight: bold;
        &: hover {
          color: rgba(180, 55, 55, 1);
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
      H5: styled.h5`
        font-family: "Times New Roman", Times, serif;
        color: azure;
        font-weight: bold;
        &: hover {
          color: rgba(180, 55, 55, 1);
        }
      `,
    };
  }
};

export default Styles;
