import client from '../../apollo/ApolloClient';
import {
  MUTATION_LOG_IN,
  MUTATION_SIGN_UP,
  QUERY_GET_POSTS,
  QUERY_GET_ONE_POST,
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
  // console.log('getUser triggered')
  try {
    const getPostsResponse = await client.query({
      query: QUERY_GET_POSTS,
      context: {
        headers: {
          Authorization: jwt ? `Bearer ${jwt}` : '',
        },
      },
    });
    console.log('getPostsResponse', getPostsResponse); //debug
    const { posts } = getPostsResponse.data;
    console.log('posts', posts); //debug

    //2. set posts in context
    setPosts(dispatchAuth, posts);

    return posts;
  } catch (err) {
    console.log(err); //debug
  }
};

export const setToken = (dispatch, jwt) => {
  dispatch({ type: 'SET_TOKEN', payload: jwt });
};

export const setUser = (dispatch, user) => {
  dispatch({ type: 'SET_USER', payload: user });
};

export const setPosts = (dispatch, post) => {
  dispatch({ type: 'SET_POSTS', payload: post });
};
