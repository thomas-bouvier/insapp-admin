import React from 'react';
import { Admin, Resource } from 'react-admin';

import PostIcon from '@material-ui/icons/Book';

import AuthProvider from './AuthProvider';
import DataProvider from './DataProvider';

import PostList from './posts';
import EventList from './events';

const App = () => (
  <Admin
    authProvider={AuthProvider}
    dataProvider={DataProvider('https://insapp.insa-rennes.fr/api/v1')}
    title="Insapp"
    locale="fr"
  >
    <Resource name="posts" list={PostList} icon={PostIcon} />
    <Resource name="events" list={EventList} />
  </Admin>
);

export default App;
