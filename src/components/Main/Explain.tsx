/** @jsxImportSource @emotion/react */

import { css, Theme } from "@emotion/react";
import { motion } from "framer-motion";
import { defaultFadeInUpVariants } from "constants/motion";

interface Props {
  smallTitle: string;
  title: string;
  summary: string;
}

function Explain({ smallTitle, title, summary }: Props) {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      variants={defaultFadeInUpVariants}
      viewport={{ once: false }}
    >
      <div css={wrapper}>
        <p css={subTitle}>{smallTitle}</p>
        <p css={pointTitle}>{title}</p>
        <p css={content}>{summary}</p>
      </div>
    </motion.div>
  );
}

export default Explain;

const wrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding-left: 2.375rem;
  height: 100%;
`;

const subTitle = (theme: Theme) => css`
  display: flex;
  flex-direction: row;
  margin-bottom: 0.63rem;
  font-size: 1.13rem;
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.color.darkYellow};
`;

const pointTitle = (theme: Theme) => css`
  margin-bottom: 1.25rem;
  font-size: 1.7rem;
  font-weight: ${theme.fontWeight.bold};
`;

const content = (theme: Theme) => css`
  font-size: 1.13rem;
  font-weight: ${theme.fontWeight.bold};
  color: #d2d2d3;
  letter-spacing: 0.3px;
`;
