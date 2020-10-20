import { Auth } from "aws-amplify";
import { AmplifyEventBus } from "aws-amplify-vue";

function getUser() {
  return Auth.currentAuthenticatedUser()
    .then((user) => {
      if (user && user.signInUserSession) {
        return user;
      } else {
        return null;
      }
    })
    .catch((err) => {
      console.log(err);
      return null;
    });
}

function signUp(email, password, name) {
  return Auth.signUp({
    username: email.toLowerCase(),
    password: password,
    attributes: {
      email: email.toLowerCase(),
      given_name: name
    },
  })
    .then((data) => {
      AmplifyEventBus.$emit("localUser", data.user);
      debugger;
      if (data.userConfirmed === false) {
        AmplifyEventBus.$emit("authState", "confirmSignUp");
      } else {
        AmplifyEventBus.$emit("authState", "signIn");
      }
      return data;
    })
    .catch((err) => {
      debugger;
      console.log(err);
    });
}

function confirmSignUp(email, code) {
  Auth.confirmSignUp(email.toLowerCase(), code)
    // .then((data) => {
    //   debugger;
    //   AmplifyEventBus.$emit("authState", "signIn");
    //   return data; // 'SUCCESS'
    // })
    .catch((err) => {
      console.log(err);
      throw err;
    });

    AmplifyEventBus.$emit("authState", "signIn");
}

function resendSignUp(email) {
  return Auth.resendSignUp(email)
    .then(() => {
      return "SUCCESS";
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
}

async function signIn(email, password) {
  try {
    const user = await Auth.signIn(email, password);
    console.log(user);
    const session = await Auth.currentSession()
      .then((data) => {
        localStorage.setItem("appIdToken", data.getIdToken().getJwtToken());
        localStorage.setItem("loggedInUserName", user.signInUserSession.idToken.payload['given_name']);
        localStorage.setItem("loggedInUserID", email);
      })
      .catch((err) => console.log(err));
    if (user) {
      AmplifyEventBus.$emit("authState", "signedIn");
    }
  } catch (err) {
    if (err.code === "UserNotConfirmedException") {
      // The error happens if the user didn't finish the confirmation step when signing up
      // In this case you need to resend the code and confirm the user
      // About how to resend the code and confirm the user, please check the signUp part
    } else if (err.code === "PasswordResetRequiredException") {
      // The error happens when the password is reset in the Cognito console
      // In this case you need to call forgotPassword to reset the password
      // Please check the Forgot Password part.
    } else if (err.code === "NotAuthorizedException") {
      // The error happens when the incorrect password is provided
    } else if (err.code === "UserNotFoundException") {
      // The error happens when the supplied username/email does not exist in the Cognito user pool
    } else {
      console.log(err);
    }
  }
}

function signOut() {
  return Auth.signOut()
    .then((data) => {
      AmplifyEventBus.$emit("authState", "signedOut");
      return data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
}

export { getUser, signUp, confirmSignUp, resendSignUp, signIn, signOut };
