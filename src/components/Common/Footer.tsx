/** @jsxImportSource @emotion/react */

import { css, Theme } from "@emotion/react";
import { AiFillGithub, AiFillMail } from "react-icons/ai";
function Footer() {
  return (
    <footer css={wrapper}>
      <div css={infromWrapper}>
        <a href="https://github.com/S-CON-SKHU">
          <h2 css={link}>
            {" "}
            <AiFillGithub size="24" css={icon}/> Github
          </h2>
        </a>
        <a href="mailto: 3021062@gmail.com">
          <h2 css={link}>
            {" "}
            <AiFillMail size="27" css={icon} /> Mail
          </h2>
        </a>
      </div>
      <div css={summary}>
        <p css={logo}>S_CON</p>
        <p css={copyright}>
          Copyright © 2022 Develop, Design by 김지인 김은정 손창하 한슬희. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

const wrapper = css`
  position: relative;
  bottom: 0;
  width: 100%;
  background-color: #191f28;
  margin-left: 13.5rem;
`;

const infromWrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  height: 5.3rem;
  padding: 0 67px;
  background-color: black;
`;

const link = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #6b7684;
  :hover {
    color: #b0b8c1;
  }
`;

const summary = css`
  display: flex;
  align-items: center;
  height: 6.25rem;
  color: #b0b8c1;
  font-size: 0.94rem;
  line-height: 1.5;
  padding: 0 67px;
`;

const logo = (theme: Theme) => css`
  font-size: 2.2rem;
  font-weight: ${theme.fontWeight.bold};
`;

const copyright = css`
  margin-left: 50px;
`;

const icon = css`
  margin-right: 5px;

`