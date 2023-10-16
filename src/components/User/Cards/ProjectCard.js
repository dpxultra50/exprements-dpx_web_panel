import styled from "styled-components";

const ProjectCard = ({ link, title, imgsrc, technologies }) => {
  return (
    <Card>
      <a href={link} target="_blank" rel="noreferrer">
        <Container>
          <ImgBox>
            <img
              src={`http://localhost:3000/uploads/project/${imgsrc}`}
              alt=""
            />
          </ImgBox>
          <CardBox className="card-box">
            <h3>{title}</h3>
            <TecBox>
              {technologies &&
                technologies.slice(0, 4).map((data, index) => (
                  <li key={index}>
                    <span>{data}</span>
                  </li>
                ))}
            </TecBox>
          </CardBox>
        </Container>
      </a>
    </Card>
  );
};

const Card = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-top: 25px;
  flex: 0 0 28%;
  min-width: 350px;
  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.07);
  @media only screen and (min-width: 1024px) and (max-width: 1119px) {
    min-width: 320px;
  }
  @media (max-width: 450px) {
    min-width: 345px;
    margin: 0px auto;
    padding-right: 30px;
  }
  a {
    text-decoration: none;
    color: #817e87;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 250px;
  min-height: 350px;
  overflow: hidden;
  position: relative;
  min-width: 100%;
  height: 100%;
  transition: all 500ms ease;
  &:hover {
    .card-box {
      border-bottom: 4px solid #ff4f47;
      transform: translateY(-40%);
    }
  }
`;
const ImgBox = styled.div`
  img {
    width: 100%;
    height: auto;
  }
`;
const CardBox = styled.div`
  text-align: center;
  width: 98%;
  border-radius: 10px;
  background-color: #151518;
  box-shadow: 0 10px 15px 0 #121113;
  padding: 28px 30px 20px;
  transition: all 500ms ease;
  transform: translateY(-25%);
  border-bottom: 4px solid transparent;
  &:hover ${Container} {
    border-bottom: 4px solid #ff4f47;
    transform: translateY(-40%);
  }
  h3 {
    font-size: 18px;
    font-weight: 800;
    line-height: 24px;
    color: #ffffff;
    transition: all 500ms ease;
    &:hover {
      color: #ff4f47;
    }
  }
`;
const TecBox = styled.div`
  border-top: 3px solid rgba(108, 107, 111, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;

  li {
    background-color: #1c1b1f;
    margin-top: 10px;
    font-size: 13px;
    padding: 3px 8px;
    border-radius: 15px;
    transition: all 500ms ease;
    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
      color: #ff4f47;
    }
  }
`;
export default ProjectCard;
