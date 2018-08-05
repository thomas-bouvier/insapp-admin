import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

export default props => (
  <List
    {...props}
    filter={{ associationID: localStorage.getItem('associationID') }}
  >
    <Datagrid>
      <TextField source="title" />
      <TextField source="description" />
    </Datagrid>
  </List>
);
