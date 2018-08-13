import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  Show,
  SimpleShowLayout,
  DateField,
  RichTextField,
  ShowButton,
  Edit,
  SimpleForm,
  TextInput,
  EditButton,
  Create,
  ImageInput,
  ImageField,
  BooleanInput,
  CheckboxGroupInput,
  LongTextInput
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

const PostTitle = ({ record }) => {
  return <span>{record ? `${record.title}` : ''}</span>;
};

export const PostShow = props => (
  <Show title={<PostTitle />} {...props}>
    <SimpleShowLayout>
      <TextField source="title" />
      <RichTextField source="description" />
      <DateField label="Publication date" source="date" />
    </SimpleShowLayout>
  </Show>
);

export const PostList = props => (
  <List
    {...props}
    filter={{ associationID: localStorage.getItem('associationID') }}
  >
    <Datagrid>
      <TextField source="title" />
      <TextField source="description" />
      <ShowButton />
      <EditButton />
    </Datagrid>
  </List>
);

export const PostCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <ImageInput source="image" label="Related pictures" accept="image/*">
        <ImageField source="src" title="title" />
      </ImageInput>
      <TextInput source="title" />
      <LongTextInput source="description" />
      <CheckboxGroupInput
        source="promotions"
        choices={[
          { id: '1STPI', name: '1STPI' },
          { id: '2STPI', name: '2STPI' },
          { id: '3EII', name: '3EII' },
          { id: '4EII', name: '4EII' },
          { id: '5EII', name: '5EII' },
          { id: '3GM', name: '3GM' },
          { id: '4GM', name: '4GM' },
          { id: '5GM', name: '5GM' },
          { id: '3GMA', name: '3GMA' },
          { id: '4GMA', name: '4GMA' },
          { id: '5GMA', name: '5GMA' },
          { id: '3GCU', name: '3GCU' },
          { id: '4GCU', name: '4GCU' },
          { id: '5GCU', name: '5GCU' },
          { id: '3INFO', name: '3INFO' },
          { id: '4INFO', name: '4INFO' },
          { id: '5INFO', name: '5INFO' },
          { id: '3SGM', name: '3SGM' },
          { id: '4SGM', name: '4SGM' },
          { id: '5SGM', name: '5SGM' },
          { id: '3SRC', name: '3SRC' },
          { id: '4SRC', name: '4SRC' },
          { id: '5SRC', name: '5SRC' },
          { id: 'ALTERNANT', name: 'Alternants' },
          { id: 'PERSONNEL/ENSEIGNANT', name: 'Personnel/Enseignants' }
        ]}
      />
      <BooleanInput
        label="Receive an email when a user comments this post"
        source="nonotification"
      />
    </SimpleForm>
  </Create>
);

export const PostEdit = props => (
  <Edit title={<PostTitle />} {...props}>
    <SimpleForm>
      <ImageInput source="image" label="Related pictures" accept="image/*">
        <ImageField source="src" title="title" />
      </ImageInput>
      <TextInput label="title" source="title" />
      <LongTextInput label="Description" source="description" />
      <CheckboxGroupInput
        source="promotions"
        choices={[
          { id: '1STPI', name: '1STPI' },
          { id: '2STPI', name: '2STPI' },
          { id: '3EII', name: '3EII' },
          { id: '4EII', name: '4EII' },
          { id: '5EII', name: '5EII' },
          { id: '3GM', name: '3GM' },
          { id: '4GM', name: '4GM' },
          { id: '5GM', name: '5GM' },
          { id: '3GMA', name: '3GMA' },
          { id: '4GMA', name: '4GMA' },
          { id: '5GMA', name: '5GMA' },
          { id: '3GCU', name: '3GCU' },
          { id: '4GCU', name: '4GCU' },
          { id: '5GCU', name: '5GCU' },
          { id: '3INFO', name: '3INFO' },
          { id: '4INFO', name: '4INFO' },
          { id: '5INFO', name: '5INFO' },
          { id: '3SGM', name: '3SGM' },
          { id: '4SGM', name: '4SGM' },
          { id: '5SGM', name: '5SGM' },
          { id: '3SRC', name: '3SRC' },
          { id: '4SRC', name: '4SRC' },
          { id: '5SRC', name: '5SRC' },
          { id: 'ALTERNANT', name: 'Alternants' },
          { id: 'PERSONNEL/ENSEIGNANT', name: 'Personnel/Enseignants' }
        ]}
      />
      <BooleanInput
        label="Receive an email when a user comments this post"
        source="nonotification"
      />
    </SimpleForm>
  </Edit>
);
