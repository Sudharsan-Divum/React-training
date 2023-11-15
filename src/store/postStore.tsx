import { observable, makeObservable, action } from "mobx";

interface dataProps {
  title: string;
  userId: number;
  body: string;
}

class postStoreImpl {
  posts: dataProps[] = [];
  constructor() {
    makeObservable(this, {
      posts: observable,
      addPost: action,
    });
  }
  addPost(data: dataProps) {
    this.posts.push(data);
  }
}

export const postStore = new postStoreImpl();
