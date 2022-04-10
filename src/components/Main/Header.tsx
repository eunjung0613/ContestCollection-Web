/** @jsxImportSource @emotion/react */

import { css, Theme } from "@emotion/react";
import { motion } from "framer-motion";
import { defaultFadeInScaleVariants } from "constants/motion";
import { Link } from "react-router-dom";
import IntroLottie from "pages/Main/IntroLottie";

function Header() {
  return (
    <header css={wrapper}>
      <div css={lottieWrapper}>
        <IntroLottie />
      </div>
      <div css={introduceWrapper}>
        <h1 css={title}>
          교내 경진대회를 위한 All-in-One 서비스
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={defaultFadeInScaleVariants}
            viewport={{ once: false }}
            css={logoMotion}
            exit="exit"
          >
            S_CON
          </motion.div>
        </h1>

        <div css={buttonWrapper}>
          <Link to="all/It">
            <button css={button}>서비스 보러가기</button>
          </Link>
          <Link to="/write">
            <button css={addButton}>서비스 추가하기</button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;

const wrapper = css`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 45rem;
`;

const logoMotion = css`
  margin-left: 13px;
`;

const lottieWrapper = css`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const introduceWrapper = css`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const title = (theme: Theme) => css`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 100%;
  text-align: center;
  margin-bottom: 50px;
  font-size: 2.8rem;
  font-weight: ${theme.fontWeight.bold};
`;

const buttonWrapper = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const button = (theme: Theme) => css`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 9.4rem;
  height: 3.12rem;

  font-size: 0.94rem;
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.color.white};
  background-color: #4e5968;

  opacity: 0.8;
  border-radius: 8px;

  :hover {
    background-color: #8b95a1;
    transition: all 0.5s;
  }
`;

const addButton = (theme: Theme) => css`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 9.4rem;
  height: 3.12rem;

  margin: 0 2.2rem;
  font-size: 0.94rem;
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.color.white};
  background-color: #4e5968;

  opacity: 0.8;
  border-radius: 8px;

  :hover {
    background-color: #8b95a1;
    transition: all 0.5s;
  }
`;
