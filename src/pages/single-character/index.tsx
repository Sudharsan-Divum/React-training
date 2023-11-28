import { useParams } from "react-router";
import "./index.scss";
import { useQuery } from "@tanstack/react-query";
import { getSingleCharacter } from "../../serivces";
import { useEffect } from "react";
import { ApiCalling } from "../../store/apiStore";

interface itemProps {
  id: number;
  name: string;
  species: string;
  status: string;
  image: string;
  gender: string;
  origin: { name: string; url: string };
  location: { name: string; url: string };
  episode: [""];
  type: string;
  created: string;
}
export function SingleCHaracter() {
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["single characters"],
    queryFn: () => getSingleCharacter(id),
  });
  useEffect(() => {
    if (!isLoading && !isError && data) {
      ApiCalling.setSingleCharacters(data);
      console.log("Single Character ===>", data);
    }
  }, [data, isLoading, isError]);
  const result: itemProps = data;
  console.log("Result ==>", result);
  return (
    <>
      <div className="character_whole-wrapper">
        {result && (
          <>
            <div className="character_wrapper-top">
              <img className="character_img" src={result.image} alt="" />

              <div className="character_details">
                <span className="character_details_name">
                  {" "}
                  NAME : {result.name}{" "}
                </span>
                <span className="character_details_status">
                  {" "}
                  STATUS : {result.status}{" "}
                </span>
                <span>{/* {result.location.url} */}</span>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
