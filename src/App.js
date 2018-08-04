import React from 'react';
import { Admin } from 'react-admin';
import authProvider from './AuthProvider';

const App = () => <Admin authProvider={authProvider} />;

export default App;
