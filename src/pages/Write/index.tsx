/** @jsxImportSource @emotion/react */

import { css, Theme } from "@emotion/react";
import WriteCard from "components/WriteCard";
import { motion } from "framer-motion";
import { defaultFadeInLeftVariants } from "constants/motion";
import { Link } from "react-router-dom";
import logo from "assets/images/logo.png";
import LottieWrapper from "components/Common/LottieWrapper";
import arrowjump from "assets/lottieJSON/arrowjump.json";
import bubble from "assets/lottieJSON/bubble.json";
function Write() {
  return (
    <div css={Wrapper}>
      <Link to="/">
        <div css={logoWrapper}>
          <img src={logo} alt="logo" css={logoImage} />
          S_CON
        </div>
      </Link>

      <div css={rightWrapper}>
        <div css={lottiebubble}>
          <LottieWrapper lottieData={bubble} />
        </div>
        <motion.p
          initial="initial"
          whileInView="animate"
          variants={defaultFadeInLeftVariants}
          viewport={{ once: false }}
          exit="exit"
          css={duration}
        >
          <p>서비스 추가하기</p>
        </motion.p>
        <div css={Writecard}>
          <WriteCard />
        </div>
        <div css={lottiearrow}>
          <LottieWrapper lottieData={arrowjump} />
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
  height: 5.7rem;
  font-weight: ${theme.fontWeight.bold};
`;

const rightWrapper = (theme: Theme) => css`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: fit-content;
  margin-left: 25rem;
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
  text-align: center;
  margin-right: 25%;
  ${theme.mediaQuery.mobile} {
    font-size: 1.6rem;
  }
`;

const lottiearrow = (theme: Theme) => css`
  width: 20%;
  margin-left: 45%;
  transform: scaleY(-1);
  display: inline-block;
`;

const lottiebubble = (theme: Theme) => css`
  width: 25%;
  margin-right: 80%;
  transform: rotate(30deg);
`;
