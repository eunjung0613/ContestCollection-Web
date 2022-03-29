/** @jsxImportSource @emotion/react */

import { css, Theme } from "@emotion/react";
import serviceImg from "assets/images/test.png";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  exhibit: string | undefined;
  summary: string;
}

function ListCard({ title, exhibit, summary }: Props) {
  return (
    <Link to="/detail">
      <div css={Wrapper}>
        <div css={titleWrapper}>
          <span css={Title}>{title}</span>
          <span css={Exhibit}>{exhibit}</span>
        </div>
        <div css={bottomWrapper}>
          <div css={imgWrapper}>
            <img src={serviceImg} alt="img" css={img} />
          </div>
          <div css={summaryWrapper}>
            <span css={Summary}>{summary}</span>
          </div>
        </div>{" "}
        <div css={buttonWrapper}>
          <button css={Button}>Go service</button>
        </div>
      </div>
    </Link>
  );
}

export default ListCard;

const Wrapper = (theme: Theme) => css`
  width: 17.5rem;
  height: 20rem;
  padding: 0.75rem;
  border-radius: 0.438rem;
  box-shadow: 0.1em 0.1em 0.1em 0.1em ${theme.color.lightGrey};
  cursor: pointer;
`;

const titleWrapper = (theme: Theme) => css`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${theme.color.lightGrey};
`;

const Title = (theme: Theme) => css`
  font-size: 1.22rem;
  font-weight: ${theme.fontWeight.bold};
`;

const Exhibit = (theme: Theme) => css`
  font-size: 0.72rem;
  font-weight: ${theme.fontWeight.light};
  margin-bottom: 0.625rem;
  color: #333333;
`;

const bottomWrapper = css`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 0.75rem;
  width: 100%;
  height: auto;
`;

const imgWrapper = css`
  position: relative;
  height: 6.25rem;
  width: 100%;
`;

const img = css`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const summaryWrapper = (theme: Theme) => css`
  position: relative;
  padding-top: 0.75rem;
  height: 6.25rem;
  border-bottom: 1px solid ${theme.color.lightGrey};
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 1px;
  }
`;

const Summary = (theme: Theme) => css`
  font-size: 0.84rem;
  font-weight: ${theme.fontWeight.light};
  white-space: pre-line;
`;

const buttonWrapper = css`
  position: relative;
  margin: 0.3rem;
`;

const Button = (theme: Theme) => css`
  position: absolute;
  right: 0;
  font-size: 1rem;
  font-weight: ${theme.fontWeight.normal};
  :hover {
    color: ${theme.color.darkYellow};
    transition: 0.2s ease-in-out;
  }
`;
