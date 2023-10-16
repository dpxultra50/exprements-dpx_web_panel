import Header from "../Components/Header";
import styled from "styled-components";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import * as StyleComponent from "../../User/LoginSignup/StyleComponent";
import {
  clearErrors,
  createProject,
  clearMessage,
  projectReset,
} from "../../../Features/adminFeatures/projectSlice";
import Loader from "../../User/layout/Loader";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import AddIcon from "@mui/icons-material/Add";

const CreateProject = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, message, success, projectId } = useSelector(
    (state) => state.project
  );

  //Technologies
  const [keywords, setKeywords] = useState([]);
  const [inputValue, setInputValue] = useState("");

  //Deadline
  const [show, setShow] = useState(false);
  const [dateTime, setDateTime] = useState(moment());

  const [projectData, SetProjectData] = useState({
    emailaddress: "",
    phonenumber: "",
    userId: "",
    title: "",
    description: "",
    requiredCredential: {
      sitelink: "",
      otherCredential: "",
    },
    costing: {
      totalamount: "",
      currency: "",
      paid: "",
      additionalCharge: "",
      remark: "",
      discount: "",
    },
    remarks: "",
  });

  const {
    emailaddress,
    phonenumber,
    userId,
    title,
    description,
    requiredCredential,
    costing,
    remarks,
  } = projectData;

  const [avatarPreview, setAvatarPreview] = useState();

  //GETTING THE technologies
  function handleInputChange(event) {
    const newInputValue = event.target.value;
    setInputValue(newInputValue);

    // Check if the input value ends with a space or comma
    const lastChar = newInputValue.slice(-1);

    if (lastChar === " " || lastChar === ",") {
      // Add the last word as a new keyword
      const words = newInputValue.split(/[ ,]+/);
      const newKeyword = words[words.length - 2];

      if (newKeyword !== "") {
        setKeywords((prevKeywords) => [...prevKeywords, newKeyword]);
        setInputValue("");
      }
    }
  }

  function handleDeleteKeyword(index) {
    setKeywords((prevKeywords) => prevKeywords.filter((_, i) => i !== index));
  }

  // Check if the pressed key is a number (0-9) or a special key (e.g., Backspace, Delete)
  const handleKeyPress = (event) => {
    const keyCode = event.keyCode || event.which;
    const keyValue = String.fromCharCode(keyCode);

    const isValidInput =
      /^[0-9]+$/.test(keyValue) ||
      ["Backspace", "Delete", "ArrowLeft", "ArrowRight"].includes(event.key);

    if (!isValidInput) {
      event.preventDefault();
    }
  };

  const projectSubmit = (e) => {
    e.preventDefault();

    const projectForm = new FormData();

    projectForm.set("emailaddress", emailaddress);
    projectForm.set("phonenumber", phonenumber);
    projectForm.set("userId", userId);
    projectForm.set("title", title);
    projectForm.set("description", description);
    projectForm.set("requiredCredential", JSON.stringify(requiredCredential));
    projectForm.set("technologies", JSON.stringify(keywords));
    projectForm.set("costing", JSON.stringify(costing));
    projectForm.set("remarks", remarks);
    projectForm.set("milestone", dateTime);
    if (projectData.projectImage) {
      projectForm.set("image", projectData.projectImage);
    }

    dispatch(createProject(projectForm));
  };

  const projectDataChange = (e) => {
    const { name, value, files } = e.target;

    switch (name) {
      case "projectImage":
        SetProjectData({ ...projectData, projectImage: files[0] });
        setAvatarPreview(URL.createObjectURL(files[0]));
        break;

      case "sitelink":
      case "otherCredential":
        SetProjectData((prevState) => ({
          ...prevState,
          requiredCredential: {
            ...prevState.requiredCredential,
            [name]: value,
          },
        }));
        break;

      case "totalamount":
      case "currency":
      case "paid":
      case "additionalCharge":
      case "remark":
      case "discount":
        SetProjectData((prevState) => ({
          ...prevState,
          costing: {
            ...prevState.costing,
            [name]: value,
          },
        }));
        break;

      default:
        SetProjectData({ ...projectData, [name]: value });
        break;
    }
  };

  const handleDateTimeChange = (dateTime) => {
    setDateTime(dateTime);
  };

  useEffect(() => {
    if (success) {
      toast.success(message, {
        position: "bottom-left",
        theme: "dark",
        pauseOnHover: true,
      });
      dispatch(clearMessage());
      dispatch(projectReset());

      navigate(`/project/details/${projectId}`);
    }

    if (error) {
      toast.error(error, {
        position: "bottom-right",
        theme: "dark",
        pauseOnHover: true,
      });
      dispatch(clearErrors());
    }
  }, [error, dispatch, toast, success, message, projectId]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <ToastContainer />
          <Header
            title="CREATE PROJECTS"
            subtitle="Fill The Form Below To Create A Project"
          />

          {/* All Projects */}
          <FromBox>
            <FromWrapper>
              <StyleComponent.Container>
                <ToastContainer />
                <StyleComponent.Title>Create A Project</StyleComponent.Title>
                <StyleComponent.SignUpContainer>
                  <StyleComponent.Wrapper>
                    <StyleComponent.Form
                      onSubmit={projectSubmit}
                      encType="multipart/form-data"
                    >
                      <StyleComponent.FormWraper>
                        <StyleComponent.Email
                          type="email"
                          placeholder="Email *"
                          required
                          name="emailaddress"
                          value={emailaddress}
                          onChange={projectDataChange}
                        />
                        <StyleComponent.PhoneNumber
                          type="text"
                          placeholder="Phone Number *"
                          required
                          name="phonenumber"
                          value={phonenumber}
                          onChange={projectDataChange}
                        />
                      </StyleComponent.FormWraper>

                      <StyleComponent.Name
                        type="text"
                        placeholder="User ID"
                        name="userId"
                        value={userId}
                        onChange={projectDataChange}
                      />

                      <StyleComponent.Name
                        type="text"
                        placeholder="Title"
                        required
                        name="title"
                        value={title}
                        onChange={projectDataChange}
                      />

                      <StyleComponent.Message
                        id="message"
                        placeholder="Type Project Description here"
                        name="description"
                        value={description}
                        onChange={projectDataChange}
                      />

                      {/* Technologies */}
                      <StyleComponent.GuestEmailBox>
                        {keywords.map((keyword, index) => (
                          <StyleComponent.Emails key={index}>
                            <StyleComponent.EmailWrrap>
                              <span>{keyword}</span>
                              <button
                                type="button"
                                onClick={() => handleDeleteKeyword(index)}
                              >
                                &times;
                              </button>
                            </StyleComponent.EmailWrrap>
                          </StyleComponent.Emails>
                        ))}
                        <input
                          style={{
                            display: "flex",
                            flexGrow: 1,
                            overflowX: "hidden",
                            width: "auto",
                            minWidth: "30px",
                            height: "auto",
                            minHeight: "22px",
                            margin: 0,
                            padding: "5px 0",
                            border: "none",
                            backgroundColor: "inherit",
                            outline: "none",
                            resize: "none",
                            appearance: "none",
                            boxShadow: "unset",
                            fontSize: "14px",
                            fontWeight: 200,
                          }}
                          type="text"
                          id="keyword-input"
                          placeholder="Project Technologies"
                          value={inputValue}
                          onChange={handleInputChange}
                        />
                      </StyleComponent.GuestEmailBox>

                      <StyleComponent.FormWraper>
                        <StyleComponent.Name
                          type="text"
                          placeholder="Site Link"
                          name="sitelink"
                          value={requiredCredential.sitelink}
                          onChange={projectDataChange}
                        />
                        <StyleComponent.Name
                          type="text"
                          placeholder="Other Credential"
                          name="otherCredential"
                          value={requiredCredential.otherCredential}
                          onChange={projectDataChange}
                        />
                      </StyleComponent.FormWraper>

                      <StyleComponent.FormWraper>
                        <StyleComponent.Name
                          onKeyPress={handleKeyPress}
                          placeholder="Total Project Amount"
                          name="totalamount"
                          value={costing.totalamount}
                          onChange={projectDataChange}
                        />
                        <StyleComponent.Name
                          type="text"
                          placeholder="Currency"
                          name="currency"
                          value={costing.currency}
                          onChange={projectDataChange}
                        />
                      </StyleComponent.FormWraper>

                      <StyleComponent.FormWraper>
                        <StyleComponent.Name
                          onKeyPress={handleKeyPress}
                          placeholder="Paid Amount"
                          name="paid"
                          value={costing.paid}
                          onChange={projectDataChange}
                        />

                        <StyleComponent.Name
                          onKeyPress={handleKeyPress}
                          placeholder="discount"
                          name="discount"
                          value={costing.discount}
                          onChange={projectDataChange}
                        />
                      </StyleComponent.FormWraper>

                      <StyleComponent.FormWraper>
                        <StyleComponent.Name
                          onKeyPress={handleKeyPress}
                          placeholder="Additional Charge"
                          name="additionalCharge"
                          value={costing.additionalCharge}
                          onChange={projectDataChange}
                        />
                        <StyleComponent.Name
                          type="text"
                          placeholder="Remark"
                          name="remark"
                          value={costing.remark}
                          onChange={projectDataChange}
                        />
                      </StyleComponent.FormWraper>

                      <StyleComponent.Message
                        id="message"
                        placeholder="Service Remark's"
                        name="remarks"
                        value={remarks}
                        onChange={projectDataChange}
                      />

                      <StyleComponent.AddGuests
                        style={{
                          marginTop: "10px",
                          fontSize: "12px",
                          padding: "12px 18px",
                        }}
                        onClick={() => setShow((prev) => !prev)}
                      >
                        Deadline <AddIcon />
                      </StyleComponent.AddGuests>

                      <StyleComponent.FormWraper>
                        {show && (
                          <LocalizationProvider dateAdapter={AdapterMoment}>
                            <DemoContainer components={["StaticDatePicker"]}>
                              <DemoItem label="Select Milestone">
                                <StaticDatePicker
                                  value={dateTime}
                                  onChange={handleDateTimeChange}
                                />
                              </DemoItem>
                            </DemoContainer>
                          </LocalizationProvider>
                        )}
                      </StyleComponent.FormWraper>

                      <StyleComponent.Img>
                        <StyleComponent.Avatar
                          id="imginput"
                          type="file"
                          name="projectImage"
                          accept="image/*"
                          onChange={projectDataChange}
                        />
                        <StyleComponent.AvatarLabel htmlFor="imginput">
                          <span>Upload Image</span>
                          <span>Choose file</span>
                        </StyleComponent.AvatarLabel>
                        {avatarPreview && avatarPreview != null ? (
                          <StyleComponent.Preview>
                            <StyleComponent.AvatarPreview
                              src={avatarPreview}
                              alt="Avatar Preview"
                            />
                          </StyleComponent.Preview>
                        ) : null}
                      </StyleComponent.Img>
                      <input
                        type="submit"
                        value="Project"
                        id="projectSubmit"
                        className="signUpBtn"
                        style={{ display: "none" }}
                      />
                      <StyleComponent.Button>
                        <label htmlFor="projectSubmit">
                          <ArrowCircleRightIcon />
                          <span>Create</span>
                        </label>
                      </StyleComponent.Button>
                    </StyleComponent.Form>
                  </StyleComponent.Wrapper>
                </StyleComponent.SignUpContainer>
              </StyleComponent.Container>
            </FromWrapper>
          </FromBox>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 90vh;
  background-color: #1c1b1f;
  position: relative;
  display: block;
  padding: 20px 35px 80px 35px;
  overflow: hidden;
  z-index: 1;
  text-decoration: none;

  .css-13bvbr1-MuiStack-root {
    display: block;
    border-radius: 5px;
    .css-1moj7zt-MuiPickersLayout-root {
      background-color: #151518;
    }
    .css-1moj7zt-MuiPickersLayout-root .MuiPickersLayout-actionBar {
      display: none;
    }
    .css-vldksh-MuiButtonBase-root-MuiPickersDay-root.Mui-selected,
    .css-ro9fob-MuiPickersYear-yearButton.Mui-selected {
      background-color: #ff4f47;
      &:hover {
        background-color: rgb(255, 79, 71, 0.8);
      }
    }
    .css-16bnij0-MuiButtonBase-root-MuiPickersDay-root.Mui-selected {
      background-color: #ff4f47;
    }
    .css-vldksh-MuiButtonBase-root-MuiPickersDay-root:not(.Mui-selected) {
      border: 1px solid #ff4f47;
    }
    .css-1ruyr04-MuiButtonBase-root-MuiIconButton-root-MuiPickersArrowSwitcher-button,
    .css-uel9zc-MuiButtonBase-root-MuiIconButton-root-MuiPickersArrowSwitcher-button,
    .css-wqpkhe-MuiButtonBase-root-MuiButton-root,
    .css-1rqusr7-MuiSvgIcon-root-MuiPickersCalendarHeader-switchViewIcon {
      color: #ff4f47;
    }
  }
  span {
    color: #ffff;
  }

  label {
    span {
      transition: all 500ms ease;
    }
    &:hover {
      color: #ff4f47 !important;
      span {
        color: #ff4f47;
      }
    }
  }

  @media (max-width: 480px) {
    padding: 20px 15px 80px 15px;
  }
  @media (max-width: 368px) {
    padding: 20px 10px 80px 10px;
  }
  input {
    box-shadow: none;
    border: 1px solid transparent;
    &:focus {
      border-color: #ff4f47;
      outline: none;
    }
  }
`;

const FromBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
  background-color: #151518;
  box-shadow: 0 10px 15px 0 #121113;
  border-left: 1px solid #ff4f47;
  border-right: 1px solid #ff4f47;
  padding: 15px 15px;
  @media (max-width: 480px) {
    padding: 15px 8px;
  }
`;

const FromWrapper = styled.div`
  @media (max-width: 700px) {
    width: 100%;
  }
`;

export default CreateProject;
