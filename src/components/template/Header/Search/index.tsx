import React, { memo, useState } from "react";
import {
  FiSearch as SearchIcon,
  FiArrowLeft as BackIcon,
  FiCrosshair as LocateIcon,
} from "react-icons/fi";
import { FormattedMessage } from "react-intl";
import { Link, useNavigate } from "react-router-dom";
import clsx from "clsx";
import { IconButton } from "snake-ui";
import { SearchContainer } from "./styles";

const Search = () => {
  const [term, setTerm] = useState("");
  const [collapsed, setCollapsed] = useState(true);
  const navigate = useNavigate();

  const search = () => {
    if (term !== "") {
      navigate(`/search?term=${term}&type=all`);
    }
  };

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      search();
    }
  };

  return (
    <SearchContainer>
      <div className={clsx("mobile-search", !collapsed && "not-collapsed")}>
        {collapsed ? (
          <IconButton
            icon={<SearchIcon />} // @ts-ignore
            onClick={() => setCollapsed(false)}
          />
        ) : (
          <>
            <IconButton
              icon={<BackIcon />} // @ts-ignore
              onClick={() => setCollapsed(true)}
            />

            <FormattedMessage
              id="common.search"
              description="Input de pesquisa"
            >
              {(msg) => (
                <input
                  formMethod="get"
                  type="text" // @ts-ignore
                  placeholder={msg}
                  value={term}
                  onChange={(e) => setTerm(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
              )}
            </FormattedMessage>

            <Link to="/nearby">
              <LocateIcon />
            </Link>
          </>
        )}
      </div>
      <div className="desktop-search">
        <i>
          <SearchIcon />
        </i>
        <FormattedMessage id="common.search" description="Input de pesquisa">
          {(msg) => (
            <input
              type="text" // @ts-ignore
              placeholder={msg}
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          )}
        </FormattedMessage>

        <Link to="/nearby">
          <LocateIcon />
        </Link>
      </div>
    </SearchContainer>
  );
};
export default memo(Search);
