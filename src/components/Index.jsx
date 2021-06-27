import React from 'react';
import { useAuthState } from '../Context/Auth/index';

import PostIndexCard from './PostIndexCard';

export default function Index({ props }) {
  const { onePost, posts } = useAuthState();
  console.log(onePost);

  return (
    <div>
      {posts && !onePost && <PostIndexCard />}
      {onePost && <div>hello world</div>}
    </div>
  );
}
