import "./index.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { NavBar } from "../../components/navBar";
import { updatePost } from "../../serivces";
import { useQuery } from "@tanstack/react-query";

interface PostProps {
  title: string;
  body: string;
  userId: number;
  id?: number;
}

export function UpdatePost() {
  const { id } = useParams<{ id: string | undefined }>();
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const { isLoading, error, data } = useQuery<PostProps>({
    queryKey: ["post", id],
    queryFn: () =>
      id
        ? updatePost(
            { title: title, body: body, userId: +Math.random().toFixed(4) },
            parseInt(id, 10)
          )
        : Promise.reject("No ID"),
    enabled: !!id,
  });

  useEffect(() => {
    if (data) {
      setTitle(title);
      setBody(body);
    }
  }, [data]);

  const fetchPostData = async (postId: number): Promise<PostProps> => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    const postData: PostProps = await response.json();
    return postData;
  };

  const handleSubmit = async () => {
    if (id) {
      const postData: PostProps = {
        title: title,
        body: body,
        userId: +Math.random().toFixed(4),
        id: parseInt(id, 10),
      };

      try {
        const response = await updatePost(postData, parseInt(id, 10));
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
  };
  if (isLoading) {
    return <p>Loading Data...</p>;
  }

  if (error) {
    return <p>Error fetching Data</p>;
  }

  return (
    <>
      <div className="update_whole-wrapper">
        <NavBar />
        <div className="update_wrapper">
          <div className="update_wrapper_title-text">Update Post</div>
          <div className="update_wrapper_title-wrapper">
            <textarea
              placeholder="Enter title"
              className="update_wrapper_title-wrapper_title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              placeholder="Enter Body"
              className="update_wrapper_title-wrapper_body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>
          <div className="update_wrapper_button-container">
            <button
              className="update_wrapper_button-container_submit"
              onClick={handleSubmit}
            >
              Submit
            </button>
            <button className="update_wrapper_button-container_cancel">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
