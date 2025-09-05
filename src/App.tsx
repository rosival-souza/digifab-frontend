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
export default App;
