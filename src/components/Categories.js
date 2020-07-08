import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const categories = [
  //name은 실제 카테고리 값이고
  //text 값은 렌더링 할 때 사용할 한글 카테고리
  {
    name: "all",
    text: "ALL",
  },
  {
    name: "business",
    text: "비즈니스",
  },
  {
    name: "entertainment",
    text: "엔터테인먼트",
  },
  {
    name: "health",
    text: "건강",
  },
  {
    name: "science",
    text: "과학",
  },
  {
    name: "sports",
    text: "스포츠",
  },
  {
    name: "technology",
    text: "기술",
  },
];

const CategoriesBlock = styled.div`
  display: flex;
  justify-content: center;
  background-color: #313030;
  padding: 1.5rem;
  width: 95%;
  border-radius: 5px;
  margin: 0 auto;
  font-weight: bold;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const Category = styled(NavLink)`
  font-size: 1.3rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: #fff;
  padding-bottom: 0.25rem;
  margin: 0 20px;

  &:hover {
    color: #495057;
  }

  &.active {
    border-bottom: 2px solid #c12f2f;
    color: #c12f2f;
    &:hover {
      color: #c12f2f;
    }
  }

  & + & {
    margin-left: 1rem;
  }
`;

const Categories = () => {
  return (
    <CategoriesBlock>
      {categories.map((c) => (
        //NavLink로 만들어진 Category 컴포넌트에 to 값은
        //"/카테고리이름" 으로 설정함
        //전체보기의 경우는 "/all" 대신 "/"로 설정
        //to 값이"/" 일 때는 exact 값을 true로 해주어야 함.
        <Category
          key={c.name}
          activeClassName="active"
          exact={c.name === "all"}
          to={c.name === "all" ? "/" : `/${c.name}`}
        >
          {c.text}
        </Category>
      ))}
    </CategoriesBlock>
  );
};

export default Categories;
