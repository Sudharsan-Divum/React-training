import { useQuery } from "@tanstack/react-query";
import { getEpisodes, getPosts } from "../../serivces";
import React, { useState } from "react";
import "./index.scss";
import { Nav } from "react-bootstrap";
import { NavBar } from "../../components/navBar";

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
        <h2 style={{marginTop : "2%"}}>List of Posts</h2>
        <div className="query_post">
          {data.map((item: itemListProps) => (
            <div className="query_post_list-item">
              <h3> {item.title}</h3>
              <p> {item.body} </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
