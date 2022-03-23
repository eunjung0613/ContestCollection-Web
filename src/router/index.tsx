import { Routes, Route } from "react-router-dom";
import List from "pages/List";
import Main from "pages/Main";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/list/it" element={<List />} />
      <Route path="/list/media" element={<List />} />
      <Route path="/list/sw" element={<List />} />
    </Routes>
  );
}

export default Router;
