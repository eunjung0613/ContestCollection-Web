/** @jsxImportSource @emotion/react */

import { css, Theme } from "@emotion/react";
import ReactPlayer from "react-player";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { objectedService, IService } from "assets/serviceList";
import Nav from "components/Nav";
import GoLink from "components/Detail/GoLink";
import Inform from "components/Detail/Inform";

function Detail() {
  const { name } = useParams();
  const [currentService, setCurrentService] = useState<IService | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (typeof name !== "string") {
      navigate("/");
      return;
    }
    if (!objectedService[name]) {
      navigate("/");
      return;
    }
    setCurrentService(objectedService[name]);
  }, [name, navigate]);

  return (
    <>
      <Nav />
      <div css={totalWrapper}>
        {" "}
        <div css={titleWrapper}>
          <span css={title}>{currentService?.name}</span>
          <span css={awardSummary}>{currentService?.award}</span>
        </div>
        <div css={videoWrapper}>
          <ReactPlayer
            url={currentService?.youtubeLink}
            playing={false}
            controls={true}
            muted={false}
            loop={false}
            width="100%"
            height="100%"
          />
        </div>
        <div css={summaryWrapper}>
          <div>
            {currentService?.skills.map((eachSkill) => (
              <span css={skil}>{eachSkill}</span>
            ))}
          </div>
          <p css={summary}>{currentService?.summary}</p>
        </div>
        <span css={informTitle}>More Inform</span>
        <Inform />
        <GoLink />
      </div>
    </>
  );
}

export default Detail;

const totalWrapper = css`
  position: relative;
  min-height: 100vh;
  padding: 1.875rem 2.8rem;
  margin-left: 17rem;
`;

const titleWrapper = css`
  display: flex;
  flex-direction: column;
`;

const title = (theme: Theme) => css`
  font-size: 1.4rem;
  font-weight: ${theme.fontWeight.bold};
`;

const awardSummary = (theme: Theme) => css`
  font-size: 0.9rem;
  font-weight: ${theme.fontWeight.light};
  opacity: 0.9;
`;

const videoWrapper = css`
  position: relative;
  margin: 1.8rem 0;
  width: 100%;
  aspect-ratio: 13 / 6;
`;

const summaryWrapper = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 24rem;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 1px;
  }

  ${theme.mediaQuery.tablet} {
    margin: 30px 0 100px 0;
  }
`;

const summary = (theme: Theme) => css`
  font-size: 1.05rem;
  font-weight: ${theme.fontWeight.normal};
  line-height: 2.1rem;
`;

const skil = (theme: Theme) => css`
  display: inline-block;
  padding: 5px 10px;
  margin: 0 0.63rem 1.26rem 0;

  font-size: 0.82rem;
  font-weight: ${theme.fontWeight.normal};
  white-space: nowrap;

  color: ${theme.color.darkYellow};
  background-color: #fcf7e8;
  border-radius: 1rem;
  border: 1px solid rgba(0, 0, 0, 0);
  cursor: pointer;
`;

const informTitle = (theme: Theme) => css`
  font-size: 1.4rem;
  font-weight: ${theme.fontWeight.bold};
`;
