import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import { GoogleOAuthProvider } from "@react-oauth/google";

const App = (): ReactElement => {
  return (
    <GoogleOAuthProvider clientId="999996956231-8i7k5dl9pjoqq1namq32cur92v0vhci6.apps.googleusercontent.com">
      <Outlet />
    </GoogleOAuthProvider>
  );
};
export default App;
