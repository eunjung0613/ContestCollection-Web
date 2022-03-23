/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { useLocation, useNavigate } from "react-router-dom";

interface Props {
  name: string;
  path: string;
}

function NavLink({ name, path }: Props) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(path)}
      css={css`
        background-color: ${pathname === path ? "#eaecef" : ""};
        font-weight: ${pathname === path ? "700" : ""};
        line-height: 1.7rem;
        width: 100%;
        padding: 3px 10px;
      `}
    >
      {name}
    </button>
  );
}

export default NavLink;
