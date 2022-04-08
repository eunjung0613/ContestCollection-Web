/** @jsxImportSource @emotion/react */

import { css, Theme } from "@emotion/react";
import Meet2 from "components/MeetCard/meet";
import Button from "components/Common/Button/CopyButton";
import voice from "assets/images/voice.png";
import video from "assets/images/video.png";
import share from "assets/images/share.png";
import phone from "assets/images/phone-call.png";
import { Link } from "react-router-dom";

function Meet() {
  const id = "https://www.naver.com/"; // 차후 서버 소켓 io를 통한 버튼 클릭 별 링크 생성이 가능하게 하여 id를 담아올 예정

  const id2 = "/";
  const handleCopyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("copy success!");
    } catch (err) {
      alert("copy failed!");
    }
  };

  return (
    <div css={main}>
      <div css={meetwrap}>
        <Meet2 />
        <Meet2 />
        <Meet2 />
        <Meet2 />
        <Meet2 />
      </div>
      <div css={linkwrap}>
        <div css={link}>
          <textarea readOnly css={texta}>
            {id}
          </textarea>
          &nbsp; &nbsp;
          <Button label="copy" onClick={() => handleCopyClipBoard(id)} />
        </div>
      </div>
      <div css={buttonwrap}>
        <button type="button">
          <img src={voice} css={btn1} />
        </button>
        <button>
          <img src={video} css={btn2} />
        </button>
        <button>
          <img src={share} css={btn3} />
        </button>
        <Link to="/">
          <button>
            <img src={phone} css={btn4} />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Meet;

const meetwrap = (theme: Theme) => css`
  display: flex;
  flex-flow: row wrap;
  gap: 30px 40px;
  width: 100%;
  padding: 3rem;
  height: auto;
`;

const link = (theme: Theme) => css`
  text-align: center;
  color: ${theme.color.white};
  width: 100%;
  height: 2rem;
  position: flexed;
`;

const texta = css`
  text-align: center;
  box-sizing: border-box;
  border: solid 2px #1e90ff;
  border-radius: 7px;
  resize: none;
  width: 15rem;
  height: 1.5rem;
  margin-top: 2px;
`;

const main = (theme: Theme) => css`
  background-color: ${theme.color.black};
`;

const linkwrap = css`
  width: 100%;
  padding: 3%;
  margin: auto auto;
`;

const buttonwrap = (theme: Theme) => css`
  margin: 0;
  padding: 3px;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -moz-flex;
  display: -webkit-flex;
  justify-content: space-between;
  text-align: center;
  background-color: ${theme.color.white};
  width: 100%;
`;

const btn1 = (theme: Theme) => css`
  width: 15%;
  height: auto;
`;
const btn2 = (theme: Theme) => css`
  width: 15%;
`;
const btn3 = (theme: Theme) => css`
  width: 15%;
`;
const btn4 = (theme: Theme) => css`
  width: 15%;
`;
