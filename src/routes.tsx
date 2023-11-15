import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Query } from "./pages/react-query";
import { Integration } from "./pages/integration";
import { Profile } from "./components/profile";
import { Posts } from "./pages/posts";

export function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/query" element={<Query />} />
      <Route path="/rick-and-morty" element={<Integration />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/posts" element={<Posts />} />
    </Routes>
  );
}
