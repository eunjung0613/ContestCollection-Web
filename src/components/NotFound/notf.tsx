/** @jsxImportSource @emotion/react */
import { css, Theme } from "@emotion/react";
import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

function NF() {
  const con = useRef<any>();

  useEffect(() => {
    lottie.loadAnimation({
      container: con.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("assets/lottieJSON/notfound.json"),
    });
  }, []);
  return (
    <div css={Allwrap}>
      <div css={lottiecontent} ref={con}></div>
      <p css={text}>
        찾고있는 페이지를 찾을 수 없습니다. <br />
        이름이 바뀌었거나 존재하지 않습니다.
      </p>
    </div>
  );
}

export default NF;

const Allwrap = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15%;
`;

const lottiecontent = css`
  width: 30rem;
`;

const text = (theme: Theme) => css`
  font-weight: ${theme.fontWeight.bold};
  text-align: center;
`;
