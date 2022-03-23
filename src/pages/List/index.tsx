/** @jsxImportSource @emotion/react */

import { css, Theme } from "@emotion/react";
import Nav from "components/Nav";

function List() {
  return (
    <>
      <Nav />
      <main css={Wrapper}>List page</main>;
    </>
  );
}

export default List;

const Wrapper = css`
  position: relative;
  min-height: 100vh;
  margin-left: 15rem;
  border-radius: 2rem 0px 0px 2rem;
`;
