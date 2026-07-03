import { AuthNestProvider, AuthStatusPanel } from 'authnest-react';
import Navbar from "./Navbar"

function App() {
  return (
    <AuthNestProvider>
     
      <AuthStatusPanel />
       <Navbar/>
      {/* your app routes */}
    </AuthNestProvider>
  );
}

export default App