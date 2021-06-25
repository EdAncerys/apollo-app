import client from '../../apollo/ApolloClient';
import { MUTATION_LOG_IN } from '../../apollo/mutations/auth';

// export const signUp = async (
//   dispatch,
//   newUserData,
//   router,
//   dispatchGame,
//   dispatchApi,
//   errorMessage,
//   errorMessageLogIn,
//   visitId
// ) => {
//   try {
//     //0. Set loading true
//     setIsLoading(dispatchApi, true);

//     //1. Create new user
//     const signUpResponse = await client.mutate({
//       mutation: MUTATION_SIGN_UP,
//       variables: newUserData,
//     });
//     // console.log('signUpResponse', signUpResponse);//debug
//     const newUserId = signUpResponse.data.register.user.id;

//     //2. Update visit as registered = true
//     updateVisit({ id: visitId, registered: true });

//     //3. Add country and language id to user, update user
//     const countryId = newUserData.country.id;
//     const language = newUserData.language;
//     await updateUser(dispatch, {
//       id: newUserId,
//       country: countryId,
//       language,
//       promoAccepted: newUserData.promoAccepted,
//     });

//     //4. Log In
//     const { email, password } = newUserData;
//     await logIn(
//       dispatch,
//       { identifier: email, password },
//       router,
//       dispatchGame,
//       dispatchApi,
//       false,
//       errorMessageLogIn
//     );
//   } catch (err) {
//     // console.log('err', err); //debug
//     // console.log(typeof err); //debug
//     // console.log(JSON.stringify(err)); //debug

//     const errorType =
//       err.graphQLErrors[0].extensions.exception.data.message[0].messages[0].id;
//     switch (errorType) {
//       case 'Auth.form.error.email.taken':
//         setError(dispatchApi, errorMessage);
//         break;
//       default:
//         setError(dispatchApi, 'Unknown error');
//     }
//     setIsLoading(dispatchApi, false);
//   }
// };

export const logIn = async (loginData) => {
  try {
    //0. Set loading true

    //1. Log In
    const logInResponse = await client.mutate({
      mutation: MUTATION_LOG_IN,
      variables: loginData,
    });
    // console.log('logInResponse', logInResponse);//debug
    const { jwt, user } = logInResponse.data.login;
    const { id } = user;

    //2. set jwt, in context and cookie
    // setToken(dispatchAuth, jwt);

    //3. Create log in
    // console.log('createLogInResponse', createLogInResponse); //debug

    //4. Get user data, and set user, in context and cookie

    //5. Router push
  } catch (err) {
    console.log('err', err); //debug
  }
};
