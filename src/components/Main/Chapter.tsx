/** @jsxImportSource @emotion/react */

import { css, Theme } from "@emotion/react";
import { motion } from "framer-motion";
import { defaultFadeInUpVariants } from "constants/motion";

interface Props {
  title: string;
  summary: string;
}

function Chapter({ title, summary }: Props) {
  return (
    <>
      <motion.div
        initial="initial"
        whileInView="animate"
        variants={defaultFadeInUpVariants}
        viewport={{ once: false }}
      >
        <h1 css={chapter}>{title}</h1>
      </motion.div>
      <h2 css={subTitle}>{summary}</h2>
    </>
  );
}

export default Chapter;

const chapter = (theme: Theme) => css`
  font-size: 1.25rem;
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.color.darkYellow};
  margin-bottom: 30px;
`;

const subTitle = (theme: Theme) => css`
  font-size: 2.25rem;
  font-weight: ${theme.fontWeight.bold};
  margin-bottom: 45px;

  ${theme.mediaQuery.mobile} {
    font-size: 1.97rem;
  }
`;
