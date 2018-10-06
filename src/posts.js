import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  Show,
  SimpleShowLayout,
  ShowButton,
  Edit,
  SimpleForm,
  TextInput,
  EditButton,
  Create,
  ImageInput,
  ImageField,
  BooleanInput,
  LongTextInput
} from 'react-admin';
import PromotionPicker from './PromotionPicker';

const PostTitle = ({ record }) => {
  return <span>{record ? `${record.title}` : ''}</span>;
};

export const PostShow = props => (
  <Show title={<PostTitle />} {...props}>
    <SimpleShowLayout>
      <ImageField source="image_cdn" title="title" />
      <TextField source="title" />
      <TextField source="description" />
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
        <ImageField source="image" title="title" />
      </ImageInput>
      <TextInput source="title" />
      <LongTextInput source="description" />
      <PromotionPicker />
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
        <ImageField source="image" title="title" />
      </ImageInput>
      <ImageField source="image_cdn" title="title" />
      <TextInput label="title" source="title" />
      <LongTextInput label="Description" source="description" />
      <PromotionPicker />
      <BooleanInput
        label="Receive an email when a user comments this post"
        source="nonotification"
      />
    </SimpleForm>
  </Edit>
);
