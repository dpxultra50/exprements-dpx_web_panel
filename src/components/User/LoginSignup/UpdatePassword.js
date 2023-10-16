import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Dropdown from "../Profile/Dropdown";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  updatePassword as updateUserPassword,
  updateReset,
  clearErrors,
} from "../../../Features/userFeatures/profileSlice";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import * as StyleComponent from "../LoginSignup/StyleComponent";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../layout/Loader";
import MetaData from "../layout/MetaData";

const UpdatePassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, isUpdated, loading } = useSelector((state) => state.profile);

  const [updatePassword, setUpdatePassword] = useState({
    oldpassword: "",
    password: "",
    confirmpassword: "",
  });

  const { oldpassword, password, confirmpassword } = updatePassword;

  const updatePasswordSubmit = (e) => {
    e.preventDefault();

    const updatePasswordForm = new FormData();
    updatePasswordForm.set("oldPassword", oldpassword);
    updatePasswordForm.set("newPassword", password);
    updatePasswordForm.set("confirmPassword", confirmpassword);

    dispatch(updateUserPassword(updatePasswordForm));
  };

  const updatePasswordDataChange = (e) => {
    setUpdatePassword({ ...updatePassword, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: "bottom-left",
        theme: "dark",
        pauseOnHover: true,
      });
      dispatch(clearErrors());
    }

    if (isUpdated) {
      toast.success("Profile Updated Successfully", {
        position: "bottom-left",
        theme: "dark",
        pauseOnHover: true,
      });
      dispatch(updateReset());
      navigate("/account");
    }
  }, [error, isUpdated, navigate, dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <MetaData
            title="Update Password | DataPollex | Top It company In Bangladesh | Top It Company In Japan"
            keywords="top app development company, top website development company in india, top website development company in bangladeshi, top it services companies in bangladesh, top website development companies in usa, top it company in bangladesh,top it companies in dhaka,top it company in usa, app development companies, top app development company, mobile app development company,blockchain development company, top blockchain development company, blockchain development company in bangladesh,  mobile app development companies, ahmedabad, san francisco, USA, UAE,bangladesh, japan, India"
            desc="DataPollex is a leading IT service company specializing in providing innovative solutions to businesses worldwide. With a team of experienced professionals and a passion for technology, we deliver custom software development, web development, and blockchain development services. Our mission is to help businesses leverage the power of technology to achieve their goals and stay ahead in the digital age. Discover more about our company's history, values, and expertise on our About page. Partner with DataPollex and unlock your business's full potential."
          />
          <ToastContainer />
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
          <ContWrapper>
            {/* Profile Dropdown */}
            <Dropdown />
            {/* Profile Dropdown */}

            {/* CARD */}
            <CardContainer>
              <StyleComponent.Title>Change Password</StyleComponent.Title>
              <StyleComponent.SignUpContainer>
                <StyleComponent.Wrapper>
                  <StyleComponent.Form
                    className="updatePasswordForm"
                    onSubmit={updatePasswordSubmit}
                  >
                    <StyleComponent.Password
                      type="password"
                      placeholder="Old Password"
                      required
                      name="oldpassword"
                      value={oldpassword}
                      onChange={updatePasswordDataChange}
                    />
                    <StyleComponent.FormWraper>
                      <StyleComponent.Password
                        type="password"
                        placeholder="New Password *"
                        required
                        name="password"
                        value={password}
                        onChange={updatePasswordDataChange}
                      />
                      <StyleComponent.ConfirmPassword
                        type="password"
                        placeholder="ConfirmPassword *"
                        required
                        name="confirmpassword"
                        value={confirmpassword}
                        onChange={updatePasswordDataChange}
                      />
                    </StyleComponent.FormWraper>
                    <input
                      type="submit"
                      value="Register"
                      id="registersubmit"
                      className="signUpBtn"
                      style={{ display: "none" }}
                    />

                    <StyleComponent.Button>
                      <label htmlFor="registersubmit">
                        <ArrowCircleRightIcon />
                        <span>UPDATE</span>
                      </label>
                    </StyleComponent.Button>
                  </StyleComponent.Form>
                </StyleComponent.Wrapper>
              </StyleComponent.SignUpContainer>
            </CardContainer>
          </ContWrapper>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  background-color: #1c1b1f;
  position: relative;
  display: block;
  margin-top: 0px;
  padding: 40px 35px 40px 35px;
  overflow: hidden;
  z-index: 1;
  overflow: hidden;

  .css-18lrjg1-MuiCircularProgress-root {
    color: #ff4f47;
  }
  @media (max-width: 450px) {
    padding: 40px 15px 40px 15px;
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

const ContWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  width: 100%;
`;

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 767px) {
    width: 90%;
  }
  @media (max-width: 451px) {
    width: 100%;
  }
  @media (max-width: 352px) {
    h2 {
      margin: 61px 0 20px 0;
    }
  }
`;

export default UpdatePassword;
