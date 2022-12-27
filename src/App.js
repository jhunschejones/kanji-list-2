import { withAuthenticator } from "@aws-amplify/ui-react";
import { useState } from "react";
import { Nav } from "./components/Nav";
// required for default amplify UIs
import "@aws-amplify/ui-react/styles.css";

function App({ signOut, user }) {
  const [foundKanji, setFoundKanji] = useState([])

  const searchText = () => {
    const searchedText = document.querySelector(".text-input").value;
    setFoundKanji([...new Set(searchedText.match(/[一-龯]/g))]);
  }

  const clearInput = () => {
    document.querySelector(".text-input").value = "";
    setFoundKanji([]);
  }

  return (
    <>
      <Nav signOut={signOut} />
      <main style={{textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center"}}>
        <p style={{color: "#cbd5e1", marginBottom: "24px"}}>Signed in as {user.attributes.email}</p>
        <div style={{width: "100%", maxWidth: "500px"}}>
          <h3 style={{textAlign: "left", margin: "6px 0", color: "#64748b"}}>Find kanji in text:</h3>
          <textarea
            placeholder="Text to search..."
            className="text-input"
          >
          </textarea>

          <div style={{display: "flex"}}>
            <button
              onClick={searchText}
              className="button-pink"
            >
              Search
            </button>
            <button
              onClick={clearInput}
              className="button-white"
              style={{marginLeft: "6px"}}
            >
              Clear
            </button>
          </div>

          <div className="found-kanji">
            <h3>Kanji found:</h3>
            {foundKanji.length > 0
              ? <p>{foundKanji}</p>
              : <p style={{color: "#cbd5e1", fontSize: "18px"}}>None yet!</p>
            }
          </div>
        </div>
      </main>
    </>
  );
}

export default withAuthenticator(App);
