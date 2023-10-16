import styled from 'styled-components';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import SquareIcon from '@mui/icons-material/Square';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import PaidIcon from '@mui/icons-material/Paid';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import StartIcon from '@mui/icons-material/Start';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import moment from 'moment';
import LaunchIcon from '@mui/icons-material/Launch';
import {Link} from 'react-router-dom';

const Overview = ({viewData}) => {
  const formattedmilestone = moment
    .utc(viewData.milestone, 'ddd MMM DD YYYY HH:mm:ss [GMT]ZZ')
    .format('MMMM Do YYYY');

  const currentDate = moment();
  const targetDate = moment(
    viewData.milestone,
    'ddd MMM DD YYYY HH:mm:ss [GMT]ZZ',
  );
  const remainingDays = targetDate.diff(currentDate, 'days');

  const formattedDatePart1 = moment
    .utc(viewData.createdAt)
    .format('MMMM Do, YYYY');

  const formattedDatePart2 = moment.utc(viewData.createdAt).format('h:mm:ss a');

  return (
    <Container>
      <Title>
        <b>
          <ViewQuiltIcon />
          Overview
        </b>
      </Title>

      <ViewBox>
        <Box>
          <Status className={`${viewData.status}`}>
            <div>
              <SquareIcon />
              <b> {viewData.status}</b>
            </div>
            {viewData.user.role === 'admin' ? (
              <Button>
                <Link to={`/admin/project/update/${viewData._id}`}>
                  <LaunchIcon />
                  <span>Update Project</span>
                </Link>
              </Button>
            ) : null}
          </Status>

          <Filed>
            <span>
              <ArchitectureIcon />
              Preferred Technologies
            </span>
          </Filed>
          <ContBox>
            <TecBox>
              {viewData.technologies &&
                viewData.technologies.map((tec, i) => (
                  <li key={i}>
                    <span>{tec}</span>
                  </li>
                ))}
            </TecBox>
          </ContBox>
        </Box>
        <DetailsBox>
          <DetailsCard>
            <Filed>
              <span>
                <PaidIcon />
                Total Amount
              </span>
            </Filed>
            <ImgBox>
              <img src="/images/TotalAmount.png" alt="" />
            </ImgBox>
            <b>
              {viewData.costing.totalamount === null
                ? '00'
                : `${viewData.costing.totalamount} ${viewData.costing.currency}`}
            </b>
          </DetailsCard>
          <DetailsCard>
            <Filed>
              <span>
                <PriceCheckIcon />
                Paid Amount
              </span>
            </Filed>
            <ImgBox>
              <img src="/images/PaidAmount.png" alt="" />
            </ImgBox>
            <b>
              {viewData.costing.paid === null
                ? '00'
                : `${viewData.costing.paid} ${viewData.costing.currency}`}
            </b>
          </DetailsCard>
          <DetailsCard>
            <Filed>
              <span>
                <StartIcon />
                Project Started
              </span>
            </Filed>
            <ImgBox>
              <img src="/images/ProjectStarted.png" alt="" />
            </ImgBox>
            <b>{`${formattedDatePart1}`}</b>
            <b>{`${formattedDatePart2}`}</b>
          </DetailsCard>
          <DetailsCard>
            <Filed>
              <span>
                <CrisisAlertIcon />
                Milestone
              </span>
            </Filed>
            <ImgBox>
              <img src="/images/Milestone.png" alt="" />
            </ImgBox>
            <b>{formattedmilestone}</b>
            <b>Remaining days: {remainingDays} </b>
          </DetailsCard>
        </DetailsBox>
      </ViewBox>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: block;
  padding: 60px 35px 60px 35px;
  overflow: hidden;
  background-color: #1c1b1f;
  .pending {
    color: #e4e669;
  }
  .running {
    color: #0075ca;
  }
  .completed {
    color: #008672;
  }
  .canceled {
    color: #d73a4a;
  }
  @media (max-width: 510px) {
    padding: 80px 15px 80px 15px;
  }
  @media (max-width: 485px) {
    padding: 40px 15px 80px 15px;
  }
`;

const Title = styled.div`
  @media (max-width: 924px) {
    margin-top: 20px;
  }
  @media (max-width: 485px) {
    margin-bottom: 20px;
  }

  b {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: 22px;
    color: #ff4f47;
    font-weight: 800;
    line-height: 26px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 10px;
    svg {
      margin-right: 10px;
      margin-top: 2px;
    }
    @media (max-width: 767px) {
      font-size: 18px;
      svg {
        font-size: 18px;
        margin-top: 4px;
      }
    }
  }
  h1 {
    font-size: 48px;
    line-height: 50px;
    font-weight: 800;
    color: #ffffff;
    @media (max-width: 767px) {
      font-size: 24px;
      line-height: 34px;
    }
  }
`;

const ViewBox = styled.div`
  margin: 50px 60px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  @media (max-width: 767px) {
    margin: 0px;
  }
`;

const Status = styled.div`
  margin: 20px 0px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 432px) {
    flex-direction: column;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    @media (max-width: 432px) {
      margin-bottom: 10px;
    }
  }

  b {
    text-transform: capitalize;
    font-size: 16px;
    margin-left: 4px;
    font-weight: 700;
  }
`;

const Box = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  border-left: 1px solid #ff4f47;
  border-right: 1px solid #ff4f47;
  padding: 8px 15px;
  background-color: #151518;
  box-shadow: 0 10px 15px 0 #121113;
  width: 100%;
`;
const DetailsBox = styled.div`
  width: 100%;
  margin-top: 40px;
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 10px;
  flex-wrap: wrap;
  @media (max-width: 969px) {
    justify-content: space-around;
  }
`;
const DetailsCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  border-left: 1px solid #ff4f47;
  border-right: 1px solid #ff4f47;
  padding: 15px 15px;
  background-color: #151518;
  min-width: 250px;
  min-height: 300px;

  @media (max-width: 1124px) {
    margin-top: 20px;
  }
  @media (max-width: 589px) {
    width: 100%;
    margin-right: 0px;
  }

  b {
    font-size: 18px;
    margin-top: 10px;
  }
`;
const ImgBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 150px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Filed = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  b {
    color: #ffffff;
  }
  @media (max-width: 400px) {
    flex-direction: column;
    align-items: flex-start;
  }
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: capitalize;
    font-size: 16px;
    color: #86838c;
    font-weight: 700;
    line-height: 26px;
    svg {
      margin-right: 4px;
      font-size: 20px;
    }
  }
  p {
    font-size: 15px;
    color: #86838c;
    font-weight: 400;
    line-height: 26px;
  }
`;
const ContBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #1c1b1f;
  padding: 6px 12px;
  border-radius: 4px;
`;

const TecBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  li {
    background-color: #ff4f47;
    margin: 10px 4px;
    font-size: 13px;
    padding: 3px 8px;
    border-radius: 12px;
    transition: all 500ms ease;
    span {
      color: #ffffff;
    }
  }
`;

const Button = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
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
    padding: 8px 20px 8px;
    border-radius: 5px;
    overflow: hidden;
    transition: all 0.5s linear;
    position: relative;
    overflow: hidden;
    z-index: 1;

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
      background: #ff4f47;
      z-index: 2;
      transition: 0.8s;
    }
    &:hover {
      color: #1c1b1f;
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
export default Overview;
