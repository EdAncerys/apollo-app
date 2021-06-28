const user = {
  id: '',
  username: '',
  email: '',
  role: {
    type: null, // public || authenticated
  },
};

const onePost = {};
const posts = {};
const createPostActionState = { action: false };
const updatePostActionState = { action: false };

export const initialState = {
  jwt: '',
  user,
  onePost,
  posts,
  createPostActionState,
  updatePostActionState,
};

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return { ...state, jwt: action.payload };
    case 'SET_USER':
      return { ...state, user: { ...action.payload } };
    case 'SET_POSTS':
      return { ...state, posts: { ...action.payload } };
    case 'SET_ONE_POST':
      return { ...state, onePost: { ...action.payload } };
    case 'SET_CREATE_POST_ACTION':
      return { ...state, createPostActionState: { ...action.payload } };
    case 'SET_UPDATE_POST_ACTION':
      return { ...state, updatePostActionState: { ...action.payload } };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
