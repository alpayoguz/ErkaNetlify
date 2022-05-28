import Container from "./components/Container";
import { ChatContextProvider } from "./contexts/ChatContext";
import { AuthProvider } from "./contexts/Auth.Context";
import {
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase/firebase";
import { useEffect, useState } from "react";

function App() {
  // const { currentUser, setCurrentUser } = useAuth();
  const [currentUser, setCurrentUser] = useState("");
  //  const { currentUser, setCurrentUser } = useAuth();

  function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

    auth.languageCode = "it";
    provider.setCustomParameters({
      login_hint: "user@example.com",
    });

    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log(credential)

        // The signed-in user info.
        const user = result.user;
        console.log(user);

        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.customData.email; => Bu kısım nedense hata veriyor giriş yapınca
        // The AuthCredential type that was used.
    
        console.log(errorCode);
        console.log(errorMessage)
        // ...
      });
  }
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);
  function signOutCurrentUser() {
    signOut(auth).then(() => {});
  }
  console.log(currentUser);
  function userVer() {
    console.log(currentUser);
  }
  return (
    <ChatContextProvider>
      <AuthProvider>
        <div className="App">
          {currentUser ? (
            <>
              <Container user={currentUser} />
              <button onClick={signOutCurrentUser}>Sign Out</button>
            </>
          ) : (
            <>
              <button onClick={signInWithGoogle}>SignIn With Google</button>
            </>
          )}

    
        </div>
      </AuthProvider>
    </ChatContextProvider>
  );
}

export default App;
