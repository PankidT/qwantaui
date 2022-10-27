import "../styles/globals.css";
import "../styles/App.css";
import "../styles/dashStyle.css";
import Sidebar from "../component/Sidebar";

function MyApp({ Component, pageProps }) {
  // const studentRef = firestore.collection("students");
  // studentRef.get().then((snapshot) => {
  //   snapshot.forEach((doc) => {
  //     if (doc.data()) {
  //       console.log(doc.id);
  //       console.loc(doc.data().name);
  //       console.loc(doc.data().age);
  //     }
  //   });
  // });

  return (
    <>
      <div className="App">
        <Sidebar />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
