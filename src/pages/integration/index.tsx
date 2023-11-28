//imports
import { useState } from "react";
import "./index.scss";
import { NavBar } from "../../components/navBar";
import { Card, CardBody, Pagination } from "react-bootstrap";
import loader from "../../images/loading.gif";
import errorImg from "../../images/error.gif";
import { Link } from "react-router-dom";
import { useCharacter } from "../../data/rickAndMorty";

//Type-Specified

type itemProps = {
  id: number;
  name: string;
  species: string;
  status: string;
  image: string;
  gender: string;
  origin: object;
};

//Functional-Component
export function Integration() {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading, isError } = useCharacter(currentPage);
  const handlePaginationChange = (page: number) => {
    setCurrentPage(page);
  };

  if (isLoading) {
    return <img className="loader" src={loader} alt="" />;
  }

  if (isError) {
    return (
      <>
        <p className="danger">Error while fetching data</p>
        <img className="loader" src={errorImg} alt="vv" />
      </>
    );
  }
  const result = data?.results;
  const totalPages = data?.info?.pages;

  return (
    <>
      <div className="whole-wrapper">
        <NavBar />
        <div className="items-wrapper">
          {result.map((item: itemProps) => (
            <>
              <div>
                <Link to={`/character/${item.id}`} className="card_click">
                  <Card className="card">
                    <img
                      className="card_body_image"
                      src={item.image}
                      alt="character"
                    />
                    <span
                      className={`card_body_status ${getStatusColorClass(
                        item.status
                      )}`}
                    >
                      {item.status}
                    </span>
                    <CardBody className="card_body">
                      <div className="card_body_name"> {item.name} </div>
                      {/* <div className="card_body_gender"> {item.status} </div> */}
                    </CardBody>
                  </Card>
                </Link>
              </div>
            </>
          ))}
        </div>
        <div className="pagination pagination-box">
          <Pagination>
            <Pagination.First onClick={() => handlePaginationChange(1)} />
            {/* <Pagination.Prev
              onClick={() =>
                handlePaginationChange(currentPage > 1 ? currentPage - 1 : 1)
              }
            /> */}

            {[...Array(totalPages)].map((_, index) => {
              const displayPage =
                currentPage - 2 <= index && index <= currentPage;

              return (
                displayPage && (
                  <Pagination.Item
                    key={index + 1}
                    active={currentPage === index + 1}
                    onClick={() => handlePaginationChange(index + 1)}
                  >
                    {index + 1}
                  </Pagination.Item>
                )
              );
            })}

            {/* <Pagination.Next
              onClick={() =>
                handlePaginationChange(
                  currentPage < totalPages ? currentPage + 1 : totalPages
                )
              }
            /> */}
            <Pagination.Last
              onClick={() => handlePaginationChange(totalPages)}
            />
          </Pagination>
        </div>
      </div>
    </>
  );
}
function getStatusColorClass(status: string): string {
  switch (status.toLowerCase()) {
    case "alive":
      return "alive";
    case "dead":
      return "dead";
    default:
      return "unknown";
  }
}
