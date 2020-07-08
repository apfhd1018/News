import React from "react";
import styled from "styled-components";

const AdBlock = styled.div`
  float: right;
  width: 20%;
  height: 400vh;
  border: 2px solid #000;
  margin-top: 3rem;
  margin-right: 3rem;
  text-align: center;
`;

const Ad = () => {
  return (
    <AdBlock>
      <div>광고란 입니다.</div>
    </AdBlock>
  );
};

export default Ad;
