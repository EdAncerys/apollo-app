import React from 'react';
import { useAuthState } from '../Context/Auth/index';

import PostIndexCard from './PostIndexCard';
import PostCard from './PostCard';
import CreatePostCard from './CreatePostCard';

export default function Index({ props }) {
  const { onePost, posts, createPostAction } = useAuthState();
  console.log(createPostAction);

  return (
    <>
      {posts && !onePost.title && !createPostAction.action && <PostIndexCard />}
      {onePost.title && <PostCard />}
      {createPostAction.action && <CreatePostCard />}
    </>
  );
}
