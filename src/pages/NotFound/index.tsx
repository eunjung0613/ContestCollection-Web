/** @jsxImportSource @emotion/react */

import NF from "components/NotFound/notf";
import Nav from "components/Nav";
import { css } from "@emotion/react";

function NotFound() {
  return (
    <div>
      <Nav />
      <div css={Wrapper}>
        <NF />
      </div>
    </div>
  );
}

export default NotFound;

const Wrapper = css`
  position: relative;
  min-height: 100vh;
  margin-left: 15rem;
  border-radius: 2rem 0px 0px 2rem;
`;
