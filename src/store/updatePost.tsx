import { observable, makeObservable, action } from "mobx";

interface updateProps {
  title: string;
  userId: number;
  body: string;
}

class updatePostImpl {
  post: updateProps[] = [];
  constructor() {
    makeObservable(this, {
      post: observable,
      updatePosts: action,
    });
  }
  updatePosts(data: updateProps) {
    this.post.push(data);
  }
}
export const updatePost = new updatePostImpl();
