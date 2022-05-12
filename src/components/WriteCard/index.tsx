/** @jsxImportSource @emotion/react */

import { css, Theme } from "@emotion/react";
import { upload } from "@testing-library/user-event/dist/upload";
import React, { useState } from "react";
import theme from "styles/theme";

function WriteCard() {
  const handleFile = (e: any) => {
    console.log(e.target.files[0]);
  };
  return (
    <div css={mainwrap}>
      <div css={filebox}>
        <input className={"upload-name"} css={uploadname} />
        <label className={"label"} htmlFor={"input-file"} css={label}>
          파일 찾기
        </label>
        <input
          type={"file"}
          id={"input-file"}
          accept=".xlsx"
          style={{ display: "none" }}
          onChange={(e) => handleFile(e)}
        />
      </div>
    </div>
  );
}

export default WriteCard;

// 하기 css 차후 작성 예정

const mainwrap = (theme: Theme) => css`
  display: flex;
  margin-top: 3rem;
`;
const filebox = (theme: Theme) => css``;

const uploadname = (theme: Theme) => css`
  display: inline-block;
  height: 40px;
  padding: 0 10px;
  vertical-align: middle;
  border: 1px solid #dddddd;
  color: #808080;
`;

const label = (theme: Theme) => css`
  display: inline-block;
  padding: 6px 25px;
  color: #fff;
  vertical-align: middle;
  background-color: #999999;
  cursor: pointer;
  height: 40px;
  margin-left: 10px;
`;
