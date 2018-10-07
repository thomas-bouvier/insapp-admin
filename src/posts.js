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
  LongTextInput,
  TabbedForm,
  FormTab,
  ReferenceManyField,
  FunctionField
} from 'react-admin';
import PromotionPicker from './PromotionPicker';

const titleMaxLength = 25;
const descriptionMaxLength = 700;

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
      <FunctionField
        label="Likes"
        render={record => (record.likes != null ? record.likes.length : 0)}
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

export const PostCreate = props => (
  <Create {...props}>
    <SimpleForm validate={validatePostCreation}>
      <ImageInput source="image" label="Related pictures" accept="image/*">
        <ImageField source="image" title="title" />
      </ImageInput>
      <TextInput source="title" inputProps={{ maxLength: titleMaxLength }} />
      <LongTextInput
        source="description"
        inputProps={{ maxLength: descriptionMaxLength }}
      />
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
    <TabbedForm>
      <FormTab label="content">
        <ImageInput source="image" label="Related pictures" accept="image/*">
          <ImageField source="image" title="title" />
        </ImageInput>
        <ImageField source="image_cdn" title="title" />
        <TextInput
          label="title"
          source="title"
          inputProps={{ maxLength: titleMaxLength }}
        />
        <LongTextInput
          label="Description"
          source="description"
          inputProps={{ maxLength: descriptionMaxLength }}
        />
        <PromotionPicker />
        <BooleanInput
          label="Receive an email when a user comments this post"
          source="nonotification"
        />
      </FormTab>
      <FormTab label="comments">
        <ReferenceManyField source="comments" addLabel={false}>
          <Datagrid>
            <TextField source="content" />
            <EditButton />
          </Datagrid>
        </ReferenceManyField>
      </FormTab>
    </TabbedForm>
  </Edit>
);

const validatePostCreation = values => {
  const errors = {};
  if (!values.title) {
    errors.title = ['The title is required'];
  } else if (values.title.length > titleMaxLength) {
    errors.title = [`The title is limited to ${titleMaxLength} characters`];
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
