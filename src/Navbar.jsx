import { LoginButton, RegisterButton, LogoutButton } from 'authnest-react';

function Navbar() {
  return (
    <nav>
      <LoginButton />
      <RegisterButton />
      <LogoutButton />
    </nav>
  );
}

export default Navbar