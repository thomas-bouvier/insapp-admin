import React from 'react';
import { Admin, Resource } from 'react-admin';

import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import grey from '@material-ui/core/colors/grey';
import PostIcon from '@material-ui/icons/Book';

import AuthProvider from './AuthProvider';
import DataProvider from './DataProvider';

import { PostShow, PostList, PostEdit, PostCreate } from './posts';
import { EventShow, EventList, EventEdit, EventCreate } from './events';

const theme = createMuiTheme({
  palette: {
    primary: grey,
    secondary: red,
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Arial',
      'sans-serif'
    ].join(',')
  }
});

const App = () => (
  <Admin
    authProvider={AuthProvider}
    dataProvider={DataProvider('https://insapp.insa-rennes.fr/api/v1')}
    title="Insapp"
    theme={theme}
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
