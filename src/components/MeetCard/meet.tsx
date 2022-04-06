/** @jsxImportSource @emotion/react */
import { css, Theme } from "@emotion/react";
import IMG from "assets/images/anonymous.png";
import background from "assets/images/frame.png";

function meet() {
  // 화상 화면을 구상합니다.
  return (
    <div css={meetwrap}>
      <div>
        <table css={table}>
          <caption>화상 회의 서비스</caption>
          <tr css={wrapper}>
            <img src={IMG} css={imgwrapMain} />
            <td>
              <tr>
                <img src={IMG} css={imgwrap} />
              </tr>
              <tr>
                <img src={IMG} css={imgwrap} />
              </tr>
              <tr>
                <img src={IMG} css={imgwrap} />
              </tr>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default meet;

const meetwrap = css`
  display: flex;
  margin: auto auto;
`;

const table = (theme: Theme) => css`
  border: none;
  width: 90%;
  height: 30%;
  border-color: ${theme.color.darkYellow};
`;

const imgwrapMain = css`
  width: 40rem;
`;

const imgwrap = css`
  width: 10rem;
`;

const wrapper = css`
  text-align: center;
`;

const link = (theme: Theme) => css`
  left: 0;
  bottm: 0;
`;
