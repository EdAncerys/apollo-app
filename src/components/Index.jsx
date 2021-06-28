import React from 'react';
import { useAuthState } from '../Context/Auth/index';

import PostIndexCard from './PostIndexCard';
import PostCard from './PostCard';
import CreatePostCard from './CreatePostCard';

export default function Index({ props }) {
  const { onePost, posts, createPostActionState } = useAuthState();

  return (
    <>
      {posts && !onePost.title && !createPostActionState.action && (
        <PostIndexCard />
      )}
      {onePost.title && <PostCard />}
      {createPostActionState.action && <CreatePostCard />}
    </>
  );
}
