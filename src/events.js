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
  ImageInput,
  BooleanInput,
  FunctionField
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
      <DateField source="dateStart" showTime />
      <DateField source="dateEnd" showTime />
      <FunctionField
        label="I'm going"
        render={record =>
          record.participants != null ? record.participants.length : 0
        }
      />
      <FunctionField
        label="Maybe"
        render={record => (record.maybe != null ? record.maybe.length : 0)}
      />
      <FunctionField
        label="I'm not going"
        render={record =>
          record.notgoing != null ? record.notgoing.length : 0
        }
      />
      <FunctionField
        label="Comments"
        render={record =>
          record.comments != null ? record.comments.length : 0
        }
      />
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
      <BooleanInput
        label="Receive an email when a user comments this post"
        source="nonotification"
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
      <BooleanInput
        label="Receive an email when a user comments this post"
        source="nonotification"
      />
    </SimpleForm>
  </Edit>
);
