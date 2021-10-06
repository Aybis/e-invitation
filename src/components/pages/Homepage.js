import React, { useState } from 'react';
import Home from './Home';
import Invitation from './Invitation';

export default function Homepage() {
  const [showInvitation, setshowInvitation] = useState(true);

  return (
    <div className="relative h-screen bg-white">
      {showInvitation ? (
        <Invitation handlerOnClick={() => setshowInvitation(false)} />
      ) : (
        <Home />
      )}
    </div>
  );
}
