import React, { useState, useEffect } from "react";
import { getPosts } from "../services/blogService";
import BlogList from "../components/BlogList";

function Home() {
  const [posts, setPosts] = useState(getPosts());

  useEffect(() => {
    setPosts(getPosts());
  }, []);

  return (
    <div>
      <h1>블로그 형식의 포트폴리오!</h1>
      <BlogList posts={posts} />
    </div>
  );
}

export default Home;
