import React, { useState, useEffect } from 'react';
import Pages from './pages';

// NOTE: Use your username below, unless you are killhamster
const API = 'https://gitconnected.com/v1/portfolio/killhamster';

function App() {
  // Declares a new state variable, we're calling this one 'user' because we can
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(user => {
        setUser(user);
      });
  }, []);

  if (!user) {
    return <div />;
  }

  return <Pages user={user} />;
}

export default App;
