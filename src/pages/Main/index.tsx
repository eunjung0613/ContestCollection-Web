/** @jsxImportSource @emotion/react */

import { css, Theme } from "@emotion/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import computer from "assets/images/computer.png";
import phone from "assets/images/phone.png";
import StudentLottie from "pages/Main/StudentLottie";
import Nav from "components/Nav";
import Footer from "components/Common/Footer";
import Explain from "components/Main/Explain";
import Header from "components/Main/Header";
import {
  defaultFadeInUpVariants,
  defaultFadeInLeftVariants,
} from "constants/motion";
import Bottom from "components/Main/Bottom";
import Chapter from "components/Main/Chapter";
import IosPart from "components/Main/IosPart";

function Main() {
  return (
    <>
      <Nav />
      <main css={Wrapper}>
        <Header />
        <section css={methodWrapper}>
          <div css={methodInner}>
            <Chapter
              title="How to use"
              summary="회대 경진대회를 한 곳에서, S_CON"
            />
            <div css={methodSummary}>
              <Explain
                smallTitle="간단하고 편리하게"
                title="간단하고 편리하게 모두의 서비스를"
                summary="연도별 수상작들을 S_CON에서 한눈에 확인하세요."
              />

              <img src={computer} alt="img" css={img} />
            </div>
            <div css={methodSummary}>
              <img src={phone} alt="img" css={phoneImg} />

              <Explain
                smallTitle="어디서든 누구나"
                title="실시간 화상회의를 통한 모두의 참여를"
                summary="화상회의 기능을 통해 손쉽게 관람하며, 질의응답까지 가능해요."
              />
            </div>
            <div css={methodSummary}>
              <Explain
                smallTitle="동기부여 될 수 있게"
                title="회대 IT의 성장을"
                summary="경진대회의 서비스 및 깃허브를 통해 개발에 대한 성장을
                응원해요."
              />

              <div css={img}>
                <StudentLottie />
              </div>
            </div>

            <IosPart />

            <div css={useWrapper}>
              <motion.div
                initial="initial"
                whileInView="animate"
                variants={defaultFadeInLeftVariants}
                viewport={{ once: false }}
                exit="exit"
              >
                <h1 css={subTitle}>S_CON, 너도 할 수 있어</h1>
              </motion.div>
              <div css={useSummaryWrapper}>
                <div css={useSummaryTitle}>
                  <h2 css={useTextTitle}>내 서비스</h2>
                  <h3 css={useTextSubtitle}>없다면 쉽게 등록해요.</h3>
                </div>
                <motion.div
                  initial="initial"
                  whileInView="animate"
                  variants={defaultFadeInUpVariants}
                  viewport={{ once: false }}
                  exit="exit"
                >
                  <p css={useSummary}>
                    출품작, 수상작 상관없이 등록할 수 있어요.
                  </p>

                  <p css={useSummary}>
                    <span css={linkTo}>
                      <Link to="/write">여기서</Link>
                    </span>{" "}
                    등록하면 내 서비스도 S_CON에서 확인가능해요.
                  </p>
                </motion.div>
              </div>

              <div css={endWrapper}>
                <div css={methodLeft}>
                  <motion.div
                    initial="initial"
                    whileInView="animate"
                    variants={defaultFadeInUpVariants}
                    viewport={{ once: false }}
                    exit="exit"
                  >
                    <h2 css={useTextTitle}>문의사항은 언제나</h2>
                  </motion.div>
                  <motion.div
                    initial="initial"
                    whileInView="animate"
                    variants={defaultFadeInUpVariants}
                    viewport={{ once: false }}
                    exit="exit"
                  >
                    <p css={useTextSubtitle}>회대생들의</p>{" "}
                  </motion.div>
                  <motion.div
                    initial="initial"
                    whileInView="animate"
                    variants={defaultFadeInUpVariants}
                    viewport={{ once: false }}
                    exit="exit"
                  >
                    <p css={useTextSubtitle}>관심이</p>
                  </motion.div>
                  <motion.div
                    initial="initial"
                    whileInView="animate"
                    variants={defaultFadeInUpVariants}
                    viewport={{ once: false }}
                    exit="exit"
                  >
                    <p css={useTextSubtitle}>S_CON을 만들어갑니다.</p>{" "}
                  </motion.div>
                </div>

                <div css={inquiryWrapper}>
                  <p css={useSummary}>
                    문의사항이 있다면{" "}
                    <span css={linkTo}>
                      <a href="mailto: 3021062@gmail.com">여기로</a>
                    </span>{" "}
                    연락 가능합니다.
                  </p>
                  <p css={useSummary}>
                    S_CON은 피드백, 건의사항 모두 환영합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Bottom />
      </main>

      <Footer />
    </>
  );
}

export default Main;

const img = (theme: Theme) => css`
  max-width: calc(50% - 30px);

  ${theme.mediaQuery.tablet} {
    margin-left: 3.125rem;
  }
`;

const phoneImg = (theme: Theme) => css`
  max-width: calc(30% - 30px);
  margin-left: 5rem;

  ${theme.mediaQuery.tablet} {
    margin-left: 0rem;
    margin-right: 3.125rem;
  }
`;

const Wrapper = css`
  position: relative;
  min-height: 100vh;
  border-radius: 2rem 0px 0px 2rem;
  margin: 0 4rem 0 17rem;
`;

const methodWrapper = css`
  position: relative;
  width: 100%;
  margin-top: 5rem;
`;

const methodInner = css`
  width: 92%;
  height: 100%;
  margin: 0 auto;
`;

const subTitle = (theme: Theme) => css`
  font-size: 2.25rem;
  font-weight: ${theme.fontWeight.bold};
  margin-bottom: 45px;
`;

const methodSummary = css`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 220px 0;
`;

const methodLeft = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 2.375rem;
  width: 34.75rem;
  height: 100%;
`;

const useWrapper = css`
  padding: 200px 0;
`;

const useSummaryWrapper = css`
  display: flex;
  flex-direction: column;
  margin: 180px 0;
  padding-left: 2.375rem;
`;

const useSummaryTitle = css`
  display: flex;
  margin-bottom: 1.5rem;
`;

const useTextTitle = (theme: Theme) => css`
  font-size: 1.875rem;
  font-weight: ${theme.fontWeight.bold};
  line-height: 1.3;
  margin-right: 12px;
  ${theme.mediaQuery.tablet} {
    font-size: 1.5rem;
  }
`;

const useTextSubtitle = (theme: Theme) => css`
  font-size: 1.875rem;
  font-weight: ${theme.fontWeight.bold};
  line-height: 1.3;
  color: #b0b8c1;
  ${theme.mediaQuery.tablet} {
    font-size: 1.5rem;
  }
`;

const useSummary = (theme: Theme) => css`
  font-size: 1.25rem;
  font-weight: ${theme.fontWeight.bold};
  line-height: 1.5;
  color: #333d4b;

  ${theme.mediaQuery.tablet} {
    font-size: 1.15rem;
  }
`;

const inquiryWrapper = css`
  display: flex;
  flex-direction: column;
`;

const linkTo = css`
  color: blue;
`;

const endWrapper = css`
  display: flex;
  width: 100%;
`;
