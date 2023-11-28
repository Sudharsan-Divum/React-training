import {
  useQuery,
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";

import { getPosts } from "../../serivces";
import "./index.scss";
import { NavBar } from "../../components/navBar";
import { Link } from "react-router-dom";

const queryClient = new QueryClient();

export function Query() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });
  if (isLoading) {
    return <p>....Loading Data</p>;
  }
  if (error) {
    return <p>Error fetching Data</p>;
  }

  type itemListProps = {
    id: number;
    title: string;
    body: string;
  };
  return (
    <>
      <div className="query">
        <NavBar />
        <h2 style={{ marginTop: "2%" }}>List of Posts</h2>

        <div className="query_post">
          {data.map((item: itemListProps) => (
            <Link
              to={`/update-post/${item.id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="query_post_list-item">
                <h3> {item.title}</h3>
                <p> {item.body} </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
export function QueryWithProvider() {
  return (
    <QueryClientProvider client={queryClient}>
      <Query />
    </QueryClientProvider>
  );
}
