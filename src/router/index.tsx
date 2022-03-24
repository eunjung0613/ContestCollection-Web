import { Routes, Route } from "react-router-dom";
import List from "pages/List";
import Main from "pages/Main";
import Detail from "pages/Detail";
import NotFound from "pages/NotFound";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/list/it" element={<List />} />
      <Route path="/list/media" element={<List />} />
      <Route path="/list/sw" element={<List />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;
