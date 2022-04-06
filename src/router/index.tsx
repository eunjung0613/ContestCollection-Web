import { Routes, Route } from "react-router-dom";
import Main from "pages/Main";
import Detail from "pages/Detail";
import NotFound from "pages/NotFound";
import It from "pages/List/It";
import Media from "pages/List/Media";
import Sw from "pages/List/Sw";
import Signin from "pages/Signin";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/all/It" element={<It />} />
      <Route path="/all/Media" element={<Media />} />
      <Route path="/all/Sw" element={<Sw />} />

      {/* <Route path="/award/:category" element={<Award />} />
      <Route path="/exhibit/:category" element={<Exhibit />} /> */}

      <Route path="/detail/:name" element={<Detail />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/signin" element={<Signin />} />
    </Routes>
  );
}

export default Router;
