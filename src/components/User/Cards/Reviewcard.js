import styled from "styled-components";
import Rating from "@mui/material/Rating";
const Reviewcard = ({ name, imgsrc, reating, comment, jobTitle }) => {
  return (
    <Card>
      <Container>
        <ClintInfo>
          <Clintimg>
            <ImgCont>
              <img src={imgsrc} alt="" />
            </ImgCont>
          </Clintimg>
          <ClintDetails>
            <h4>{name}</h4>
            <p>{jobTitle}</p>
          </ClintDetails>
        </ClintInfo>
        <ClintTxt>{comment}</ClintTxt>
        <ClintRating className="clint-rating">
          <Rating precision={0.5} name="read-only" value={reating} readOnly />
        </ClintRating>
      </Container>
    </Card>
  );
};

const Card = styled.div`
  margin-right: 30px;
  margin-left: 30px;
  background-color: #151518;
  @media only screen and (max-width: 1199px) {
    margin-right: 20px;
    margin-left: 20px;
  }
`;
const Container = styled.div`
  position: relative;
  display: block;
  padding: 50px 50px 45px;
  transition: all 500ms ease;
  border-width: 0.01em;
  border-color: rgb(108, 107, 111, 0.2);
  border-style: solid;
  &::before {
    position: absolute;
    top: -1px;
    bottom: -1px;
    left: -1px;
    width: 9px;
    background-color: #ff4f47;
    content: "";
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    transform: scaleY(0);
    transition: all 500ms ease;
  }
  &:hover {
    box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.1);
    border: 1px solid transparent;
    &::before {
      transform: scaleY(1);
    }
    .clint-rating {
      background-color: #ff4f47;
      &::after {
        border-left: 20px solid #ff4f47;
      }
      span {
        color: #ffffff;
      }
    }
  }
`;

const ClintInfo = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-left: 10px;
`;
const Clintimg = styled.div`
  position: relative;
  display: block;
  width: 85px;
  height: 85px;
  border-radius: 50%;
  background-image: -webkit-linear-gradient(
    90deg,
    rgb(28, 27, 31) 0%,
    rgb(255, 79, 71) 100%
  );
  @media (max-width: 991px) {
    background-image: none;
  }
`;
const ImgCont = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  @media (max-width: 991px) {
    left: -18px;
  }
  img {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
    border-radius: 50%;
    background-image: #fff;
    @media (max-width: 991px) {
      background-image: -webkit-linear-gradient(
        90deg,
        rgb(28, 27, 31) 0%,
        rgb(255, 79, 71) 100%
      );
    }
  }
`;
const ClintDetails = styled.div`
  margin-left: 20px;
  h4 {
    color: #ffffff;
    font-size: 20px;
    font-weight: 800;
    line-height: 30px;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
  }
`;

const ClintTxt = styled.p`
  padding-top: 20px;
`;
const ClintRating = styled.div`
  background-color: #302f34;
  position: absolute;
  top: 65px;
  right: -20px;
  display: flex;
  align-items: center;
  padding: 13px 20px 14px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  -webkit-transition: all 500ms ease;
  transition: all 500ms ease;
  @media only screen and (max-width: 1230px) {
    top: 15px;
    padding: 10px 18px 11px;
  }
  ::after {
    border-left: 20px solid #302f34;
    position: absolute;
    bottom: -14px;
    right: 0;
    content: "";
    border-top: 0px solid transparent;
    border-bottom: 15px solid transparent;
    transition: all 500ms ease;
  }
  span {
    transition: all 500ms ease;
    color: #ff4f47;
    font-size: 20px;
  }
`;
export default Reviewcard;
