import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  ShowButton,
  SimpleShowLayout,
  Show,
  DateField,
  ImageField,
  Edit,
  SimpleForm,
  LongTextInput,
  TextInput,
  EditButton,
  Create
} from 'react-admin';

const EventTitle = ({ record }) => {
  return <span>{record ? `${record.name}` : ''}</span>;
};

export const EventShow = props => (
  <Show title={<EventTitle />} {...props}>
    <SimpleShowLayout>
      <ImageField source="image" title="name" />
      <TextField source="name" />
      <TextField source="description" />
      <DateField label="Start date" source="dateStart" />
      <DateField label="End date" source="dateEnd" />
    </SimpleShowLayout>
  </Show>
);

export const EventList = props => (
  <List
    {...props}
    filter={{ associationID: localStorage.getItem('associationID') }}
  >
    <Datagrid>
      <TextField source="name" />
      <TextField source="description" />
      <ShowButton />
      <EditButton />
    </Datagrid>
  </List>
);

export const EventCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput label="Title" source="name" />
      <LongTextInput label="Description" source="description" />
    </SimpleForm>
  </Create>
);

export const EventEdit = props => (
  <Edit title={<EventTitle />} {...props}>
    <SimpleForm>
      <TextInput label="Title" source="name" />
      <LongTextInput label="Description" source="description" />
    </SimpleForm>
  </Edit>
);
