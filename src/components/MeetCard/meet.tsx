/** @jsxImportSource @emotion/react */
import { css, Theme } from "@emotion/react";
import IMG from "assets/images/anonymous.png";
import Button from "components/Common/Button/CopyButton";

function meet() {
  // 화상 화면을 구상합니다.
  const id = "https://www.naver.com/"; // 차후 서버 소켓 io를 통한 버튼 클릭 별 링크 생성이 가능하게 하여 id를 담아올 예정
  const handleCopyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("copy success!");
    } catch (err) {
      alert("copy failed!");
    }
  };
  return (
    <div css={meetwrap}>
      <table css={table}>
        <caption>화상회의 서비스</caption>
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
        <div css={link}>
          <div>
            접속 가능 링크 : &nbsp;&nbsp;
            <textarea readOnly css={texta}>
              {id}
            </textarea>
            &nbsp;&nbsp;
            <Button label="copy" onClick={() => handleCopyClipBoard(id)} />
          </div>
        </div>
      </table>
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
  text-align: center;
  box-sizing: border-box;
  background-color: ${theme.color.lightGrey};
  border-radius: 5rem;
`;

const texta = css`
  text-align: center;
  box-sizing: border-box;
  border: solid 2px #1e90ff;
  border-radius: 7px;
  resize: none;
  width: 20rem;
  height: 1.5rem;
`;
