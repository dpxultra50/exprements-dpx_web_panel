import styled from 'styled-components';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import {Link} from 'react-router-dom';
import {motion, useAnimation, useInView} from 'framer-motion';
import {useRef} from 'react';
import {useEffect} from 'react';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

const Solutions = ({solutionData}) => {
  const {solution, keyWord} = solutionData;

  const ref = useRef(null);
  const boxref = useRef(null);

  const boxIsInView = useInView(boxref);
  const isInView = useInView(ref);

  const boxAnim = useAnimation();

  useEffect(() => {
    if (boxIsInView) {
      boxAnim.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.1,
          ease: 'easeInOut',
        },
      });
    }
    if (!boxIsInView) {
      boxAnim.start({
        y: 100,
        opacity: 0,
      });
    }
  }, [boxIsInView, boxAnim, isInView]);
  return (
    <Container>
      <Shape
        as={motion.div}
        animate={{
          x: [-30, 5, -30],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}>
        <img src="/images/footer-shape-.png" alt="" />
      </Shape>
      <ServicesTop>
        <TopTitle>
          <p>
            <CheckBoxOutlineBlankIcon />
            Our {keyWord} Solutions
          </p>
        </TopTitle>
      </ServicesTop>
      {/* Feature Starts */}
      <Feature ref={boxref}>
        {solution.map((data, i) => (
          <Wrap as={motion.div} animate={boxAnim} key={i}>
            <Headline>
              <Image>
                <img src={data.icon} alt="" />
              </Image>
              <Title>
                <h3>
                  {data.title.t1} <br /> {data.title.t2}
                </h3>
              </Title>
            </Headline>
            <Details>
              <p>{data.subTitle}</p>
              <Detaillink>
                <Link to="/contactus/meeting/timedate">Start now</Link>
                <ArrowCircleRightIcon />
              </Detaillink>
            </Details>
          </Wrap>
        ))}
      </Feature>
      {/* Feature Ends */}
    </Container>
  );
};
const Container = styled.div`
  position: relative;
  display: block;
  padding: 80px 35px 0px 35px;
  overflow: hidden;
  background-color: #1c1b1f;
  @media (max-width: 510px) {
    padding: 80px 15px 0px 15px;
  }
`;

const Shape = styled.div`
  position: absolute;
  top: 0;
  right: -30px;
  opacity: 0.05;

  img {
    width: auto;
    vertical-align: middle;
  }
`;

const ServicesTop = styled.div`
  padding-top: 35px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const TopTitle = styled.div`
  p {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    color: #ff4f47;
    font-weight: 800;
    line-height: 26px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 10px;
    @media (max-width: 767px) {
      font-size: 16px;
    }
    svg {
      margin-right: 10px;
    }
  }
`;
// Feature Starts
const Feature = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  padding-bottom: 100px;
  @media (max-width: 991px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;
const Wrap = styled.div`
  position: relative;
  padding: 0 40px 30px;
  background: #121113;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 10px 39.2px 0.8px rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  transition: all 500ms ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: #ff4f47;
  }

  &:hover {
    background-color: #151518;
    a {
      color: #ff4f47;
    }
  }
`;
const Headline = styled.div`
  display: flex;
`;
const Image = styled.div`
  height: 82px;
  width: 96px;
  min-width: 96px;
  text-align: center;
  justify-content: center;
  background: #ff4f47;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 60%;
  }
`;
const Title = styled.div`
  display: flex;
  margin-left: 35px;
  align-items: flex-end;
  @media (max-width: 385px) {
    margin-left: 15px;
  }

  h3 {
    font-size: 20px;
    font-weight: 800;
    line-height: 24px;
    color: #ffffff;
  }
`;
const Details = styled.div`
  padding-top: 21px;

  p {
    color: #817e87;
  }
`;
const Detaillink = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  a {
    color: #ffffff;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    transition: all 500ms ease;
  }
  svg {
    font-size: 18px;
    color: #ff4f47;
    margin-left: 2px;
  }
  @media (max-width: 991px) {
    a {
      color: #ff4f47;
    }
  }
`;
// Feature Ends
export default Solutions;
