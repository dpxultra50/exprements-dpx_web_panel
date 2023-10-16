import styled from "styled-components";
import { Typography, useMediaQuery } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import DraftsIcon from "@mui/icons-material/Drafts";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Header from "../Components/Header";
import { Link } from "react-router-dom";
import {
  getAllQuote,
  clearErrors,
} from "../../../Features/contactUsFeatures/newsLetterSlice";
import PersonIcon from "@mui/icons-material/Person";
import SendIcon from "@mui/icons-material/Send";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import Loader from "../../User/layout/Loader";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";

const GetAllQuote = () => {
  const dispatch = useDispatch();
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");

  const { allQuotes, loading, error } = useSelector(
    (state) => state.newsLetter
  );

  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: "bottom-left",
        theme: "dark",
        pauseOnHover: true,
      });
      dispatch(clearErrors());
    }

    dispatch(getAllQuote());
  }, [dispatch, error]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <ToastContainer />
          <Header title="All Quote's" subtitle="User Message To DataPollex" />

          <FlexBox
            sx={{
              "& > div": {
                gridColumn: isNonMediumScreens ? undefined : "span 12",
              },
            }}
          >
            {allQuotes &&
              allQuotes.map((quote) => (
                <Link to={`/admin/quotes`} key={quote._id}>
                  <Card
                    className="card_hover"
                    sx={{ minWidth: 275, minHeight: 150 }}
                  >
                    <Title>
                      <h4>ID: {quote._id}</h4>
                    </Title>

                    <Cardcontainer>
                      <CardContent>
                        <Typography
                          sx={{ mb: 2, display: "flex", alignItems: "center" }}
                          variant="h5"
                        >
                          <SendIcon sx={{ mr: "10px" }} />
                          {moment(quote.createdAt).format(
                            "dddd, MMMM D, YYYY h:mm A"
                          )}
                        </Typography>

                        <Typography
                          sx={{ mb: 2, display: "flex", alignItems: "center" }}
                          variant="h5"
                        >
                          <PersonIcon sx={{ mr: "10px" }} />
                          {quote.name}
                        </Typography>

                        <Typography
                          sx={{ mb: 2, display: "flex", alignItems: "center" }}
                          variant="h5"
                        >
                          <DraftsIcon sx={{ mr: "10px" }} />
                          {quote.email}
                        </Typography>

                        <MessageBox>
                          <b>
                            <ChatBubbleIcon sx={{ mr: "10px" }} /> Message
                          </b>
                          <div>
                            <p>{quote.message}</p>
                          </div>
                        </MessageBox>
                      </CardContent>
                    </Cardcontainer>
                  </Card>
                </Link>
              ))}
          </FlexBox>
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
  .card_hover {
    transition: all 300ms ease;
    &:hover {
      transform: translateY(-10px);
    }
  }
  span {
    color: #ffff;
  }

  @media (max-width: 480px) {
    padding: 20px 15px 80px 15px;
  }
  @media (max-width: 368px) {
    padding: 20px 10px 80px 10px;
  }
`;

const FlexBox = styled.div`
  width: 100%;
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 25px;
  overflow: hidden;
  @media (max-width: 998px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (max-width: 920px) {
    margin-left: 0px;
    margin-right: 0px;
  }
  a {
    margin-bottom: 40px;
    @media (max-width: 920px) {
      width: 100%;
    }
  }
`;
const Title = styled.div`
  width: 100%;
  padding: 5px 18px;
  background-color: #ff4f47;

  h4 {
    font-size: 18px;
  }
`;
const MessageBox = styled.div`
  display: flex;
  flex-direction: column;
  b {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 8px;
  }
  div {
    background-color: #1c1b1f;
    padding: 5px 5px;
    width: 100%;
    border-radius: 4px;
    @media (max-width: 504px) {
      width: 80%;
    }
    @media (max-width: 408px) {
      width: 60%;
    }

    P {
      display: flex;
      align-items: flex-start;
      flex-wrap: wrap;
    }
  }
`;

const Cardcontainer = styled.div`
  background: #121113;
  box-shadow: 0px 10px 39.2px 0.8px rgba(0, 0, 0, 0.1);
  transition: all 500ms ease;

  .pending {
    text-transform: uppercase;
    color: #e4e669;
  }
  .scheduled {
    text-transform: uppercase;
    color: #0075ca;
  }
  .completed {
    text-transform: uppercase;
    color: #008672;
  }
  .Canceled {
    text-transform: uppercase;
    color: #d73a4a;
  }
`;

export default GetAllQuote;
