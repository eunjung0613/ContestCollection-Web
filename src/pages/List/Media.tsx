/** @jsxImportSource @emotion/react */

import { css, Theme } from "@emotion/react";
import ServeNav from "components/Common/Nav/ServeNav";
import ListCard from "components/ListCard";
import Nav from "components/Nav";
import serviceData from "assets/serviceList";

function Media() {
  return (
    <>
      <Nav />
      <main css={Wrapper}>
        <div css={navWrapper}>
          <ServeNav name="전체" path="/all" category="Media" />
        </div>
        <div css={cardWrapper}>
          {serviceData.미디어컨텐츠.map((service) => (
            <ListCard
              key={service.name}
              name={service.name}
              award={service.award}
              subTitle={service.subTitle}
              img={service.img}
            />
          ))}
        </div>
      </main>
      ;
    </>
  );
}

export default Media;

const Wrapper = css`
  position: relative;
  min-height: 100vh;
  margin-left: 17rem;
`;

const navWrapper = css`
  display: flex;
  flex-direction: row;
  padding: 30px 0px;
  height: 5rem;
`;

const cardWrapper = css`
  display: flex;
  flex-flow: row wrap;
  margin-top: 0.625rem;
  gap: 40px 22px;
  width: 100%;
  height: auto;
`;
