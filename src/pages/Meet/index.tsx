/** @jsxImportSource @emotion/react */

import { css, Theme } from "@emotion/react";
import Meet2 from "components/MeetCard/meet";
import { Link } from "react-router-dom";
import logo from "assets/images/logo.png";

function Meet() {
  return (
    <div css={wrap}>
      <div css={leftWrapper}>
        <header css={header}>
          <Link to="/">
            <div css={logoWrapper}>
              <img src={logo} alt="logo" css={logoImage} />
              <p>S_CON</p>
            </div>
          </Link>
        </header>
      </div>
      <Meet2 />
    </div>
  );
}

export default Meet;

const wrap = (theme: Theme) => css`
  display: flex;
  flex-direction: row;
`;

const header = (theme: Theme) => css`
  top: 0px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 6rem;
  font-weight: ${theme.fontWeight.bold};
`;

const logoWrapper = (theme: Theme) => css`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: ${theme.fontWeight.bold};
`;

const logoImage = css`
  width: 2rem;
  height: 2rem;
  margin-right: 0.7rem;
`;

const leftWrapper = (theme: Theme) => css`
  top: 0;
  left: 0;
  width: 15rem;
  height: 130vh;
  padding: 0px 40px;
  background-color: ${theme.color.grey};
`;
