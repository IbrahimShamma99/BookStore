import styled from "styled-components";

const Styles = (theme) => {
  console.log("theme=",theme)
  if (theme === "light") {
    return {
      H4: styled.h4`
        font-family: "Times New Roman", Times, serif;
        color: black;
      `,
      H5: styled.h5`
        font-family: "Times New Roman", Times, serif;
        color: black;
      `,
    };
  } else {
    return {
      H4: styled.h4`
        font-family: "Times New Roman", Times, serif;
        color: azure;
      `,
      H5: styled.h5`
        font-family: "Times New Roman", Times, serif;
        color: azure;
      `,
    };
  }
};

export default Styles;
