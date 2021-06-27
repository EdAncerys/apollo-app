import React from 'react';
import { useAuthState } from '../Context/Auth/index';

import PostIndexCard from './PostIndexCard';
import PostCard from './PostCard';

export default function Index({ props }) {
  const { onePost, posts } = useAuthState();
  console.log(onePost);

  return (
    <div>
      {posts && !onePost.title && <PostIndexCard />}
      {onePost.title && <PostCard />}
    </div>
  );
}
