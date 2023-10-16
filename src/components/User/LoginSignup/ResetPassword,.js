import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import * as StyleComponent from "./StyleComponent";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearErrors,
  resetPassword,
} from "../../../Features/userFeatures/forgotPasswordSlice";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MetaData from "../layout/MetaData";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, success } = useSelector((state) => state.forgotPassword);

  const [credentials, setCredentials] = useState({
    password: "",
    confirmpassword: "",
    token: "",
  });

  const { password, confirmpassword } = credentials;
  const { token } = useParams();

  const resetPassSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmpassword) {
      toast.error("password does not match please try again", {
        position: "top-left",
        theme: "dark",
        pauseOnHover: true,
      });
      return;
    }

    const resetPassForm = new FormData();
    resetPassForm.set("password", password);

    const credentials = { resetPassForm, token };

    dispatch(resetPassword(credentials));
  };

  const resetPassDataChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: "top-left",
        theme: "dark",
        pauseOnHover: true,
      });
      dispatch(clearErrors());
    }

    if (success) {
      toast.success("Password Updated Successfully", {
        position: "top-left",
        theme: "dark",
        pauseOnHover: true,
      });
      navigate("/login");
    }
  }, [dispatch, error, navigate, success]);
  return (
    <StyleComponent.Container>
      <MetaData
        title="Reset Password | DataPollex | Top It company In Bangladesh | Top It Company In Japan"
        keywords="top app development company, top website development company in india, top website development company in bangladeshi, top it services companies in bangladesh, top website development companies in usa, top it company in bangladesh,top it companies in dhaka,top it company in usa, app development companies, top app development company, mobile app development company,blockchain development company, top blockchain development company, blockchain development company in bangladesh,  mobile app development companies, ahmedabad, san francisco, USA, UAE,bangladesh, japan, India"
        desc="DataPollex is a leading IT service company specializing in providing innovative solutions to businesses worldwide. With a team of experienced professionals and a passion for technology, we deliver custom software development, web development, and blockchain development services. Our mission is to help businesses leverage the power of technology to achieve their goals and stay ahead in the digital age. Discover more about our company's history, values, and expertise on our About page. Partner with DataPollex and unlock your business's full potential."
      />
      <ToastContainer />
      <StyleComponent.Title>Reset Password</StyleComponent.Title>
      <StyleComponent.SignUpContainer>
        <StyleComponent.Wrapper>
          <StyleComponent.Form onSubmit={resetPassSubmit}>
            <StyleComponent.Password
              type="password"
              placeholder="Password *"
              required
              name="password"
              value={password}
              onChange={resetPassDataChange}
            />
            <StyleComponent.ConfirmPassword
              type="password"
              placeholder="ConfirmPassword *"
              required
              name="confirmpassword"
              value={confirmpassword}
              onChange={resetPassDataChange}
            />
            <input
              type="submit"
              value="Register"
              id="sigin"
              className="signUpBtn"
              style={{ display: "none" }}
            />
            <StyleComponent.Button>
              <label htmlFor="sigin">
                <ArrowCircleRightIcon />
                <span>SUBMIT</span>
              </label>
            </StyleComponent.Button>
          </StyleComponent.Form>
        </StyleComponent.Wrapper>
      </StyleComponent.SignUpContainer>
    </StyleComponent.Container>
  );
};

export default ResetPassword;
