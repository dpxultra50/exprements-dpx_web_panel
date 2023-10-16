import styled from 'styled-components';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import Grid3x3Icon from '@mui/icons-material/Grid3x3';
import CompassCalibrationIcon from '@mui/icons-material/CompassCalibration';
import LaunchIcon from '@mui/icons-material/Launch';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import PersonIcon from '@mui/icons-material/Person';
import {Link} from 'react-router-dom';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PaidIcon from '@mui/icons-material/Paid';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import DiscountIcon from '@mui/icons-material/Discount';
import PaymentIcon from '@mui/icons-material/Payment';
import PercentOutlinedIcon from '@mui/icons-material/PercentOutlined';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';

const OtherDetails = ({otherData}) => {
  const Subtotal =
    otherData.costing.totalamount +
    otherData.costing.additionalCharge -
    otherData.costing.discount;
  const PaidPercentage = (otherData.costing.paid / Subtotal) * 100;
  const UnpaidAmount = Subtotal - otherData.costing.paid;
  const UnpaidPercentage = (UnpaidAmount / Subtotal) * 100;

  return (
    <Container>
      <Title>
        <b>
          <DisplaySettingsIcon />
          Other Details
        </b>
      </Title>

      <ViewBox>
        <Box>
          <Filed>
            <span>
              <Grid3x3Icon /> ID
            </span>
            <b>{otherData._id}</b>
          </Filed>
          <hr />
          <Filed>
            <span>
              <EmailIcon />
              Email
            </span>
            <b>{otherData.emailaddress}</b>
          </Filed>
          <Filed>
            <span>
              <PhoneAndroidIcon /> Phonenumber
            </span>
            <b>{otherData.phonenumber}</b>
          </Filed>
          {otherData.user.role === 'admin' ? (
            <Filed>
              <span>
                <PersonIcon /> User ID
              </span>

              {/* UPDATE THIS TO ADDRESS */}
              <b>
                <Link to="/">{otherData.userId} </Link>
              </b>
            </Filed>
          ) : null}
        </Box>

        <Box>
          <Filed>
            <span style={{color: ' rgb(129, 126, 135)'}}>
              <CompassCalibrationIcon /> Required Credential's
            </span>
          </Filed>
          <hr />
          <Filed>
            <span>
              <LaunchIcon /> Site link
            </span>
            <b>
              <a
                href={otherData.requiredCredential.sitelink}
                target="_blank"
                rel="noreferrer">
                {otherData.requiredCredential.sitelink}
              </a>
            </b>
          </Filed>
          <Filed>
            <span>
              <ReadMoreIcon /> Other Credential
            </span>
            <b>{otherData.requiredCredential.otherCredential}</b>
          </Filed>
        </Box>

        <Box>
          <Filed>
            <span>
              <FolderSpecialIcon />
              Project Remark's
            </span>
          </Filed>
          <ContBox>
            <TextBox>{otherData.remarks}</TextBox>
          </ContBox>
        </Box>

        <Box>
          <Filed>
            <span style={{color: ' rgb(129, 126, 135)'}}>
              <AccountBalanceIcon />
              Project Costing
            </span>
          </Filed>
          <hr />
          <Filed>
            <span>
              <PaidIcon /> Total Amount
            </span>
            <b>
              {otherData.costing.totalamount} {otherData.costing.currency}
            </b>
          </Filed>

          <Filed>
            <span>
              <PlaylistAddIcon /> Additional Charge
            </span>
            <b>
              {otherData.costing.additionalCharge} {otherData.costing.currency}
            </b>
          </Filed>
          <Filed>
            <span>
              <QuestionMarkIcon /> Additional Charge Remark
            </span>
            <b>{otherData.costing.remark}</b>
          </Filed>
          <Filed>
            <span>
              <DiscountIcon /> Discount
            </span>
            <b>
              {otherData.costing.discount} {otherData.costing.currency}
            </b>
          </Filed>
          <hr />
          <Filed>
            <span>
              <PriceCheckIcon /> Sub Total
            </span>
            <b>
              {Subtotal} {otherData.costing.currency}
            </b>
          </Filed>
          <hr />
          <Filed>
            <span>
              <PaymentIcon /> Paid Amount
            </span>
            <b>
              {otherData.costing.paid} {otherData.costing.currency}
            </b>
          </Filed>
          <Filed>
            <span>
              <PercentOutlinedIcon /> Paid Percentage
            </span>
            <b>{PaidPercentage} %</b>
          </Filed>
          <hr />
          <Filed>
            <span>
              <MoneyOffIcon /> Unpaid Amount
            </span>
            <b>
              {UnpaidAmount} {otherData.costing.currency}
            </b>
          </Filed>
          <Filed>
            <span>
              <PercentOutlinedIcon /> Unpaid Percentage
            </span>
            <b>{UnpaidPercentage} %</b>
          </Filed>
        </Box>
      </ViewBox>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: block;
  margin-top: 40px;
  padding: 60px 35px 60px 35px;
  overflow: hidden;
  background-color: #1c1b1f;
  hr {
    border: none;
    width: 100%;
    border-top: 1px solid rgb(128, 128, 128, 0.3);
    margin: 16px 0px;
  }

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

const Box = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  border-left: 1px solid #ff4f47;
  border-right: 1px solid #ff4f47;
  padding: 8px 15px;
  margin-top: 30px;
  background-color: #151518;
  box-shadow: 0 10px 15px 0 #121113;
  width: 100%;

  :nth-child(1) {
    margin-top: 10px;
  }
  @media (max-width: 929px) {
    width: 100%;
  }
  .message {
    margin-top: 6px;
    color: rgb(129, 126, 135);
    P {
      margin-bottom: 6px;
    }
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
    a {
      color: #0075ca;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
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
    font-size: 15px;
    color: #86838c;
    font-weight: 600;
    line-height: 26px;
    svg {
      margin-right: 4px;
      font-size: 18px;
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

const TextBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  p {
  }
`;
export default OtherDetails;
