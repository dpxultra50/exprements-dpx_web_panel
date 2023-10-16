import styled from 'styled-components';

const ClientCard = ({logo, link}) => {
  return (
    <Card>
      <a href={link} target="blank">
        <img src={logo} alt="" />
      </a>
    </Card>
  );
};

const Card = styled.div`
  padding: 20px 20px;
  width: 220px;
  margin-right: 20px;
  @media only screen and (min-width: 541px) and (max-width: 650px) {
    padding: 20px 35px;
  }
  @media (max-width: 541px) {
    padding: 20px 40px;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    border: none;
    text-decoration: none;
    img {
      width: 100%;
      height: auto;
    }
  }
  &:hover {
    background-color: #1c1b1f;
  }
`;
export default ClientCard;
