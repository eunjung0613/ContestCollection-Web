/** @jsxImportSource @emotion/react */

import { css, Theme } from "@emotion/react";
import { motion } from "framer-motion";
import { defaultFadeInUpVariants } from "constants/motion";
import Chapter from "components/Main/Chapter";
import app from "assets/images/app.gif";
import ios from "assets/images/ios.png";

function IosPart() {
  return (
    <>
      <Chapter title="App" summary="S_CON, 앱에서도 볼 수 있도록" />
      <div css={wrapper}>
        <div css={phoneWrapper}>
          <div css={phoneImg}>
            <img src={ios} alt="img" />
          </div>
          <div css={appGif}>
            <img src={app} alt="img" css={gif} />
          </div>
        </div>

        <div css={textWrapper}>
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={defaultFadeInUpVariants}
            viewport={{ once: false }}
            exit="exit"
          >
            <h2 css={text}>대회별, 연도별, 수상별로 볼 수 있는 화면 구성</h2>
          </motion.div>
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={defaultFadeInUpVariants}
            viewport={{ once: false }}
            exit="exit"
          >
            <h2 css={text}>
              버튼을 통해 개선사항 및 서비스 등록까지 모두 간편하게
            </h2>
          </motion.div>
        </div>
      </div>
      <div>
        <h3 css={summary}>
          지금
          <span css={linkTo}>여기서</span>
          앱에서 S_CON을 이용해보세요.
        </h3>
      </div>
    </>
  );
}

export default IosPart;

const wrapper = css`
  position: relative;
  width: 100%;
  margin: 170px 0 200px 0;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const phoneWrapper = css`
  position: relative;
  margin: 0 auto;
`;

const phoneImg = css`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const appGif = css`
  position: relative;

  height: 36.25rem;
  width: 17.5rem;
`;
const gif = css`
  position: relative;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const text = (theme: Theme) => css`
  font-size: 1.44rem;
  font-weight: ${theme.fontWeight.bold};
  line-height: 1.5;
  color: rgb(51, 61, 75);
  max-width: 220px;
`;

const textWrapper = css`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 900px;
  padding-left: 1.25rem;
`;

const summary = (theme: Theme) => css`
  font-size: 1.44rem;
  font-weight: ${theme.fontWeight.bold};
  line-height: 1.5;
  color: rgb(51, 61, 75);
  text-align: center;
`;

const linkTo = css`
  color: blue;
  margin: 0 4px;
  cursor: pointer;
`;
