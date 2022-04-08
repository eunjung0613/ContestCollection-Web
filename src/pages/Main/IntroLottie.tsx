/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

import LottieWrapper from "components/Common/LottieWrapper";
import bgLottieData from "assets/lottieJSON/circle.json";

function IntroLottie() {
  return (
    <div css={wrapper}>
      <LottieWrapper lottieData={bgLottieData} />
    </div>
  );
}

export default IntroLottie;

const wrapper = css`
  position: relative;
  width: 100%;
  height: 140vh;
  z-index: -1;
`;
