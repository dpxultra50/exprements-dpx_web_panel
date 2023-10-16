import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderBanner = ({ bnrdata }) => {
  const { opacity } = bnrdata;

  return (
    <BannerWrapper>
      <BackImg>
        <img style={{ opacity: `${opacity}` }} src={bnrdata.backImg} alt="" />
      </BackImg>
      <BannerBox>
        <h1>{bnrdata.title}</h1>
        <h3>{bnrdata.subTitle}</h3>
      </BannerBox>
      {/* </Box> */}

      <ButtonBox>
        <Button>
          <Link to="/contactus/meeting/timedate">
            <ArrowCircleRightIcon />
            <span>Get A Quote </span>
          </Link>
        </Button>
      </ButtonBox>
    </BannerWrapper>
  );
};
const BannerWrapper = styled.div`
  width: 100%;
  min-height: 70vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const BackImg = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const BannerBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1 {
    margin: 0;
    font-family: "Orbitron", sans-serif;
    font-weight: 300;
    font-size: 5rem;
    line-height: 1.167;
    letter-spacing: -0.01562em;
    color: white;
    font-weight: 800;
    text-align: center;
    text-shadow: 2px 2px #ff4f47;

    @media (max-width: 845px) {
      font-size: 4rem;
    }
    @media (max-width: 556px) {
      font-size: 4rem;
    }
  }
  h3 {
    margin: 0;
    font-family: "Orbitron", sans-serif;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 1.167;
    color: white;
    font-weight: 700;
    text-align: center;
    text-shadow: 1px 1px #151518;
    text-transform: uppercase;
    letter-spacing: 4px;

    @media (max-width: 845px) {
      font-size: 2rem;
      letter-spacing: 2px;
    }
    @media (max-width: 556px) {
      font-size: 1rem;
      letter-spacing: 0px;
    }
  }
  @keyframes blink {
    0% {
      opacity: 0.5;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      opacity: 0.5;
    }
  }
  @media (max-width: 767px) {
    padding-top: 0px;
  }
  h3 {
    margin: 25px 0px;
  }
`;
const ButtonBox = styled.div`
  padding: 15px 0px;
`;
const Button = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    color: #ffffff;
    font-size: 12px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    padding: 15px 40px 15px;
    border-radius: 5px;
    overflow: hidden;
    transition: all 0.5s linear;
    position: relative;
    overflow: hidden;
    z-index: 1;
    @media (max-width: 427px) {
      padding: 12px 25px 12px;
    }
    span {
      z-index: 2;
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 180%;
      transition: all 0.5s linear;
      background: #ff4f47;
      z-index: 2;
      transition: 0.8s;
    }
    &:hover {
      color: #ff4f47;
      &::before {
        border-radius: 0% 0% 50% 50%;
        height: 0%;
      }
    }

    svg {
      margin-right: 4px;
      padding-left: 2px;
      font-size: 20px;
      z-index: 2;
    }
  }
`;
export default HeaderBanner;
