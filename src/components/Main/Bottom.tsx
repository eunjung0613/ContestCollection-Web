/** @jsxImportSource @emotion/react */

import { css, Theme } from "@emotion/react";
import { motion } from "framer-motion";
import {
  defaultFadeInUpVariants,
  defaultFadeInScaleVariants,
} from "constants/motion";

function Bottom() {
  return (
    <div css={wrapper}>
      <h2 css={summary}>
        경진대회는
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={defaultFadeInScaleVariants}
          viewport={{ once: false }}
          css={logoMotion}
        >
          S_CON
        </motion.div>
        에서
      </h2>
      <motion.div
        initial="initial"
        whileInView="animate"
        variants={defaultFadeInUpVariants}
        viewport={{ once: false }}
      >
        <p css={subSummary}>성공회대 IT 각종 대회가 궁금하다면</p>
      </motion.div>
      <motion.div
        initial="initial"
        whileInView="animate"
        variants={defaultFadeInUpVariants}
        viewport={{ once: false }}
      >
        <p css={subSummary}>이제 S_CON에서 함께 하세요!</p>
      </motion.div>
    </div>
  );
}

export default Bottom;

const wrapper = css`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 28.2rem;
  width: 100%;
  margin-bottom: 9.37rem;
`;

const summary = (theme: Theme) => css`
  display: flex;
  flex-direction: row;
  font-size: 3.4rem;
  font-weight: ${theme.fontWeight.bold};
  margin-bottom: 1.6rem;
  ${theme.mediaQuery.tablet} {
    font-size: 2.5rem;
  }

  ${theme.mediaQuery.mobile} {
    display: flex;
    flex-direction: column;
    font-size: 1.98rem;
  }
`;

const subSummary = (theme: Theme) => css`
  font-size: 1.9rem;
  font-weight: ${theme.fontWeight.bold};
  line-height: 1.47;
  color: #b0b8c1;
  ${theme.mediaQuery.tablet} {
    font-size: 1.6rem;
  }
  ${theme.mediaQuery.mobile} {
    font-size: 1.32rem;
  }
`;

const logoMotion = (theme: Theme) => css`
  margin: 0 13px;
  color: ${theme.color.darkYellow};
`;
