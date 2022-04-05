/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { useLocation, useNavigate } from "react-router-dom";

interface Props {
  category: string;
  path: string;
}

function NavLink({ category, path }: Props) {
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
        padding: 5px 11px;
      `}
    >
      {category}
    </button>
  );
}

export default NavLink;
