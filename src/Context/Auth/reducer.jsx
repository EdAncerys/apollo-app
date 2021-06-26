const user = {
  id: '',
  username: '',
  email: '',
  role: {
    type: null, // public || authenticated
  },
};

const posts = {};

export const initialState = { jwt: '', user, posts };

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return { ...state, jwt: action.payload };
    case 'SET_USER':
      return { ...state, user: { ...action.payload } };
    case 'SET_POSTS':
      return { ...state, posts: { ...action.payload } };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
