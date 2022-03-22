import React from "react";
import "antd/dist/antd.css";
import styled from "styled-components";
import AppHeader from "../components/AppHeader";

const ParentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const Wrapper = styled.section`
  width: ${(props) => props.width || "100%"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 5px;
`;

const NextBoard = ({ Component }) => {
  return (
    <>
      {/**해더 */}
      <AppHeader />
      {/**콘텐츠 */}
      <ParentWrapper>
        {/**left */}
        <Wrapper width="calc((100% - 1300px) / 2)"></Wrapper>
        {/**content */}
        <Wrapper width="1300px">
          <Component />
        </Wrapper>
        {/**right */}
        <Wrapper width="calc((100% - 1300px) / 2)"></Wrapper>
      </ParentWrapper>
    </>
  );
};

export default NextBoard;
