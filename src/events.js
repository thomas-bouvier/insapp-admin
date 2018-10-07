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
  FunctionField,
  FormTab,
  TabbedForm
} from 'react-admin';
import { DateTimeInput } from 'react-admin-date-inputs';
import PromotionPicker from './PromotionPicker';

const nameMaxLength = 25;
const descriptionMaxLength = 2100;

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
    <SimpleForm validate={validateEventCreation}>
      <ImageInput source="image" label="Related pictures" accept="image/*">
        <ImageField source="image" title="title" />
      </ImageInput>
      <TextInput
        label="Title"
        source="name"
        inputProps={{ maxLength: nameMaxLength }}
      />
      <LongTextInput
        label="Description"
        source="description"
        inputProps={{ maxLength: descriptionMaxLength }}
      />
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
      <PromotionPicker />
      <BooleanInput
        label="Receive an email when a user comments this post"
        source="nonotification"
      />
    </SimpleForm>
  </Create>
);

export const EventEdit = props => (
  <Edit title={<EventTitle />} {...props}>
    <TabbedForm>
      <FormTab label="content">
        <ImageInput source="image" label="Related pictures" accept="image/*">
          <ImageField source="image" title="title" />
        </ImageInput>
        <ImageField source="image_cdn" title="title" />
        <TextInput
          label="Title"
          source="name"
          inputProps={{ maxLength: nameMaxLength }}
        />
        <LongTextInput
          label="Description"
          source="description"
          inputProps={{ maxLength: descriptionMaxLength }}
        />
        <DateTimeInput
          label="Start date"
          source="dateStart"
          options={{
            format: 'dd/MM/YYYY à HH:mm',
            ampm: false,
            clearable: true
          }}
        />
        <DateTimeInput
          label="End date"
          source="dateEnd"
          options={{
            format: 'dd/MM/YYYY à HH:mm',
            ampm: false,
            clearable: true
          }}
        />
        <PromotionPicker />
        <BooleanInput
          label="Receive an email when a user comments this post"
          source="nonotification"
        />
      </FormTab>
      <FormTab label="comments" />
    </TabbedForm>
  </Edit>
);

const validateEventCreation = values => {
  const errors = {};
  if (!values.name) {
    errors.name = ['The name is required'];
  } else if (values.name.length > nameMaxLength) {
    errors.name = [`The name is limited to ${nameMaxLength} characters`];
  }
  if (!values.description) {
    errors.description = ['The description is required'];
  } else if (values.description.length > descriptionMaxLength) {
    errors.description = [
      `The title is limited to ${descriptionMaxLength} characters`
    ];
  }
  return errors;
};
