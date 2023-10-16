import {Link} from 'react-router-dom';
import styled from 'styled-components';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import {motion} from 'framer-motion';

const ServiceHeader = ({header}) => {
  const {title, subTitle, headerimg} = header;
  return (
    <Container>
      <Shape1
        as={motion.div}
        animate={{
          x: [-40, 5, -40],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}>
        <img src="/images/services-shape-1.png" alt="" />
      </Shape1>
      <Shape2>
        <img src="/images/services-shape-2.png" alt="" />
      </Shape2>
      <FlexWrapper>
        <Detail>
          {title.map((text, i) => (
            <p key={i}>{text}</p>
          ))}

          <span>{subTitle}</span>

          <Button>
            <Link to="/contactus/meeting/timedate">
              <ArrowCircleRightIcon />
              <span>Get A Quote </span>
            </Link>
          </Button>
        </Detail>

        <ImgBox>
          <img src={headerimg} alt="" />
        </ImgBox>
      </FlexWrapper>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: block;
  padding: 30px 35px 28px 35px;
  overflow: hidden;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    content: '';
    background-color: #1c1b1f;
    height: 505px;
    z-index: -1;
  }

  @media (max-width: 480px) {
    padding: 40px 0px 15px 0px;
  }
`;

const FlexWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 1100px) {
    flex-direction: column;
    img {
      margin-top: 40px;
    }
  }
`;

const Detail = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  font-weight: 800px;
  p {
    color: white;
    font-size: 36px;
    line-height: 48px;
    font-weight: 800;
    @media (max-width: 767px) {
      font-size: 20px;
      line-height: 25px;
      margin-bottom: 10px;
    }
  }
  @media (max-width: 480px) {
    padding: 0px 15px;
  }
`;

const Button = styled.div`
  margin-top: 30px;
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
      content: '';
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

const ImgBox = styled.div`
  display: block;
  img {
    width: 100%;
    max-width: 745px;
  }
`;

const Shape1 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  mix-blend-mode: luminosity;
  img {
    opacity: 0.06;
  }
`;
const Shape2 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  mix-blend-mode: luminosity;
  img {
    width: auto;
    opacity: 0.02;
  }
`;

export default ServiceHeader;
