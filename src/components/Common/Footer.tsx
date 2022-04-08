/** @jsxImportSource @emotion/react */

import { css, Theme } from "@emotion/react";

function Footer() {
  return (
    <footer css={wrapper}>
      <div css={footerSummary}>
        <p css={logo}>S_CON</p>
        Copyright © 2022 Develop, Design by 김지인 김은정 손창하 한슬희. All
        rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

const wrapper = css`
  position: relative;
  bottom: 0;
  width: 100%;
  background-color: black;
  margin-left: 13.5rem;
`;

const footerSummary = css`
  display: flex;
 justify-content: space-evenly;
  align-items: center;
  height: 100px;
  color: #b0b8c1;
  line-height: 1.5;
`;

const logo = (theme: Theme) => css`
  font-size: 2.2rem;
  font-weight: ${theme.fontWeight.bold};
`;
