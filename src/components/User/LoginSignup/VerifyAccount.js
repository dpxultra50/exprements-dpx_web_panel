import Dropdown from "../Profile/Dropdown";
import styled from "styled-components";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { useDispatch, useSelector } from "react-redux";
import { verifyAccount as verifyUserAccount } from "../../../Features/userFeatures/forgotPasswordSlice";
import { motion } from "framer-motion";
import CircularProgress from "@mui/material/CircularProgress";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

const VerifyAccount = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useParams();

  const { user } = useSelector((state) => state.user);

  const { loading } = useSelector((state) => state.forgotPassword);

  const handleVerification = async () => {
    dispatch(verifyUserAccount(token));
    navigate("/account/status");
  };

  useEffect(() => {
    if (user.verified && user.verified === true) {
      navigate("/account/status");
    }
  });

  return (
    <Container>
      <Shape1
        as={motion.div}
        animate={{
          x: [-40, 5, -40],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
      >
        <img src="/images/services-shape-1.png" alt="" />
      </Shape1>
      <Shape2>
        <img src="/images/services-shape-2.png" alt="" />
      </Shape2>
      <VerifyWrapper>
        {/* Profile Dropdown */}
        <Dropdown />
        {/* Profile Dropdown */}

        {loading && loading ? (
          <Processing>
            <CircularProgress />
            <h2>Processing to verify......</h2>
          </Processing>
        ) : null}
        <Button onClick={handleVerification}>
          <Link to="#">
            <ArrowCircleRightIcon />
            <span>Verify Account</span>
          </Link>
        </Button>
      </VerifyWrapper>
    </Container>
  );
};

const Container = styled.div`
  background-color: #1c1b1f;
  position: relative;
  display: block;
  margin-top: 0px;
  padding: 40px 35px 0px 35px;
  overflow: hidden;
  z-index: 1;
  min-height: 70vh;
  @media (max-width: 767px) {
    min-height: 50vh;
  }
  .css-18lrjg1-MuiCircularProgress-root {
    color: #ff4f47;
  }
  @media (max-width: 450px) {
    padding: 40px 15px 0px 15px;
  }
`;

const Shape1 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  mix-blend-mode: luminosity;
  img {
    opacity: 0.06;
  }
`;

const Shape2 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  mix-blend-mode: luminosity;
  img {
    width: auto;
    opacity: 0.02;
  }
`;

const VerifyWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  min-height: 70vh;
  @media (max-width: 767px) {
    min-height: 50vh;
  }
`;
const Button = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

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
    padding: 25px 25px 25px;
    overflow: hidden;
    transition: all 0.5s linear;
    position: relative;
    overflow: hidden;
    border-radius: 5px;
    z-index: 1;

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
const Processing = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 60%;
  min-height: 20vh;
`;
export default VerifyAccount;
