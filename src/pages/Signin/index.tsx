/** @jsxImportSource @emotion/react */

import { css, Theme } from "@emotion/react";
import { Link } from "react-router-dom";
import logo from "assets/images/logo.png";
import HelloLottie from "pages/Signin/HelloLottie";
import { FcGoogle, FcUpRight } from "react-icons/fc";

function Signin() {
  return (
    <div css={wrapper}>
      <div css={leftWrapper}>
        <header css={header}>
          <Link to="/">
            <div css={logoWrapper}>
              <img src={logo} alt="logo" css={logoImage} />
              S_CON
            </div>
          </Link>
        </header>
        <article css={lottieWrapper}>
          <h1 css={title}>Skhu Contest</h1>
          <p css={subtitle}>교내 경진대회를 위한 올인원 서비스 S_CON </p>
          <HelloLottie />
        </article>
      </div>

      <div css={rightWrapper}>
        <h1 css={title}>로그인</h1>
        <p css={subtitle}>S_CON에 로그인하고 더 많은 서비스를 이용하세요.</p>
        <Link to="https://s-con.vercel.app/notfound">
          <button css={button}>
            <FcGoogle size="45" /> <span css={buttonSummary}>Google Login</span>
          </button>
        </Link>
        <Link to="https://s-con.vercel.app/notfound">
          <button css={button}>
            <FcUpRight size="45" /> <span css={buttonSummary}>Kakao Login</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Signin;

const wrapper = css`
  display: flex;
  flex-direction: row;
`;

const leftWrapper = (theme: Theme) => css`
  top: 0;
  left: 0;

  width: 29rem;
  height: 100vh;
  padding: 0px 40px;
  background-color: ${theme.color.grey};
  ${theme.mediaQuery.tablet} {
    width: 25rem;
  }
  ${theme.mediaQuery.mobile} {
    background-color: ${theme.color.white};
  }
`;

const logoWrapper = (theme: Theme) => css`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: ${theme.fontWeight.bold};
`;

const logoImage = (theme: Theme) => css`
  width: 2rem;
  height: 2rem;
  margin-right: 0.7rem;
  ${theme.mediaQuery.mobile} {
    z-index: 10;
  }
`;

const header = (theme: Theme) => css`
  top: 0px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 6rem;
  font-weight: ${theme.fontWeight.bold};

  ${theme.mediaQuery.mobile} {
    height: 5rem;
  }
`;

const lottieWrapper = (theme: Theme) => css`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${theme.mediaQuery.mobile} {
    opacity: 0;
  }
`;

const rightWrapper = (theme: Theme) => css`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: fit-content;
  margin-left: 20rem;

  ${theme.mediaQuery.tablet} {
    margin-left: 5rem;
  }
  ${theme.mediaQuery.mobile} {
    position: absolute;
    margin-left: 0.1rem;
  }
`;

const title = (theme: Theme) => css`
  margin: 1.6rem 0;
  font-weight: ${theme.fontWeight.bold};
  font-size: 1.8rem;
  line-height: 1.3;
  text-align: center;
  ${theme.mediaQuery.mobile} {
    font-size: 1.6rem;
  }
`;

const subtitle = (theme: Theme) => css`
  margin-bottom: 5rem;
  text-align: center;
  font-weight: ${theme.fontWeight.normal};
  font-size: 1rem;
  line-height: 1.5;
`;

const button = (theme: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 400px;
  height: 5rem;
  margin-bottom: 1.4rem;

  background-color: ${theme.color.grey};
  border: 1px solid #adadad !important;
  border-radius: 0.3rem;

  font-size: 1.33rem;
  line-height: 1.3;

  :hover {
    color: ${theme.color.white};
    background-color: #ffcf3d;
    transition: all 0.33s;
  }

  ${theme.mediaQuery.tablet} {
    width: 270px;
    font-size: 1.25rem;
  }

  ${theme.mediaQuery.mobile} {
    width: 290px;
    font-size: 1rem;
  }
`;

const buttonSummary = (theme: Theme) => css`
  margin-left: 1.7rem;
  font-weight: ${theme.fontWeight.bold};
  ${theme.mediaQuery.mobile} {
    margin-left: 1rem;
  }
`;
