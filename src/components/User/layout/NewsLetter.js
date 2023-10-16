import styled from 'styled-components';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useDispatch, useSelector} from 'react-redux';
import {
  newsLetterSubscribe,
  clearErrors,
  newsLetterReset,
} from '../../../Features/contactUsFeatures/newsLetterSlice';
import {useState} from 'react';
import {useEffect} from 'react';
import {LinearProgress} from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';

const NewsLetter = () => {
  const dispatch = useDispatch();

  const {error, loading, success} = useSelector(state => state.newsLetter);

  const [successControl, setSuccessControl] = useState(false);

  const [newsLetterData, setnewsLetterData] = useState({
    name: '',
    email: '',
  });

  const {name, email} = newsLetterData;

  const newsLetterSubmit = e => {
    e.preventDefault();

    const newsLetterForm = new FormData();
    newsLetterForm.set('name', name);
    newsLetterForm.set('email', email);

    dispatch(newsLetterSubscribe(newsLetterForm));
  };

  const newsLetterDataChange = e => {
    setnewsLetterData({...newsLetterData, [e.target.name]: e.target.value});
  };

  useEffect(() => {
    if (success) {
      setSuccessControl(success);
      dispatch(newsLetterReset());
      setTimeout(() => {
        setSuccessControl(false);
      }, 5000);
    }

    if (error) {
      toast.error(error, {
        position: 'bottom-right',
        theme: 'dark',
        pauseOnHover: true,
      });
      dispatch(clearErrors());
    }
  }, [error, dispatch, success]);

  return (
    <Fragment>
      <Container>
        <ToastContainer />
        <Wrapper>
          <Title>
            <p>OUR NewsLetter</p>
            <h3>Need Quality IT Services?</h3>
          </Title>

          <Form onSubmit={newsLetterSubmit}>
            <Name
              type="text"
              placeholder="Name *"
              required
              name="name"
              value={name}
              onChange={newsLetterDataChange}
            />
            <Email
              type="email"
              placeholder="Email *"
              required
              name="email"
              value={email}
              onChange={newsLetterDataChange}
            />
            <input
              disabled={loading ? true : false}
              type="submit"
              value="Newsletter"
              id="newslettersubmit"
              className="signUpBtn"
              style={{display: 'none'}}
            />
            <ButtonCont>
              <Button htmlFor="newslettersubmit">
                <div>
                  <ArrowCircleRightIcon />
                  {loading ? <span>Sending.. </span> : <span>Subscribe </span>}
                </div>
              </Button>
            </ButtonCont>
          </Form>
          <SuccessWrapper>
            {successControl ? (
              <SuccessBox>
                <DoneIcon /> subscription completed
              </SuccessBox>
            ) : null}
          </SuccessWrapper>
        </Wrapper>
      </Container>
      {loading ? <LinearProgress color="secondary" /> : null}
    </Fragment>
  );
};
const Fragment = styled.div`
  .css-10jyip1-MuiLinearProgress-root {
    background-color: #ff4f47;
    .css-p53mz9-MuiLinearProgress-bar1 {
      background: #fff;
    }
    .css-xybj4j-MuiLinearProgress-bar2 {
      background: #fff;
    }
  }
`;
const Container = styled.div`
  background: #ff4f47;
  position: relative;
  display: block;
  padding: 80px 35px 80px 35px;
  overflow: hidden;
  z-index: 1;

  @media (max-width: 450px) {
    padding: 40px 20px 80px 20px;
  }
`;
const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0px;
`;

const SuccessWrapper = styled.b`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  height: 30px;
  width: auto;
  background: transparent;
`;
const SuccessBox = styled.b`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #1c1b1f;
  svg {
    font-size: 20px;
    font-weight: 700;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 25px;

  p {
    font-size: 16px;
    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    opacity: 0.7;
    line-height: 24px;
    @media (max-width: 767px) {
      text-align: center;
    }
  }
  h3 {
    font-size: 40px;
    color: #ffffff;
    font-weight: 800;
    line-height: 50px;
    margin-top: 2px;
    @media (max-width: 767px) {
      text-align: center;
      font-size: 34px;
    }
  }
`;
const Form = styled.form`
  display: flex;
  @media (max-width: 698px) {
    flex-direction: column;
    width: 100%;
  }
`;

const Input = styled.input`
  background-color: rgb(28, 27, 31, 0.8);
  border: none;
  outline: none;
  color: #ffffff;
  margin-right: 20px;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.1em;
  padding: 10px 20px;
  line-height: 21px;
  @media (max-width: 698px) {
    margin-right: 0px;
    margin-bottom: 20px;
    padding: 15px 20px;
    width: 100%;
  }

  &:focus {
    outline: 1px solid #1c1b1f;
  }
  border-radius: 5px;
`;

const Name = styled(Input)``;
const Email = styled(Input)``;

const ButtonCont = styled.div``;
const Button = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  div {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    color: #ffffff;
    font-size: 12px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    padding: 10px 60px 10px;
    border-radius: 5px;
    overflow: hidden;
    transition: all 0.5s linear;
    position: relative;
    overflow: hidden;
    z-index: 1;
    @media (max-width: 698px) {
      width: 100%;
    }
    span {
      z-index: 2;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 180%;
      transition: all 0.5s linear;
      background: #1c1b1f;
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
export default NewsLetter;
