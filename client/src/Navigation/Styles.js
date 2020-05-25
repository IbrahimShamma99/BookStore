import styled from "styled-components";

const Styles = (theme) => {
  if (theme === "light") {
    return {
      H4: styled.h4`
        font-family: "Times New Roman", Times, serif;
        color: black;
        font-weight:bold;
      `,
      H5: styled.h5`
        font-family: "Times New Roman", Times, serif;
        color: black;
        font-weight:bold;
      `,
    };
  } else {
    return {
      H4: styled.h4`
        font-family: "Times New Roman", Times, serif;
        color: azure;
        font-weight:bold;
      `,
      H5: styled.h5`
        font-family: "Times New Roman", Times, serif;
        color: azure;
        font-weight:bold;
      `,
    };
  }
};

export default Styles;
