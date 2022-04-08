/** @jsxImportSource @emotion/react */

import { IService } from "assets/serviceList";
import { css, Theme } from "@emotion/react";

function WriteCard() {
  const category = {
    IT: "IT",
    SW: "SW",
    MC: "미디어컨텐츠",
  };

  return (
    <div css={mainwrap}>
      <form css={formwrap} method="post" action="">
        <p>참여한 경진대회 종류 </p>
        <select css={select} required>
          <option value={category.IT}>IT 경진대회</option>
          <option value={category.SW}>소프트웨어 경진대회</option>
          <option value={category.MC}>미디어컨텐츠 경진대회</option>
        </select>
        <p>프로젝트 이름</p>
        <textarea
          placeholder="프로젝트 이름을 작성해주세요"
          css={projectName}
          required
        ></textarea>
        <p>개발 인원</p>
        <textarea
          placeholder="개발인원을 작성해주세요&#13;&#10;ex)&#13;&#10;201014001 김성공&#13;&#10;201114020 이성공"
          css={textArea}
          required
        ></textarea>
        <p>깃허브 주소</p>
        <input
          placeholder="주소를 입력해주세요."
          type="url"
          css={github}
          required
        ></input>
        <p>프로젝트 링크</p>
        <input
          placeholder="필수 사항은 아닙니다. 웹링크 등이 존재할 경우 기재해주세요."
          type="url"
          css={github}
        ></input>
        <p>이메일 주소</p>
        <input
          placeholder="대표 이메일 주소를 기재해주세요."
          type="email"
          css={email}
          required
        ></input>
        <p>대표 사진</p>
        <input
          type="file"
          id="inputImage"
          multiple
          accept="image/*"
          required
        ></input>
        <p>세부 정보</p>
        <span>1. 개발 기간을 지정해주세요.</span>
        <div>
          <input type="date" min="2010-01-01" css={date} required></input>
          &nbsp;~&nbsp;
          <input type="date" min="2010-01-01" css={date} required></input>
        </div>
        <span>2. 사용 기술을 기재해주세요.</span>
        <br />
        <textarea
          placeholder="사용 기술을 기재해주세요."
          css={useSkil}
          required
        ></textarea>
        <br />
        <span>3. 개발한 프로젝트의 짧은 설명을 기재해주세요.</span>
        <br />
        <textarea
          placeholder="프로젝트에 대해 한 두문장으로 기재해주세요."
          css={summary}
          required
        ></textarea>
        <div css={submitbtnwrap}>
          <input type="submit" value="작성 완료" css={submitbtn}></input>
        </div>
      </form>
    </div>
  );
}

export default WriteCard;

// 하기 css 차후 작성 예정
const mainwrap = css`
  display: flex;
  margin-top: 3rem;
`;

const formwrap = css`
  margin: auto auto;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 2px 3px 5px 0px gray;
`;

const select = css`
  box-sizing: border-box;
  border: solid 2px #afc4e7;
  border-radius: 7px;
  width: 50rem;
  height: 1.7rem;
  margin-top: 0.8rem;
  text-align: center;
`;

const projectName = css`
  box-sizing: border-box;
  border: solid 2px #afc4e7;
  border-radius: 7px;
  resize: none;
  width: 50rem;
  height: 1.7rem;
  margin-top: 0.8rem;
`;

const textArea = css`
  box-sizing: border-box;
  border: solid 2px #afc4e7;
  border-radius: 7px;
  resize: none;
  width: 50rem;
  height: 5rem;
  margin-top: 0.8rem;
`;

const github = css`
  box-sizing: border-box;
  border: solid 2px #afc4e7;
  border-radius: 7px;
  resize: none;
  width: 50rem;
  height: 1.8rem;
  margin-top: 0.8rem;
`;

const email = css`
  box-sizing: border-box;
  border: solid 2px #afc4e7;
  border-radius: 7px;
  resize: none;
  width: 50rem;
  height: 1.8rem;
  margin-top: 0.8rem;
`;

const date = css`
  box-sizing: border-box;
  border: solid 2px #afc4e7;
  border-radius: 3px;
  width: 22.5rem;
  height: 1.8rem;
  margin-top: 0.8rem;
`;

const useSkil = css`
  box-sizing: border-box;
  border: solid 2px #afc4e7;
  border-radius: 7px;
  resize: none;
  width: 50rem;
  height: 5rem;
  margin-top: 0.8rem;
`;

const summary = css`
  box-sizing: border-box;
  border: solid 2px #afc4e7;
  border-radius: 7px;
  resize: none;
  width: 50rem;
  height: 3rem;
  margin-top: 0.8rem;
`;

const submitbtnwrap = css`
  text-align: right;
`;

const submitbtn = (theme: Theme) => css`
  border-radius: 7px;
  border: solid 2px #afc4e7;
  box-shadow: 2px 3px 5px 0px;
  background-color: #afc4e7;
`;
