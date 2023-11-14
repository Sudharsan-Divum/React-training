import { useQuery } from "@tanstack/react-query";
import "./index.scss";
import { NavBar } from "../../components/navBar";
import { getCharacters } from "../../serivces";
import { Card, CardBody } from "react-bootstrap";
import loader from "../../images/loading.gif";
import errorImg from "../../images/error.gif";
import ReactPlayer from "react-player";
import { ApiCalling } from "../../store/apiStore";
import { useEffect } from "react";

type itemProps = {
  name: string;
  species: string;
  status: string;
  image: string;
  gender: string;
  origin: object;
};
 export function Integration() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["data"],
    queryFn: getCharacters,
  });
  useEffect(() => {
    if (!isLoading && !isError && data) {
      ApiCalling.setCharacters(data?.result);
      console.log(data.results, "results");
    }
  }, [data, isLoading, isError]);
  if (isLoading) {
    return <img className="loader" src={loader} alt="" />;
  }

  if (isError) {
    return (
      <>
        <p className="danger">Error while fetching data</p>
        <img className="loader" src={errorImg} alt="" />
      </>
    );
  }

  const result = data?.results;
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

