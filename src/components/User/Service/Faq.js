import styled from "styled-components";
import { Link } from "react-router-dom";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Faq = ({ faqs }) => {
  return (
    <Container>
      <FaqContainer>
        <FaqText>
          <h4>FAQ</h4>
          <h1>Have any other</h1>
          <h1>Question?</h1>
          <p>Don’t be shy and ask any questions you have</p>
          <Button>
            <Link to="/contactus/meeting/timedate">
              <ArrowCircleRightIcon />
              <span>Lets Talk</span>
            </Link>
          </Button>
        </FaqText>

        <FaqQuestion>
          {faqs.faq.map((qa, i) => (
            <AccorDion
              key={i}
              sx={{ marginBottom: "20px", backgroundColor: "#ff4f47" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography sx={{ color: "white" }}>{qa.q}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ color: "white", backgroundColor: "#ff4f47" }}>
                  {qa.a}
                </Typography>
              </AccordionDetails>
            </AccorDion>
          ))}
        </FaqQuestion>
      </FaqContainer>
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

const FaqContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const Button = styled.div`
  margin-top: 30px;
  position: relative;
  @media (max-width: 484px) {
    width: 100%;
  }
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
      content: "";
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

const FaqText = styled.div`
  @media (max-width: 484px) {
    width: 100%;
  }
  h1 {
    color: white;
    margin-bottom: 50px;
    font-size: 40px;
    line-height: 5px;
    @media (max-width: 767px) {
      font-size: 20px;
      line-height: 30px;
      margin-bottom: 10px;
    }
  }

  h4 {
    color: #ff4f47;
    margin-bottom: 30px;
    font-size: 30px;
    line-height: 48px;
    @media (max-width: 767px) {
      font-size: 20px;
      line-height: 30px;
      margin-bottom: 10px;
    }
  }
`;

const FaqQuestion = styled.div`
  width: 50%;
  @media (max-width: 992px) {
    margin-top: 40px;
    width: 75%;
  }
  @media (max-width: 484px) {
    width: 100%;
  }
`;

const AccorDion = styled(Accordion)`
  background-color: #ff4f47 !important;
`;

export default Faq;
