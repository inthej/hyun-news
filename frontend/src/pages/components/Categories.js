import React from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";
import {AppNames} from "../../common/AppNames";
import {CategoryType} from "../../common/AppTypes";

const Category = styled(NavLink)`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
    color: #495057;
  }

  &.active {
    font-weight: 600;
    border-bottom: 2px solid #000000;
    color: #000000;

    &:hover {
      color: #999999;
    }
  }

  & + & {
    margin-left: 1rem;
  }
`;

const Categories = () => {
  return (
    <>
      {
        Object.keys(CategoryType).map((type) => {
          const isAllType = type === CategoryType.all;
          return (
            <Category
              className="category"
              key={type}
              activeClassName="active"
              exact={isAllType}
              to={isAllType ? "/" : `/${type}`} // 링크값 이동
            >
              {AppNames.CategoryType(type)}
            </Category>
          );
        })
      }
    </>
  );
};

export default Categories;