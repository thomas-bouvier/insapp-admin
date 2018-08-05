import React from 'react';
import { Admin, Resource } from 'react-admin';

import PostIcon from '@material-ui/icons/Book';

import AuthProvider from './AuthProvider';
import DataProvider from './DataProvider';

import { PostShow, PostList, PostEdit, PostCreate } from './posts';
import { EventShow, EventList, EventEdit, EventCreate } from './events';

const App = () => (
  <Admin
    authProvider={AuthProvider}
    dataProvider={DataProvider('https://insapp.insa-rennes.fr/api/v1')}
    title="Insapp"
  >
    <Resource
      name="posts"
      icon={PostIcon}
      show={PostShow}
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
    />
    <Resource
      name="events"
      show={EventShow}
      list={EventList}
      edit={EventEdit}
      create={EventCreate}
    />
  </Admin>
);

export default App;
