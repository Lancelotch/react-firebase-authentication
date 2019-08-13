import React from 'react';
import { Link } from 'react-router-dom';

import * as PATH from '../../constants/path';

const Navigation = () => (
  <div>
    <ul>
      <li>
        <Link to={PATH.SIGN_IN}>Sign In</Link>
      </li>
      <li>
        <Link to={PATH.SIGN_UP}>Sign Up</Link>
      </li>
      <li>
        <Link to={PATH.LANDING}>Landing</Link>
      </li>
      <li>
        <Link to={PATH.HOME}>Home</Link>
      </li>
      <li>
        <Link to={PATH.ACCOUNT}>Account</Link>
      </li>
      <li>
        <Link to={PATH.ADMIN}>Admin</Link>
      </li>
    </ul>
  </div>
);

export default Navigation;