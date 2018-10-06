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
  Create,
  ImageInput
} from 'react-admin';
import { DateTimeInput } from 'react-admin-date-inputs';

const EventTitle = ({ record }) => {
  return <span>{record ? `${record.name}` : ''}</span>;
};

export const EventShow = props => (
  <Show title={<EventTitle />} {...props}>
    <SimpleShowLayout>
      <ImageField source="image_cdn" title="name" />
      <TextField source="name" />
      <TextField source="description" />
      <DateField label="Start date" source="dateStart" showTime />
      <DateField label="End date" source="dateEnd" showTime />
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
      <ImageInput source="image" label="Related pictures" accept="image/*">
        <ImageField source="image" title="title" />
      </ImageInput>
      <TextInput label="Title" source="name" />
      <LongTextInput label="Description" source="description" />
      <DateTimeInput
        label="Start date"
        source="dateStart"
        options={{ format: 'dd/MM/YYYY à HH:mm', ampm: false, clearable: true }}
      />
      <DateTimeInput
        label="End date"
        source="dateEnd"
        options={{ format: 'dd/MM/YYYY à HH:mm', ampm: false, clearable: true }}
      />
    </SimpleForm>
  </Create>
);

export const EventEdit = props => (
  <Edit title={<EventTitle />} {...props}>
    <SimpleForm>
      <TextInput label="Title" source="name" />
      <LongTextInput label="Description" source="description" />
      <DateTimeInput
        label="Start date"
        source="dateStart"
        options={{ format: 'dd/MM/YYYY à HH:mm', ampm: false, clearable: true }}
      />
      <DateTimeInput
        label="End date"
        source="dateEnd"
        options={{ format: 'dd/MM/YYYY à HH:mm', ampm: false, clearable: true }}
      />
    </SimpleForm>
  </Edit>
);
