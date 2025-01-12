import React from "react";
import { useParams, Link } from "react-router-dom";
import { getPostById } from "../services/blogService";

const PostDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = React.useState<{
    title: string;
    content: string;
  } | null>(null);

  React.useEffect(() => {
    try {
      const fetchedPost = getPostById(Number(id));
      setPost(fetchedPost as any);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  }, [id]);

  return (
    <div>
      <Link to="/" className="home-link">
        홈으로 이동
      </Link>
      <h1>{post ? post.title : "로딩 중..."}</h1>
      <p>{post ? post.content : "로딩 중..."}</p>
    </div>
  );
};

export default PostDetail;
