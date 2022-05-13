/** @jsxImportSource @emotion/react */

import { css, Theme } from "@emotion/react";
import axios from "axios";
import { useState } from "react";
import xlsxFile from "read-excel-file";

function WriteCard() {
  const [text, setText] = useState("선택된 파일이 없습니다.");

  const handleFile = (e: any) => {
    console.log(e.target.files[0]);
    xlsxFile(e.target.files[0]).then((sheets: any) => {
      console.log(sheets);
      setText(e.target.files[0].name);
      // axios.post("url", sheets).then(() => {
      //   setText("선택된 파일이 없습니다");
      // });
    });
  };

  return (
    <div css={mainwrap}>
      <div css={filebox}>
        <input type="text" id={"name"} css={uploadname} readOnly value={text} />
        <label className={"label"} htmlFor={"input-file"} css={label}>
          업로드
        </label>
        <input
          formMethod="post"
          type={"file"}
          id={"input-file"}
          accept=".xlsx"
          style={{ display: "none" }}
          onChange={(e) => {
            handleFile(e);
          }}
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
