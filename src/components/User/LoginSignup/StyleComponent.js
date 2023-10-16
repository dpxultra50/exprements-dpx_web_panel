import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  .css-10jyip1-MuiLinearProgress-root {
    background-color: #1c1b1f;
  }
  .css-p53mz9-MuiLinearProgress-bar1 {
    background-color: #ff4f47;
  }
  .css-xybj4j-MuiLinearProgress-bar2 {
    background-color: #ff4f47;
  }
`;
export const Title = styled.h2`
  color: #ffffff;
  margin: 25px 0 35px 0;
  font-size: 32px;
  line-height: 48px;
  font-weight: 800;
  text-align: center;
  @media (max-width: 767px) {
    font-size: 24px;
  }
`;

export const SignUpContainer = styled.div`
  width: 100%;
  padding: 50px 30px;
  background: #1c1b1f;
  border-radius: 12px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;
export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Form = styled.form`
  width: 100%;
  input {
    color: #ffffff;
    width: 100%;
    margin: 16px 0;
    height: 55px;
    font-size: 1rem;
    font-weight: 500;
    padding: 15px;
    border: none;
    outline: none;
    appearance: auto;
    background-color: #151518;
    box-shadow: 0 5px 10px rgb(9, 8, 13);
    &::placeholder {
      color: #8e8e8e;
      font-weight: 800;
    }
  }
`;
export const FormWraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  input {
    &:nth-child(2) {
      margin-left: 20px;
    }
  }
  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
    input {
      &:nth-child(2) {
        margin-left: 0px;
      }
    }
  }
`;
export const Img = styled.div`
  display: flex;
  flex-direction: column;
  input {
    display: none;
  }
`;
export const Preview = styled.div`
  max-width: 120px;
  margin-bottom: 10px;
  box-shadow: 0 5px 10px rgb(9, 8, 13);
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 12px;
  }
`;

export const Name = styled.input``;
export const Email = styled.input``;
export const PhoneNumber = styled.input``;
export const Companyname = styled.input``;
export const Companyrole = styled.input``;
export const Password = styled.input``;
export const ConfirmPassword = styled.input``;
export const AvatarPreview = styled.img``;
export const Avatar = styled.input``;

export const AvatarLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  color: #8e8e8e;
  width: 100%;
  margin: 16px 0;
  height: 55px;
  font-size: 1rem;
  font-weight: 500;
  padding: 15px;
  border: none;
  outline: none;
  appearance: auto;
  background-color: #151518;
  box-shadow: 0 5px 10px rgb(9, 8, 13);
  span {
    &:nth-child(2) {
      text-align: end;
    }
  }
`;

export const Button = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  width: unset;

  label {
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
      cursor: pointer;
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

export const Forgot = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const More = styled.div`
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

export const TitleSpan = styled.span`
  color: #ffffff;
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding-left: 2px;
`;
export const Guests = styled.div`
  width: 100%;
  height: auto;
`;

export const GuestEmailBox = styled.div`
  min-height: 84px;
  padding: 10px 15px;
  cursor: text;
  display: flex;
  flex-wrap: wrap;
  align-content: baseline;
  align-items: flex-start;
  box-sizing: border-box;
  width: 100%;
  outline: none;
  appearance: none;
  background-color: #151518;
  margin-top: 16px;
  border: 1px solid transparent;
  @media (max-width: 360px) {
    padding: 10px 8px;
  }
`;

export const AddGuests = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 32px;
  padding: 4px 12px;
  border: 1px solid #ff4f47;
  width: 150px;
  color: #ffffff;
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
  border-radius: 5px;
  user-select: none;
  svg {
    font-size: 16px;
    margin-left: 2px;
  }
`;
export const Emails = styled.div`
  flex-direction: row;
  flex-shrink: 0;
  max-width: 100%;
  margin-right: 5px;
  margin-bottom: 2px;
  padding: 0px 5px;
  border: 1px solid #1c1b1f;
  border-radius: 3px;
  background-color: #1c1b1f;
  cursor: text;
  span {
    color: #817e87;
    margin-right: 8px;
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #c4c4c4;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    border: none;
    padding: 0;
    cursor: pointer;
  }
`;
export const EmailWrrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  padding: 2px 6px 1px 5px;
  color: var(--text-color, rgb(26, 26, 26));
  font-weight: 700;
  font-size: 14px;
  text-align: left;
  box-sizing: inherit;
  overflow-x: hidden;
`;

export const Inquiry = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 16px;
  line-height: 1.25;
  text-align: left;
  border-radius: 5px;
  margin: 16px 0;
`;
export const Message = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 10px;
  border: 1px solid transparent;
  color: #6c6b6f;
  background-color: #151518;
  border-radius: 5px;
  font-size: 16px;
  resize: none;
  &::placeholder {
    color: #8e8e8e;
    font-weight: 800;
  }
  &:focus {
    border-color: #ff4f47;
    outline: none;
  }
`;
