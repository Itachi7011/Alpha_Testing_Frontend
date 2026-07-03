import { AuthNestProvider, AuthStatusPanel } from 'authnest-react';

function App() {
  return (
    <AuthNestProvider>
      <AuthStatusPanel />
      {/* your app routes */}
    </AuthNestProvider>
  );
}

export default App