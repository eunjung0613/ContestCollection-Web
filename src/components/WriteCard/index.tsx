/** @jsxImportSource @emotion/react */

import { css, Theme } from "@emotion/react";
import logo from "assets/images/logo.png";
import { IService } from "assets/serviceList/index";
import React, { useState } from "react";

function WriteCard() {
  return (
    <div css={mainwrap}>
      <form>
        <p>프로젝트 이름</p>
        <input type="text" placeholder="프로젝트 명"></input>
      </form>
    </div>
  );
}

// 하기 css 차후 작성 예정
const mainwrap = css``;

export default WriteCard;
