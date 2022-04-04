/** @jsxImportSource @emotion/react */

import { css, Theme } from "@emotion/react";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { objectedService, IService } from "assets/serviceList";

function GoLink() {
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
    <div css={wrapper}>
      <div css={titleWrapper}>
        <span css={title}>See more</span>
      </div>
      <div>
        <a
          href={currentService?.githubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button css={button}>Go Github</button>
        </a>

        <a
          href={currentService?.serviceLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button css={button}>Go Service</button>
        </a>
      </div>
    </div>
  );
}

export default GoLink;

const wrapper = css`
  display: flex;
  flex-direction: column;
`;

const titleWrapper = css`
  margin-top: 8rem;
`;

const title = (theme: Theme) => css`
  font-size: 1.28rem;
  font-weight: ${theme.fontWeight.bold};
`;

const button = (theme: Theme) => css`
  padding: 6px 11px;
  margin: 1rem 10px 1.25rem 0;
  font-size: 1.05rem;
  font-weight: ${theme.fontWeight.normal};

  color: ${theme.color.darkYellow};
  background-color: ${theme.color.grey};
  border-radius: 0.3rem;
  border: 1px solid rgba(0, 0, 0, 0);

  :hover {
    transition: all 0.25s;
    color: ${theme.color.grey};
    background-color: ${theme.color.darkYellow};
  }
`;
