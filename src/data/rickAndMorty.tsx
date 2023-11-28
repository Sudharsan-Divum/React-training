import { useQuery } from "@tanstack/react-query";
import { getCharacters } from "../serivces";
import { useEffect } from "react";
import { ApiCalling } from "../store/apiStore";

export const useCharacter = (currentPage: number) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["datass", currentPage],
    queryFn: () => getCharacters(currentPage),
  });
  useEffect(() => {
    if (!isLoading && !isError && data) {
      ApiCalling.setCharacters(data?.result);
    }
  }, [data, isLoading, isError]);
console.log("Data retrived from store")
  return {
    data,
    isError,
    isLoading,
  };
};
