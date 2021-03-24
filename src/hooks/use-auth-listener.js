import { useState, useContext, useEffect } from "react";
import { FirebaseContext } from "../context/firebase";

export default function useAuthListener() {
  //useState: set user to data gotten back from firebase(authUser)
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("authUser"))
  );
  const { firebase } = useContext(FirebaseContext);

  //useEffect:
  //listener: firease-check for authenticated-user
  //if(authUser) {store authUser to localStorage, setUser(authUser)}
  //else {remove authUser to localStorage, setUser(null)}
  //then return user for this component
  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        localStorage.setItem("authUser", JSON.stringify(authUser));
        setUser(authUser);
      } else {
        localStorage.removeItem("authUser");
        setUser(null);
      }
    });

    return () => listener();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { user };
}
