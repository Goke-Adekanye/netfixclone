import { useState, useContext, useEffect } from "react";
import { FirebaseContext } from "../context/firebase";

export default function useContent(target) {
  const [content, setContent] = useState();
  const { firebase } = useContext(FirebaseContext);

  //useEffect:
  //get targetted-collection from firestore
  //allContent: get snapShot of all doc retrieved,
  //for each doc retrieved, spread doc.data, and get doc.id
  useEffect(() => {
    firebase
      .firestore()
      .collection(target)
      .get()
      .then((snapshot) => {
        const allContent = snapshot.docs.map((contentObj) => ({
          ...contentObj.data(),
          docId: contentObj.id,
        }));

        setContent(allContent);
      })
      .catch((error) => {
        console.log(error.message);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // set content value as target, then return target for this component
  return { [target]: content };
}
