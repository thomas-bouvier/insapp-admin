import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import get from 'lodash/get';
import { Field } from 'redux-form';

/*
class PromotionPicker extends React.Component {
  handleCheck = (event, isChecked) => {
        const {
            input: { value, onChange },
        } = this.props;
        let newValue;
        try {
            // try to convert string value to number, e.g. '123'
            newValue = JSON.parse(event.target.value);
        } catch (e) {
            // impossible to convert value, e.g. 'abc'
            newValue = event.target.value;
        }
        if (isChecked) {
            onChange([...value, ...[newValue]]);
        } else {
            onChange(value.filter(v => v != newValue));
        }
    };*/

const renderCheckbox = choice => {
  const {
    input: { value },
    optionText,
    optionValue,
    options,
    translate,
    translateChoice
  } = this.props;
  const choiceName = React.isValidElement(optionText) // eslint-disable-line no-nested-ternary
    ? React.cloneElement(optionText, { record: choice })
    : typeof optionText === 'function'
    ? optionText(choice)
    : get(choice, optionText);
  return (
    <FormControlLabel
      key={get(choice, optionValue)}
      checked={
        value
          ? value.find(v => v === get(choice, optionValue)) !== undefined
          : false
      }
      onChange={this.handleCheck}
      value={String(get(choice, optionValue))}
      control={<Checkbox color="primary" {...options} />}
      label={
        translateChoice ? translate(choiceName, { _: choiceName }) : choiceName
      }
    />
  );
};

const renderPromotionPicker = ({ input, meta: { touched, error } }) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Col 1</TableCell>
        <TableCell>Col 2</TableCell>
        <TableCell>Col 3</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>
          <Checkbox id={'id1'} value={'val1'} />
        </TableCell>
        <TableCell>
          <Checkbox id={'id2'} value={'val2'} />
        </TableCell>
        <TableCell>
          <Checkbox id={'id3'} value={'val3'} />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <Checkbox id={'id4'} value={'val4'} />
        </TableCell>
        <TableCell>
          <Checkbox id={'id5'} value={'val5'} />
        </TableCell>
        <TableCell>
          <Checkbox id={'id6'} value={'val6'} />
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
);

const PromotionPicker = ({ source }) => (
  <Field name={source} component={renderPromotionPicker} />
);
export default PromotionPicker;
