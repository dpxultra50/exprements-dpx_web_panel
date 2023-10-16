import styled from 'styled-components';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import {Link} from 'react-router-dom';
import {motion, useAnimation, useInView} from 'framer-motion';
import {useRef} from 'react';
import {useEffect} from 'react';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

const Features = () => {
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
        <img
          src="https://roofsie-html.vercel.app/main-html/assets/images/shapes/brand-one-shape-1-dark.png"
          alt=""
        />
      </Shape>
      <Shape1
        as={motion.div}
        animate={{
          x: [-30, 5, -30],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}>
        <img
          src="https://roofsie-html.vercel.app/main-html/assets/images/shapes/brand-one-shape-1-dark.png"
          alt=""
        />
      </Shape1>
      <ShapeDown
        as={motion.div}
        animate={{
          x: [-30, 5, -30],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}>
        <img
          src="https://roofsie-html.vercel.app/main-html/assets/images/shapes/brand-one-shape-1-dark.png"
          alt=""
        />
      </ShapeDown>
      <ShapeDown2
        as={motion.div}
        animate={{
          x: [-30, 5, -30],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}>
        <img
          src="https://roofsie-html.vercel.app/main-html/assets/images/shapes/brand-one-shape-1-dark.png"
          alt=""
        />
      </ShapeDown2>

      <ServicesTop>
        <TopTitle>
          <p>
            <CheckBoxOutlineBlankIcon />
            USP OF DATAPOLLEX
          </p>
        </TopTitle>
      </ServicesTop>
      {/* Feature Starts */}
      <Feature ref={boxref}>
        <Wrap as={motion.div} animate={boxAnim}>
          <Headline>
            <Image>
              <img src="/images/icons/dedicated-development-team.svg" alt="" />
            </Image>
            <Title>
              <h3>
                Dedicated <br /> Development Team
              </h3>
            </Title>
          </Headline>
          <Details>
            <p>
              Our skilled team is dedicated to achieving optimal results for
              every project, working tirelessly until the job is completed to
              their high standards.
            </p>

            <Detaillink>
              <Link to="/contactus/meeting/timedate">Start now</Link>
              <ArrowCircleRightIcon />
            </Detaillink>
          </Details>
        </Wrap>
        <Wrap as={motion.div} animate={boxAnim}>
          <Headline>
            <Image>
              <img src="/images/icons/Quality-Deliverance.svg" alt="" />
            </Image>
            <Title>
              <h3>
                Quality <br /> Deliverance
              </h3>
            </Title>
          </Headline>
          <Details>
            <p>
              Our commitment is to provide our clients with top-quality products
              that meet all their project requirements, while offering the most
              competitive prices in the industry.
            </p>

            <Detaillink>
              <Link to="/contactus/meeting/timedate">Start now</Link>
              <ArrowCircleRightIcon />
            </Detaillink>
          </Details>
        </Wrap>
        <Wrap as={motion.div} animate={boxAnim}>
          <Headline>
            <Image>
              <img src="/images/icons/excellent-support.svg" alt="" />
            </Image>
            <Title>
              <h3>
                Excellent <br /> Support
              </h3>
            </Title>
          </Headline>
          <Details>
            <p>
              Our top priority is to ensure our clients' satisfaction, and we go
              above and beyond to assist them in every possible way to meet
              their expectations and fulfill their needs.
            </p>
            <Detaillink>
              <Link to="/contactus/meeting/timedate">Start now</Link>
              <ArrowCircleRightIcon />
            </Detaillink>
          </Details>
        </Wrap>
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
  margin-top: 40px;
  background-color: #1c1b1f;
  @media (max-width: 510px) {
    padding: 40px 15px 0px 15px;
  }
  @media (max-width: 992px) {
    margin-top: 30px;
  }
`;

const Shape = styled.div`
  position: absolute;
  top: 0;
  right: -30px;
  opacity: 0.09;

  img {
    width: auto;
    vertical-align: middle;
  }
`;
const Shape1 = styled.div`
  position: absolute;
  top: 0px;
  left: -30px;
  opacity: 0.09;

  img {
    width: auto;
    vertical-align: middle;
  }
`;
const ShapeDown = styled.div`
  position: absolute;
  bottom: 0;
  left: -30px;
  opacity: 0.09;

  img {
    width: auto;
    vertical-align: middle;
  }
`;
const ShapeDown2 = styled.div`
  position: absolute;
  bottom: 50px;
  left: -30px;
  opacity: 0.09;

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
export default Features;
