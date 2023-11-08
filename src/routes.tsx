import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Query } from "./pages/react-query";
import { Integration } from "./pages/integration";

export function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/query" element={<Query />} />
      <Route path="/rick-and-morty" element={<Integration />} />
    </Routes>
  );
}
