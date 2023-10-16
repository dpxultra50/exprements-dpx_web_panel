import Dropdown from "../Profile/Dropdown";
import styled from "styled-components";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors } from "../../../Features/userFeatures/forgotPasswordSlice";
import { motion } from "framer-motion";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import BlockOutlinedIcon from "@mui/icons-material/BlockOutlined";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

const AccountStatus = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const { error, success } = useSelector((state) => state.forgotPassword);

  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: "bottom-left",
        theme: "dark",
        pauseOnHover: true,
      });
      dispatch(clearErrors());
    }

    if (success) {
      window.location.reload();
    }
  }, [dispatch, error, success]);

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
        <ToastContainer />
        {/* Profile Dropdown */}
        <Dropdown />
        {/* Profile Dropdown */}
        {user.verified && user.verified ? (
          <VerifyDone>
            <CheckRound>
              <DoneOutlineIcon />
            </CheckRound>
            <h3>Congratulations {user.name.split(" ")[0]} !!</h3>
            <h2>Your Account Verified</h2>
            <More>
              <Link to="/account">
                <span>Go To Profile ?</span>
                <ArrowCircleRightIcon />
              </Link>
            </More>
          </VerifyDone>
        ) : (
          <VerifyDone>
            <CheckRoundDanger>
              <BlockOutlinedIcon />
            </CheckRoundDanger>
            <h3>Sorry ! {user.name.split(" ")[0]}, Your</h3>
            <h2>Account Is Not Verified</h2>
            <More>
              <Link to="/account/verifirequest">
                <span>Verify Account ?</span>
                <ArrowCircleRightIcon />
              </Link>
            </More>
          </VerifyDone>
        )}
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

const VerifyDone = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h3 {
    margin-top: 20px;
    color: #ff4f47;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 20px;
  }
  h2 {
    color: #ffffff;
    font-size: 28px;
    text-align: center;
    line-height: 48px;
  }
`;

const CheckRound = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: linear-gradient(to bottom, #1dbf73, #0e8349);
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  svg {
    font-size: 46px;
    color: #ffffff;
  }
`;

const CheckRoundDanger = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: linear-gradient(to bottom, #c0392b, #e74c3c);
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  svg {
    font-size: 100px;
    color: #ffffff;
  }
`;
const More = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    font-size: 12px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    padding: 15px 40px 15px;
    border-radius: 5px;
    transition: all 0.5s ease;
    @media (max-width: 767px) {
      font-size: 11px;
    }
    span {
      transition: all 0.5s ease-in-out;
      border-bottom: 1px solid transparent;
    }
    &:hover {
      color: #ff4f47;
      svg {
        transform: translateX(8px);
      }
      span {
        border-bottom: 1px solid #ffffff;
      }
    }
    svg {
      margin-right: 4px;
      padding-left: 2px;
      font-size: 20px;
      z-index: 2;
      transition: all 0.5s ease;
      @media (max-width: 767px) {
        font-size: 17px;
      }
    }
  }
`;

export default AccountStatus;
