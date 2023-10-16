import styled from 'styled-components';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

const ServiceDetails = ({dtlsData}) => {
  return (
    <Container>
      <TeamFeature>
        <ServicesTop>
          <Title>
            <p>
              <CheckBoxOutlineBlankIcon />
              Why Choose DataPollex
            </p>
            <h1>For {dtlsData.keyWord} Development?</h1>
          </Title>
          <Details>
            <DetailsBox>
              <p>
                <ArrowForwardIosIcon
                  sx={{
                    fontSize: '13px',
                    marginRight: '10px',
                    color: ' #ff4f47;',
                  }}
                />
                Based on high recruitment standards, we help companies to extend
                their IT talent by providing highly skilled engineers on{' '}
                {dtlsData.keyWord}.
              </p>

              <p style={{marginTop: '20px'}}>
                <ArrowForwardIosIcon
                  sx={{
                    fontSize: '13px',
                    marginRight: '10px',
                    color: ' #ff4f47;',
                  }}
                />
                Our development team works on building scalable, secure, and
                user-friendly applications on next generation technologies.
                DataPollex has been recognized as a leading Software
              </p>

              <p style={{marginTop: '20px'}}>
                <ArrowForwardIosIcon
                  sx={{
                    fontSize: '13px',
                    marginRight: '10px',
                    color: ' #ff4f47;',
                  }}
                />
                Development company in Finland, Japan, Inda, Bangledsh with high
                performance on {dtlsData.keyWord} applications.
              </p>
            </DetailsBox>
          </Details>
        </ServicesTop>

        <TeamImg>
          <img src={dtlsData.dtlsImg} alt="" />
        </TeamImg>
      </TeamFeature>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: block;
  padding: 80px 35px 80px 35px;
  overflow: hidden;
  z-index: 1;
  @media (max-width: 480px) {
    padding: 40px 15px 80px 15px;
  }
`;

const TeamImg = styled.div`
  flex: 1.5;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const ServicesTop = styled.div`
  flex: 1.5;
  margin-bottom: 30px;
  margin-left: 30px;
  @media (max-width: 924px) {
    margin-left: 6px;
  }
`;
const Title = styled.div`
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
  h1 {
    font-size: 48px;
    line-height: 50px;
    font-weight: 800;
    color: #ffffff;
    @media (max-width: 767px) {
      font-size: 24px;
      line-height: 34px;
    }
  }
`;
const Details = styled.div`
  margin-top: 26px;
  padding-right: 40px;
  @media (max-width: 767px) {
    padding-right: 0px;
  }
`;
const DetailsBox = styled.div``;
const TeamFeature = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 924px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export default ServiceDetails;
