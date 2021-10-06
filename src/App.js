import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Offline from './components/pages/Offline';
import SplashScreen from './components/pages/SplashScreen';
import Homepage from './components/pages/Homepage';

function App() {
  const [showSplashScreen, setshowSplashScreen] = useState(true);
  const [isOffline, setisOffline] = useState(!navigator.onLine);

  const handleOfflineStatus = () => {
    setisOffline(!navigator.onLine);
  };

  useEffect(() => {
    handleOfflineStatus();
    window.addEventListener('online', handleOfflineStatus);
    window.addEventListener('offline', handleOfflineStatus);

    const timeLoading = setTimeout(() => {
      setshowSplashScreen(false);
    }, 1200);

    return () => {
      window.removeEventListener('online', handleOfflineStatus);
      window.removeEventListener('offline', handleOfflineStatus);

      clearTimeout(timeLoading);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOffline]);

  return showSplashScreen ? (
    <SplashScreen />
  ) : (
    <>
      {isOffline && <Offline />}
      <Router>
        <Switch>
          <Route path="/:name" children={<Homepage />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
