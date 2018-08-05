import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  ShowButton,
  SimpleShowLayout,
  Show,
  DateField,
  RichTextField,
  Edit,
  SimpleForm,
  TextInput,
  EditButton,
  Create
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

const EventTitle = ({ record }) => {
  return <span>{record ? `${record.name}` : ''}</span>;
};

export const EventShow = props => (
  <Show title={<EventTitle />} {...props}>
    <SimpleShowLayout>
      <TextField source="name" />
      <RichTextField source="description" />
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
      <TextInput source="title" />
      <RichTextInput source="body" />
    </SimpleForm>
  </Create>
);

export const EventEdit = props => (
  <Edit title={<EventTitle />} {...props}>
    <SimpleForm>
      <TextInput label="title" source="name" />
      <RichTextInput label="Description" source="description" />
    </SimpleForm>
  </Edit>
);
