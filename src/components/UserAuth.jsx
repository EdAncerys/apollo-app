import React, { useState } from 'react';

import Login from './Login';
import CreateAccount from './CreateAccount';

export default function UserAuth({ props }) {
  const [page, setPage] = useState(false);
  const createNewAccount = page === 'create-new-account';

  return (
    <div>
      {(!createNewAccount || !page) && <Login setPage={setPage} />}
      {createNewAccount && <CreateAccount setPage={setPage} />}
    </div>
  );
}
