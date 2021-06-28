import client from '../../apollo/ApolloClient';
import {
  MUTATION_LOG_IN,
  MUTATION_SIGN_UP,
  QUERY_GET_POSTS,
  QUERY_GET_ONE_POST,
  MUTATION_CREATE_POST,
  MUTATION_DELETE_POST,
  MUTATION_UPDATE_POST,
} from '../../apollo/mutations/auth';

export const signUp = async (newUserData, dispatchAuth) => {
  try {
    //0. Set loading true

    //1. Create new user
    const signUpResponse = await client.mutate({
      mutation: MUTATION_SIGN_UP,
      variables: newUserData,
    });
    console.log('signUpResponse', signUpResponse); //debug

    //4. Log In
    const { email, password } = newUserData;
    await logIn({ identifier: email, password }, dispatchAuth);
  } catch (err) {
    console.log('err', err); //debug
    // console.log(typeof err); //debug
    // console.log(JSON.stringify(err)); //debug
  }
};

export const logIn = async (loginData, dispatchAuth) => {
  try {
    //0. Set loading true

    //1. Log In
    const logInResponse = await client.mutate({
      mutation: MUTATION_LOG_IN,
      variables: loginData,
    });
    console.log('logInResponse', logInResponse); //debug
    const { jwt, user } = logInResponse.data.login;

    //2. set jwt, in context and cookie
    setToken(dispatchAuth, jwt);

    //4. Get user data, and set user in context
    setUser(dispatchAuth, user);

    //5. Router push
  } catch (err) {
    console.log('err', err); //debug
  }
};

export const getPosts = async (jwt, dispatchAuth) => {
  console.log('getPosts triggered');
  try {
    const getPostsResponse = await client.query({
      query: QUERY_GET_POSTS,
      fetchPolicy: 'no-cache',
      context: {
        headers: {
          Authorization: jwt ? `Bearer ${jwt}` : '',
        },
      },
    });
    // console.log('getPostsResponse', getPostsResponse); //debug
    const { posts } = getPostsResponse.data;
    console.log('posts', posts); //debug

    //2. set posts in context
    setPosts(dispatchAuth, posts);

    return posts;
  } catch (err) {
    console.log(err); //debug
  }
};

export const getOnePost = async (jwt, id, dispatchAuth) => {
  try {
    const getPostsResponse = await client.query({
      query: QUERY_GET_ONE_POST,
      variables: { id: id },
      context: {
        headers: {
          Authorization: jwt ? `Bearer ${jwt}` : '',
        },
      },
    });
    console.log('getPostsResponse', getPostsResponse); //debug
    const { post } = getPostsResponse.data;
    console.log('post', post); //debug

    //2. set posts in context
    setOnePost(dispatchAuth, post);

    return post;
  } catch (err) {
    console.log(err); //debug
  }
};

export const createNewPost = async (newPostData, jwt, dispatchAuth) => {
  console.log('createNewPost triggered');
  console.log('newPostData', newPostData);
  try {
    //0. Set loading true

    //1. Create new post
    const createPostResponse = await client.mutate({
      mutation: MUTATION_CREATE_POST,
      variables: newPostData,
    });
    const { post } = createPostResponse.data.createPost;
    console.log('post', post); //debug

    //2. Fetch all post & redirect to main
    getPosts(jwt, dispatchAuth);
    createPostAction(dispatchAuth, { action: false });

    return post;
  } catch (err) {
    console.log('err', err); //debug
    // console.log(typeof err); //debug
    // console.log(JSON.stringify(err)); //debug
  }
};

export const deletePost = async (deletePostData, jwt, dispatchAuth) => {
  console.log('deletePost triggered');
  console.log('deletePostData', deletePostData);
  try {
    //0. Set loading true

    //1. Create new post
    const deletePostResponse = await client.mutate({
      mutation: MUTATION_DELETE_POST,
      variables: deletePostData,
    });
    const { post } = deletePostResponse.data.deletePost;
    console.log('post', post); //debug

    //2. Fetch all post & redirect to main
    getPosts(jwt, dispatchAuth);
    setOnePost(dispatchAuth, {});

    return post;
  } catch (err) {
    console.log('err', err); //debug
    // console.log(typeof err); //debug
    // console.log(JSON.stringify(err)); //debug
  }
};

export const updateOldPost = async (updatePostData, jwt, dispatchAuth) => {
  console.log('updatePost triggered');
  console.log('updatePost', updatePostData);
  try {
    //0. Set loading true

    //1. Create new post
    const updatePostResponse = await client.mutate({
      mutation: MUTATION_UPDATE_POST,
      variables: updatePostData,
    });
    const { post } = updatePostResponse.data.updatePost;
    const id = post.id;
    console.log('post', post); //debug

    //2. Fetch all post & redirect to main
    getPosts(jwt, dispatchAuth);
    getOnePost(jwt, id, dispatchAuth);
    updatePostAction(dispatchAuth, { action: false });

    return post;
  } catch (err) {
    console.log('err', err); //debug
    // console.log(typeof err); //debug
    // console.log(JSON.stringify(err)); //debug
  }
};

export const setToken = (dispatch, jwt) => {
  dispatch({ type: 'SET_TOKEN', payload: jwt });
};

export const setUser = (dispatch, user) => {
  dispatch({ type: 'SET_USER', payload: user });
};

export const setOnePost = (dispatch, post) => {
  dispatch({ type: 'SET_ONE_POST', payload: post });
};

export const setPosts = (dispatch, posts) => {
  dispatch({ type: 'SET_POSTS', payload: posts });
};

export const createPostAction = (dispatch, action) => {
  dispatch({ type: 'SET_CREATE_POST_ACTION', payload: action });
};

export const updatePostAction = (dispatch, action) => {
  dispatch({ type: 'SET_UPDATE_POST_ACTION', payload: action });
};
