import React from "react";

import { Triangle } from "react-loader-spinner";

import { LoadingStyled } from "./styles";

const Loading = () => {
  return (
    <LoadingStyled>
      <Triangle
        height="100"
        width="100"
        color="#000"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        visible={true}
      />
    </LoadingStyled>
  );
};

export default Loading;
