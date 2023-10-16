import styled from 'styled-components';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import {Box} from '@mui/material';

const brands = [
  '/images/clintlogo/about-clint-1.png',
  '/images/clintlogo/about-clint-2.png',
  '/images/clintlogo/about-clint-3.png',
  '/images/clintlogo/about-clint-4.png',
  '/images/clintlogo/about-clint-5.png',
  '/images/clintlogo/about-clint-6.png',
  '/images/clintlogo/about-clint-7.png',
];

const Consumers = () => {
  return (
    <Box className="meet-consumer">
      <BrandText>
        <MeetBox>
          <AutoAwesomeMotionIcon sx={{mr: 2}}></AutoAwesomeMotionIcon>
          <h3>MEET OUR</h3>
        </MeetBox>

        <h2> Key Verticals & Customers </h2>

        <Box sx={{mt: 2}}>
          <hr />
        </Box>
      </BrandText>

      <BrandBox>
        {brands.map((brand, index) => (
          <img key={index} height={100} src={brand} alt="brands" />
        ))}
      </BrandBox>
    </Box>
  );
};
const BrandText = styled.div`
  margin-bottom: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h2 {
    font-size: 48px;
    line-height: 50px;
    font-weight: 800;
    color: #ffffff;
    @media only screen and (max-width: 768px) {
      font-size: 24px;
      line-height: 34px;
    }
  }
  hr {
    width: 900px;
    margin-top: 10px;
    @media only screen and (max-width: 930px) {
      width: 800px;
    }
    @media only screen and (max-width: 820px) {
      width: 700px;
    }
    @media only screen and (max-width: 768px) {
      width: 500px;
    }
    @media only screen and (max-width: 520px) {
      width: 400px;
    }
    @media only screen and (max-width: 425px) {
      width: 350px;
    }
  }
`;
const MeetBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e74c3c;
  h3 {
    font-size: 30px;
    line-height: 50px;
    font-weight: 900;
    color: #e74c3c;
    @media only screen and (max-width: 768px) {
      font-size: 20px;
      line-height: 34px;
    }
  }
`;

const BrandBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 1480px) {
    flex-wrap: wrap;
  }
`;
export default Consumers;
