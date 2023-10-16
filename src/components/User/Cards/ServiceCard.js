import { Link } from "react-router-dom";
import styled from "styled-components";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const ServiceCard = ({ title, imgsrc, technologies, link }) => {
  return (
    <Card>
      <Container>
        <Content>
          <Title>
            <Shape1></Shape1>
            <img src={imgsrc} alt="" />
            <h4>{title}</h4>
          </Title>
          <TecList>
            {technologies &&
              technologies.map((data, index) => (
                <li key={index}>
                  <img src={data.icon} alt="" />
                  {data.name}
                </li>
              ))}
          </TecList>
        </Content>
        <ButtonCont>
          <Link to={link}>
            Read More
            <ArrowCircleRightIcon />
          </Link>
        </ButtonCont>
      </Container>
    </Card>
  );
};

const Card = styled.div`
  position: relative;
  width: 100%;
  padding-right: 30px;
  padding-left: 30px;
  margin-top: 25px;
  flex: 0 0 28%;
  min-width: 350px;
  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.07);
  @media only screen and (min-width: 1024px) and (max-width: 1119px) {
    min-width: 320px;
  }
  @media (max-width: 450px) {
    min-width: 345px;
    margin: 0px auto;
    padding-right: 30px;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 250px;
  min-height: 500px;
  overflow: hidden;
  position: relative;
  padding: 28px 30px 20px;
  border-radius: 5px;
  min-width: 100%;
  height: 100%;
  border-bottom: 4px solid transparent;
  background-color: #151518;
  box-shadow: 0 10px 15px 0 #121113;
  transition: all 500ms ease;
  &:hover {
    border-bottom: 4px solid #ff4f47;
    transform: translateY(-15px);
  }
`;
const Content = styled.div``;
const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  letter-spacing: 0.5px;
  line-height: 1.5;
  text-align: left;
  position: relative;
  z-index: 1;
  img {
    margin-right: 15px;
  }
  h4 {
    font-weight: 800;
    font-size: 23px;
    line-height: 35px;
    color: #ffffff;
  }
`;

const Shape1 = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  opacity: 0.2;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const TecList = styled.ul`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin-top: 30px;
  li {
    padding-left: 5px;
    margin-bottom: 15px;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #817e87;

    img {
      width: 30px;
      margin-right: 15px;
    }
  }
`;

const ButtonCont = styled.div`
  border-top: 3px solid rgba(108, 107, 111, 0.1);
  display: flex;
  align-items: center;
  padding-top: 10px;
  margin-top: 21px;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 700;
    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    transition: all 500ms ease;
    &:hover {
      color: #ff4f47;
      cursor: pointer;
      svg {
        color: #ff4f47;
      }
    }
    svg {
      color: #ffffff;
      margin-left: 8px;
      font-size: 18px;
      transition: all 500ms ease;
    }
  }
`;
export default ServiceCard;
