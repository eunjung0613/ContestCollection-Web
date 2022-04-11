/** @jsxImportSource @emotion/react */

import { css, Theme } from "@emotion/react";
import { motion } from "framer-motion";
import {
  defaultFadeInUpVariants,
  FadeInUpVariants,
  FadeInScaleVariants,
} from "constants/motion";

interface Props {
  smallTitle: string;
  title: string;
  summary: string;
}

function Explain({ smallTitle, title, summary }: Props) {
  return (
    <div css={wrapper}>
      <motion.div
        initial="initial"
        whileInView="animate"
        variants={FadeInUpVariants}
        viewport={{ once: false }}
      >
        <p css={subTitle}>{smallTitle}</p>
      </motion.div>
      <motion.div
        initial="initial"
        whileInView="animate"
        variants={defaultFadeInUpVariants}
        viewport={{ once: false }}
        exit="exit"
      >
        <p css={pointTitle}>{title}</p>
      </motion.div>
      <motion.div
        initial="initial"
        whileInView="animate"
        variants={FadeInScaleVariants}
        viewport={{ once: false }}
        exit="exit"
      >
        <p css={content}>{summary}</p>
      </motion.div>
    </div>
  );
}

export default Explain;

const wrapper = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding-left: 2.375rem;
  height: 100%;

  ${theme.mediaQuery.tablet} {
    padding-left: 0rem;
  }
`;

const subTitle = (theme: Theme) => css`
  display: flex;
  flex-direction: row;
  margin-bottom: 0.63rem;
  font-size: 1.13rem;
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.color.darkYellow};

  ${theme.mediaQuery.tablet} {
    font-size: 1rem;
  }
`;

const pointTitle = (theme: Theme) => css`
  margin-bottom: 1.25rem;
  font-size: 1.7rem;
  font-weight: ${theme.fontWeight.bold};

  ${theme.mediaQuery.tablet} {
    font-size: 1.23rem;
  }
`;

const content = (theme: Theme) => css`
  font-size: 1.13rem;
  font-weight: ${theme.fontWeight.bold};
  color: #d2d2d3;
  letter-spacing: 0.3px;

  ${theme.mediaQuery.tablet} {
    font-size: 1.1rem;
  }
`;
