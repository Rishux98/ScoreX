import React, { useState } from 'react';
import LandingPage from './landingpage';

function App() {
  const [page, setPage] = useState('landing');

  if (page === 'blank') {
    return <div className="blank-page" />;
  }

  return (
    <div>
      <LandingPage onSignIn={() => setPage('blank')} />
    </div>
  );
}

export default App;