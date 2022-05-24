/** @jsxImportSource @emotion/react */

import { css, Theme } from "@emotion/react";
import WriteCard from "components/WriteCard";
import { motion } from "framer-motion";
import { defaultFadeInLeftVariants } from "constants/motion";
import { Link } from "react-router-dom";
import logo from "assets/images/logo.png";

function Write() {
  return (
    <div css={Wrapper}>
      <div css={leftWrapper}>
        <header css={header}>
          <Link to="/">
            <div css={logoWrapper}>
              <img src={logo} alt="logo" css={logoImage} />
              S_CON
            </div>
          </Link>
        </header>
      </div>

      <div css={rightWrapper}>
        <motion.p
          initial="initial"
          whileInView="animate"
          variants={defaultFadeInLeftVariants}
          viewport={{ once: false }}
          exit="exit"
          css={duration}
        >
          <p>당신을 위한 파일 등록</p>
        </motion.p>
        <div css={Writecard}>
          <WriteCard />
        </div>
      </div>
    </div>
  );
}

export default Write;

const Wrapper = (theme: Theme) => css`
  display: flex;
  flex-direction: row;
`;
const leftWrapper = (theme: Theme) => css`
  top: 0;
  left: 0;
  width: 23rem;
  height: 100vh;
  background-color: ${theme.color.grey};
  ${theme.mediaQuery.tablet} {
    width: 13.5rem;
  }
  ${theme.mediaQuery.mobile} {
    background-color: ${theme.color.white};
  }
`;

const logoImage = (theme: Theme) => css`
  position: relative;
  width: 2rem;
  height: 2rem;
  margin-right: 0.7rem;
  margin-left: 3rem;
  ${theme.mediaQuery.mobile} {
    z-index: 10;
  }
`;

const logoWrapper = (theme: Theme) => css`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: ${theme.fontWeight.bold};
`;

const header = (theme: Theme) => css`
  top: 0px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 5.7rem;
  flex-direction: row;
  align-items: center;

  font-weight: ${theme.fontWeight.bold};

  ${theme.mediaQuery.mobile} {
    height: 5.7rem;
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

const Writecard = (theme: Theme) => css`
  text-align: center;
  margin-top: 3rem;
  min-width: 20rem;
`;

const duration = (theme: Theme) => css`
  font-weight: ${theme.fontWeight.bold};
  font-size: 1.8rem;
  line-height: 1.3;
  text-align: center;
  ${theme.mediaQuery.mobile} {
    font-size: 1.6rem;
  }
`;
