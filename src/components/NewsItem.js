// 각 뉴스 정보를 보여주는 컴포넌트
import React from "react";
import styled from "styled-components";

const NewsItemBlock = styled.div`
  display: inline-flex;
  height: 120px;
  margin-left : 3rem;
  margin-top : 2rem;

  .thumbnail {
    margin-right: 1rem;
    img {
      width: 160px;
      height: 120px;
      object-fit: cover;
    }
  }
  .contents {
    h2 {
      display: -webkit-box;
      -webkit-line-clamp:3;
      -webkit-box-orient:vertical;
      height: 60px;
      margin: 0;
      text-overflow: ellipsis;
      overflow: hidden;
      a {
        color: black;
        &:hover {
          color: #4728bf;
        }
      }
      
      }
    }
    p {
      height: 60px;
      overflow: hidden;
      margin: 0;
      line-height: 1.3;
      margin-top: 0.5rem;
      white-space: normal;
      padding-botton: 5rem;
      
    }
  }
  & + & {
    margin-top: 3rem;
  }
`;
const NewsItem = ({ article }) => {
  const { title, description, url, urlToImage } = article;
  return (
    <NewsItemBlock>
      {urlToImage && (
        <div className="thumbnail">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={urlToImage} alt="thumbnail" />
          </a>
        </div>
      )}
      <div className="contents">
        <h2>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
        <p>{description}</p>
      </div>
    </NewsItemBlock>
  );
};

export default NewsItem;
