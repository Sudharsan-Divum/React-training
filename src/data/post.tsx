import { useQuery } from "@tanstack/react-query";
import { updatePost } from "../serivces";
import { useEffect } from "react";
import { postStore } from "../store/postStore";

// interface DataProps {
//   title: string;
//   body: string;
//   userId: number;
// }
// export const usePost = (id: number) => {
//   const { data, isLoading, isError } = useQuery<DataProps>({
//     queryKey: ["Single Post Update", id],
//     queryFn: () => updatePost(id).then((response) => response.json()),
//   });

//   useEffect(() => {
//     if (!isError && !isLoading && data) {
//       postStore.updatePost(data);
//     }
//   }, [data, isError, isLoading]);
// };
