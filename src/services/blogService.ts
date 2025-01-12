import { BlogPost } from "../types/blog";
import { blogPostData } from "../data/dataGroup";

export const getPosts = (): BlogPost[] => {
  return [...blogPostData];
};

export const getPostById = (id: number): BlogPost | undefined => {
  const post = blogPostData.find((post) => post.id === id);
  if (!post) {
    throw new Error(`No post found with id: ${id}`);
  }
  return post;
};

export const createPost = (post: Omit<BlogPost, "id">): void => {
  const newPost: BlogPost = { ...post, id: Date.now() };
  blogPostData.push(newPost); // 원본 배열에 추가
};

export const updatePost = (
  id: number,
  updatedPost: Partial<BlogPost>
): void => {
  const index = blogPostData.findIndex((post) => post.id === id);
  if (index === -1) {
    throw new Error(`Cannot update post. No post found with id: ${id}`);
  }
  blogPostData[index] = { ...blogPostData[index], ...updatedPost };
};

export const deletePost = (id: number): void => {
  const index = blogPostData.findIndex((post) => post.id === id);
  if (index === -1) {
    throw new Error(`Cannot delete post. No post found with id: ${id}`);
  }
  blogPostData.splice(index, 1); // 원본 배열에서 제거
};
