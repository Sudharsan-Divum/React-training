import { useQuery } from "@tanstack/react-query";
import "./index.scss";
import { NavBar } from "../../components/navBar";
import { getCharacters } from "../../serivces";

type itemProps = {};
export function Integration() {
  const data = useQuery({
    queryKey: ["results"],
    queryFn: getCharacters,
    
  });
  if (data.isLoading) {
    return <p>....Loading Data!</p>;
  }

  if (data.error) {
    return <p>Error while fetching data</p>;
  }
console.log(data.data.results)
  return (
    <>
      <div>
        <NavBar />
      </div>
    </>
  );
}
