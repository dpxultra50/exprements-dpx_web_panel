import styled from "styled-components";
import { Link } from "react-router-dom";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const ProductCard = ({ title, description, imgsrc, iconsrc }) => {
  return (
    <Card>
      <Container>
        <CardImg>
          <img src={imgsrc} alt="" />
        </CardImg>
        <CardContent>
          <ServiceIcon>
            <img src={iconsrc} alt="" />
          </ServiceIcon>
          <h3>{title}</h3>
          <p>{description}</p>
          <ReadMore>
            <Link to="/contactus/meeting/timedate">
              Start Now
              <ArrowCircleRightIcon />
            </Link>
          </ReadMore>
        </CardContent>
      </Container>
    </Card>
  );
};

const Card = styled.div``;
const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 350px;
  margin: 0px 20px;

  @media only screen and (min-width: 1400px) and (max-width: 1670px) {
    margin: 0px auto;
    max-width: 370px;
  }
  @media (max-width: 531px) {
    margin: 0px auto;
    max-width: 350px;
  }
  @media (max-width: 375px) {
    margin: 0px auto;
    max-width: 310px;
  }
`;
const CardImg = styled.div`
  overflow: hidden;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  object-fit: cover;
  z-index: 1;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
`;
const CardContent = styled.div`
  position: relative;
  background-color: #26252a;
  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.07);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 22px 30px 19px;

  h3 {
    color: #ffffff;
    font-size: 20px;
    font-weight: 800;
    line-height: 34px;
    margin: 16px 0px 10px 0px;
    transition: all 500ms ease;

    &:hover {
      color: #ff4f47;
      cursor: pointer;
    }
  }
`;
const ServiceIcon = styled.div`
  position: absolute;
  top: -61px;
  right: 20px;
  height: 70px;
  width: 90px;
  border-radius: 8px;
  display: block;
  z-index: 2;
  background-color: #26252a;
  img {
    width: 100%;
  }
`;
const ReadMore = styled.div`
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
export default ProductCard;
