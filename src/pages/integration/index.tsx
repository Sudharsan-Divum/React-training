import { useQuery } from "@tanstack/react-query";
import "./index.scss";
import { NavBar } from "../../components/navBar";
import { getCharacters } from "../../serivces";
import { Card, CardBody } from "react-bootstrap";
import loader from "../../images/loading.gif";
import errorImg from "../../images/error.gif";
import ReactPlayer from "react-player";

type itemProps = {
  name: string;
  species: string;
  status: string;
  image: string;
  gender: string;
  origin: object;
};
export function Integration() {
  const data = useQuery({
    queryKey: ["results"],
    queryFn: getCharacters,
  });
  if (data.isLoading) {
    return <img className="loader" src={loader} alt="" />;
  }

  if (data.error) {
    return (
      <>
        <p className="danger">Error while fetching data</p>
        <img className="loader" src={errorImg} alt="" />
      </>
    );
  }

  const result = data.data.results;
  const changeImg = () => {};

  return (
    <>
      <div className="whole-wrapper">
        <NavBar />
        <div className="items-wrapper">
          {result.map((item: itemProps) => (
            <>
              <div className="">
                <Card className="card">
                  <img
                    className="image"
                    src={item.image}
                    onClick={() => changeImg()}
                    alt="im"
                  />
                  <CardBody className="card_body">
                    <div className="card_body_name"> {item.name} </div>
                    <div className="card_body_gender"> {item.gender} </div>
                  </CardBody>
                </Card>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
