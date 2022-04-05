/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { useNavigate, Link } from "react-router-dom";

interface Props {
  name: string;
  category: string;
  path: string;
}

function ServeNav({ name, category, path }: Props) {
  const navigate = useNavigate();
  return (
    <Link to={`${path}/${category}`}>
      <button
        onClick={() => navigate(path)}
        css={css`
          color: #f2b600;
          font-weight: 700;
          width: 6.9rem;
          font-size: 1.17rem;
        `}
      >
        {name}
      </button>
    </Link>
  );
}

export default ServeNav;
