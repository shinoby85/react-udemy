import {Outlet, useSubmit} from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';
import {getAuthToken} from "../util/auth";
import {useEffect} from "react";

function RootLayout() {
  // const navigation = useNavigation();
  const token = getAuthToken();
  const submit = useSubmit();

  useEffect(() => {
    if (!token) {
      return null;
    }
    setTimeout(() => {
      submit(null, {action: '/logout', method: 'POST'});
    }, 60 * 60 * 1000)
  }, [token, submit]);

  return (
    <>
      <MainNavigation/>
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet/>
      </main>
    </>
  );
}

export default RootLayout;
