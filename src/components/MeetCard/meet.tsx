/** @jsxImportSource @emotion/react */
import { css, Theme } from "@emotion/react";
import IMG from "assets/images/anonymous.png";
import theme from "styles/theme";

function meet() {
  // 화상 화면을 구상합니다.
  return (
    <div css={meetwrap}>
      <img src={IMG} css={imgwrapMain} alt="Img" />
    </div>
  );
}

export default meet;

const meetwrap = (theme: Theme) => css`
  display: flex;
  margin: auto auto;
  background-color: ${theme.color.white};
  border-radius: 3rem;
  ${theme.mediaQuery.mobile} {
    width: 70%;
  }
  ${theme.mediaQuery.tablet} {
    width: 50%;
  }
`;

const imgwrapMain = (theme: Theme) => css`
  max-width: 20em;
  border-radius: 3rem;
  ${theme.mediaQuery.mobile} {
    width: 100%;
    margin: auto auto;
  }
  ${theme.mediaQuery.tablet} {
    width: 80%;
    margin: auto auto;
  }
`;
