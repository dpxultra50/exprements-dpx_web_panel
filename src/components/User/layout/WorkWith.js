import styled from "styled-components";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import WorkCard from "../Cards/WorkCard";

const WorkWith = () => {
  const cardData = [
    {
      title: "Start Up Business",
      iconsrc: "/images/icons/start_up_business.png",
    },
    {
      title: "Enterprise",
      iconsrc: "/images/icons/enterprise.png",
    },
    {
      title: "Small & Medium Business",
      iconsrc: "/images/icons/small_medium_business.png",
    },
    {
      title: "Agencies",
      iconsrc: "/images/icons/agencies.png",
    },
  ];
  return (
    <Container>
      <Wraper>
        <TextBox>
          <AboutTitle>
            <p>
              <span>
                <CheckBoxOutlineBlankIcon />
              </span>
              Our Clientele
            </p>
            <h1>Who We Work With </h1>
          </AboutTitle>

          <AboutSubTxt>
            <p>
              As a leading IT service company in Finland, Japan, India we've
              worked with over 2,000 businesses, from startups to enterprises,
              to deliver industry-leading solutions.Our team at DataPollex
              offers a comprehensive range of IT services tailored to meet your
              business requirements.
              <br />
              With a focus on innovation, we use the latest technologies and
              tools to develop mobile applications that are engaging,
              user-friendly, and reliable. Our goal is to help our clients
              achieve their business objectives by developing customized
              solutions that meet their unique requirements.
            </p>
          </AboutSubTxt>
        </TextBox>
        <CardBox>
          <CardWrap>
            {cardData &&
              cardData.map((data, index) => (
                <WorkCard
                  key={index}
                  title={data.title}
                  iconsrc={data.iconsrc}
                />
              ))}
          </CardWrap>
        </CardBox>
      </Wraper>
    </Container>
  );
};
const Container = styled.div`
  background: #ff4f47;
  padding: 80px 35px 80px 35px;
  @media (max-width: 510px) {
    padding: 80px 15px 80px 15px;
  }
`;
const Wraper = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const TextBox = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  @media (max-width: 1200px) {
    width: 100%;
  }
`;
const AboutTitle = styled.div`
  margin-bottom: 31px;
  @media (max-width: 1200px) {
    margin-bottom: 10px;
  }
  p {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 24px;
    color: #ffffffff;
    font-weight: 800;
    line-height: 26px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 10px;
    @media (max-width: 767px) {
      font-size: 16px;
    }
    span {
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        margin-right: 10px;
        @media (max-width: 767px) {
          font-size: 14px;
        }
      }
    }
  }
  h1 {
    font-size: 48px;
    line-height: 58px;
    font-weight: 800;
    color: #ffffff;
    @media (max-width: 767px) {
      font-size: 24px;
      line-height: 34px;
      margin-bottom: 20px;
    }
  }
`;
const AboutSubTxt = styled.div`
  color: #ffffff;
`;
const CardBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 60%;
  @media (max-width: 1200px) {
    width: 100%;
    justify-content: center;
    margin-top: 30px;
  }
`;
const CardWrap = styled.div`
  width: 100%;
  display: grid;
  padding: 0px 0px 0px 60px;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  @media (max-width: 1200px) {
    gap: 40px;
    padding: 0px 0px 0px 0px;
  }
  @media (max-width: 510px) {
    gap: 15px;
  }
`;

export default WorkWith;
