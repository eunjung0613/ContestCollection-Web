/** @jsxImportSource @emotion/react */

import { css, Theme } from "@emotion/react";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { objectedService, IService } from "assets/serviceList";

function Inform() {
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
      <div css={calendarWrapper}>
        <span css={title}>Development Schedule</span>
        {currentService?.calendar.map((monthCalendar) => (
          <span css={data}>{monthCalendar}</span>
        ))}
      </div>
      <div css={developerWrapper}>
        <span css={title}>Developer</span>
        {currentService?.people.map((eachPeople) => (
          <span css={data}>{eachPeople}</span>
        ))}
      </div>
    </div>
  );
}

export default Inform;

const wrapper = css`
  display: flex;
  flex-direction: row;
  margin-top: 2.5rem;
`;

const calendarWrapper = css`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const developerWrapper = css`
  display: flex;
  flex-direction: column;
`;

const data = (theme: Theme) => css`
  margin-top: 1rem;
  font-size: 1.05rem;
  font-weight: ${theme.fontWeight.normal};
`;

const title = (theme: Theme) => css`
  font-size: 1.28rem;
  font-weight: ${theme.fontWeight.bold};
`;
