import React, { useState } from "react";
import "./index.scss";
import { NavBar } from "../../components/navBar";
import { useMutation } from "@tanstack/react-query";
import { addPost } from "../../serivces";

interface dataProps {
  title: string;
  body: string;
  userId: number;
}

export function Posts() {
  const createPost = useMutation({
    mutationFn: addPost,
  });

  const [form, setForm] = useState<dataProps>({
    title: "",
    body: "",
    userId: +Math.random().toFixed(4),
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createPost.mutate(form);
      setForm({
        title: "",
        body: "",
        userId: +Math.random().toFixed(4),
      });
      console.log(form);
    } catch (error) {}
  };
  //   const result = ;
  return (
    <>
      <div className="posts_container">
        <NavBar />
        <form onSubmit={handleSubmit}>
          <div className="posts">
            <input
              placeholder="Title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
            <input
              placeholder="Body"
              value={form.body}
              onChange={(e) => setForm({ ...form, body: e.target.value })}
            />
            <button type="submit"> Create Post </button>

            <></>
          </div>
        </form>
      </div>
    </>
  );
}
