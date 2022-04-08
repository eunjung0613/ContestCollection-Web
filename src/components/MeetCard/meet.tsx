/** @jsxImportSource @emotion/react */
import { css, Theme } from "@emotion/react";
import IMG from "assets/images/anonymous.png";

function meet() {
  // 화상 화면을 구상합니다.
  return (
    <div css={meetwrap}>
      <img src={IMG} css={imgwrapMain} />
    </div>
  );
}

export default meet;

const meetwrap = (theme: Theme) => css`
  display: flex;
  margin: auto auto;
  background-color: ${theme.color.white};
`;

const imgwrapMain = css`
  max-width: 20em;
  border-radius: 3rem;
`;
