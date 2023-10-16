import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #1c1b1f;
`;
const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 30vmax;
  height: 30vmax;
`;
const LogoCont = styled.div`
  max-width: 200px;
  max-height: 150px;
  @media (max-width: 767px) {
    max-width: 190px;
  }
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
  animation: breathe 3s ease-in-out infinite;
  @keyframes breathe {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const LoadingCircle = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-bottom: 5px solid #ff4f47;
  border-radius: 50%;

  animation: loadingRotate 800ms linear infinite;

  @keyframes loadingRotate {
    to {
      transform: rotateZ(-360deg);
    }
  }
`;
const Loader = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <LogoCont>
          <Logo src="/images/layouts/datapollex_logo.png" alt="Loading logo" />
        </LogoCont>
        <LoadingCircle></LoadingCircle>
      </LogoWrapper>
    </Wrapper>
  );
};

export default Loader;
