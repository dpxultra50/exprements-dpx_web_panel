import styled, {keyframes} from 'styled-components';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import {motion} from 'framer-motion';

const Presence = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const Data = [
    {
      number: '2500+',
      develop: 'Apps Developed',
    },
    {
      number: '1100+',
      develop: 'Website Designed',
    },
    {
      number: '2600+',
      develop: 'Happy Clients',
    },
    {
      number: '1000+',
      develop: 'Developers',
    },
    {
      number: '80+',
      develop: 'AI & ML Solutions',
    },
    {
      number: '120+',
      develop: 'Ecommerce Developed',
    },
    {
      number: '110+',
      develop: 'Blockchain Solutions',
    },
    {
      number: '40+',
      develop: 'Data Science',
    },
  ];

  return (
    <Container {...settings}>
      <Shape1></Shape1>
      <Shape2></Shape2>
      <Shape3
        as={motion.div}
        animate={{
          x: [-30, 5, -30],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}>
        <img src="/images/Industries-sape-2.png" alt="" />
      </Shape3>
      <Title>
        <p>
          <CheckBoxOutlineBlankIcon />
          Glimpse of our Work and Presence
        </p>
      </Title>

      <DataBox>
        {Data.map((data, index) => (
          <PresenceBox key={index}>
            <h2>{data.number}</h2>
            <p>{data.develop}</p>
          </PresenceBox>
        ))}
      </DataBox>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  margin-top: 60px;
  display: block;
  padding: 80px 35px 80px 35px;
  overflow: hidden;
  z-index: 1;
  @media (max-width: 480px) {
    padding: 40px 15px 80px 15px;
  }
  h1 {
    color: #ff4f47;
    margin-bottom: 60px;
    font-size: 40px;
    line-height: 48px;
    @media (max-width: 767px) {
      font-size: 20px;
      line-height: 30px;
      margin-bottom: 10px;
    }
  }
`;
const Title = styled.div`
  margin-bottom: 60px;
  @media (max-width: 924px) {
    margin-top: 20px;
  }
  @media (max-width: 767px) {
    margin-bottom: 40px;
  }

  p {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 24px;
    color: #ff4f47;
    font-weight: 800;
    line-height: 26px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 10px;

    svg {
      margin-right: 10px;
    }
    @media (max-width: 767px) {
      font-size: 16px;
    }
  }
`;
const DataBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  justify-items: center;
  @media (max-width: 767px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 592px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const PresenceBox = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  border: 1px solid rgb(43, 42, 49, 0.5);
  background: linear-gradient(
    to right,
    #2b2a31 50%,
    #00000030 50%,
    #000b152e 100%
  );
  color: white;
  padding: 10px 10px;
  border-radius: 10px;
  min-width: 140px;
  h2 {
    font-size: 30px;
    line-height: 40px;
    @media (max-width: 767px) {
      font-size: 20px;
      line-height: 30px;
      margin-bottom: 10px;
      svg {
        font-size: 12px;
      }
    }
  }
  p {
    font-size: 25px;
    line-height: 48px;
    @media (max-width: 767px) {
      font-size: 15px;
      line-height: 30px;
      margin-bottom: 10px;
    }
  }
`;

const Shape1 = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  mix-blend-mode: luminosity;
  opacity: 0.01;
  background-image: url(/images/industries-bg.jpg);
  z-index: -1;
`;
const breatheAnimation = keyframes`
  from {translate: 0px;}
  50%  {translate: -35px;} 
  to   {translate:  0px}
`;

const Shape2 = styled.div`
  position: absolute;
  top: -335px;
  right: 309px;
  animation-name: ${breatheAnimation};
  animation-duration: 3s;
  animation-iteration-count: infinite;
  @media (max-width: 450px) {
    right: 120px;
  }
  background-image: -moz-linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgb(255, 79, 71) 100%
  );
  background-image: -webkit-linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgb(255, 79, 71) 100%
  );
  background-image: -ms-linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgb(255, 79, 71) 100%
  );
  opacity: 0.502;
  width: 98px;
  height: 765px;
  transform: rotate(-45deg);
  z-index: 1;
  @keyframes glowing {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
const Shape3 = styled.div`
  z-index: -1 !important;
  position: absolute;
  top: 0;
  right: -30px;
  img {
    width: auto;
    vertical-align: middle;
  }
  @media (max-width: 450px) {
    right: -190px;
  }
`;

export default Presence;
