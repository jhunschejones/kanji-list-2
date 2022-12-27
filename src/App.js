import { withAuthenticator } from "@aws-amplify/ui-react";
import { Nav } from "./components/Nav";
// required for default amplify UIs
import "@aws-amplify/ui-react/styles.css";

function App({ signOut, user }) {
  return (
    <>
      <Nav signOut={signOut} />
      <main>
        <p>Signed in as {user.attributes.email}</p>
      </main>
    </>
  );
}

export default withAuthenticator(App);
