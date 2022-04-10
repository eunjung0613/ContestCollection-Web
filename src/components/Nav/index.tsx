/** @jsxImportSource @emotion/react */

import { css, Theme } from "@emotion/react";
import { Link } from "react-router-dom";
import logo from "assets/images/logo.png";
import NavLink from "components/Common/Nav/NavLink";

function Nav() {
  return (
    <section css={section}>
      <header css={header}>
        <Link to="/">
          <div css={logoWrapper}>
            <img src={logo} alt="logo" css={logoImage} />
            S_CON
          </div>
        </Link>
      </header>
      <nav css={nav}>
        <div css={buttonWrapper}>
          <span css={title}>introduction</span>
          <NavLink category="Home" path="/" />
          <span css={title}>Collection</span>
          <NavLink category="IT" path="/all/It" />
          <NavLink category="미디어컨텐츠" path="/all/Media" />
          <NavLink category="SW" path="/all/Sw" />
          <span css={title}>Meet</span>
          <NavLink category="Meet" path="/meet" />
          <span css={title}>Join us</span>
          <NavLink category="Signin" path="/signin" />
        </div>
      </nav>
    </section>
  );
}

export default Nav;

const section = (theme: Theme) => css`
  position: fixed;
  top: 0;
  left: 0;

  width: 13.4rem;
  height: 100%;
  padding: 0px 40px;
  background-color: ${theme.color.grey};

  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 1px;
  }
`;

const header = (theme: Theme) => css`
  top: 0px;
  left: 0px;
  width: 100%;
  height: 5.7rem;

  display: flex;
  flex-direction: row;
  align-items: center;

  font-size: 1.24em;
  font-weight: ${theme.fontWeight.bold};
`;

const logoWrapper = css`
  display: flex;
  flex-direction: row;
`;

const logoImage = css`
  width: 2rem;
  height: 2rem;
  margin-right: 0.7rem;
`;

const nav = (theme: Theme) => css`
  display: flex;
  flex-direction: row;

  height: 100%;

  font-size: 0.95rem;
  font-weight: ${theme.fontWeight.normal};
`;

const buttonWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 1.6rem;
`;

const title = (theme: Theme) => css`
  margin-top: 1.8rem;
  width: 100%;
  color: ${theme.color.darkYellow};
  font-weight: ${theme.fontWeight.bold};
  font-size: 0.87rem;
  line-height: 1.7rem;
`;
