import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import { GoogleOAuthProvider } from "@react-oauth/google";

const App = (): ReactElement => {
  return (
    <GoogleOAuthProvider clientId="423072952555-0e0hjoeeb0nrbl7lq0t5lht7fbmgee0a.apps.googleusercontent.com">
      <Outlet />
    </GoogleOAuthProvider>
  );
};
// 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
// http://999996956231-8i7k5dl9pjoqq1namq32cur92v0vhci6.apps.googleusercontent.com
export default App;
