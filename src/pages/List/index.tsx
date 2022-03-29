/** @jsxImportSource @emotion/react */

import { css, Theme } from "@emotion/react";
import ListCard from "components/ListCard";
import Nav from "components/Nav";

function List() {
  return (
    <>
      <Nav />
      <main css={Wrapper}>
        <ListCard
          title="BOOKREST"
          exhibit="IT 경진대회 은상, 인기상"
          summary="BOOKREST는 전공서적을 대여해주는 서비스입니다. BOOKREST에서 쉽고 편하게 원하는 책을 대여하시길 바랍니다."
        />
      </main>
      ;
    </>
  );
}

export default List;

const Wrapper = css`
  position: relative;
  min-height: 100vh;
  margin-left: 15rem;
  border-radius: 2rem 0px 0px 2rem;
`;
