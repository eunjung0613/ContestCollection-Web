/** @jsxImportSource @emotion/react */

import { css, Theme } from "@emotion/react";
import Nav from "components/Nav";

function Main() {
  return (
    <>
      <Nav />
      <main css={Wrapper}>Main page</main>;
    </>
  );
}

export default Main;

const Wrapper = css`
  position: relative;
  min-height: 100vh;
  margin-left: 15rem;
  border-radius: 2rem 0px 0px 2rem;
`;
