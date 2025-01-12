import React from "react";
import styled from "styled-components";

import { BlogPost } from "../types/blog";
import { Link } from "react-router-dom";

interface BlogListProps {
  posts: BlogPost[];
}

const BlogList = function ({ posts }: BlogListProps) {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className="post-item">
          <Button>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </Button>
          <p className="post-content">{post.content.slice(0, 100)}...</p>
          <p className="post-date">{post.createDate}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
